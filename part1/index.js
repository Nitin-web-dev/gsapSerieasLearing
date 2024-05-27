// gsap.to('#box', {
//     x: 1000,
//     duration: 3,
//     delay: 1.5,
//     rotate: 180,
//     scale: 2,
//     backgroundColor: "blue",
//     borderRadius: "30%",
// })

// gsap.from('#box2', {
//     x: 1000,
//     duration: 3,
//     delay: 1.5,
//     rotate: 180,
//     scale: 2,

// })


// another exmaple of h1

// gsap.from('h1', {
//         duration:1,
//         delay: 1,
//         y: 20,
//         opacity: 0,
//         stagger: 0.3,
        
// })


// repeat exmaple
// gsap.to('.box', {
//     x: 1000,
//     duration: 3,
//     delay: 1,
//     rotate: 180,
//     scale: 2,
//     backgroundColor: "blue",
//     borderRadius: "30%",
//     repeat: 1,
//     yoyo: true,
// })




// timeline example

// let tl = gsap.timeline();

// tl.to("#box1", {
//     x: 1000,
//     duration: 3,
//     delay: 1
    
// })
// tl.to("#box2", {
//     x: 1000,
//     duration: 3,

// })
// tl.to("#box3", {
//     x: 1000,
//     duration: 3,

// })





// navbar exmaple
let tl = gsap.timeline();

tl.from('h2', {
    y:20,
    delay:1,
    opacity: 0,
})
tl.from('h4',{
    y:20,
    opacity: 0,
    stagger: 0.3
})
tl.from('h1', {
    y:20,
    scale:0.5,
    duration: 0.5,
    
    opacity: 0,
})