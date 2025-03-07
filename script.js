gsap.to("header",{
    backgroundColor: "black",
    height: "40px",
    duration: 1,
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11",
        scrub:1    
    }
})