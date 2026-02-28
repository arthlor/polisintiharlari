import React, { useEffect, useState } from 'react';

export default function Preloader() {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 600);
        const t2 = setTimeout(() => setPhase(2), 1200);
        const t3 = setTimeout(() => setPhase(3), 1800);
        const t4 = setTimeout(() => setPhase(4), 2400);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, []);

    if (phase >= 4) return null;

    return (
        <div className={`preloader-overlay ${phase === 3 ? 'fade-out' : ''}`}>
            <div className="terminal-container">
                <p className="terminal-line">{'>'} GÜVENLİ_BAĞLANTI_BAŞLATILIYOR...</p>
                {phase >= 1 && <p className="terminal-line success">{'>'} DOSYAYA_ERİŞİM: İZİN_VERİLDİ.</p>}
                {phase >= 2 && <p className="terminal-line warning">{'>'} KANIT_DOSYALARI_ŞİFREDEN_ÇÖZÜLÜYOR...</p>}
            </div>
            <div className="preloader-scanline"></div>
        </div>
    );
}
