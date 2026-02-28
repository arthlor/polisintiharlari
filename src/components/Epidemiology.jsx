import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { SITE_DATA } from '../data';
import AnimatedNumber from './AnimatedNumber';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function Epidemiology() {
    const data = {
        labels: ['Türkiye Genel Nüfus (%)', 'Polis Memurları (%)'],
        datasets: [{
            label: 'İntihar Oranı',
            data: [4.1, 17],
            backgroundColor: ['rgba(255, 255, 255, 0.1)', 'rgba(211, 47, 47, 0.8)'],
            borderColor: ['rgba(255, 255, 255, 0.3)', 'rgba(211, 47, 47, 1)'],
            borderWidth: 1,
            borderRadius: 0,
            barPercentage: 0.6
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFont: { family: 'Space Mono', size: 14 },
                bodyFont: { family: 'Space Mono', size: 14 },
                padding: 12,
                borderColor: 'rgba(211, 47, 47, 0.8)',
                borderWidth: 1,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return `DEĞER: %${context.parsed.y}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255,255,255,0.1)',
                    tickColor: 'rgba(255,255,255,0.1)',
                    borderDash: [5, 5],
                    drawBorder: false,
                },
                ticks: { color: 'rgba(255,255,255,0.7)', font: { family: 'Space Mono', size: 12 }, stepSize: 5 }
            },
            x: {
                grid: {
                    display: true,
                    color: 'rgba(255,255,255,0.1)',
                    borderDash: [5, 5],
                    drawBorder: false,
                },
                ticks: { color: 'rgba(255,255,255,0.8)', font: { family: 'Space Mono', size: 11 } }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeOutQuart'
        }
    };

    const coreRates = SITE_DATA.stats.slice(0, 2);
    const intlComp = SITE_DATA.stats.slice(2, 5);
    const acuteCrisis = SITE_DATA.stats.slice(5, 8);

    const renderStatCard = (stat, isAlert = false) => (
        <div className={`stat-card ${isAlert ? 'alert' : ''}`} key={stat.label}>
            <div>
                <div className="stat-value"><AnimatedNumber value={stat.value} /></div>
                <div className="stat-label">{stat.label}</div>
            </div>
            <div className="claim-meta">
                <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer">Kaynak</a>
                <span>{stat.sourceType}</span>
                <span>{stat.asOfDate}</span>
            </div>
        </div>
    );

    return (
        <section id="epidemiyoloji" className="dossier-panel">
            <div className="container">
                <div className="section-header" style={{ marginBottom: '1rem' }}>
                    <h2>01. İstatistiksel Epidemiyoloji</h2>
                    <span className="badge red">İSTATİSTİKSEL_ANALİZ</span>
                </div>
                <p className="section-description" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '800px', lineHeight: '1.6' }}>
                    Bu bölüm, kolluk kuvvetleri içerisindeki intihar vakalarının toplumun geneline ve uluslararası standartlara kıyasla ulaştığı kritik seviyeyi; salt sayılar üzerinden değil, yapısal bir krizin epidemiyolojik kanıtları olarak sunmaktadır.
                </p>

                <div className="epidemiology-dashboard">
                    <div className="grid-2" style={{ marginBottom: '3rem', alignItems: 'stretch' }}>
                        <div className="stat-group core-rates">
                            <h3 className="stat-group-title" style={{ marginBottom: '0.2rem' }}>[ KRİTİK VERİ: TEMEL ORANLAR ]</h3>
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>Emniyet teşkilatı ile sivil nüfus arasındaki yaşam kaybı uçurumu.</p>
                            <div className="stat-grid-1">
                                {coreRates.map(stat => renderStatCard(stat, true))}
                            </div>
                        </div>
                        <div className="stat-group chart-group">
                            <div className="custom-chart-box" style={{ height: '300px', width: '100%', position: 'relative' }}>
                                <div className="chart-corner top-left"></div>
                                <div className="chart-corner top-right"></div>
                                <div className="chart-corner bottom-left"></div>
                                <div className="chart-corner bottom-right"></div>
                                <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                                    <Bar data={data} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stat-group acute-crisis" style={{ marginBottom: '3rem' }}>
                        <h3 className="stat-group-title pulse-text" style={{ color: 'var(--accent-red)', marginBottom: '0.2rem' }}>[ AKUT KRİZ RAPORU ]</h3>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', borderBottom: '1px solid var(--accent-red-dim)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Kısa zaman dilimlerine sıkışan, sistemik alarm veren ani kayıp dalgaları.</p>
                        <div className="stat-grid-3">
                            {acuteCrisis.map(stat => renderStatCard(stat, true))}
                        </div>
                    </div>

                    <div className="stat-group intl-comp">
                        <h3 className="stat-group-title" style={{ marginBottom: '0.2rem' }}>[ KIYASLAMA BEYANI ]</h3>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Küresel kolluk standartları perspektifinden Türkiye tablosunun analizi.</p>
                        <div className="stat-grid-3">
                            {intlComp.map(stat => renderStatCard(stat, false))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
