import React from 'react';

export default function DataIntegrity({ metadata, sourceMode }) {
  return (
    <section id="veri-notu" className="dossier-panel dark">
      <div className="container">
        <div className="section-header">
          <h2>00. Veri Notu</h2>
          <span className={`badge ${sourceMode === 'remote' ? 'green' : 'yellow'}`}>
            {sourceMode === 'remote' ? 'UZAK_JSON' : 'GOMULU_YEDEK'}
          </span>
        </div>
        <p className="description" style={{ color: 'var(--text-secondary)', maxWidth: '900px', marginBottom: '1.5rem' }}>
          {metadata.methodology} Son dogrulama tarihi: <strong>{metadata.asOf}</strong>.
        </p>
        <ul className="sources-list">
          {metadata.sources.map((source) => (
            <li key={source.id}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
