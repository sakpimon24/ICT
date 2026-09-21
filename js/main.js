document.addEventListener('DOMContentLoaded', () => {
    // Navbar Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link clicked (Mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Render Activities Dynamically
    const activityContainer = document.getElementById('activity-list');
    if (activityContainer && typeof activitiesData !== 'undefined') {
        activitiesData.forEach((act, index) => {
            const isEven = index % 2 === 0;
            const row = document.createElement('div');
            row.className = `activity-row ${isEven ? '' : 'reverse'}`;

            row.innerHTML = `
                <div class="activity-image">
                    <img src="${act.image}" alt="${act.title}">
                </div>
                <div class="activity-content">
                    <span class="activity-number">กิจกรรมที่ ${act.number}</span>
                    <h2 class="activity-title">${act.title}</h2>
                    <h3 class="activity-topic">${act.topic}</h3>
                    <div class="activity-meta">
                        <span>📍 ${act.location}</span>
                        <span>📅 ปีการศึกษา 2568</span>
                    </div>
                    <p class="text-muted">${act.description}</p>
                    <div class="learning-box">
                        <strong>สิ่งที่ได้เรียนรู้:</strong>
                        <p>${act.learning}</p>
                    </div>
                </div>
            `;
            activityContainer.appendChild(row);
        });
    }

    // Gallery Rendering with Lightbox
    const galleryContainer = document.getElementById('gallery-list');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (galleryContainer) {
        const galleryImages = [
            'album/pics_12074_1.jpg',
            'album/pics_12074_2.jpg',
            'album/pics_12074_3.jpg',
            'album/unnamed.webp',
            'album/unnamed (1).webp',
            'album/unnamed (2).webp',
            'album/unnamed (3).webp',
            'album/unnamed (4).webp',
            'album/unnamed (5).webp',
            'album/unnamed (6).webp',
            'album/unnamed (7).webp',
            'album/unnamed (8).webp',
            'album/unnamed (9).webp',
            'album/unnamed (10).webp',
            'album/unnamed (11).webp',
            'album/unnamed (12).webp',
            'album/unnamed (13).webp',
            'album/unnamed (14).webp',
            'album/unnamed (15).webp',
            'album/unnamed (16).webp',
            'album/unnamed (17).webp',
            'album/unnamed (18).webp',
            'album/unnamed (19).webp',
            'album/unnamed (20).webp',
            'album/unnamed (21).webp',
            'album/unnamed (22).webp',
            'album/IMG_20260921_105822.jpg',
            'album/IMG_20260921_105829.jpg'
        ];

        galleryImages.forEach(imgSrc => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `<img src="${imgSrc}" alt="ICT Gallery Image">`;

            // Lightbox trigger
            item.addEventListener('click', () => {
                lightboxImg.src = imgSrc;
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });

            galleryContainer.appendChild(item);
        });
    }

    // Close Lightbox
    if (lightbox && lightboxClose) {
        const closeLightbox = () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
});
