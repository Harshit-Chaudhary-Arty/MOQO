gsap.to("#main #page1 h1",{
    transform:"translateX(-45%)",
    // fontStretch:"100%",
    fontWeight:"100",
    // delay:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        // markers:true,
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

var cpointer= document.querySelector("#cpointer")
document.querySelector(".case")

document.querySelector("#page2 #case1").addEventListener("mouseenter",function(){
    gsap.to(cpointer,{
        scale:1,
        opacity:1
    })
})
document.querySelector("#page2 #case1").addEventListener("mouseleave",function(){
    gsap.to(cpointer,{
        scale:0,
        opacity:0
    })
})
document.querySelector("#page2 #case1").addEventListener("mousemove",function(dets){
    gsap.to(cpointer,{
        left:dets.x,
        top:dets.y,
        backgroundColor:"red"

    })
})




document.querySelector("#page3 #case2").addEventListener("mouseenter",function(){
    gsap.to(cpointer,{
        scale:1,
        opacity:1
    })
})
document.querySelector("#page3 #case2").addEventListener("mouseleave",function(){
    gsap.to(cpointer,{
        scale:0,
        opacity:0
    })
})
document.querySelector("#page3 #case2").addEventListener("mousemove",function(dets){
    gsap.to(cpointer,{
        left:dets.x,
        top:dets.y,
        backgroundColor:"orange"

    })
})




document.querySelector("#page3 #case3").addEventListener("mouseenter",function(){
    gsap.to(cpointer,{
        scale:1,
        opacity:1
    })
})
document.querySelector("#page3 #case3").addEventListener("mouseleave",function(){
    gsap.to(cpointer,{
        scale:0,
        opacity:0
    })
})
document.querySelector("#page3 #case3").addEventListener("mousemove",function(dets){
    gsap.to(cpointer,{
        left:dets.x,
        top:dets.y,
        backgroundColor:"skyblue"

    })
})


// document.querySelector("#page3 #case4").addEventListener("mouseenter",function(){
//     gsap.to(cpointer,{
//         scale:1,
//         opacity:1,
//         backgroundColor:"orange"

//     })
// })
// document.querySelector("#page3 #case4").addEventListener("mouseleave",function(){
//     gsap.to(cpointer,{
//         scale:0,
//         opacity:0
//     })
// })



document.querySelector("#page3 #case5").addEventListener("mouseenter",function(){
    gsap.to(cpointer,{
        scale:1,
        opacity:1,
        backgroundColor:"yellowgreen"
    })
})
document.querySelector("#page3 #case5").addEventListener("mouseleave",function(){
    gsap.to(cpointer,{
        scale:0,
        opacity:0
    })
})
document.querySelector("#page3 #case5").addEventListener("mousemove",function(dets){
    gsap.to(cpointer,{
        left:dets.x,
        top:dets.y,         
    })
})


gsap.to("#tagline",{
     backgroundColor:"black",
     color:"white",
     duration:0.6,
     scrollTrigger:{
        // markers:true,
        scroller:"body",
        trigger:"#tagline",
        start:"top 60%",
        end:"top 30%",
        scrub:1
     }
 })

 gsap.from(" #footer div",{
    y:"150",
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        markers:true,
        scoller:"body",
        trigger:"#footer",
        start:"top 80%",
        end:"top 50%",
        scrub:2,
    }
 })

 gsap.from("#designc div",{
        y:"150",
        opacity:0,
        stagger:0.2,
    scrollTrigger:{
        // markers:true,
        scoller:"body",
        trigger:"#designc",
        start:"top 30%",
        end:"top -5%",
        scrub:2,
    }
 })

 gsap.from("#connect h1, #connect h2",{
    y:"150",
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        // markers:true,
        scoller:"body",
        trigger:"#connect",
        start:"top 40%",
        end:"top -5%",
        scrub:2,
}
})

