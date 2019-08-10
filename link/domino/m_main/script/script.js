$(function(){
    
    
    
     $('#testDiv').viSimpleSlider({
            ease : 'easeOutQuart',
            autoPlay : true,
            autoTime : 4000,
            speed : 400,
		mobileSwipe : true,
            desktopSwipe : true
        });
    
    
    $("#hg").on("click",function(){
        $("#modar").addClass("active")
    });
     $(".cl").on("click",function(){
        $("#modar").removeClass("active")
    });
    
  
    
    

});

    
  