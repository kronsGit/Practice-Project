const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous','next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor (container, items, controls){
        this.carouselContainer = container;
        this.carouselArray = [...items];
        this.carouselControls = controls;
    }
    start() {
        this.updateGallery();
        this.setControls();
        this.useControls();
    }
    updateGallery (){
        this.carouselArray.forEach(im => {
            im.classList.remove('gallery-item-1');
            im.classList.remove('gallery-item-2');
            im.classList.remove('gallery-item-3');
            // im.classList.remove('gallery-item-4');
            // im.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0,5).forEach((im, i) => {
            im.classList.add(`gallery-item-${i+1}`);
        });
    }


    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    setControls(){
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e =>{
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const carouselExample = new Carousel(galleryContainer,galleryItems, galleryControls);
carouselExample.start();

// Add event listeners for the previous and next buttons
const prevButton = document.querySelector('.gallery-controls-previous');
const nextButton = document.querySelector('.gallery-controls-next');

prevButton.addEventListener('click', () => carouselExample.setCurrentState(prevButton));
nextButton.addEventListener('click', () => carouselExample.setCurrentState(nextButton));

// Optional: Auto slide feature
let autoSlide = setInterval(() => carouselExample.setCurrentState(nextButton), 3000);

// Optional: Pause and play feature
const pauseButton = document.querySelector('.pause-play');
pauseButton.addEventListener('click', () => {
  if (pauseButton.innerText === 'Pause') {
    clearInterval(autoSlide);
    pauseButton.innerText = 'Play';
  } else {
    autoSlide = setInterval(() => carouselExample.setCurrentState(nextButton), 3000);
    pauseButton.innerText = 'Pause';
  }
});