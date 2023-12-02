gsap.to("#main #page1 h1",{
    transform:"translateX(-55%)",
    // fontStretch:"100%",
    fontWeight:"100",
    // delay:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        markers:true,
        start:"top 0",
        // end:"top -100%",
        scrub:2,
        pin:true,
    }
    
})