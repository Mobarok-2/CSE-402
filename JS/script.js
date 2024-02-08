Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr" , {
    videos: ["media/gla/0.mp4", "media/gla/3.mp4"],
  });

  gsap.to(".fleftlm",{
    scrollTrigger : {
        trigger: "#featuredimg",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y:  "-300%",
    ease: Power1
  })
  let sections = document.querySelectorAll(".fleftlm");
  Shery.imageEffect(".images", {
    style: 2,
    config: {onMouse: {value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index){
            ScrollTrigger.create({
                trigger:section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog) {
                    setScroll(prog.progress+index)
                }
            })
        })
    }
  });
 
gsap.from(".nlink" , {
    stagger: .3,
    y: 10,
    opacity: 0
})
gsap.from(".animation" , {
    stagger: .9,
    x: 60,
    opacity: 0
})
Shery.imageEffect("#fimgs", {
    style:5,
    gooey:true,
    config: {"a":{"value":0.23,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.707887201195219},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":8}},"discard_threshold":{"value":0.54,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
})
Shery.imageEffect(".fimages", {
    style:3,
      config: {"uFrequencyX":{"value":31.3,"range":[0,100]},"uFrequencyY":{"value":23.66,"range":[0,100]},"uFrequencyZ":{"value":5.34,"range":[0,100]},"geoVertex":{"range":[1,64],"value":20.72},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.5002383506137529},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.67,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    //  debug :true 
    
})
document.querySelector("#ftexts button").addEventListener("mouseover", function(){
    gsap.to("#future video",{
        opacity:1,
        duration: 1,
        ease: Power1
    })
});
document.querySelector("#ftexts button").addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity:0,
        duration: 1,
        ease: Power1
    })
});
var timeline = gsap.timeline()
timeline.from("#loader h2", {
    x:90,
    opacity:0,
    duration:2,
    stagger:0.1
})
timeline.to("#loader h2", {
    x:-90,
    opacity:0,
    duration:1,
    stagger:0.1
})
timeline.to("#loader", {
    opacity:0
})
timeline.to("#loader", {
    display:"none"
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
  });

  function loadinganimation2() {
    gsap.from("#maincontent p", {
      y: -350,
      opacity: 1,
      delay: 5,
      duration: 1.5,
      stagger: 0.5,
    })};
 loadinganimation2(); 