import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Epidemiology from './components/Epidemiology'
import Mechanisms from './components/Mechanisms'
import Evidence from './components/Evidence'
import Timeline from './components/Timeline'
import Tweets from './components/Tweets'
import Media from './components/Media'
import Solutions from './components/Solutions'
import Preloader from './components/Preloader'

function App() {
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const bar = document.getElementById("scrollProgressBar");
            if (bar) bar.style.width = scrolled + "%";
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Preloader />
            <div className="scroll-progress-container">
                <div className="scroll-progress-bar" id="scrollProgressBar"></div>
            </div>
            <Hero />
            <main>
                <Epidemiology />
                <Mechanisms />
                <Evidence />
                <Timeline />
                <Tweets />
                <Media />
                <Solutions />
            </main>
            <footer>
                <div className="container">
                    <p>Bu web sitesi, CHP İzmir Milletvekili Murat Bakan'ın TBMM faaliyetleri çerçevesinde hazırlanan kapsamlı siyasi analiz raporuna dayanmaktadır.</p>
                    <p className="mono-small">SÜRÜM: 1.0.0 | DURUM: YAYINLANDI | MODERN YAPI</p>
                </div>
            </footer>
        </>
    )
}

export default App
