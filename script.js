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
    document.querySelector(".description").style.marginTop = '0';
}

window.addEventListener('load', () => {
    typing();
    setTimeout(animations, 2000)

});

