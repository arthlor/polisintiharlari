import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
export default function Hero({ hero }) {
    const [count, setCount] = useState(0);
    const target = hero.totalSuicides;

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
        <header className="hero-section" id="hero">
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>
                    {hero.title}
                </h1>
                <p className="subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', letterSpacing: '1px' }}>
                    {hero.subtitle}
                </p>
                <div className="counter-container">
                    <span className="label">Son 20 yilda kaybedilen hayatlar: </span>
                    <span className="counter" style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>{count}</span>
                    {hero.totalSuffix}
                </div>
                <p className="mono-small" style={{ marginTop: '1rem' }}>
                    2020-2022 doneminde raporlanan toplam vaka: {hero.recentSuicides} | son guncelleme: {hero.asOfLabel}
                </p>
                <div className="author-block">
                    <img className="author-logo" src={logo} alt="CHP Logo" />
                    <p className="author-name">Icisleri Politika Kurulu Baskani Murat Bakan</p>
                </div>
                <div className="scroll-prompt">Dosyayi Ac &darr;</div>
            </div>
        </header>
    );
}
