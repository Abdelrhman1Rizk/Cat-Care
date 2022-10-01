//-----------------------
let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');
dropdownBtn.addEventListener('click',(e)=>{
    e.stopPropagation()
    if(menuContent.style.display===""){
        menuContent.style.display="block";
    } else {
        menuContent.style.display="";
    }
});
document.addEventListener("click",(e) =>{
    if(e.target !== dropdownBtn && e.target !== menuContent){
        if(menuContent.style.display==="block"){
            menuContent.style.display="";
        }
    }
})
//-----------------------
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
    autoplay:true,
    autoplaySpeed:500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
//-----------------------
let landingPage = document.querySelector('.homePage')
let imgs = [
    "l1.webp",
    "l2.webp",
    "l3.webp",
    "l4.webp",
]
setInterval(() => {
    let randVar = Math.floor(Math.random() * imgs.length);
    landingPage.style.backgroundImage = 'url("images/' + imgs[randVar] + '")';
    
},8000)
//-----------------------