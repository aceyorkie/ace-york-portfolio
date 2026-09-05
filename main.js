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
        const searchQuery = projectSearch.value.trim().toLowerCase();

        let totalFilteredCount = 0;

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.getAttribute('data-title').toLowerCase();

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

    // Support URL parameters for direct filtering (e.g. ?filter=branding or ?filter=graphic)
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter') || urlParams.get('role');
    if (filterParam) {
        let targetFilter = filterParam.toLowerCase();
        if (targetFilter === 'graphic' || targetFilter === 'design' || targetFilter === 'graphics') {
            targetFilter = 'branding';
        } else if (targetFilter === 'dev' || targetFilter === 'code') {
            targetFilter = 'development';
        }
        const matchingTab = document.querySelector(`.filter-tab[data-filter="${targetFilter}"]`);
        if (matchingTab) {
            filterTabs.forEach(t => t.classList.remove('active'));
            matchingTab.classList.add('active');
        }
    }

    // Run initial filter on page load
    filterProjects();

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Reset expansion toggle when changing categories
            isExpanded = false;
            if (seeMoreBtn) {
                seeMoreBtn.setAttribute('data-expanded', 'false');
                seeMoreBtn.textContent = 'SEE MORE PROJECTS';
            }

            filterProjects();
        });
    });

    projectSearch.addEventListener('input', filterProjects);

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

    // 2. Smooth Navigation Scrolling with active link tracking
    const navLinks = document.querySelectorAll('.bp-nav-link');
    const sections = document.querySelectorAll('section, .bp-section-banner');

    window.addEventListener('scroll', () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 120)) {
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

