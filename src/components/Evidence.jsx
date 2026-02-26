import React from 'react';
import { SITE_DATA } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';

function EvidenceCard({ evi }) {
    const { isVisible, domRef } = useFadeIn();

    return (
        <div ref={domRef} className={`evidence-card fade-up ${isVisible ? 'visible' : ''}`}>
            <div className="evidence-name">{evi.name}</div>
            <div className="mono-small" style={{ color: "var(--text-dim)", marginBottom: "1rem" }}>
                {evi.age}
            </div>
            <div
                className="evidence-note"
                dangerouslySetInnerHTML={{ __html: evi.note }}
            />
            <div className="claim-meta">
                <a href={evi.sourceUrl} target="_blank" rel="noopener noreferrer">Kaynak</a>
                <span>{evi.sourceType}</span>
                <span>{evi.asOfDate}</span>
            </div>
        </div>
    );
}

export default function Evidence() {
    return (
        <section id="vaka-analizleri" className="dossier-panel dark">
            <div className="container">
                <div className="section-header">
                    <h2>03. Vaka Analizleri</h2>
                    <span className="badge red">TBMM_TUTANAKLARI</span>
                </div>
                <p className="description" style={{ color: "var(--text-secondary)", maxWidth: "800px", marginBottom: "2rem" }}>
                    İntihar eden polislerin geride bıraktığı notlar, devleti yönetenlerin kurduğu acımasız sistemin birer iddianamesidir.
                </p>
                <div className="evidence-grid">
                    {SITE_DATA.evidence.map((evi, index) => (
                        <EvidenceCard key={index} evi={evi} />
                    ))}
                </div>
            </div>
        </section>
    );
}
