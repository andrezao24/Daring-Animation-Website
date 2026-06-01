const characterData = {
    'jesse': {
        name: 'Jesse Reed',
        role: 'Protagonist | Voice: Donovan Reynolds',
        bio: 'At 25, Jesse lives marked by loss. After the death of his grandfather, Joseph, who raised him, he sank into deep grief, addiction, and isolation. Despite his vices, he maintains a strong connection to music through the guitar his grandfather gave him.',
        img: 'assets/jesse-card.jpg'
    },
    'joseph': {
        name: 'Joseph Reed',
        role: 'The Grandfather | Voice: Mike Harrison-Wood',
        bio: 'Joseph dedicated his life to raising his grandson with patience and love. He was a caring man who represented stability and was a great lover of Rock culture. His death left a huge void in Jesse\'s life.',
        img: 'assets/joseph-card.jpg'
    },
    'john': {
        name: 'John Richard',
        role: 'The External Father Figure | Voice: Jae Shinn',
        bio: 'A 74-year-old bohemian who has traveled the world and loves rock. John recognizes his own past mistakes in Jesse and decides to confront him, becoming the catalyst for change and recovery.',
        img: 'assets/john-card.jpg'
    },
    'jermaine': {
        name: 'Jermaine Rhoden',
        role: 'The Friend | Voice: Jae Shinn',
        bio: 'A 27-year-old bartender who works at The Ruin. Jermaine is Jesse\'s emotional bridge to the real world. He is outgoing, responsible, and tries to support his friend, even when pushed away.',
        img: 'assets/jermaine-card.jpg'
    },
    'ruin': {
        name: 'The Ruin',
        role: 'Underground Bar',
        bio: 'An alternative and urban bar with walls covered in posters, graphics, and collages. With wooden furniture, low warm lighting, and a relaxed underground aesthetic, it features a small stage where Jesse plays to survive.',
        img: 'assets/bar-ruin.jpg'
    },
    'bedroom': {
        name: 'Jesse\'s Bedroom',
        role: 'A Messy Refuge',
        bio: 'A completely messy room with a chaotic floor covered in wine bottles, cigarette boxes, and scattered clothes. The environment reflects deep neglect. The only neat object in the room is a picture of his grandfather above the bed.',
        img: 'assets/jesse-room.jpg'
    },
    'andre': {
        name: 'André Martins',
        role: 'Founder',
        bio: 'Student at Universidade de Aveiro. Founder of Daring Animation and Creator of Jesse.',
        img: 'assets/team-andre.jpg'
    },
    'antonio': {
        name: 'António von Hafe',
        role: 'Founder',
        bio: 'Student at Universidade de Aveiro. Founder of Daring Animation and Creator of Jesse.',
        img: 'assets/team-antonio.jpeg'
    },
    'diogo': {
        name: 'Diogo Silva',
        role: 'Founder',
        bio: 'Student at Universidade de Aveiro. Founder of Daring Animation and Creator of Jesse.',
        img: 'assets/team-diogo.jpeg'
    },
    'goncalo': {
        name: 'Gonçalo Moreira',
        role: 'Founder',
        bio: 'Student at Universidade de Aveiro. Founder of Daring Animation and Creator of Jesse.',
        img: 'assets/team-goncalo.jpeg'
    }
};

