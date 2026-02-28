import React from 'react';
import { SITE_DATA } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';

export function MechanismCard({ mech }) {
    const { isVisible, domRef } = useFadeIn();

    return (
        <div ref={domRef} className={`card-mechanism fade-up ${isVisible ? 'visible' : ''}`}>
            <h3>{mech.title}</h3>
            <p>{mech.desc}</p>
        </div>
    );
}

export default function Mechanisms() {
    return (
        <section id="yapisal-siddet" className="dossier-panel">
            <div className="container">
                <div className="section-header">
                    <h2>02. Yapısal Şiddet Mekanizması</h2>
                    <span className="badge yellow">ÇALIŞMA_KOŞULLARI</span>
                </div>
                <div className="grid-3">
                    {SITE_DATA.mechanisms.map((mech, index) => (
                        <MechanismCard key={index} mech={mech} />
                    ))}
                </div>
            </div>
        </section>
    );
}
