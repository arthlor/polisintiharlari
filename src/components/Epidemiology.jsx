import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { SITE_DATA } from '../data';

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
            borderRadius: 2
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: { family: 'Space Mono' },
                bodyFont: { family: 'Space Mono' },
                padding: 10,
                borderColor: 'rgba(211, 47, 47, 0.5)',
                borderWidth: 1
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: 'rgba(255,255,255,0.5)', font: { family: 'Space Mono' } }
            },
            x: {
                grid: { display: false },
                ticks: { color: 'rgba(255,255,255,0.8)', font: { family: 'Inter' } }
            }
        }
    };

    return (
        <section id="epidemiyoloji" className="dossier-panel">
            <div className="container">
                <div className="section-header">
                    <h2>01. İstatistiksel Epidemiyoloji</h2>
                    <span className="badge red">İSTATİSTİKSEL_ANALİZ</span>
                </div>
                <div className="grid-2">
                    <div className="content">
                        <ul className="stats-list">
                            {SITE_DATA.stats.map((stat, i) => (
                                <li key={i}>
                                    <span>{stat.label}</span>
                                    <strong>{stat.value}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="chart-container" style={{ minHeight: '300px', position: 'relative' }}>
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
        </section>
    );
}
