
let texts=['Freelancer','UI & UX Designer','IT OFFICER','PROGRAMMER','TECH GUY'];
let demo=document.querySelector('.anim')
let animation=gsap.timeline({repeat:-1,repeatDelay:0.6})


function createLayers(){
    texts.forEach(value => {
        let layer=document.createElement('div');
        layer.innerHTML=value;
        demo.appendChild(layer);
    })
}


//crate animation
function animationText(){
    let layers=document.querySelectorAll('#demo div');
    layers.forEach(function(element,index){
        animation.fromTo(element,{opacity:0,scale:0},{opacity:1,scale:1,repeat:1,yoyo:true,repeatDelay:0.3,yoyoEase:true})
    })
    gsap.set('#demo',{visibility:'visible'})
}

createLayers()

animationText()
