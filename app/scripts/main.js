$(document).ready(function() {
    var state = 'normal';
    var origin = parseInt($('.red').css('left'));
    var transDist = $( window ).width() / 2;
    var timing = 1100;

    $('.about').on('click', function(e) {
        e.preventDefault();
        if (state === 'normal') {
            $('#container-bolt').css('animation', 'rotate 1.2s ease-out forwards');
            $('#container-gears').css('animation', 'rotate 1.2s ease-out forwards');
            $(".red").animate({left: ( origin - transDist) + 'px'}, timing, 'linear');
            state = 'about';
        }
        return false;
    });

    $('#container-bolt').on('click', function(e) {
        e.preventDefault();
        if (state === 'normal') {
            $('#container-bolt').css('animation', 'rotate 1.2s ease-out forwards');
            $('#container-gears').css('animation', 'rotate 1.2s ease-out forwards');
            $(".red").animate({left: ( origin - transDist) + 'px'}, timing, 'linear');
            state = 'about';
        }
        else if (state === 'about') {
        	$('#container-bolt').css('animation', 'rotateBack 1.2s ease-out forwards');
            $('#container-gears').css('animation', 'rotateBack 1.2s ease-out forwards');
            $(".red").animate({left: origin + 'px'}, timing, 'linear');
            state = 'normal';
        }
        return false;
    });
});
