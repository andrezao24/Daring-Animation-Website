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
    {
        name: "Cinanima",
        location: "Espinho, Portugal",
        deadline: "2026-06-21T23:59:59",
        url: "https://www.cinanima.pt/",
        img: "assets/fest-cinanima.jpg"
    },
    {
        name: "BIAF",
        location: "Bucheon, South Korea",
        deadline: "2026-06-30T23:59:59",
        url: "https://www.biaf.or.kr/",
        img: "assets/fest-biaf.jpg"
    },
    {
        name: "Monstra",
        location: "Lisbon, Portugal",
        deadline: "2026-09-01T23:59:59",
        url: "https://monstrafestival.com/",
        img: "assets/fest-monstra.jpg"
    },
    {
        name: "ITFS Stuttgart",
        location: "Stuttgart, Germany",
        deadline: "2026-11-01T23:59:59",
        url: "https://www.itfs.de/",
        img: "assets/fest-itfs.jpg"
    },
    {
        name: "Animafest",
        location: "Zagreb, Croatia",
        deadline: "2027-02-01T23:59:59",
        url: "http://www.animafest.hr/",
        img: "assets/fest-animafest.jpg"
    },
    {
        name: "Annecy Festival",
        location: "Annecy, France",
        deadline: "2027-02-15T23:59:59",
        url: "https://www.annecy.org/",
        img: "assets/fest-annecy.jpg"
    },
    {
        name: "Student Academy Awards",
        location: "TBD",
        deadline: "2027-03-01T23:59:59",
        url: "https://www.oscars.org/saa",
        img: "assets/fest-saa.jpg",
        gold: true

    },
    {
        name: "Curtas",
        location: "Vila do Conde, Portugal",
        deadline: "2027-04-30T23:59:59",
        url: "https://www.curtas.pt/",
        img: "assets/fest-curtas.jpg"
    },
    {
        name: "Oscars",
        location: "Los Angeles, USA",
        deadline: "2027-10-01T23:59:59",
        url: "https://www.oscars.org/",
        img: "assets/fest-oscars.jpg",
        gold: true
    }
];

