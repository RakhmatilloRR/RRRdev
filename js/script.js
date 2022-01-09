const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");
const scrollbtn = document.querySelector(".scrollToTop-btn");
const main = document.getElementById("main");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const work = document.getElementById("work");
const contact = document.getElementById("contact");
const reveals = document.querySelectorAll(".reveal");



window.addEventListener("scroll", function () {
    
    if (window.scrollY > 100) {
        header.style = "background: #dc143c;"
    } else {
        header.style = "background-color: rgba(255, 255, 255, 0.001);"
    }
});

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach(navItem => {
    navItem.addEventListener("click", ()=>{
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
        console.log(navItem);
    });
});

window.addEventListener("scroll", ()=>{
    if (window.scrollY > main.offsetHeight) {
        scrollbtn.style = "display: block;"
    } else {
        scrollbtn.style = "display: none;"
    }
});

scrollbtn.addEventListener("click", ()=>{
    document.documentElement.scrollTop = 0;
});
window.addEventListener("scroll", ()=>{
    const mB = main.getBoundingClientRect().bottom;
    
    if(mB > 70){
        navigationItems[0].style ="background: #555549; padding: 27px;"
    }
    else{
        navigationItems[0].style ="background: inherit;"
    }
});
window.addEventListener("scroll", ()=>{
    const mB = main.getBoundingClientRect().bottom;
    const aB = about.getBoundingClientRect().bottom;
    
    if(mB < 70 && aB > 70 ){
        navigationItems[1].style ="background: #66ab86; padding: 27px;"
    }
        else{
            navigationItems[1].style ="background: inherit;"
        }
});

window.addEventListener("scroll", ()=>{
    const aB = about.getBoundingClientRect().bottom;
    const sB = skills.getBoundingClientRect().bottom;

    if(aB < 70 && sB > 70){
        navigationItems[2].style ="background: #000015; padding: 27px"
    }
    else{
        navigationItems[2].style ="background: inherit;"
    }
});

window.addEventListener("scroll", ()=>{
    const sB = skills.getBoundingClientRect().bottom;
    const wB = work.getBoundingClientRect().bottom;
    if(sB < 70 && wB > 70){
        navigationItems[3].style ="background: #000015; padding: 27px"
    }
    else{
        navigationItems[3].style ="background: inherit;"
    }
});

window.addEventListener("scroll", ()=>{
    const wB = work.getBoundingClientRect().bottom;
    const cB = contact.getBoundingClientRect().bottom;
    if(wB < 70 && cB > 0){
        navigationItems[4].style ="background: #486893; padding: 27px"
    }
    else{
        navigationItems[4].style ="background: inherit;"
    }
});

window.addEventListener("scroll", ()=>{
   for(let i = 0; i< reveals.length; i++ ){
       let windowHeight = window.innerHeight;
       let revealTop = reveals[i].getBoundingClientRect().top;
       let revealTY = 50;
       if(revealTop<windowHeight-revealTY){
           reveals[i].classList.add("active");
       }else{
           reveals[i].classList.remove("active");
       }
   }
});

