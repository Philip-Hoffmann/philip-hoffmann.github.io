const imageGallery = document.querySelector('.image-gallery');
const videoContainer = document.querySelector('.video-container');

// Skifte ud med navn på billed F.Eks 'images/FarligPeter"
const images = [
    'images/Ingenide,
    'images/Gruppebilled?',
    'images/Hund'
];

// Og her med navn på Film
const featuredVideo = 'videos/short-film-clip.mp4';

// Load Images
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imageGallery.appendChild(imgElement);
});

// Load Video
const videoElement = document.createElement('video');
videoElement.src = featuredVideo;
videoElement.controls = true;
videoContainer.appendChild(videoElement);
