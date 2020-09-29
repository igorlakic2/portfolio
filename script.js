let i = 0;
let text = "IGOR LAKIĆ";

const typing = () => {
    if(i < text.length){
        document.querySelector(".name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 200);
    }
}

const animations = () => {
    document.querySelector(".description").style.opacity = 1;
    document.querySelector(".description").style.marginTop = 0;
}

const skillsAnimation = (skill) => {   
    document.querySelector(`.${skill}`).style.marginTop = 0;
    document.querySelector(`.${skill}`).style.opacity = 1;
}

window.addEventListener('load', () => {
    typing();
    setTimeout(animations, 2000)

});

window.addEventListener('scroll', () => {
    let skillsDivPosition = document.querySelector(".skills").offsetTop;
    let skillsDivHeight = document.querySelector(".skills").offsetHeight;
    let scrollPx = window.pageYOffset + window.innerHeight;

    if(scrollPx > skillsDivPosition + (skillsDivHeight / 2)){
        setTimeout(() => skillsAnimation('html'), 200);
        setTimeout(() => skillsAnimation('css'), 500);
        setTimeout(() => skillsAnimation('js'), 800);
        setTimeout(() => skillsAnimation('rjs'), 1100);
        setTimeout(() => skillsAnimation('php'), 1400);
    }
});

let imgs = document.querySelectorAll('.img');

for(let i=0; i<imgs.length; i++){
    imgs[i].addEventListener('mouseover', () => {
        document.querySelectorAll('.bg')[i].style.transform = 'translate(0, 0)';
    })
    
    imgs[i].addEventListener('mouseout', () => {
        document.querySelectorAll('.bg')[i].style.transform = 'translate(0, 200px)';
    })
}
