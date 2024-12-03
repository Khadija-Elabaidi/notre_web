const navLinks = document.querySelectorAll(".nav-menu .nav-item .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
hide=document.getElementById('hide');

menuCloseButton.onclick= (function(){
    hide.style.display='none';
    document.body.classList.remove("show-mobile-menu");
    

});
menuOpenButton.addEventListener("click",() => {
    document.body.classList.add("show-mobile-menu");
    hide.style.display='flex';
    d
});

navLinks.forEach(link => {
    link.addEventListener("click" , ()=> menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
 breakpoints:{
    0:{
        slidesPerView: 1
    },
    768:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    }
 }
   
});


window.onload = function() {
    // Vérifie si l'utilisateur a déjà accepté les cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
    }

    // Ajoute un événement sur le bouton pour accepter les cookies
    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookie-banner').style.display = 'none';
    });
};