const button = document.querySelector('.btn');
const image = document.querySelector('.img');

const images = [
    '/img/бони.jpg',
    '/img/творожок.jpg',
    '/img/цезарь.jpg',
    '/img/ириска.jpg',
    '/img/вега.jpg',
    '/img/пряник.jpg'
]

let currentIndex = 0;

function shuffleArray(array) {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(images);

button.addEventListener('click', () => {
    image.src = images[currentIndex];
    currentIndex++;

    if(currentIndex === images.length) {
        shuffleArray(images);
        currentIndex = 0;
    }
});