const festivalData = [
    { name: "Cinanima", location: "Espinho, Portugal", deadline: "2026-06-21T23:59:59", url: "https://www.cinanima.pt/", img: "assets/fest-cinanima.jpg" },
    { name: "BIAF", location: "Bucheon, South Korea", deadline: "2026-06-30T23:59:59", url: "https://www.biaf.or.kr/", img: "assets/fest-biaf.jpg" },
    { name: "Monstra", location: "Lisbon, Portugal", deadline: "2026-09-01T23:59:59", url: "https://monstrafestival.com/", img: "assets/fest-monstra.jpg" },
    { name: "ITFS Stuttgart", location: "Stuttgart, Germany", deadline: "2026-11-01T23:59:59", url: "https://www.itfs.de/", img: "assets/fest-itfs.jpg" },
    { name: "Animafest", location: "Zagreb, Croatia", deadline: "2027-02-01T23:59:59", url: "http://www.animafest.hr/", img: "assets/fest-animafest.jpg" },
    { name: "Annecy Festival", location: "Annecy, France", deadline: "2027-02-15T23:59:59", url: "https://www.annecy.org/", img: "assets/fest-annecy.jpg" },
    { name: "Student Academy Awards", location: "TBD", deadline: "2027-03-01T23:59:59", url: "https://www.oscars.org/saa", img: "assets/fest-saa.jpg", gold: true },
    { name: "Curtas", location: "Vila do Conde, Portugal", deadline: "2027-04-30T23:59:59", url: "https://www.curtas.pt/", img: "assets/fest-curtas.jpg" },
    { name: "Oscars", location: "Los Angeles, USA", deadline: "2027-10-01T23:59:59", url: "https://www.oscars.org/", img: "assets/fest-oscars.jpg", gold: true }
];

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('intro-loader');

    if (sessionStorage.getItem('daring_intro_played')) {
        if (loader) loader.style.display = 'none';
    } else {
        sessionStorage.setItem('daring_intro_played', 'true');
        setTimeout(() => {
            if (loader) loader.remove();
        }, 4000);
    }

    const bgVideo = document.getElementById('bg-video');
    const volumeToggle = document.getElementById('volume-toggle');
    const volumeIcon = document.getElementById('volume-icon');

    if (volumeToggle && bgVideo && volumeIcon) {
        volumeToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            bgVideo.muted = !bgVideo.muted;
            volumeIcon.textContent = bgVideo.muted ? '🔇' : '🔊';
        });
    }

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const modal = document.getElementById('character-modal');
    const closeBtn = document.querySelector('.close-btn');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.classList.remove('show'));
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    }

    const festivalContainer = document.getElementById('festival-container');
    if (festivalContainer) {
        const renderCards = () => {
            festivalData.forEach((fest, index) => {
                const goldClass = fest.gold ? 'gold-card' : '';
                const oscarClass = fest.name === 'Oscars' ? 'ultimate-oscar' : '';
                const cardHTML = `
                    <a href="${fest.url}" target="_blank" class="poster-card festival-card wide ${goldClass} ${oscarClass}" draggable="false">
                        <div class="card-img-placeholder" style="background-image: url('${fest.img}');"></div>
                        <div class="card-details">
                            <h3>${fest.name} - ${fest.location}</h3>
                            <p class="countdown-timer timer-ref-${index}">Calculating...</p>
                        </div>
                    </a>
                `;
                festivalContainer.insertAdjacentHTML('beforeend', cardHTML);
            });
        };

        renderCards();
        renderCards();

        let isHovering = false;
        const autoScrollSpeed = 1;

        function checkScrollLimits() {
            if (festivalContainer.scrollLeft >= festivalContainer.scrollWidth / 2) {
                festivalContainer.scrollLeft -= festivalContainer.scrollWidth / 2;
            } else if (festivalContainer.scrollLeft <= 0) {
                festivalContainer.scrollLeft += festivalContainer.scrollWidth / 2;
            }
        }

        festivalContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            festivalContainer.scrollLeft += e.deltaY;
            checkScrollLimits();
        });

        festivalContainer.addEventListener('mouseenter', () => isHovering = true);
        festivalContainer.addEventListener('mouseleave', () => isHovering = false);

        function autoScrollFestivals() {
            if (!isHovering) {
                festivalContainer.scrollLeft += autoScrollSpeed;
                checkScrollLimits();
            }
            requestAnimationFrame(autoScrollFestivals);
        }
        autoScrollFestivals();

        setInterval(() => {
            const now = new Date().getTime();
            let futureFestivals = [];

            festivalData.forEach((fest, index) => {
                const timerElements = document.querySelectorAll(`.timer-ref-${index}`);
                if (timerElements.length === 0) return;

                const targetDate = new Date(fest.deadline).getTime();
                const distance = targetDate - now;

                if (distance > 0) {
                    futureFestivals.push({ ...fest, distance });
                }

                if (distance < 0) {
                    timerElements.forEach(el => {
                        el.textContent = "Submission Closed";
                        el.style.color = "#808080";
                    });
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                timerElements.forEach(el => {
                    el.textContent = `Closes in: ${days}d ${hours}h`;
                });
            });

            const nextBanner = document.getElementById('next-festival-banner');
            if (nextBanner) {
                if (futureFestivals.length > 0) {
                    futureFestivals.sort((a, b) => a.distance - b.distance);
                    const nextFest = futureFestivals[0];

                    const d = Math.floor(nextFest.distance / (1000 * 60 * 60 * 24));
                    const h = Math.floor((nextFest.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const m = Math.floor((nextFest.distance % (1000 * 60 * 60)) / (1000 * 60));
                    const s = Math.floor((nextFest.distance % (1000 * 60)) / 1000);

                    document.getElementById('next-fest-name').textContent = nextFest.name;
                    document.getElementById('next-fest-timer').textContent =
                        `${d}d ${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;

                    nextBanner.style.display = "block";
                } else {
                    nextBanner.style.display = "none";
                }
            }
        }, 1000);
    }

    initComparisons();
});

let currentModalList = [];
let currentModalIndex = 0;

function openModal(characterId) {
    const data = characterData[characterId];
    if (!data) return;

    const allCards = Array.from(document.querySelectorAll('.poster-card[onclick^="openModal"]'));
    if (allCards.length > 0) {
        currentModalList = allCards.map(card => {
            const match = card.getAttribute('onclick').match(/'([^']+)'|"([^"]+)"/);
            return match ? (match[1] || match[2]) : null;
        }).filter(id => id !== null);

        currentModalIndex = currentModalList.indexOf(characterId);
    }

    const charModal = document.getElementById('character-modal');
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-name').textContent = data.name;
    document.getElementById('modal-role').textContent = data.role;
    document.getElementById('modal-bio').textContent = data.bio;

    charModal.classList.add('show');
}

function navigateCharacter(direction) {
    if (currentModalList.length === 0) return;

    currentModalIndex += direction;

    if (currentModalIndex < 0) currentModalIndex = currentModalList.length - 1;
    if (currentModalIndex >= currentModalList.length) currentModalIndex = 0;

    const nextId = currentModalList[currentModalIndex];
    const data = characterData[nextId];

    if (data) {
        document.getElementById('modal-img').src = data.img;
        document.getElementById('modal-name').textContent = data.name;
        document.getElementById('modal-role').textContent = data.role;
        document.getElementById('modal-bio').textContent = data.bio;
    }
}

function initComparisons() {
    const elements = document.getElementsByClassName("img-comp-overlay");
    for (let i = 0; i < elements.length; i++) {
        compareImages(elements[i]);
    }

    function compareImages(img) {
        let slider, clicked = 0;
        const w = img.offsetWidth;
        const h = img.offsetHeight;

        img.style.width = (w / 2) + "px";

        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        img.parentElement.insertBefore(slider, img);
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

        slider.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", slideFinish);
        slider.addEventListener("touchstart", slideReady);
        window.addEventListener("touchend", slideFinish);

        function slideReady(e) {
            e.preventDefault();
            clicked = 1;
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() { clicked = 0; }

        function slideMove(e) {
            if (clicked === 0) return false;
            let pos = getCursorPos(e);
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            slide(pos);
        }

        function getCursorPos(e) {
            const event = e.changedTouches ? e.changedTouches[0] : e;
            const a = img.getBoundingClientRect();
            let x = event.pageX - a.left;
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            img.style.width = x + "px";
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}

function openLightbox(imgSrc) {
    const modal = document.getElementById('lightbox-modal');
    document.getElementById('lightbox-img').src = imgSrc;
    modal.classList.add('show');
}

let currentGallery = [];
let currentIndex = 0;
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('lightbox-img');

function openLightbox(imgElement) {
    const gallery = imgElement.closest('.product-grid, .step-gallery, section') || imgElement.parentElement;
    currentGallery = Array.from(gallery.querySelectorAll('img'));
    currentIndex = currentGallery.indexOf(imgElement);
    modalImg.src = imgElement.src;
    modal.classList.add('show');
}

function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentGallery.length - 1;
    if (currentIndex >= currentGallery.length) currentIndex = 0;
    modalImg.src = currentGallery[currentIndex].src;
}

document.addEventListener('keydown', (e) => {
    const lightboxModal = document.getElementById('lightbox-modal');
    const characterModal = document.getElementById('character-modal');

    if (e.key === 'Escape') {
        if (lightboxModal && lightboxModal.classList.contains('show')) lightboxModal.classList.remove('show');
        if (characterModal && characterModal.classList.contains('show')) characterModal.classList.remove('show');
    }

    if (e.key === 'ArrowRight') {
        if (lightboxModal && lightboxModal.classList.contains('show')) navigate(1);
        if (characterModal && characterModal.classList.contains('show')) navigateCharacter(1);
    }

    if (e.key === 'ArrowLeft') {
        if (lightboxModal && lightboxModal.classList.contains('show')) navigate(-1);
        if (characterModal && characterModal.classList.contains('show')) navigateCharacter(-1);
    }
});

function toggleColorGrading() {
    const before = document.getElementById('img-before');
    const after = document.getElementById('img-after');
    const label = document.getElementById('view-label');

    if (before.classList.contains('active')) {
        before.classList.remove('active');
        after.classList.add('active');
        label.textContent = "AFTER";
    } else {
        after.classList.remove('active');
        before.classList.add('active');
        label.textContent = "BEFORE";
    }
}

function filterShop() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let sections = document.querySelectorAll('.shop-section');

    sections.forEach(section => {
        let sectionHasVisibleCards = false;
        let grids = section.querySelectorAll('.product-grid');

        grids.forEach(grid => {
            let cards = grid.querySelectorAll('.product-card');
            let visibleCount = 0;

            cards.forEach(card => {
                let titleElement = card.querySelector('h3');
                if (titleElement) {
                    let title = titleElement.textContent.toLowerCase();
                    if (title.includes(input)) {
                        card.style.display = "block";
                        visibleCount++;
                        sectionHasVisibleCards = true;
                    } else {
                        card.style.display = "none";
                    }
                }
            });

            let categoryTitle = grid.previousElementSibling;
            if (categoryTitle && categoryTitle.tagName === 'H3') {
                categoryTitle.style.display = visibleCount > 0 ? "block" : "none";
            }

            grid.style.display = visibleCount > 0 ? "grid" : "none";
        });

        let sectionTitle = section.querySelector('h2');
        if (sectionTitle) {
            sectionTitle.style.display = sectionHasVisibleCards ? "block" : "none";
        }
        section.style.display = sectionHasVisibleCards ? "block" : "none";
    });
}

function filterCategory(cat, btnElement) {
    const sections = document.querySelectorAll('.shop-section');
    sections.forEach(sec => {
        if (cat === 'all') {
            sec.style.display = "block";
        } else {
            const h2Element = sec.querySelector('h2');
            sec.style.display = h2Element && h2Element.id.includes(cat) ? "block" : "none";
        }
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.style.backgroundColor = 'transparent';
        btn.style.borderColor = '#444';
        btn.style.color = '#888';
    });

    if (btnElement) {
        btnElement.style.backgroundColor = 'var(--accent-color)';
        btnElement.style.borderColor = 'var(--accent-color)';
        btnElement.style.color = '#fff';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initTiltEffect();
    initScrollReveal();
});

function initCustomCursor() {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const dot = document.createElement('div');
    const aura = document.createElement('div');
    dot.className = 'custom-cursor';
    aura.className = 'custom-cursor-aura';
    document.body.appendChild(dot);
    document.body.appendChild(aura);

    let mouseX = 0, mouseY = 0;
    let auraX = 0, auraY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    function animateAura() {
        let distX = mouseX - auraX;
        let distY = mouseY - auraY;
        auraX += distX * 0.15;
        auraY += distY * 0.15;
        aura.style.left = auraX + 'px';
        aura.style.top = auraY + 'px';
        requestAnimationFrame(animateAura);
    }
    animateAura();

    const interactiveSelectors = 'a, button, .poster-card, .product-card, .filter-btn, .toggle-btn, .close-btn, img[onclick]';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            dot.classList.add('hovered');
            aura.classList.add('hovered');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (!e.target.closest(interactiveSelectors)) {
            dot.classList.remove('hovered');
            aura.classList.remove('hovered');
        }
    });
}

function initTiltEffect() {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const cards = document.querySelectorAll('.poster-card, .product-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((centerY - y) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });
}

function initScrollReveal() {
    const registry = document.querySelectorAll('.content-row, .process-step, .shop-section, .history-container, .values-grid');

    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    registry.forEach(el => {
        el.classList.add('reveal-element');
        observer.observe(el);
    });
}

function initScrollTopButton() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 0.5) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
initScrollTopButton();

function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        bar.style.width = scrollPercent + '%';
    });
}
initScrollProgress();

let originalTitle = document.title;
window.addEventListener('blur', () => {
    document.title = "Don't leave Jesse alone... 🎸";
});
window.addEventListener('focus', () => {
    document.title = originalTitle;
});


let secretCode = "spike";
let keyBuffer = "";

window.addEventListener("keydown", (e) => {
    if (e.key.length === 1) {
        keyBuffer += e.key.toLowerCase();
    }

    if (keyBuffer.length > secretCode.length) {
        keyBuffer = keyBuffer.slice(1);
    }

    if (keyBuffer === secretCode) {
        console.log("%c[SYSTEM] Easter Egg Desbloqueado: The Ruin is calling.", "color: #E32823; font-weight: bold;");

        document.body.style.transition = "filter 0.5s ease-in-out, transform 0.2s linear";
        document.body.style.filter = "sepia(100%) saturate(750%) hue-rotate(330deg) contrast(1.2) brightness(0.9)";
        document.body.style.transform = "rotate(-1.5deg) scale(1.02)";
        setTimeout(() => {
            document.body.style.transition = "filter 1.5s ease, transform 1s ease";
            document.body.style.filter = "none";
            document.body.style.transform = "none";
        }, 4000);

        keyBuffer = "";
    }
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

const cinemaLoader = document.getElementById('cinematic-loader');
if (cinemaLoader) {
    if (sessionStorage.getItem('process_intro_played')) {
        cinemaLoader.style.display = 'none';
    } else {
        sessionStorage.setItem('process_intro_played', 'true');
        setTimeout(() => cinemaLoader.remove(), 3200);
    }
}

