import React from 'react';
import { SITE_DATA } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';

function SolutionCard({ sol }) {
    const { isVisible, domRef } = useFadeIn();

    // A helper to map the solution back to the problem it solves for the UI effect
    const getSystemicIssue = (title) => {
        if (title.includes('Sendika')) return "AMİR TAHAKKÜMÜ / SESSİZLİK SARMALI";
        if (title.includes('Çalışma')) return "ANGARYA / 12-12 SİSTEMİ";
        if (title.includes('Liyakat')) return "MÜLAKAT / TARİKAT YAPILANMASI";
        if (title.includes('Özlük')) return "DÜŞÜK MAAŞ / ADALETSİZ PROMOSYON";
        return "SİSTEMATİK ÇÜRÜME";
    };

    const getSvgIcon = (title) => {
        if (title.includes('Sendika')) return (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
            </svg>
        );
        if (title.includes('Çalışma')) return (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        );
        if (title.includes('Liyakat')) return (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        );
        if (title.includes('Özlük')) return (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        );
        return <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>;
    };

    return (
        <div ref={domRef} className={`card-mechanism solution-item fade-up ${isVisible ? 'visible' : ''}`}>
            <div className="solution-issue-target">HEDEF: <span>{getSystemicIssue(sol.title)}</span></div>
            <div style={{ marginBottom: "1rem", color: "var(--accent-red)" }}>{getSvgIcon(sol.title)}</div>
            <h3 style={{ color: "var(--accent-green)", fontFamily: "var(--font-mono)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                {sol.title}
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>{sol.desc}</p>
        </div>
    );
}

export default function Solutions() {
    return (
        <section id="cozum" className="dossier-panel blueprint">
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="section-header blueprint-header">
                    <h2>07. Çözüm Manifestosu</h2>
                    <span className="badge green">[ GİZLİLİĞİ_KALDIRILMIŞ_EYLEM_PLANI ]</span>
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
