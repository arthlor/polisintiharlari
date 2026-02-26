import React, { useEffect, useState } from 'react';
import { SITE_DATA } from '../data';
import heroBg from '../assets/hero-bg.png';
import logo from '../assets/logo.png';

export default function Hero() {
    const [count, setCount] = useState(0);
    const target = SITE_DATA.hero.totalSuicides;

    useEffect(() => {
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
    }, [target]);

    return (
        <header
            className="hero-section"
            id="hero"
            style={{
                backgroundImage: `linear-gradient(rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.95)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingBottom: '4rem' }}>
                <img src={logo} alt="CHP Logo" style={{ width: '180px', marginBottom: '2rem' }} />

                <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>
                    Polisler İntihar Ediyor!
                </h1>

                <p className="subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', letterSpacing: '1px', maxWidth: '800px', lineHeight: '1.6' }}>
                    Polis intiharları tesadüfi değildir; kronikleşmiş ve kurumsallaşmış bir anomalidir. Türkiye'de en çok intihar eden meslek grubu polislerdir.
                </p>

                <p style={{ color: 'var(--accent-red)', fontWeight: '600', marginBottom: '3rem', fontSize: '1rem', letterSpacing: '0.5px' }}>
                    Murat BAKAN | İçişleri Politika Kurulu Başkanı - İzmir Milletvekili - PM Üyesi
                </p>

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
                        Raporu Paylaş
                    </button>
                    <a href="#report-case" className="cta-button secondary-cta" onClick={(e) => {
                        e.preventDefault();
                        alert('Güvenli ihbar kanalı yakında aktif edilecektir (WIP).');
                    }}>
                        Bilgi Gönder
                    </a>
                </div>

                <div className="scroll-prompt" style={{ marginTop: '3.5rem', fontSize: '0.9rem', opacity: 0.7, letterSpacing: '2px' }}>Raporu İncele &darr;</div>
            </div>
        </header>
    );
}
