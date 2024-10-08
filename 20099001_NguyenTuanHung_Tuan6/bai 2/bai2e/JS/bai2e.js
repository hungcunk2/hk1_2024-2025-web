const images = [
    'bai 2\bai2e\PNG\b1.jpg',
    'bai 2\bai2e\PNG\b2.jpg',
    'bai 2\bai2e\PNG\b3.jpg',
    'bai 2\bai2e\PNG\b4.jpg',
    'bai 2\bai2e\PNG\b5.jpg',
    'bai 2\bai2e\PNG\b6.jpg',
    'bai 2\bai2e\PNG\b7.jpg',
    'bai 2\bai2e\PNG\b8.jpg',
    'bai 2\bai2e\PNG\b9.jpg',
    'bai 2\bai2e\PNG\b10.jpg',

];

let currentIndex = 0;
let slideshowInterval;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideshow').src = images[currentIndex];
}

function startSlideshow() {
    stopSlideshow();
    slideshowInterval = setInterval(showNextImage, 1000);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}