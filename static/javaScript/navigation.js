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

function parallax() {
    var vScroll = $(window).scrollTop();

    $('.parallaxBg').css('background-position',
    'center '+(vScroll*0.5)+'px')
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
    parallax();
});
phoneNavSlider();
navColor();


