const hamburger = document.querySelector('.hamburger');
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');

const lines = [lineOne,lineTwo,lineThree];
const tlm = new TimelineMax({});

const toggleMenu = new TimelineMax({paused:true,reversed:true});

toggleMenu
    .to(lineTwo, .125,{scaleX:0})
    .to(lineOne, .125,{rotation:45,transformOrigin:"50% 50%",y:8})
    .to(lineThree, .125,{rotation:-45, transformOrigin:"50% 50%",y:-8});

    hamburger.addEventListener('click',() => {
        toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
    });
// hamburger.addEventListener('mouseenter', () => {
//     tlm.staggerTo(lines,0.25,{scaleX: 1.3,repeat: 1, yoyo:true},0.125);
// });



// TweenMax.to(hamburger,2,{x:100});