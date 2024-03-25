<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>

<style>
	

.preloader {
  position: fixed;
	flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c0a0b;
  overflow: hidden;
  z-index: 9999;
	}
  .content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
  	align-items: center;
    opacity: 0;
  }
	
	.text-conteiner {
    display: flex;
    flex-direction: row;
    gap: 1em;
    overflow: hidden;
    color: white;
  }
	.logo{
		width:250px;
		height:auto;
	}
	.big-text {
		font-family: 'Montserrat', sans-serif; 
		font-size: 4rem;
	}
	

	
</style>



<div class="preloader">
	
	<div class="content">
		<img class="logo" src="https://edenstudio.ragecollective.com/wp-content/uploads/2024/03/eden-svg-animat-script4.svg" alt="Eden Studio">
		<div class="text-conteiner">
			<p class="big-text">Eden</p>
			<p class="big-text">Studio</p>
		</div>
</div>    
</div> 


 
<script>
	
	
const tl = gsap.timeline();
 

tl.to("body", {
  overflow: "hidden",
	
})
  .to(".preloader  .content ", {
    duration: 0,
    opacity: 1,
	
    ease: "Power3.easeOut"
  })
  .from(".preloader  .content   p  ", {
    duration: 1.8,
    delay: 0,
    y: 200,
    skewY: 10,
    stagger: 0.4,
	
    ease: "Power3.easeOut"
  })
  .to(".preloader .content  p  ", {
    duration: 1.5,
    y: 200,
    skewY: -20,
    stagger: 0.2,
	
    ease: "Power3.easeOut"
  })
  .to(".preloader", {
    duration: 1.3,
	
        
    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
      overflow: "auto"
    },
    "-=1"
  )
  .to(".preloader", {
    display: "none",
  });
</script>
