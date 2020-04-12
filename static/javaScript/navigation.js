const phoneNavSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-items');
    const navItems = document.querySelectorAll('.nav-items li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-show');

        navItems.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation=''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
            }
        });
    });
    
}

function verticleParallax() {
    var vScroll = $(window).scrollTop();
    
    $('.verticleParallaxBg').css('background-position',
    'center '+(vScroll*0.5)+'px')
    $('.verticleParallaxLogo').css('background-position',
    'center '+((vScroll*0.05)+45)+'%')
    $('.verticleParallaxCasrousel').css('height',
    ((vScroll*(12/560))+19)+'vh')
}

function parallaxBlur() {
    var vScroll = $(window).scrollTop();
    
    $('.parallaxBlur').css('filter',
    'blur('+(vScroll/80)+'px)')
}

function navColor(){

    $(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('nav').addClass('colored');
        }
        else{
            $('nav').removeClass('colored')
        }
    });
}




// ---------  function calls ----------
$(window).scroll(function() {
    verticleParallax();
    parallaxBlur();
});
phoneNavSlider();
navColor();


