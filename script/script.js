document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger();
    addHeight: true
});

function fnMove(seq) {
    let offSet = $(seq).offset();
    $('html, body').animate({scrollTop : offSet.top - 50}, 2000);
}