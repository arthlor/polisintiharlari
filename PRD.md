# Product Requirements Document (PRD)
## Project: Polis İntiharları ve Siyasal Çözümsüzlük (Web App)

### 1. Executive Summary & Objective
**Objective:** To design and build a high-impact, data-driven web application to be hosted on GitHub Pages. The website will serve as a digital dossier exposing the systemic crisis of police suicides in Turkey, leveraging the comprehensive analysis and parliamentary efforts of CHP MP Murat Bakan. 
**Goal:** Raise public awareness, present irrefutable statistical and anecdotal evidence, document the political obstruction (unanswered motions, rejected inquiries), and outline concrete solutions.
**Aesthetic Concept:** "Classified Dossier / Leaked Intelligence." The UI will utilize a gritty, stark, dark-mode design with subtle noise textures, scanlines, and evidence-like typography to emphasize the gravity and "covered-up" nature of the issue.

### 2. Target Audience
*   **General Public:** To raise awareness of an overshadowed societal tragedy.
*   **Journalists & Researchers:** As a verified data source and chronological reference.
*   **Lawmakers & NGOs:** To act as a digital manifesto for legislative pressure.
*   **Police Officers & Families (Emniyet Mensupları):** To show solidarity and provide a platform where their hidden grievances are validated.

### 3. Core Features & Information Architecture (IA)

#### 3.1. Hero Section (The Hook)
*   **Visuals:** Dark, cinematic hero section with subtle glitch or static noise animation. 
*   **Content:** A striking headline (e.g., "Devletin Kendi Koruyucularını Korumadaki Zafiyeti").
*   **Dynamic Element:** A ticking or fading counter representing the 1000+ lost lives in the last 20 years, or the 139 lost in 2020-2022.

#### 3.2. Epidemiyoloji: The Data (Statistical Reality)
*   **Visuals:** stark, high-contrast charts (bar charts/infographics) using a library like Chart.js or D3.
*   **Data Points:**
    *   Police suicide rate (%17) vs. National average (%4.1).
    *   International comparisons (France: 34.92, UK: 16, Turkey: 4-5x national average).
    *   Timeline spikes (e.g., 2021 with 108 suicides, 5 suicides in 2 days).

#### 3.3. Yapısal Şiddet: The Mechanism of Violence (Working Conditions)
*   **Visuals:** Interactive blocks comparing the "12/12" or "Çakma 12/36" shifts against standard 40-hour workweeks.
*   **Content:** Explanation of angarya (unpaid forced assignments like football matches) and the disruption of circadian rhythms.

#### 3.4. Kanıt Odası: The Evidence Room (Victims & Letters)
*   **Concept:** A gallery or "carousel" of classified files.
*   **Content:** Specific case files highlighting the letters and last words of the victims. 
    *   *Semanur Süer (23)*: "Ruhumu erittiler."
    *   *Alparslan Soylu*: "Onursuzca ithamlarla yaşamaktansa..."
    *   *Başkomiser M.C.* and the *Enes* (Vatan Emniyet) cases.
*   **UX:** Clicking a card reveals the "evidence" (the suicide note text) with typewriter or redaction reveal effects.

#### 3.5. Sistematik Çürüme: The Root Causes
*   **Features:** Accordion modules detailing:
    *   **Amir Tahakkümü (Mobbing):** The feudal superior-subordinate dynamic, lack of punishment for the oppressors, GİH (civil servant) downgrade threats.
    *   **Liyakat Krizi (Meritocracy Crisis):** Unfair interview systems, cult/sect (tarikat) influence in promotions.

#### 3.6. Kapatılan Dosyalar: The Wall of Silence (Political Response)
*   **Visuals:** A timeline or interactive "rejected" stamping effect.
*   **Content:** 
    *   Murat Bakan's 2126+ question motions (only 3 answered).
    *   The "robot/copy-paste" responses from the Ministry.
    *   The chronological list of Meclis Araştırma Önergeleri (Jun 2021, May 2022, Oct 2022) systematically rejected by AKP & MHP votes.

#### 3.7. Çözüm Manifestosu: The Blueprint for Reform
*   **Visuals:** Clean, structured lists, symbolizing order and hope out of the chaos.
*   **Content (4 Pillars):**
    1.  Polis Sendikası (Police Union / EUROCOP standards).
    2.  İnsani Çalışma Koşulları (Regulated working hours, banning 'angarya').
    3.  Liyakat Temelli Terfi (Abolishing interviews, ending the 2nd 'Şark' duty).
    4.  Özlük Hakları (3600 additional indicators for all, fair bank promotions).

### 4. Technical Specifications & Stack
*   **Hosting:** GitHub Pages (Static site generation).
*   **Core Tech:** HTML5, CSS3 (Vanilla, following the modern user preference for tailored CSS variables and no bloated frameworks), JavaScript (ES6+).
*   **Performance:** All images (if any) to be converted to WebP format for optimal loading speed.
*   **Libraries:** 
    *   *ChartJS / ApexCharts:* For the statistical data section.
    *   *GSAP (GreenSock) or Vanilla CSS Keyframes:* For the subtle dossier/glitch animations, scroll-triggered reveals, and the custom spotlight cursor.
*   **SEO & Accessibility (A11y):** 
    *   Semantic HTML tags (`<article>`, `<section>`, `<aside>`).
    *   Proper meta tags and structured data to ensure high visibility on search engines.

### 5. UI/UX Design Guidelines (The "Dossier" Aesthetic)
*   **Colors:** Deep blacks, off-blacks, chalky whites, with striking accent colors (e.g., alert red or caution yellow) used sparingly for data and emphasis.
*   **Typography:** Monospace fonts for data/numbers (e.g., Space Mono, Roboto Mono) paired with a clean sans-serif (e.g., Inter, Helvetica) for readability in long-form text.
*   **Textures:** Subtle CSS noise filters, horizontal scanline overlays.
*   **Interactions:** Hover states that mimic highlighting text or lifting redaction bars. Global scroll progress indicator.

### 6. Implementation Phases (Roadmap)

**Phase 1: Architecture & Data Extraction**
*   Set up the GitHub repository and GitHub Pages configuration.
*   Create `data.js` or `data.json` containing the structured content (quotes, stats, timeline data) from the markdown report to keep HTML clean.

**Phase 2: CSS System & Layout Skeleton**
*   Define global CSS variables (colors, fonts, animation timings).
*   Build the semantic HTML skeleton for all 7 sections.
*   Implement the base dark-mode "Dossier" theme.

**Phase 3: Component Development & Visualizations**
*   Develop the Hero section with counter.
*   Integrate Chart.js to build the epidemiology graphs.
*   Build the interactive "Evidence Room" cards for the victims.

**Phase 4: Polish, Animation & Launch**
*   Add scroll-triggered fade-ins and glitch micro-animations.
*   Implement custom cursor/spotlight effects.
*   Ensure full mobile responsiveness (crucial for sharing on social media).
*   Deploy to GitHub Pages and test.
