import React from 'react';
import { SITE_DATA } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';

function VideoCard({ media }) {
    const { isVisible, domRef } = useFadeIn();

    return (
        <div ref={domRef} className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{media.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>{media.desc}</p>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src={`https://www.youtube.com/embed/${media.videoId}`}
                    title={media.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default function Media() {
    return (
        <section id="medya-arsivi" className="dossier-panel dark">
            <div className="container">
                <div className="section-header">
                    <h2>06. TBMM Kürsüsü: Multimedya Arşivi</h2>
                    <span className="badge red">GÖRSEL_KAYITLAR</span>
                </div>
                <p className="description" style={{ color: "var(--text-secondary)", maxWidth: "800px", marginBottom: "2rem" }}>
                    Cumhuriyet Halk Partisi İzmir Milletvekili Murat Bakan'ın Meclis Genel Kurulu'ndaki konuşmaları ve reddedilen önergelerin video kayıtları:
                </p>
                <div className="grid-2">
                    {SITE_DATA.media.map((media, index) => (
                        <VideoCard key={index} media={media} />
                    ))}
                </div>
            </div>
        </section>
    );
}
