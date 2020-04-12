
var preloader;


function loadNow(opacity){
    if(opacity <= 0){
        displayContent();
    }
    else{
        $('.preloader').css('opacity',opacity);
        // loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.1);
        }, 100);
    }
}

function displayContent() {
    $('.preloader').css('display','none');
    $('.content').css('display','block');

}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});