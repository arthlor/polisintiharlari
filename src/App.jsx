import React from 'react'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import Epidemiology from './components/Epidemiology'
import Mechanisms from './components/Mechanisms'
import Evidence from './components/Evidence'
import Timeline from './components/Timeline'
import Tweets from './components/Tweets'
import Media from './components/Media'
import Solutions from './components/Solutions'

function App() {
    return (
        <>
            <Cursor />
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
