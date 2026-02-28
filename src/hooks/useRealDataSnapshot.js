import { useEffect, useMemo, useState } from 'react';
import { REAL_DATA_SNAPSHOT } from '../data/realDataSnapshot';
import { buildSiteData } from '../lib/siteData';

function isValidSnapshot(candidate) {
  return Boolean(
    candidate &&
      candidate.metadata &&
      typeof candidate.metadata.asOf === 'string' &&
      candidate.metrics &&
      candidate.metrics.rates &&
      Array.isArray(candidate.mechanisms) &&
      Array.isArray(candidate.evidence) &&
      Array.isArray(candidate.timeline) &&
      Array.isArray(candidate.tweets) &&
      Array.isArray(candidate.solutions) &&
      Array.isArray(candidate.media)
  );
}

export function useRealDataSnapshot() {
  const [snapshot, setSnapshot] = useState(REAL_DATA_SNAPSHOT);
  const [sourceMode, setSourceMode] = useState('bundled');

  useEffect(() => {
    let isCanceled = false;

    fetch('/data/police-suicides-tr.json', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Snapshot fetch failed with ${response.status}`);
        }
        return response.json();
      })
      .then((remoteSnapshot) => {
        if (!isCanceled && isValidSnapshot(remoteSnapshot)) {
          setSnapshot(remoteSnapshot);
          setSourceMode('remote');
        }
      })
      .catch(() => {
        if (!isCanceled) {
          setSourceMode('bundled');
        }
      });

    return () => {
      isCanceled = true;
    };
  }, []);

  const siteData = useMemo(() => buildSiteData(snapshot), [snapshot]);

  return { siteData, sourceMode };
}
