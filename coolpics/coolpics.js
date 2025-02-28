const menuButton = document.getElementById('menuButton');
const navbar = document.getElementById('navbar');

function toggleMenu() {
    navbar.classList.toggle('hide');
}
  
menuButton.addEventListener('click', toggleMenu);
  
const images = document.querySelectorAll('.gallery-image'); 
const modal = document.getElementById('imageViewer'); 
const modalImage = document.getElementById('modalImage'); 
const caption = document.getElementById('caption'); 

images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block'; 
        modalImage.src = image.src; 
        caption.textContent = image.alt; 
    });
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; 
});

function handleResize() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide'); 
    } else {
        menu.classList.add('hide'); 
    }
}

window.addEventListener('resize', handleResize);

handleResize();

function viewerTemplate(imageSrc, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imageSrc}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    const clickedImage = event.target; 
    const imageSrc = clickedImage.src.split('-')[0] + '-full.jpeg'; 

    const htmlToInsert = viewerTemplate(imageSrc, clickedImage.alt);
    document.body.insertAdjacentHTML('afterbegin', htmlToInsert); 

    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove(); 
}

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);
