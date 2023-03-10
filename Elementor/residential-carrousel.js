const resigalleryContainer = document.querySelector('.resi-gallery-container');
const resigalleryControlsContainer = document.querySelector('.gallery-controls');
const resigalleryControls = ['previous','next'];
const resigalleryItems = document.querySelectorAll('.resi-gallery-item');

class resiCarousel {
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
            im.classList.remove('resi-gallery-item-1');
            im.classList.remove('resi-gallery-item-2');
            im.classList.remove('resi-gallery-item-3');
            // im.classList.remove('gallery-item-4');
            // im.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0,5).forEach((im, i) => {
            im.classList.add(`resi-gallery-item-${i+1}`);
        });
    }


    setCurrentState(direction){
        if(direction.className == 'resi-gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    setControls(){
        this.carouselControls.forEach(control => {
            resigalleryControlsContainer.appendChild(document.createElement('button')).className = `resi-gallery-controls-${control}`;
            document.querySelector(`.resi-gallery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...resigalleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e =>{
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const resicarouselExample = new resiCarousel(resigalleryContainer,resigalleryItems, resigalleryControls);
resicarouselExample.start();

// Add event listeners for the previous and next buttons
const resiprevButton = document.querySelector('.resi-gallery-controls-previous');
const resinextButton = document.querySelector('.resi-gallery-controls-next');

resiprevButton.addEventListener('click', () => resicarouselExample.setCurrentState(resiprevButton));
resinextButton.addEventListener('click', () => resicarouselExample.setCurrentState(resinextButton));

// Optional: Auto slide feature
let resiautoSlide = setInterval(() => resicarouselExample.setCurrentState(resinextButton), 3000);

// Optional: Pause and play feature
const resipauseButton = document.querySelector('.pause-play');
resipauseButton.addEventListener('click', () => {
  if (resipauseButton.innerText === 'Pause') {
    clearInterval(resiautoSlide);
    resipauseButton.innerText = 'Play';
  } else {
    resiautoSlide = setInterval(() => resicarouselExample.setCurrentState(resinextButton), 3000);
    resipauseButton.innerText = 'Pause';
  }
});