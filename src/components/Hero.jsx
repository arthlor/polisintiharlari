import React, { useEffect, useState } from 'react';
import { SITE_DATA } from '../data';
import heroBg from '../assets/hero-bg.webp';
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

                <h1 className="hero-title">
                    {scrambledTitle}
                </h1>

                <p className="subtitle hero-subtitle">
                    {scrambledSubtitle}
                </p>

                <div className="hero-author">
                    <span className="author-name">Murat BAKAN</span>
                    <span className="author-dot"></span>
                    <span className="author-title">İçişleri Politika Kurulu Başkanı <span className="author-sep">|</span> İzmir Milletvekili <span className="author-sep">|</span> PM Üyesi</span>
                </div>

                <div className="counter-container">
                    <span className="label">Son 20 Yılda Kaybedilen Hayatlar: </span>
                    <span className="counter" style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>{count}</span>+
                </div>

                <div className="hero-ctas" style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <button aria-label="Bu Raporu Paylaş" className="cta-button primary-cta" onClick={() => {
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
                    <a href="#report-case" aria-label="Güvenli Veri İlet" className="cta-button secondary-cta" onClick={(e) => {
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
