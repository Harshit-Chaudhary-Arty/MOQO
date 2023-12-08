gsap.to("#main #page1 h1",{
    transform:"translateX(-45%)",
    // fontStretch:"100%",
    fontWeight:"100",
    // delay:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        markers:true,
        start:"top 0",
        end:"top -180%",
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
        // markers:true,
        scrub:2,
        start:"top 170%",
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
    if(click<1){navi.style.color="black"
    navmenu()
    click++
    }
    else{
        navmenuclose()
        click=0
        navi.style.color="white"
    }
    
})

var click=0;

function navmenu(){
    gsap.to("#navmenu",{
        transform:"translateX(-40vw)",
    })
}

function navmenuclose(){
    gsap.to("#navmenu",{
        transform:"translateX(40vw)",
    })
}

gsap.from("#title .t",{
    y:"200%",
    stagger:0.4,
    // delay:1,
    opacity:"0",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        start:"top 60%",
        // markers:true,
        end:"top 10%",
        scrub:3

    }

})


gsap.from("#case1 img ",{
    y:"250%",
    stagger:0.4,
    duration:2,
    // delay:1,
    opacity:"0",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2 #case1",
        start:"top 80%",
        // markers:true,
        end:"top 30%",
        scrub:2,
    }
})

gsap.from("#case2 img ",{
    y:"250%",
    stagger:0.4,
    duration:2,
    // delay:1,
    opacity:"0",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #case2",
        start:"top 80%",
        // markers:true,
        end:"top 30%",
        scrub:2,
    }
})

gsap.from("#case3 img ",{
    y:"250%",
    stagger:0.4,
    duration:2,
    // delay:1,
    opacity:"0",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #case3",
        start:"top 80%",
        // markers:true,
        end:"top 30%",
        scrub:2,
    }
})

gsap.from("#case4 img ",{
    y:"250%",
    stagger:0.4,
    duration:2,
    // delay:1,
    opacity:"0",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #case4",
        start:"top 80%",
        // markers:true,
        end:"top 30%",
        scrub:2,
    }
})

gsap.from("#case5 img ",{
    y:"250%",
    stagger:0.4,
    duration:2,
    // delay:1,
    opacity:"0",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #case5",
        start:"top 80%",
        // markers:true,
        end:"top 30%",
        scrub:2,
    }
})


