import React from 'react';
import { SITE_DATA } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';

function TimelineItem({ item, index }) {
    const { isVisible, domRef } = useFadeIn();

    return (
        <div
            ref={domRef}
            className={`timeline-item fade-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "#fff" }}>
                    {item.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                    {item.desc}
                </p>
                <div className="claim-meta">
                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Kaynak</a>
                    <span>{item.sourceType}</span>
                    <span>{item.asOfDate}</span>
                </div>
            </div>
        </div>
    );
}

export default function Timeline() {
    const sortedTimeline = [...SITE_DATA.timeline].sort((a, b) => new Date(a.isoDate) - new Date(b.isoDate));

    return (
        <section id="parlamenter-blokaj" className="dossier-panel">
            <div className="container">
                <div className="section-header">
                    <h2>04. Parlamenter Blokaj: Siyasal Duyarsızlık</h2>
                    <span className="badge">TBMM_KAYITLARI</span>
                </div>
                <div className="timeline">
                    {sortedTimeline.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
