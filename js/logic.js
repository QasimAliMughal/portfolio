$(document).ready(function () {
    $('.skills-content img').on('mouseover',function() {
       
        $(this).animate({
            width: '+=10px',
            height: '+=10px'
        });
    });


    $('.skills-content img').on('mouseout',function() {
       
        $(this).animate({
            width: '-=10px',
            height: '-=10px'
        });
    });

});