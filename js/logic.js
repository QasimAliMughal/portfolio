$(document).ready(function () {
    $('.skills-sections ul li img').on('mouseover',function() {
       
        $(this).animate({
            width: '+=10px',
            height: '+=10px'
        });
        
    });


    $('.skills-sections ul li img').on('mouseout',function() {
       
        $(this).animate({
            width: '-=10px',
            height: '-=10px'
        });
    });

});