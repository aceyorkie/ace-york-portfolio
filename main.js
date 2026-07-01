document.addEventListener('DOMContentLoaded', () => {
    // 1. Projects Category Filtering and Dynamic Visibility Limit
    const filterTabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card');
    const projectSearch = document.getElementById('projectSearch');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    let isExpanded = false;

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
                // Display matching card if expanded, or if it is within the first 3 matches
                if (isExpanded || searchQuery !== '' || totalFilteredCount <= 3) {
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
            if (totalFilteredCount > 3 && searchQuery === '') {
                seeMoreBtn.parentElement.style.display = 'flex';
            } else {
                seeMoreBtn.parentElement.style.display = 'none';
            }
        }
    }

    // Run initial filter on page load to set correct default 3 visible cards
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

    // 3. Project Detail Modal Interactive Popup
    const projectModal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalCategory = document.getElementById('modalCategory');
    const modalRole = document.getElementById('modalRole');
    const modalYear = document.getElementById('modalYear');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalPrevBtn = document.getElementById('modalPrevBtn');
    const modalNextBtn = document.getElementById('modalNextBtn');
    const modalSlideIndicator = document.getElementById('modalSlideIndicator');

    let currentScreenshots = [];
    let currentSlideIndex = 0;

    function updateModalSlides() {
        if (currentScreenshots.length <= 1) {
            // Hide arrows and indicators if only 1 image exists
            if (modalPrevBtn) modalPrevBtn.style.display = 'none';
            if (modalNextBtn) modalNextBtn.style.display = 'none';
            if (modalSlideIndicator) modalSlideIndicator.style.display = 'none';

            if (currentScreenshots.length === 1) {
                modalImage.src = currentScreenshots[0];
            }
        } else {
            // Show arrows and indicators for slide decks
            if (modalPrevBtn) modalPrevBtn.style.display = 'flex';
            if (modalNextBtn) modalNextBtn.style.display = 'flex';
            if (modalSlideIndicator) {
                modalSlideIndicator.style.display = 'block';
                modalSlideIndicator.textContent = `${currentSlideIndex + 1} / ${currentScreenshots.length}`;
            }
            modalImage.src = currentScreenshots[currentSlideIndex];
        }
    }

    // Attach click event to EXPLORE PROJECT buttons
    document.querySelectorAll('.btn-project-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.project-card');
            if (!card) return;

            // Extract details from the card
            const category = card.querySelector('.project-category').textContent;
            const img = card.querySelector('.project-visual img');
            const title = card.querySelector('.project-title').textContent;

            // Fall back to general card description if no project-definition is found
            const extendedDef = card.querySelector('.project-definition');
            const desc = extendedDef ? extendedDef.innerHTML : `<p>${card.querySelector('.project-desc').textContent}</p>`;

            const statBoxes = card.querySelectorAll('.project-stat-box');
            const role = statBoxes[0] ? statBoxes[0].querySelectorAll('span')[1].textContent : 'N/A';
            const year = statBoxes[1] ? statBoxes[1].querySelectorAll('span')[1].textContent : 'N/A';

            // Parse comma-separated list of screenshot URLs
            const screenshotsAttr = card.getAttribute('data-screenshots');
            const defaultImgSrc = img ? img.getAttribute('src') : '';
            if (screenshotsAttr) {
                currentScreenshots = screenshotsAttr.split(',').map(s => s.trim());
            } else {
                currentScreenshots = defaultImgSrc ? [defaultImgSrc] : [];
            }
            currentSlideIndex = 0;

            // Populate modal fields
            modalCategory.textContent = `// Category: ${category}`;
            modalTitle.textContent = title;
            modalDesc.innerHTML = desc;
            modalRole.textContent = role;
            modalYear.textContent = year;

            // Load slide deck visual
            updateModalSlides();

            // Show Modal
            if (projectModal) {
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock page scroll
            }
        });
    });

    // Slide navigation actions
    if (modalPrevBtn) {
        modalPrevBtn.addEventListener('click', () => {
            if (currentScreenshots.length > 1) {
                currentSlideIndex = (currentSlideIndex - 1 + currentScreenshots.length) % currentScreenshots.length;
                updateModalSlides();
            }
        });
    }

    if (modalNextBtn) {
        modalNextBtn.addEventListener('click', () => {
            if (currentScreenshots.length > 1) {
                currentSlideIndex = (currentSlideIndex + 1) % currentScreenshots.length;
                updateModalSlides();
            }
        });
    }

    // Close Modal handlers
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if (projectModal) {
                projectModal.classList.remove('active');
                document.body.style.overflow = ''; // Unlock page scroll
            }
        });
    }

    // Close modal when clicking outside modal-content card frame
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
