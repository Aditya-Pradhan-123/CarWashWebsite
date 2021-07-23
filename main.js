
window.addEventListener('scroll',function(){
  const header = document.querySelector('.navbar')
  header.classList.toggle("sticky", window.scrollY > 0)
});



const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
})



AccordionList();
function AccordionList(){
const accordion = document.getElementsByClassName('contentBx');

for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
        
    })
}
}


$('.client-container').slick({
  
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: $('.left'),
  prevArrow: $('.right'),

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.home-image').slick({
  nextArrow: $('.home-left'),
  prevArrow: $('.home-right'),

});