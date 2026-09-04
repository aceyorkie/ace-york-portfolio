/**
 * Centralized dataset of portfolio projects
 */
const PROJECTS_DATA = [
    {
        id: "um-orgportal",
        title: "UM ORGPORTAL",
        category: "Development",
        statusTag: "[ DEPLOYED ]",
        role: "Full Stack",
        year: "2026",
        desc: "A Web-based student organization management and event system with descriptive analytics.",
        definition: `<p><strong>UM ORGPORTAL</strong> is a web-based platform developed as our university capstone project in collaboration with my team. The system is designed to streamline the management of student organizations by providing features such as descriptive analytics to monitor event attendance, member involvement, and organizational performance, along with tools that improve communication, event management, and overall administrative efficiency.</p>
        <p style="margin-top: 0.75rem;">AWARDS:
            <ul style="margin-left: 1.25rem; margin-top: 0.25rem; list-style-type: square;">
                <li>2025 Code craft - Best Project Award</li>
            </ul>
        </p>`,
        screenshots: ["img/project-1.png", "img/p1.1.png", "img/p1.2.png", "img/p1.3.png", "img/p1.4.png", "img/p1.5.png"]
    },
    {
        id: "intellect-connect",
        title: "Intellect Connect",
        category: "Development",
        statusTag: "[ UN-DEPLOYED / WORKING PROTOTYPE ]",
        role: "Full Stack",
        year: "2023",
        desc: "An educational app that takes the swipe-and-match concept of dating apps and applies it to student-tutor pairings. Finding the right academic support has never been this engaging or personalized.",
        definition: `<p><strong>Intellect Connect</strong> An educational application developed in collaboration with my team that reimagines the swipe-and-match concept of dating apps to connect students with compatible tutors. The platform streamlines tutor discovery by matching learners based on their academic needs, preferences, and availability, making it easier to find personalized learning support.</p>
        <p style="margin-top: 0.75rem;">AWARDS:
            <ul style="margin-left: 1.25rem; margin-top: 0.25rem; list-style-type: square;">
                <li>2024 Code craft - Best Project Award</li>
            </ul>
        </p>`,
        screenshots: ["img/project-1.5.png", "img/p1.5.1.png", "img/p1.5.2.png", "img/p1.5.3.png", "img/p1.5.4.png", "img/p1.5.5.png", "img/p1.5.6.png", "img/p1.5.7.png", "img/p1.5.8.png"]
    },
    {
        id: "edupocket",
        title: "EduPocket",
        category: "UI/UX Design",
        statusTag: "[ PROTOTYPE ]",
        role: "UI/UX Design",
        year: "2024",
        desc: "An intelligent educational app empowering students to effortlessly monitor their spending habits and master personal finance.",
        definition: `<p><strong>EduPocket</strong> A personal project and original concept, designed as a Figma prototype, for an intelligent educational app that helps students effortlessly monitor their spending habits, develop healthy financial behaviors, and build confidence in managing their personal finances. My idea was to make the UI unique, creating an intuitive and engaging experience through user-centered design.</p>`,
        screenshots: ["img/project-2.png", "img/p2.1.png", "img/p2.2.png", "img/p2.3.png", "img/p2.4.png", "img/p2.5.png", "img/p2.6.png"]
    },
    {
        id: "npc",
        title: "NPC",
        category: "UI/UX Design",
        statusTag: "[ PROTOTYPE ]",
        role: "UI/UX Design",
        year: "2026",
        desc: "NPC is an interactive mobile app that transforms you into a game character, allowing you to complete quests in the real world.",
        definition: `<p><strong>NPC</strong> A personal project and original concept, designed as a Figma prototype, for an interactive mobile app that transforms users into game characters, encouraging them to complete real-world quests and challenges. This prototype explores how gamification can make everyday tasks more engaging, motivating, and rewarding.</p>`,
        screenshots: ["img/project-3.png"]
    },
    {
        id: "ecotrend",
        title: "Ecotrend",
        category: "UI/UX Design",
        statusTag: "[ PROTOTYPE ]",
        role: "UI/UX Design",
        year: "2024",
        desc: "A web-based shopping platform that sells eco-friendly fashion products.",
        definition: `<p><strong>Ecotrend</strong> A personal project and original concept, designed as a Figma prototype, for a web-based shopping platform that showcases and sells eco-friendly fashion products. This prototype explores a clean, user-friendly shopping experience while promoting sustainable fashion choices and environmentally conscious consumer habits.</p>`,
        screenshots: ["img/project-4.png", "img/p4.1.png", "img/p4.2.png", "img/p4.3.png", "img/p4.4.png", "img/p4.5.png", "img/p4.6.png"]
    },
    {
        id: "techconnect",
        title: "TECHCONNECT",
        category: "UI/UX Design",
        statusTag: "[ PROTOTYPE ]",
        role: "UI/UX Design",
        year: "2023",
        desc: "TECHCONNECT is a social media platform for tech enthusiasts to connect, share ideas, and collaborate on projects.",
        definition: `<p><strong>TECHCONNECT</strong> TECHCONNECT is a personal project and original concept that I designed as a Figma prototype. It is a social media platform for tech enthusiasts to connect, share ideas, and collaborate on projects. The prototype focuses on creating an intuitive and engaging user experience that fosters networking, knowledge sharing, and innovation within the tech community.</p>`,
        screenshots: ["img/project-5.png", "img/p5.1.png", "img/p5.2.png", "img/p5.3.png", "img/p5.4.png", "img/p5.5.png", "img/p5.6.png", "img/p5.7.png", "img/p5.8.png"]
    },
    {
        id: "pormo",
        title: "Por'mo",
        category: "UI/UX Design",
        statusTag: "[ PROTOTYPE ]",
        role: "UI/UX Design",
        year: "2025",
        desc: "Por'mo or also known as \"porma mo\" is a mobile shopping app that sells fashion stuff and allows user to virtually try-on the product using augmented reality.",
        definition: `<p><strong>Por'mo</strong> ("Porma Mo") is an original concept that I designed as a Figma prototype for our Technopreneurship course. It is a mobile shopping app that offers fashion products and features an augmented reality (AR) virtual try-on experience, allowing users to visualize how items look before making a purchase. The prototype focuses on creating an interactive, convenient, and engaging online shopping experience.</p>`,
        screenshots: ["img/project-6.png", "img/p6.1.png", "img/p6.2.png", "img/p6.3.png", "img/p6.4.png", "img/p6.5.png", "img/p6.6.png", "img/p6.7.png"]
    },
    {
        id: "farmers-link",
        title: "Farmer's Link",
        category: "UI/UX Design",
        statusTag: "[ PROTOTYPE ]",
        role: "UI/UX Design",
        year: "2024",
        desc: "Farmer's Link is an original concept I designed and prototyped in Figma for our entrepreneurship course. It connects buyers directly with farmers, enabling easier and more efficient ordering of fresh produce.",
        definition: `<p><strong>Farmer's Link</strong> Farmer's Link is an original concept that I designed and prototyped in Figma as part of our entrepreneurship course. The platform aims to connect buyers, farmers, and market sellers directly, allowing customers and sellers to order fresh agricultural products without relying on intermediaries. This concept promotes fair pricing for farmers while providing consumers and market sellers with easier access to fresh, locally sourced produce.</p>
        <p style="margin-top: 0.75rem;">AWARDS:
            <ul style="margin-left: 1.25rem; margin-top: 0.25rem; list-style-type: square;">
                <li>1st Runner-Up – Best Poster Presentation, 2024 Business Summit</li>
            </ul>
        </p>`,
        screenshots: ["img/project-6.5.png", "img/p6.5.1.png", "img/p6.5.2.png", "img/p6.5.3.png", "img/p6.5.4.png"]
    },
    {
        id: "psits-logo",
        title: "PSITS LOGO ENTRY",
        category: "Logo Design",
        statusTag: "[ LOGO ]",
        role: "Logo Design",
        year: "2026",
        desc: "This logo was my official entry to the Philippine Society of Information Technology Students (PSITS) Region XI Interschool Logo Making Competition.",
        definition: `<p><strong>PSITS LOGO</strong> This logo was my official entry to the Philippine Society of Information Technology Students (PSITS) Region XI Interschool Logo Making Competition. I proudly represented my school and achieved 3rd place among participants from 12 universities and colleges across Region XI.</p>
        <p style="margin-top: 0.75rem;">AWARDS:
            <ul style="margin-left: 1.25rem; margin-top: 0.25rem; list-style-type: square;">
                <li>Rank #3 PSITS-Region 11 Interschool Logo Making Competition.</li>
            </ul>
        </p>`,
        screenshots: ["img/PSITS-LOGO.png"]
    },
    {
        id: "2025-umdc-intramurals",
        title: "2025 UMDC Intramurals",
        category: "Graphic Design",
        statusTag: "[ POSTED ]",
        role: "Graphic designer",
        year: "2025",
        desc: "UMDC 2025 Intramurals Branding & Publicity Design.",
        definition: `<p><strong>2025 UMDC Intramurals. PANALUNDON MAGANI: VALOR: </strong>I designed the official social media publicity materials and departmental T-shirt graphics for all academic departments. This project focused on creating a cohesive visual identity that promoted the event while giving each department a distinctive and recognizable design.</p>`,
        screenshots: ["img/project-7.png", "img/p7.1.jpg", "img/p7.2.jpg", "img/p7.3.jpg", "img/p7.4.jpg", "img/p7.5.jpg", "img/p7.6.jpg", "img/p7.7.jpg", "img/p7.8.jpg", "img/p7.9.jpg", "img/p7.10.png", "img/p7.11.png", "img/p7.12.png", "img/p7.13.png", "img/p7.14.png", "img/p7.15.png", "img/p7.16.png", "img/p7.17.png"]
    },
    {
        id: "2025-umdc-dtp-olympics",
        title: "2025 UMDC - Department of technical programs mini olympics",
        category: "Graphic Design",
        statusTag: "[ POSTED ]",
        role: "Graphic designer",
        year: "2025",
        desc: "UMDC - Department of technical programs mini olympics Branding & Publicity Design.",
        definition: `<p><strong>2025 UMDC Department of Technical Programs Mini Olympics: </strong>I designed the official social media publicity materials for the UMDC-DTP Mini Olympics: THE WATCHER'S GAME. Generative AI was used selectively (approximately 20–30%) to assist in creating certain visual assets, while the creative direction, composition, typography, branding, and final editing were entirely my own.</p>`,
        screenshots: ["img/project-7.5.png", "img/p7.5.1.jpg", "img/p7.5.2.jpg", "img/p7.5.3.jpg", "img/p7.5.4.jpg", "img/p7.5.6.jpg", "img/p7.5.7.jpg"]
    },
    {
        id: "2026-presidents-report",
        title: "2026 annual presidents report",
        category: "Graphic Design",
        statusTag: "[ PRINTED ]",
        role: "Graphic Designer",
        year: "2026",
        desc: "A graphic design project for the official UMDC 2026 Annual President's Report, showcasing the university's milestones, events, achievements, and institutional developments throughout the academic year.",
        definition: `<p><strong>2026 annual presidents report. </strong>I designed the official UMDC Annual President's Report magazine for the Academic Year 2025–2026. The publication highlights the university's major events, achievements, milestones, and institutional developments throughout the academic year. My role involved creating the magazine's overall visual design, layout, and typography to present the content in a professional, engaging, and cohesive format.</p>`,
        screenshots: ["img/project-8.png"]
    },
    {
        id: "travel-tours-edits",
        title: "Travel & Tours Edits",
        category: "Graphic Design",
        statusTag: "[ POSTED ]",
        role: "Graphic Designer",
        year: "2025",
        desc: "This is a collection of travel and tours social media edits. I designed these edits for a travel and tours social media page.",
        definition: `<p><strong>Travel & Tours Edits. </strong>This is a curated collection of social media graphics created during my one-year tenure as a Social Media Content Creator for a local travel and tours Facebook page. Over the course of a year, I was responsible for brainstorming, designing, and maintaining the page's visual identity. This showcase features promotional pubmats, tour package flyers, and engaging content designed to boost traveler engagement and drive bookings.</p>`,
        screenshots: ["img/project-9.png", "img/p9.1.png", "img/p9.2.png", "img/p9.3.png", "img/p9.4.png", "img/p9.5.png", "img/p9.6.png", "img/p9.7.png", "img/p9.8.png", "img/p9.9.png", "img/p9.10.png", "img/p9.11.png", "img/p9.12.png"]
    },
    {
        id: "2025-buwan-ng-wika",
        title: "2025 UMDC Buwan ng Wika",
        category: "Graphic Design",
        statusTag: "[ POSTED ]",
        role: "Graphic designer",
        year: "2025",
        desc: "A graphic design project for the 2025 UMDC Buwan ng Wika celebration. I designed the official publicity materials used to promote the event.",
        definition: `<p><strong>2025 UMDC Buwan ng Wika. </strong>This graphic design project was created specifically for the official announcement postings of the 2025 UMDC Buwan ng Wika celebration. The goal was to design a cohesive set of social media assets to inform the university community about event schedules and guidelines. By blending traditional cultural themes with modern layouts, these publication materials (pubmats) were crafted to catch the students' attention while ensuring all vital event information was clear and easily readable at a glance.</p>`,
        screenshots: ["img/project-10.jpg", "img/project-10.25.jpg"]
    },
    {
        id: "2025-esports",
        title: "2025 UMDC Intramurals eSports",
        category: "Graphic Design",
        statusTag: "[ POSTED ]",
        role: "Graphic designer",
        year: "2025",
        desc: "Designed a series of promotional graphics for the university's esports teams competing in Call of Duty: Mobile, Mobile Legends and Valorant tournaments.",
        definition: `<p><strong>2025 UMDC Intramurals eSports. </strong>Designed a series of promotional graphics for the university's esports teams competing in Call of Duty: Mobile, Mobile Legends and Valorant tournaments. The goal was to establish a consistent visual identity while highlighting each team's roster and match achievements through bold typography, dynamic composition, and team-specific color palettes.</p>`,
        screenshots: ["img/esports-1.png", "img/esports-2.jpg", "img/esports-3.jpg", "img/esports-4.jpg", "img/esports-5.jpg", "img/esports-6.jpg", "img/esports-7.jpg", "img/esports-8.jpg"]
    },
    {
        id: "christmas-greetings",
        title: "Christmas greetings",
        category: "Graphic Design",
        statusTag: "[ POSTED ]",
        role: "Graphic Designer",
        year: "2026",
        desc: "A graphic design project featuring a Christmas greeting created to celebrate the holiday season.",
        definition: `<p><strong>Christmas greetings. </strong>A holiday-themed graphic design project featuring custom Christmas greetings. Crafted specifically for the holiday season, this visual asset combines festive design elements and clean layout aesthetics to deliver a cheerful and engaging holiday message across digital platforms.</p>`,
        screenshots: ["img/project-11.jpg", "img/project-11.25.png", "img/project-11.5.png"]
    },
    {
        id: "newly-elected-officers",
        title: "Newly Elected Officers (SY 2025–2026)",
        category: "Graphic Design",
        statusTag: "[ POSTED ]",
        role: "Graphic Designer",
        year: "2025",
        desc: "Designed an official social media announcement introducing the newly elected officers.",
        definition: `<p><strong>Newly Elected Officers (SY 2025–2026). </strong>Designed an official social media announcement introducing the newly elected officers for the Department of Technical Programs. The objective was to create a professional and visually engaging layout while maintaining the department's branding and ensuring clear presentation of officer information.</p>`,
        screenshots: ["img/dtp-1.png", "img/dtp-2.jpg", "img/dtp-3.jpg", "img/dtp-4.jpg", "img/dtp-5.jpg", "img/dtp-6.jpg"]
    },
    {
        id: "umdc-id",
        title: "UMDC Official ID",
        category: "Graphic Design",
        statusTag: "[ CONCEPT ]",
        role: "Graphic Designer",
        year: "2025",
        desc: "UMDC Official ID Social Media Presentation Concept",
        definition: `<p><strong>UMDC Official ID. </strong>A personal graphic design concept for a UMDC official ID announcement post. Utilizing the standard official ID design, this project focuses on the creative layout and pubmat styling, exploring how the university's identification cards can be dynamically presented for social media broadcast and campus announcements.</p>`,
        screenshots: ["img/project-12.png", "img/project-12.5.png"]
    },
    {
        id: "2026-bsit-culmination",
        title: "2026 BSIT Culmination",
        category: "Graphic Design",
        statusTag: "[ UTILIZED ]",
        role: "Graphic Designer",
        year: "2026",
        desc: "A graphic design project for the 2026 BSIT Culmination.",
        definition: `<p><strong>2026 BSIT Culmination. </strong>This is a comprehensive event branding and graphic design project for the 2026 BSIT OJT Culmination. I was responsible for creating a cohesive visual theme across multiple physical and digital assets to celebrate our batch's successful internship completion. The design deliverables included the main event tarpaulin (tarp), the official invitation cards for guests and faculty, and a dynamic digital TV backdrop used as the main stage display during the ceremony.</p>`,
        screenshots: ["img/project-13.png", "img/p13.1.png", "img/p13.2.jpg", "img/p13.3.jpg", "img/p13.4.jpg"]
    },
    {
        id: "dtp-officer-tshirt",
        title: "DTP official officer t-shirt",
        category: "Graphic Design",
        statusTag: "[ UTILIZED ]",
        role: "Graphic Designer",
        year: "2025",
        desc: "A T-shirt design for the officers of DTP.",
        definition: `<p><strong>DTP official officer t-shirt. </strong>A custom T-shirt design I created for the officers of DTP, featuring an original owl illustration that I hand-drew to complement the department's identity.</p>`,
        screenshots: ["img/project-14.png", "img/p14.1.png", "img/p14.2.png"]
    },
    {
        id: "cdsg-tshirt",
        title: "UMDC-CDSG T-shirt design",
        category: "Graphic Design",
        statusTag: "[ UTILIZED ]",
        role: "Graphic Designer",
        year: "2025",
        desc: "A T-shirt design for the officers of UMDC-CDSG.",
        definition: `<p><strong>UMDC-CDSG T-shirt design. </strong>A custom T-shirt design I created for the UMDC-CDSG.</p>`,
        screenshots: ["img/project-15.png", "img/p15.1.png", "img/p15.2.png"]
    },
    {
        id: "video-showcase-01",
        title: "Video Editing Showcase 01",
        category: "Video Editing",
        statusTag: "[ VIDEO EDIT ]",
        role: "Video Editor",
        year: "2026",
        desc: "A video editing showcase demonstrating visual storytelling, motion cuts, and sound design.",
        definition: `<p><strong>Video Editing Showcase 01: </strong>A video editing showcase project created using professional editing workflows. Demonstrating precise cuts, color grading, audio synchronization, and visual effects.</p>`,
        screenshots: ["vid/vid1.mp4"]
    },
    {
        id: "video-showcase-02",
        title: "Video Editing Showcase 02",
        category: "Video Editing",
        statusTag: "[ VIDEO EDIT ]",
        role: "Video Editor",
        year: "2026",
        desc: "A video editing project highlighting narrative pacing, transitions, and dynamic visual composition.",
        definition: `<p><strong>Video Editing Showcase 02: </strong>A video editing project highlighting advanced editing techniques, smooth transitions, audio mixing, and creative post-production storytelling.</p>`,
        screenshots: ["vid/vid2.mp4"]
    }
];

function getProjectById(id) {
    if (!id) return PROJECTS_DATA[0];
    const found = PROJECTS_DATA.find(p => p.id === id);
    return found || PROJECTS_DATA[0];
}

function getProjectIndex(id) {
    const idx = PROJECTS_DATA.findIndex(p => p.id === id);
    return idx >= 0 ? idx : 0;
}

function getPrevProject(id) {
    const currentIndex = getProjectIndex(id);
    const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    return PROJECTS_DATA[prevIndex];
}

function getNextProject(id) {
    const currentIndex = getProjectIndex(id);
    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
    return PROJECTS_DATA[nextIndex];
}
