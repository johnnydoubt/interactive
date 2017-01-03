$('note').on('touchstart', function (e) {
    'use strict'; //satisfy code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('note').not(this).removeClass('hover');
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});

$(function() {
    $(".effects").mouseover(function() {
      let audio = new Audio('sounds/'+$(this).data("soundfile"));
        if (audio.paused) {
            audio.play();
            $(audio).prop("volume", 0.08);
        } else {
            audio.pause();
        }
    });
    });

$(function() {
    $(".effects").on('touchstart', (function() {
      let audio = new Audio('sounds/'+$(this).data("soundfile"));
        if (audio.paused) {
            audio.play();
            $(audio).prop("volume", 0.1);
        } else {
            audio.pause();
        }
    }));
    });

    $(document).ready(function() {
      let audio = new Audio('sounds/PROJETXY_OST.mp3');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
