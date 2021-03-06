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
    setTimeout(()=>{
        document.querySelector(".description").style.opacity = 1;
        document.querySelector(".description").style.marginTop = 0;
    }, 2000);
    setTimeout(()=>{
        document.querySelector(".homeIcons").style.opacity = 1;
        document.querySelector(".homeIcons").style.marginTop = 0;
    }, 2500);

}

const projectAnimation = () => {   
    document.querySelector(`.${skill}`).style.marginTop = 0;
    document.querySelector(`.${skill}`).style.opacity = 1;
}

window.addEventListener('load', () => {
    typing();
    animations();

    if(window.innerWidth < 430){
        for(let i=0; i<skills.length; i++){
            skills[i].childNodes[1].style.color = '#0b56a4';
            skills[i].style.opacity = 1;
            skills[i].children[1].style.opacity = 1;
            document.querySelector(".prev").style.display = "none";
            document.querySelector(".next").style.display = "none";
        }
    }

});
window.addEventListener('resize', () => {
    if(window.innerWidth < 430){
        for(let i=0; i<skills.length; i++){
            skills[i].childNodes[1].style.color = '#0b56a4';
            skills[i].style.opacity = 1;
            skills[i].children[1].style.opacity = 1;
            document.querySelector(".prev").style.display = "none";
            document.querySelector(".next").style.display = "none";
        }
    }
});

let toTop = document.querySelector("#toTop");

toTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', () => {
    let skillsDivPosition = document.querySelector("#skills").offsetTop;
    let skillsDivHeight = document.querySelector("#skills").offsetHeight;
    let scrollPx = window.pageYOffset + window.innerHeight;  

    let projectsDivPosition = document.querySelector("#projects").offsetTop;
    let projectsDivHeight = document.querySelector("#projects").offsetHeight;

    if(scrollPx > skillsDivPosition + skillsDivHeight / 2){
        document.querySelector(".skillsDiv").style.marginTop = 0;
        document.querySelector(".skillsDiv").style.opacity = 1;

        setTimeout(()=>{
            document.querySelector(".prev").style.display = "inline-block";
            document.querySelector(".next").style.display = "inline-block";
        }, 850);
    }

    if(scrollPx > projectsDivPosition + projectsDivHeight / 2){        
        document.querySelector(".projectsDiv").style.marginTop = 0;
        document.querySelector(".projectsDiv").style.opacity = 1;
    }

    if(window.pageYOffset > skillsDivPosition){
        toTop.style.right = '15px';
    }else{
        toTop.style.right = '-50px';        
    }
});

let imgs = document.querySelectorAll('.img');

for(let i=0; i<imgs.length; i++){
    imgs[i].addEventListener('mouseover', () => {
        document.querySelectorAll('.bg')[i].style.transform = 'translate(0, 0)';
    })
    
    imgs[i].addEventListener('mouseout', () => {
        document.querySelectorAll('.bg')[i].style.transform = 'translate(0, 300px)';
    })
}

let skills = [...document.querySelectorAll(".skill")];
let skillsDiv = document.querySelector(".skillsDiv");
let ppp = document.querySelectorAll(".skill p");



const skillsSlider = (skills) => {        
    document.querySelector(".skillsDiv").innerHTML = "";

    for(let i=0; i<skills.length; i++){       
        for(let j=1; j<=3; j++){
            skills[j].childNodes[1].style.color = '#0b56a4';
            skills[j].style.opacity = 1;
            skills[i].children[1].style.opacity = 1;
        } 

        skills[0].childNodes[1].style.color = 'lightslategray';
        skills[0].style.opacity = 0.5;
        skills[0].children[1].style.opacity = 0;

        skills[4].childNodes[1].style.color = 'lightslategray';
        skills[4].style.opacity = 0.5;
        skills[4].children[1].style.opacity = 0;


        skills.forEach(skill => skillsDiv.appendChild(skill)); 
    }
   
}

const plusSlides = (n) => {
    let skillsArr = [...document.querySelectorAll(".skill")];

    if(n == 1){
        skillsArr = [skillsArr[4], skillsArr[0], skillsArr[1], skillsArr[2], skillsArr[3]];
    }else if(n == -1){        
        skillsArr = [skillsArr[1], skillsArr[2], skillsArr[3], skillsArr[4], skillsArr[0]];
    }
    skillsSlider(skillsArr);
}

skillsSlider(skills);

let navLinks = document.querySelectorAll(".navLink");

let hamburgerMenuBtn = document.querySelector("#hamburgerMenuBtn");
let modal = document.querySelector("#navModal");

hamburgerMenuBtn.addEventListener('click', () => {
    hamburgerMenuBtn.classList.toggle("change");
    // if(modal.style.display == "block"){
    if(modal.style.opacity == 1){
        // modal.style.display = "none";
        modal.style.opacity = 0;
        modal.style.left = '-1000px';
    }else{
        // modal.style.display = "block";
        modal.style.opacity = 1;
        modal.style.left = 0;
    }
});

let navLinksMobile = document.querySelectorAll(".navLink");

navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        // modal.style.display = "none";
        modal.style.opacity = 0;
        modal.style.left = '-1000px';
        hamburgerMenuBtn.classList.remove("change");
    });
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        // modal.style.display = "none";
        modal.style.opacity = 0;
        modal.style.left = '-1000px';
        hamburgerMenuBtn.classList.toggle("change");
    }
});