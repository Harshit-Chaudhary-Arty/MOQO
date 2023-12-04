gsap.to("#main #page1 h1",{
    transform:"translateX(-35%)",
    // fontStretch:"100%",
    fontWeight:"100",
    // delay:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
    
})


gsap.from("#page1 #video",{
    transform:"translateY(200%)",
    // transform:"translateX(-50%)",
    delay:0.5,
    scale:"0.4",
    scrollTrigger:{
        scroller:"body",
        trigger:"#video",
        markers:true,
        scrub:2,
        start:"top 190%",
        end:"top 225%",
    }
})

function pointeranim(){
    var pointer=document.querySelector("#pointer")
var vidcontainer=document.querySelector("#video")
vidcontainer.addEventListener("mouseenter",function(){
    gsap.to(pointer,{
        scale:1,
        opacity:1
    })
    
})
vidcontainer.addEventListener("mousemove",function(dets){
    gsap.to(pointer,{
        left:dets.x,
        top:dets.y,
    })            
})

vidcontainer.addEventListener("mouseleave",function(){
    gsap.to(pointer,{
        opacity:0,
        scale:0
    })
})
}
pointeranim()


var navi=document.querySelector("#page1 #nav #menu")
navi.addEventListener("click", function(){
    navi.style.color="black"
})