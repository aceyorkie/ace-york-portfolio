document.addEventListener('DOMContentLoaded', () => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Retrieve project object
    const project = getProjectById(projectId);

    // DOM Elements
    const detailCategory = document.getElementById('detailCategory');
    const detailStatus = document.getElementById('detailStatus');
    const detailTitle = document.getElementById('detailTitle');
    const detailDescSummary = document.getElementById('detailDescSummary');
    const detailRole = document.getElementById('detailRole');
    const detailYear = document.getElementById('detailYear');
    const detailCategoryVal = document.getElementById('detailCategoryVal');
    const detailMediaCount = document.getElementById('detailMediaCount');
    const detailDefinition = document.getElementById('detailDefinition');

    const detailImage = document.getElementById('detailImage');
    const detailVideo = document.getElementById('detailVideo');
    const detailPrevBtn = document.getElementById('detailPrevBtn');
    const detailNextBtn = document.getElementById('detailNextBtn');
    const detailSlideIndicator = document.getElementById('detailSlideIndicator');
    const detailThumbnailStrip = document.getElementById('detailThumbnailStrip');

    const prevProjectBtn = document.getElementById('prevProjectBtn');
    const nextProjectBtn = document.getElementById('nextProjectBtn');
    const prevProjectTitle = document.getElementById('prevProjectTitle');
    const nextProjectTitle = document.getElementById('nextProjectTitle');

    // Populate Page Metadata
    document.title = `${project.title} | Project Details`;
    if (detailCategory) detailCategory.textContent = `// Category: ${project.category}`;
    if (detailStatus) detailStatus.textContent = project.statusTag || '[ SPEC ]';
    if (detailTitle) detailTitle.textContent = project.title;
    if (detailDescSummary) detailDescSummary.textContent = project.desc || '';
    if (detailRole) detailRole.textContent = project.role || 'N/A';
    if (detailYear) detailYear.textContent = project.year || 'N/A';
    if (detailCategoryVal) detailCategoryVal.textContent = project.category || 'N/A';
    if (detailDefinition) detailDefinition.innerHTML = project.definition || `<p>${project.desc}</p>`;

    const screenshots = project.screenshots && project.screenshots.length > 0 ? project.screenshots : [];
    if (detailMediaCount) detailMediaCount.textContent = screenshots.length;

    let currentMediaIndex = 0;

    function isVideoFile(src) {
        if (!src) return false;
        return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg') || src.endsWith('.mov');
    }

    function renderSlide() {
        if (screenshots.length === 0) return;

        const currentSrc = screenshots[currentMediaIndex];

        if (isVideoFile(currentSrc)) {
            detailImage.style.display = 'none';
            detailVideo.style.display = 'block';
            detailVideo.src = currentSrc;
        } else {
            detailVideo.style.display = 'none';
            if (detailVideo) detailVideo.pause();
            detailImage.style.display = 'block';
            detailImage.src = currentSrc;
            detailImage.alt = `${project.title} screenshot ${currentMediaIndex + 1}`;
        }

        // Update indicators
        if (screenshots.length <= 1) {
            if (detailPrevBtn) detailPrevBtn.style.display = 'none';
            if (detailNextBtn) detailNextBtn.style.display = 'none';
            if (detailSlideIndicator) detailSlideIndicator.style.display = 'none';
        } else {
            if (detailPrevBtn) detailPrevBtn.style.display = 'flex';
            if (detailNextBtn) detailNextBtn.style.display = 'flex';
            if (detailSlideIndicator) {
                detailSlideIndicator.style.display = 'block';
                detailSlideIndicator.textContent = `${currentMediaIndex + 1} / ${screenshots.length}`;
            }
        }

        // Highlight Active Thumbnail
        updateThumbnails();
    }

    function renderThumbnailStrip() {
        if (!detailThumbnailStrip) return;
        detailThumbnailStrip.innerHTML = '';

        if (screenshots.length <= 1) {
            detailThumbnailStrip.style.display = 'none';
            return;
        }

        detailThumbnailStrip.style.display = 'flex';
        screenshots.forEach((src, idx) => {
            const thumb = document.createElement('div');
            thumb.className = `thumbnail-item ${idx === currentMediaIndex ? 'active' : ''}`;
            
            if (isVideoFile(src)) {
                thumb.innerHTML = `<i class="fa-solid fa-play thumbnail-video-icon"></i>`;
            } else {
                thumb.innerHTML = `<img src="${src}" alt="Thumbnail ${idx + 1}">`;
            }

            thumb.addEventListener('click', () => {
                currentMediaIndex = idx;
                renderSlide();
            });

            detailThumbnailStrip.appendChild(thumb);
        });
    }

    function updateThumbnails() {
        if (!detailThumbnailStrip) return;
        const thumbs = detailThumbnailStrip.querySelectorAll('.thumbnail-item');
        thumbs.forEach((t, i) => {
            if (i === currentMediaIndex) {
                t.classList.add('active');
                t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                t.classList.remove('active');
            }
        });
    }

    // Carousel Navigation Handlers
    if (detailPrevBtn) {
        detailPrevBtn.addEventListener('click', () => {
            if (screenshots.length > 1) {
                currentMediaIndex = (currentMediaIndex - 1 + screenshots.length) % screenshots.length;
                renderSlide();
            }
        });
    }

    if (detailNextBtn) {
        detailNextBtn.addEventListener('click', () => {
            if (screenshots.length > 1) {
                currentMediaIndex = (currentMediaIndex + 1) % screenshots.length;
                renderSlide();
            }
        });
    }

    // Keyboard Arrow Controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (screenshots.length > 1) {
                currentMediaIndex = (currentMediaIndex - 1 + screenshots.length) % screenshots.length;
                renderSlide();
            }
        } else if (e.key === 'ArrowRight') {
            if (screenshots.length > 1) {
                currentMediaIndex = (currentMediaIndex + 1) % screenshots.length;
                renderSlide();
            }
        }
    });

    // Previous / Next Project Links
    const prevProj = getPrevProject(project.id);
    const nextProj = getNextProject(project.id);

    if (prevProjectBtn && prevProj) {
        prevProjectBtn.href = `project-detail.html?id=${prevProj.id}`;
        if (prevProjectTitle) prevProjectTitle.textContent = prevProj.title;
    }

    if (nextProjectBtn && nextProj) {
        nextProjectBtn.href = `project-detail.html?id=${nextProj.id}`;
        if (nextProjectTitle) nextProjectTitle.textContent = nextProj.title;
    }

    // Initial Render
    renderThumbnailStrip();
    renderSlide();
});
