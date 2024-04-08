let tl = gsap.timeline();




tl.from(" nav ",{
    opacity:0,
    delay:0.5,
})
tl.from("nav h1, nav h3, nav h4",{
    y:-80,
    opacaity: 0,
    duration:0.8,
    delay:0.5,
    stagger:0.3,
})
tl.from("#left h1",{
    x:-500, 
    opacity:0,
    duration:0.5,
    stagger:0.2,
})
tl.from("#bottom-nav",{
    scale:2,
    opacity:0,
    delay:0.5,
})
tl.from("#right img, .circle, .input-button",{
    scale:0.5,
    opacity:0,
    duration:0.4,
    
})
tl.from("#content h4",{
    scale:3,
    opacity:0,
    duration:0.4,
    stagger:0.4,
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller: "body",
    }
})
