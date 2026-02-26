import React from 'react';
import { SITE_DATA } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';

function SolutionCard({ sol }) {
    const { isVisible, domRef } = useFadeIn();

    return (
        <div ref={domRef} className={`card-mechanism fade-up ${isVisible ? 'visible' : ''}`}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{sol.icon}</div>
            <h3 style={{ color: "var(--accent-green)", fontFamily: "var(--font-mono)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                {sol.title}
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>{sol.desc}</p>
        </div>
    );
}

export default function Solutions() {
    return (
        <section id="cozum" className="dossier-panel outline">
            <div className="container">
                <div className="section-header">
                    <h2>07. Çözüm Manifestosu</h2>
                    <span className="badge green">REFORM_ŞART</span>
                </div>
                <div className="grid-2">
                    {SITE_DATA.solutions.map((sol, index) => (
                        <SolutionCard key={index} sol={sol} />
                    ))}
                </div>
            </div>
        </section>
    );
}