// DOMContentLoaded - corre apenas após o carregamento do HTML para evitar erros de elementos não encontrados
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('intro-loader');

    // Verifica se a intro já foi reproduzida nesta sessão
    if (sessionStorage.getItem('daring_intro_played')) {
        if (loader) loader.style.display = 'none'; // Se sim, Esconde o loader imediatamente
    } else {
        sessionStorage.setItem('daring_intro_played', 'true');
        setTimeout(() => {
            if (loader) loader.remove();
        }, 4000); // Se não, remove o loader após 4 segundos
    }

    const bgVideo = document.getElementById('bg-video');
    const volumeToggle = document.getElementById('volume-toggle');
    const volumeIcon = document.getElementById('volume-icon');

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }); // efeito de scroll - barra vermelha no topo

    const modal = document.getElementById('character-modal');
    const closeBtn = document.getElementById('close-modal');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.classList.remove('show'));
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    } // fechar o card ao clicar fora ou no X

    const festivalContainer = document.getElementById('festival-container');
    if (festivalContainer) { // verifica se existe antes de tentar renderizar os cartões
        const renderCards = () => {
            let allCards = '';

            festivalData.forEach((fest, index) => {
                let goldClass = '';
                let oscarClass = '';

                if (fest.gold) {
                    goldClass = 'gold-card';
                }

                if (fest.name === 'Oscars') {
                    oscarClass = 'ultimate-oscar';
                }

                //acumula o HTML de cada cartão numa string para
                allCards += `
                    <a href="${fest.url}" target="_blank" class="poster-card festival-card wide ${goldClass} ${oscarClass}" draggable="false">
                        <div class="card-img-placeholder" style="background-image: url('${fest.img}');"></div>
                        <div class="card-details">
                            <h3>${fest.name} - ${fest.location}</h3>
                            <p class="countdown-timer timer-ref-${index}">Calculating...</p>
                        </div>
                    </a>
                `;
            });

            festivalContainer.innerHTML = allCards + allCards;
        };

        renderCards();

        let isHovering = false;
        const autoScrollSpeed = 1;

        function checkScrollLimits() {
            if (festivalContainer.scrollLeft >= festivalContainer.scrollWidth / 2) {
                festivalContainer.scrollLeft -= festivalContainer.scrollWidth / 2;
            } else if (festivalContainer.scrollLeft <= 0) {
                festivalContainer.scrollLeft += festivalContainer.scrollWidth / 2;
            }
        } // cria um efeito de scroll infinito

        festivalContainer.addEventListener('wheel', (e) => {
            e.preventDefault(); // previne o scroll vertical 
            festivalContainer.scrollLeft += e.deltaY;
            checkScrollLimits();
        }); // scroll carrossel com a roda do mouse

        festivalContainer.addEventListener('mouseenter', () => isHovering = true);
        festivalContainer.addEventListener('mouseleave', () => isHovering = false);

        function autoScrollFestivals() {
            if (!isHovering) {
                festivalContainer.scrollLeft += autoScrollSpeed;
                checkScrollLimits();
            }
            requestAnimationFrame(autoScrollFestivals); // chama a função no próximo frame para criar um loop suave
        }

        autoScrollFestivals();

        setInterval(() => {
            const now = new Date().getTime(); // pega o timestamp atual
            let futureFestivals = [];

            festivalData.forEach((fest, index) => {
                const timerElements = document.querySelectorAll(`.timer-ref-${index}`);
                if (timerElements.length === 0) return;

                const targetDate = new Date(fest.deadline).getTime(); // converte a data de deadline em timestamp
                const distance = targetDate - now;

                if (distance > 0) {
                    futureFestivals.push({ ...fest, distance });
                }

                if (distance < 0) {
                    timerElements.forEach(fest => {
                        fest.textContent = "Submission Closed";
                        fest.style.color = "#808080";
                    });
                    return;
                } // se a data já passou, mostra "Submission Closed" e para de calcular

                const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // calcula os dias restantes
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // calcula as horas restantes
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // calcula os minutos restantes
                const seconds = Math.floor((distance % (1000 * 60)) / 1000); // calcula os segundos restantes

                timerElements.forEach(fest => {
                    fest.textContent = `Closes in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
                });
            });

            const nextBanner = document.getElementById('next-festival-banner'); // banner que mostra o próximo festival a fechar
            if (nextBanner) {
                if (futureFestivals.length > 0) {
                    futureFestivals.sort((a, b) => a.distance - b.distance); // ordena os festivais pelo tempo 

                    const nextFest = futureFestivals[0]; //com base na ordenação, vai buscar o festival mais próximo de fechar [0]

                    const d = Math.floor(nextFest.distance / (1000 * 60 * 60 * 24));
                    const h = Math.floor((nextFest.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const m = Math.floor((nextFest.distance % (1000 * 60 * 60)) / (1000 * 60));
                    const s = Math.floor((nextFest.distance % (1000 * 60)) / 1000);

                    document.getElementById('next-fest-name').textContent = nextFest.name;
                    document.getElementById('next-fest-timer').textContent =
                        `${d}d ${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`; // atualiza o banner com o nome do próximo festival e o tempo restante formatado 

                    nextBanner.style.display = "block";
                } else {
                    nextBanner.style.display = "none";
                }
            }
        }, 1000); // atualiza os timers a cada segundo
    }

    initComparisons();
});

let currentModalList = [];
let currentModalIndex = 0;

function openModal(characterId) {
    const data = characterData[characterId]; // mostra os dados do personagem com base no ID passado para a função
    if (!data) return;

    const allPosterCards = document.getElementsByClassName('poster-card');
    const validCardsArray = [];

    for (let i = 0; i < allPosterCards.length; i++) { //
        const card = allPosterCards[i];
        const onclickValue = card.getAttribute('onclick'); // verifica se o cartão tem um atributo onclick, se sim = "openModal"

        if (onclickValue && onclickValue.startsWith('openModal')) {

            const match = onclickValue.match(/'([^']+)'|"([^"]+)"/); // expressão regular para extrair o ID do personagem

            if (match) {
                let characterIdFound = match[1];
                if (!characterIdFound) {
                    characterIdFound = match[2];
                }
                if (characterIdFound !== null) {
                    validCardsArray.push(characterIdFound);
                }
            }
        }
    }

    // atualiza as variáveis globa
    if (validCardsArray.length > 0) {
        currentModalList = validCardsArray;
        currentModalIndex = currentModalList.indexOf(characterId);
    }

    const charModal = document.getElementById('character-modal');
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-name').textContent = data.name;
    document.getElementById('modal-role').textContent = data.role;
    document.getElementById('modal-bio').textContent = data.bio;

    charModal.classList.add('show'); // mostra o modal e muda de block para show
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
} // função para navegar entre os personagens, atualiza o conteúdo com base no índice atual da lista de personagens válida

function initComparisons() { // função que cria o efeito de comparação entre as imagens
    const elements = document.getElementsByClassName("img-comp-overlay");
    for (let i = 0; i < elements.length; i++) {
        compareImages(elements[i]);
    }

    function compareImages(img) {
        let slider, clicked = 0;
        const w = img.offsetWidth;
        const h = img.offsetHeight;

        img.style.width = (w / 2) + "px";

        slider = document.createElement("DIV"); // cria um novo elemento div para o slider
        slider.setAttribute("class", "img-comp-slider"); // cria o slider e adiciona a classe para estilização
        img.parentElement.insertBefore(slider, img); // insere o slider antes da imagem dentro do mesmo elemento pai
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
            let event;

            if (e.changedTouches) {
                event = e.changedTouches[0];
            } else {
                event = e;
            }

            const a = img.getBoundingClientRect();
            let x = event.pageX - a.left;
            x = x - window.pageXOffset;

            return x;
            // calcula a posição do cursor em relação à imagem, levando em conta o scroll da página, e retorna a coordenada x para ser usada na função de slide
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
} // abre o modal de visualização das imagens, recebe a fonte da imagem e atualiza o conteúdo antes de mostrá-lo

let currentGallery = [];
let currentIndex = 0;
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('lightbox-img');

function openLightbox(imgElement) {
    let gallery = imgElement.closest('.product-grid');
    if (!gallery) {
        gallery = imgElement.closest('.step-gallery');
    }
    if (!gallery) {
        gallery = imgElement.parentElement;
    }

    const allImages = gallery.getElementsByTagName('img');

    currentGallery = [];
    for (let i = 0; i < allImages.length; i++) {
        currentGallery.push(allImages[i]);
    }

    currentIndex = currentGallery.indexOf(imgElement);
    modalImg.src = imgElement.src;
    modal.classList.add('show');
} // função para abrir o lightbox

function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentGallery.length - 1;
    if (currentIndex >= currentGallery.length) currentIndex = 0;
    modalImg.src = currentGallery[currentIndex].src;
} // função para navegar entre as imagens do lightbox

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
}); // Esc para fechar modais, setas para navegar entre imagens

function toggleColorGrading() {
    const before = document.getElementById('img-before');
    const after = document.getElementById('img-after');
    const label = document.getElementById('view-label');

    if (before.classList.contains('active')) {
        before.classList.remove('active');
        after.classList.add('active'); // altera a classe active entre as imagens para mostrar a imagem de depois
        label.textContent = "AFTER"; // atualiza o texto do label para indicar qual imagem está ativa<
    } else {
        after.classList.remove('active');
        before.classList.add('active');
        label.textContent = "BEFORE";
    }
} // função para mudar entre as imagens de antes e depois

// função para filtrar os produtos na loja com base no texto escrito no campo de busca
function filterShop() {
    let input = document.getElementById('searchInput').value.toLowerCase();

    let sections = document.getElementsByClassName('shop-section');

    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let sectionHasVisibleCards = false;

        let grids = section.getElementsByClassName('product-grid');

        for (let j = 0; j < grids.length; j++) {
            let grid = grids[j];

            let cards = grid.getElementsByClassName('product-card');
            let visibleCount = 0;

            for (let k = 0; k < cards.length; k++) {
                let card = cards[k];
                let titleElements = card.getElementsByTagName('h3');

                if (titleElements.length > 0) {
                    let titleElement = titleElements[0];
                    let title = titleElement.textContent.toLowerCase();

                    if (title.includes(input)) {
                        card.style.display = "block";
                        visibleCount++;
                        sectionHasVisibleCards = true;
                    } else {
                        card.style.display = "none";
                    }
                }
            }
            // verifica se o título do cartão inclui o texto do campo de pesquisa
            // se sim, mostra o correspondete 

            let categoryTitle = grid.previousElementSibling;
            if (categoryTitle && categoryTitle.tagName === 'H3') {
                if (visibleCount > 0) {
                    categoryTitle.style.display = "block";
                } else {
                    categoryTitle.style.display = "none";
                }
            } // verifica se o título da categoria deve ou não ser exibido 

            if (visibleCount > 0) {
                grid.style.display = "grid";
            } else {
                grid.style.display = "none";
            }
        }

        let sectionTitles = section.getElementsByTagName('h2');
        if (sectionTitles.length > 0) {
            let sectionTitle = sectionTitles[0];

            if (sectionHasVisibleCards) {
                sectionTitle.style.display = "block";
            } else {
                sectionTitle.style.display = "none";
            }
        }

        if (sectionHasVisibleCards) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        } //
    }
}

// função que os produtos na loja com base na categoria selecionada
function filterCategory(cat, btnElement) {
    const sections = document.getElementsByClassName('shop-section');

    for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];

        if (cat === 'all') {
            sec.style.display = "block";
        } else {
            const h2Elements = sec.getElementsByTagName('h2'); // verifica se o título da seção contém a categoria selecionada

            if (h2Elements.length > 0) {
                const h2Element = h2Elements[0];
                if (h2Element.id && h2Element.id.includes(cat)) {
                    sec.style.display = "block";
                } else {
                    sec.style.display = "none";
                }
            } else {
                sec.style.display = "none";
            }
        } // se a categoria for "all", mostra todas as seções, caso contrário, mostra a selecionada
    }

    const buttons = document.getElementsByClassName('filter-btn');
    for (let j = 0; j < buttons.length; j++) {
        const btn = buttons[j];
        btn.style.backgroundColor = 'transparent';
        btn.style.borderColor = '#444';
        btn.style.color = '#888';
    }

    if (btnElement) {
        btnElement.style.backgroundColor = 'var(--accent-color)';
        btnElement.style.borderColor = 'var(--accent-color)';
        btnElement.style.color = '#fff';
    } // atualiza o estilo dos botões para indicar qual categoria está ativa
}

// inicia os efeitos personalizado
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initTiltEffect();
    initScrollReveal();
});

function initCustomCursor() {
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
    }); // move o cursor personalizado com base na posição do mouse

    function animateAura() {
        let distX = mouseX - auraX;
        let distY = mouseY - auraY;
        auraX += distX * 0.10;
        auraY += distY * 0.10; //delay na animiação da aura
        aura.style.left = auraX + 'px';
        aura.style.top = auraY + 'px';
        requestAnimationFrame(animateAura); //chama a animação frame a frame
    }

    animateAura(); // inicia a animação da aura

    // define os elementos que vão interagir com o cursor
    const interactiveSelectors = 'a, button, .poster-card, .product-card, .filter-btn, .toggle-btn, .close-btn, img[onclick]';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            dot.classList.add('hovered');
            aura.classList.add('hovered');
        }
    }); // adiciona a classe "hovered"

    document.addEventListener('mouseout', (e) => {
        if (!e.target.closest(interactiveSelectors)) {
            dot.classList.remove('hovered');
            aura.classList.remove('hovered');
        }
    }); // remove a classe "hovered" 
}

// função que cria o efeito de tilt nas imagens dos cartões
function initTiltEffect() {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const posterCards = document.getElementsByClassName('poster-card');
    const productCards = document.getElementsByClassName('product-card');
    const allCards = [];

    for (let i = 0; i < posterCards.length; i++) {
        allCards.push(posterCards[i]);
    } // aplica o efeito de tilt

    for (let j = 0; j < productCards.length; j++) {
        allCards.push(productCards[j]);
    } // acumula todos os cartões que devem ter o efeito de tilt em um único array

    // adiciona os event listeners para o movimento do mouse
    for (let k = 0; k < allCards.length; k++) {
        const card = allCards[k];

        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((centerY - y) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
        });

        // reset quando o mouse sai do cartão
        card.addEventListener('mouseleave', function () {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    }
}

function initScrollReveal() {
    //query selector que selecionam todos os elementos que devem ter o efeito de scroll reveal 
    const registry = document.querySelectorAll('.content-row, .process-step, .shop-section, .history-container, .values-grid');

    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    }; 

    // cria um  Observer API para observar quando os elementos entram na viewport e adiciona a classe "revealed" para ativar a animação
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // adiciona a classe "reveal-element" a cada elemento
    registry.forEach(fest => {
        fest.classList.add('reveal-element');
        observer.observe(fest);
    });
}

// função para criar o botão de scroll para o topo da página
function initScrollTopButton() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    // mostra o botão quando o utilizador dá scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 0.5) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // adiciona um evento de click para o botão
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

initScrollTopButton();

// função para criar a barra de progresso de scroll no topo da página
function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    document.body.appendChild(bar); // cria a barra e adiciona a classe 

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        bar.style.width = scrollPercent + '%';
    });
}

initScrollProgress();

// função para alterar o título da página quando o utilizador muda de aba
let originalTitle = document.title;
window.addEventListener('blur', () => {
    document.title = "Don't leave Jesse alone...";
});
window.addEventListener('focus', () => {
    document.title = originalTitle;
});


let secretCode = "spike";
let keyBuffer = "";

// função para ativar um easter egg quando o utilizador digita a palavra "spike" no teclado
window.addEventListener("keydown", (e) => {
    if (e.key.length === 1) {
        keyBuffer += e.key.toLowerCase();
    }

    if (keyBuffer.length > secretCode.length) {
        keyBuffer = keyBuffer.slice(1);
    }

    // verifica se o buffer de teclas corresponde ao código secreto
    if (keyBuffer === secretCode) {
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

// função para ativar o menu hamburger em telemóvel
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


// função para mostrar o loader cinematográfico apenas uma vez
const cinemaLoader = document.getElementById('cinematic-loader');
if (cinemaLoader) {
    if (sessionStorage.getItem('process_intro_played')) {
        cinemaLoader.style.display = 'none';
    } else {
        sessionStorage.setItem('process_intro_played', 'true');
        setTimeout(() => cinemaLoader.remove(), 3200);
    }
}
