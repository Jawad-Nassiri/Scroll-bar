let customScroll = document.querySelector('.scroll');

let  = window.scrollHeight;

window.addEventListener('scroll', function(){

    let scrollTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;

    let scrollPercent = scrollTop / (documentHeight - windowHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    customScroll.style.width = scrollPercentRounded + '%'; 
});