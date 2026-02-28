import React from 'react';
import { Tweet } from 'react-tweet';
import { SITE_DATA } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';

function EmbeddedTweet({ id }) {
    const { isVisible, domRef } = useFadeIn();

    return (
        <div ref={domRef} className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ display: 'flex', justifyContent: 'center' }}>
            <div data-theme="dark" style={{ width: '100%' }}>
                <Tweet id={id} />
            </div>
        </div>
    );
}

export default function Tweets() {
    return (
        <section id="iletisim-agi" className="dossier-panel dark" style={{ borderTop: '2px dashed var(--border-color)' }}>
            <div className="container">
                <div className="section-header">
                    <h2>05. Kamuoyu Çağrıları: 𝕏 Bildirimleri</h2>
                    <span className="badge yellow">KAMUYA_AÇIK_KAYIT</span>
                </div>
                <p className="description" style={{ color: "var(--text-secondary)", maxWidth: "800px", marginBottom: "2rem" }}>
                    TBMM kürsüsünde ve soru önergelerinde tıkanan siyaset, dijital diplomasi üzerinden kamuoyuna taşınıyor. CHP İzmir Milletvekili Murat Bakan'ın ilgili X (Twitter) paylaşımları:
                </p>
                <div className="grid-2">
                    {SITE_DATA.tweets.map((id, index) => (
                        <EmbeddedTweet key={index} id={id} />
                    ))}
                </div>
            </div>
        </section>
    );
}
