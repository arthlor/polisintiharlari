import React, { useEffect, useState } from 'react';
import { SITE_DATA } from '../data';
import heroBg from '../assets/hero-bg.png';
import logo from '../assets/logo.png';
import { useScrambleText } from '../hooks/useScrambleText';

export default function Hero() {
    const [count, setCount] = useState(0);
    const target = SITE_DATA.hero.totalSuicides;

    const scrambledTitle = useScrambleText('Polisler İntihar Ediyor!', 1200, 2400);
    const scrambledSubtitle = useScrambleText('Polis intiharları tesadüfi değildir; kronikleşmiş ve kurumsallaşmış bir anomalidir. Türkiye\'de en çok intihar eden meslek grubu polislerdir.', 2000, 3000);

    useEffect(() => {
        // Start counting only after preloader (approx 2400ms delay)
        const startTimeout = setTimeout(() => {
            const duration = 2000;
            const increment = target / (duration / 30);
            let currentCount = 0;

            const interval = setInterval(() => {
                currentCount += increment;
                if (currentCount >= target) {
                    currentCount = target;
                    clearInterval(interval);
                }
                setCount(Math.floor(currentCount));
            }, 30);

            return () => clearInterval(interval);
        }, 2200);

        return () => clearTimeout(startTimeout);
    }, [target]);

    return (
        <header
            className="hero-section"
            id="hero"
        >
            <div className="hero-bg-parallax" style={{
                backgroundImage: `linear-gradient(rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.95)), url(${heroBg})`,
            }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingBottom: '4rem' }}>
                <img src={logo} alt="CHP Logo" style={{ width: '180px', marginBottom: '2rem' }} />

                <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700, minHeight: '3.8rem' }}>
                    {scrambledTitle}
                </h1>

                <p className="subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', letterSpacing: '1px', maxWidth: '800px', lineHeight: '1.6', minHeight: '3.8rem' }}>
                    {scrambledSubtitle}
                </p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '3rem',
                    padding: '0.75rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '50px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}>
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '1px' }}>Murat BAKAN</span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-red)' }}></span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>İçişleri Politika Kurulu Başkanı <span style={{ color: 'var(--border-light)' }}>|</span> İzmir Milletvekili <span style={{ color: 'var(--border-light)' }}>|</span> PM Üyesi</span>
                </div>

                <div className="counter-container">
                    <span className="label">Son 20 Yılda Kaybedilen Hayatlar: </span>
                    <span className="counter" style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>{count}</span>+
                </div>

                <div className="hero-ctas" style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <button className="cta-button primary-cta" onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: 'Polis İntiharları Raporu',
                                text: 'Polisler İntihar Ediyor! Murat Bakan\'ın raporunu inceleyin.',
                                url: window.location.href,
                            }).catch(console.error);
                        } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert('Bağlantı kopyalandı!');
                        }
                    }}>
                        Bu Raporu Paylaş.
                    </button>
                    <a href="#report-case" className="cta-button secondary-cta" onClick={(e) => {
                        e.preventDefault();
                        alert('Güvenli ihbar kanalı yakında aktif edilecektir (WIP).');
                    }}>
                        Güvenli Veri İlet
                    </a>
                </div>

                <div className="scroll-prompt" style={{ marginTop: '5.5rem', fontSize: '0.9rem', opacity: 0.7, letterSpacing: '1px' }}>Raporu Oku &darr;</div>
            </div>
        </header >
    );
}
