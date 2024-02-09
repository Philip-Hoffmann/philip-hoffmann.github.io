const imageGallery = document.querySelector('.image-gallery');
const videoContainer = document.querySelector('.video-container');

// Sample Data (You'll replace this with your actual file names)
const images = [
    'images/creepy-scene-1.jpg',
    'images/monster-silhouette.png',
    'images/abandoned-house.jpg'
];

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
