document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    populateData();
    animateCounter();
    renderChart();
    initScrollAnimations();
});

function initCursor() {
    const cursor = document.querySelector('.custom-cursor');
    if(!cursor) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactiveSelectors = 'a, button, .evidence-card, .timeline-item, .card-mechanism';
    document.querySelectorAll(interactiveSelectors).forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

function populateData() {
    // Stats
    const statsList = document.getElementById('stats-list');
    if(statsList) {
        SITE_DATA.stats.forEach(stat => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${stat.label}</span> <strong>${stat.value}</strong>`;
            statsList.appendChild(li);
        });
    }

    // Mechanisms
    const mechGrid = document.getElementById('mechanism-grid');
    if(mechGrid) {
        SITE_DATA.mechanisms.forEach(mech => {
            const div = document.createElement('div');
            div.className = 'card-mechanism';
            div.innerHTML = `<h3 style="color:var(--accent-red);font-family:var(--font-mono);font-size:1.1rem;margin-bottom:1rem;">${mech.title}</h3><p style="color:var(--text-secondary);">${mech.desc}</p>`;
            mechGrid.appendChild(div);
        });
    }

    // Evidence
    const eviGrid = document.getElementById('evidence-grid');
    if(eviGrid) {
        SITE_DATA.evidence.forEach(evi => {
            const div = document.createElement('div');
            div.className = 'evidence-card fade-up';
            div.innerHTML = `
                <div class="evidence-name">${evi.name}</div>
                <div class="mono-small" style="color:var(--text-dim); margin-bottom: 1rem;">${evi.age}</div>
                <div class="evidence-note">${evi.note}</div>
            `;
            eviGrid.appendChild(div);
        });
    }

    // Timeline
    const timeline = document.getElementById('timeline');
    if(timeline) {
        SITE_DATA.timeline.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'timeline-item fade-up';
            div.style.transitionDelay = `${index * 0.1}s`;
            div.innerHTML = `
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-content">
                    <h3 style="font-size:1.1rem; margin-bottom:0.5rem; color: #fff;">${item.title}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">${item.desc}</p>
                </div>
            `;
            timeline.appendChild(div);
        });
    }

    // Solutions
    const solGrid = document.getElementById('solution-grid');
    if(solGrid) {
        solGrid.className = 'grid-2';
        SITE_DATA.solutions.forEach(sol => {
            const div = document.createElement('div');
            div.className = 'card-mechanism fade-up';
            div.innerHTML = `
                <div style="font-size: 2.5rem; margin-bottom: 1rem;">${sol.icon}</div>
                <h3 style="color:var(--accent-green);font-family:var(--font-mono);font-size:1.2rem;margin-bottom:0.5rem;">${sol.title}</h3>
                <p style="color:var(--text-secondary);">${sol.desc}</p>
            `;
            solGrid.appendChild(div);
        });
    }
}

function animateCounter() {
    const counterEl = document.getElementById('total-suicides');
    if(!counterEl) return;
    
    let target = SITE_DATA.hero.totalSuicides;
    let count = 0;
    
    const duration = 2000;
    const increment = target / (duration / 30);
    
    const interval = setInterval(() => {
        count += increment;
        if(count >= target) {
            count = target;
            clearInterval(interval);
        }
        counterEl.innerText = Math.floor(count);
    }, 30);
}

function renderChart() {
    const ctx = document.getElementById('suicideRateChart');
    if(!ctx) return;

    // We only render chart if Chart obj is loaded
    if(typeof Chart === 'undefined') {
        setTimeout(renderChart, 500); // Retry if CDN is slow
        return;
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Türkiye Genel Nüfus (%)', 'Polis Memurları (%)'],
            datasets: [{
                label: 'İntihar Oranı',
                data: [4.1, 17],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(211, 47, 47, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 255, 255, 0.3)',
                    'rgba(211, 47, 47, 1)'
                ],
                borderWidth: 1,
                borderRadius: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
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
        }
    });
}

function initScrollAnimations() {
    // Add CSS rule for fade-up dynamically
    const style = document.createElement('style');
    style.textContent = `
        .fade-up { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    setTimeout(() => {
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    }, 100);
}
