

$(function() {
    $(".effects").mouseover(function() {
      let audio = new Audio('sounds/'+$(this).data("soundfile"));
        if (audio.paused) {
            audio.play();
            $(audio).prop("volume", 0.1);
        } else {
            audio.pause();
        }
    });
    });

    $(document).ready(function() {
      let audio = new Audio('sounds/PROJETXY_OST.mp3');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
