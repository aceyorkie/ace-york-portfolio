document.addEventListener('DOMContentLoaded', () => {
    // 1. Projects Category Filtering and Dynamic Visibility Limit
    const filterTabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card');
    const projectSearch = document.getElementById('projectSearch');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    let isExpanded = false;

    const INITIAL_LIMIT = 6;

    function filterProjects() {
        const activeTab = document.querySelector('.filter-tab.active');
        const activeFilter = activeTab ? activeTab.getAttribute('data-filter') : 'all';
        const searchQuery = projectSearch ? projectSearch.value.trim().toLowerCase() : '';

        let totalFilteredCount = 0;

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = (card.getAttribute('data-title') || '').toLowerCase();

            const matchesCategory = (activeFilter === 'all' || category === activeFilter);
            const matchesSearch = title.includes(searchQuery);

            if (matchesCategory && matchesSearch) {
                totalFilteredCount++;
                // Display matching card if expanded, or if it is within the initial limit
                if (isExpanded || searchQuery !== '' || totalFilteredCount <= INITIAL_LIMIT) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            } else {
                card.style.display = 'none';
            }
        });

        // Dynamically show/hide See More button row depending on total matching projects count
        if (seeMoreBtn && seeMoreBtn.parentElement) {
            if (totalFilteredCount > INITIAL_LIMIT && searchQuery === '') {
                seeMoreBtn.parentElement.style.display = 'flex';
            } else {
                seeMoreBtn.parentElement.style.display = 'none';
            }
        }
    }

    // Mapping of URL keywords (hashes or query params) to filter categories
    const HASH_TO_FILTER_MAP = {
        'graphic-design': 'branding',
        'graphic': 'branding',
        'graphics': 'branding',
        'graphicdesign': 'branding',
        'branding': 'branding',
        'logo': 'branding',
        'development': 'development',
        'dev': 'development',
        'code': 'development',
        'web-dev': 'development',
        'web-development': 'development',
        'frontend': 'development',
        'design': 'design',
        'ui-ux': 'design',
        'ui-ux-design': 'design',
        'ui': 'design',
        'ux': 'design',
        'uiux': 'design',
        'video': 'video',
        'video-editing': 'video',
        'videos': 'video',
        'editing': 'video',
        'all': 'all',
        'all-projects': 'all',
        'projects': 'all'
    };

    // Mapping from category to canonical shareable URL hash
    const FILTER_TO_HASH_MAP = {
        'branding': '#graphic-design',
        'development': '#development',
        'design': '#ui-ux',
        'video': '#video-editing',
        'all': '#projects'
    };

    function parseFilterFromUrl() {
        // 1. Check hash (e.g. #graphic-design)
        const rawHash = window.location.hash.replace(/^#/, '').toLowerCase().trim();
        if (rawHash && HASH_TO_FILTER_MAP[rawHash]) {
            return { filter: HASH_TO_FILTER_MAP[rawHash], fromHash: true, raw: rawHash };
        }

        // 2. Check query parameters (e.g. ?filter=graphic-design or ?role=graphic-design)
        const urlParams = new URLSearchParams(window.location.search);
        const queryParam = (urlParams.get('filter') || urlParams.get('category') || urlParams.get('role') || '').toLowerCase().trim();
        if (queryParam && HASH_TO_FILTER_MAP[queryParam]) {
            return { filter: HASH_TO_FILTER_MAP[queryParam], fromHash: false, raw: queryParam };
        }

        return null;
    }

    function applyFilter(filterName, updateUrl = false, scrollToProjects = false) {
        const targetTab = document.querySelector(`.filter-tab[data-filter="${filterName}"]`);
        if (!targetTab) return;

        filterTabs.forEach(t => t.classList.remove('active'));
        targetTab.classList.add('active');

        // Reset expansion toggle when changing categories
        isExpanded = false;
        if (seeMoreBtn) {
            seeMoreBtn.setAttribute('data-expanded', 'false');
            seeMoreBtn.textContent = 'SEE MORE PROJECTS';
        }

        filterProjects();

        // Update URL hash cleanly in address bar for effortless copy-pasting
        if (updateUrl && window.history && window.history.replaceState) {
            const canonicalHash = FILTER_TO_HASH_MAP[filterName] || '#projects';
            window.history.replaceState(null, '', canonicalHash);
        }

        if (scrollToProjects) {
            const projectsTarget = document.getElementById('projects');
            if (projectsTarget) {
                setTimeout(() => {
                    projectsTarget.scrollIntoView({ behavior: 'smooth' });
                }, 150);
            }
        }
    }

    // Filter tab click handlers
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.getAttribute('data-filter') || 'all';
            applyFilter(filter, true, false);
        });
    });

    if (projectSearch) {
        projectSearch.addEventListener('input', filterProjects);
    }

    // See More projects toggle
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            seeMoreBtn.setAttribute('data-expanded', isExpanded.toString());
            if (isExpanded) {
                seeMoreBtn.textContent = 'SEE LESS PROJECTS';
            } else {
                seeMoreBtn.textContent = 'SEE MORE PROJECTS';
            }
            filterProjects();
        });
    }

    // Process initial URL filter on page load
    const initialFilter = parseFilterFromUrl();
    if (initialFilter) {
        const shouldScroll = initialFilter.fromHash && initialFilter.raw !== 'projects';
        applyFilter(initialFilter.filter, false, shouldScroll);
    } else {
        filterProjects();
    }

    // Listen to hash changes (e.g. browser back/forward or manual hash changes)
    window.addEventListener('hashchange', () => {
        const hashFilter = parseFilterFromUrl();
        if (hashFilter) {
            applyFilter(hashFilter.filter, false, false);
        }
    });

    // 2. Smooth Navigation Scrolling with active link tracking
    const navLinks = document.querySelectorAll('.bp-nav-link');
    const trackedSections = document.querySelectorAll('section[id], .bp-section-banner[id], #projects, #contact');

    window.addEventListener('scroll', () => {
        let currentSection = "";

        trackedSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 140)) {
                const id = section.getAttribute('id');
                if (id) {
                    currentSection = id;
                }
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === currentSection) {
                link.classList.add('active');
            }
        });
    });
});


