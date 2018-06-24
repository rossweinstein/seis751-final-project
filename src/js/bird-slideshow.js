
var birdSlide = document.getElementById('current-bird-slide');
var currentBird = 0;
var birdImages = [
    '../images/tree-swallow.svg',
    '../images/barn-swallow.svg',
    '../images/belted-kingfisher.svg',
    '../images/purple-martin.svg',
    '../images/indigo-bunting.svg',
    '../images/eastern-bluebird.svg',
    '../images/blue-jay.svg',
];


document.getElementById('current-bird-slide').src=(birdImages[currentBird]);

document.getElementById('next-bird').addEventListener('click', function() {
    currentBird = currentBird + 1 === birdImages.length ? 0 : currentBird + 1;
    birdSlide.src=(birdImages[currentBird]);
});

document.getElementById('prev-bird').addEventListener('click', function() {
    currentBird = currentBird - 1 < 0 ? birdImages.length - 1 : currentBird - 1;
    birdSlide.src=(birdImages[currentBird]);
});
