const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
];
let imagesIndex = 0;
const img = document.getElementById("carousel-img");
setInterval(() => {
    if(imagesIndex === images.length){
        imagesIndex= 0;
    }
    const imgLink = images[imagesIndex]
    img.setAttribute('src', imgLink);
    imagesIndex++;
}, 1000);