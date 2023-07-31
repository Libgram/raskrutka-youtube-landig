jQuery(document).ready(function($) {
    $('.fixed-block').hcSticky({
        stickTo: '#first-section',
        followScroll: false,
        top: 100,
        bottomEnd: 40,
        queries: {
            980: {
                disable: true
            }
        }
    });
});

$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });

    $('#scroller').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});


    $(document).on('click',function(){
    $('.collapse').collapse('hide');
  })


// Get the video
var video1 = document.getElementById("revVideo1");
var video2 = document.getElementById("revVideo2");
var video3 = document.getElementById("revVideo3");
var video4 = document.getElementById("revVideo4");
var video5 = document.getElementById("revVideo5");
var video6 = document.getElementById("revVideo6");
var video7 = document.getElementById("revVideo7");
var video8 = document.getElementById("revVideo8");
var video9 = document.getElementById("revVideo9");
// Get the button
var btn_a = document.getElementById("myBtn1");
var btn_b = document.getElementById("myBtn2");
var btn_c = document.getElementById("myBtn3");
var btn_d = document.getElementById("myBtn4");
var btn_e = document.getElementById("myBtn5");
var btn_f = document.getElementById("myBtn6");
var btn_g = document.getElementById("myBtn7");
var btn_h = document.getElementById("myBtn8");
var btn_i = document.getElementById("myBtn9");

// Pause and play the video, and change the button text
function myFunction1() {
    if (video1.paused) {
        video1.play();
        btn_a.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video1.pause();
        btn_a.innerHTML = "<i class='fa fa-play'></i>";
    }

}

function myFunction2() {
    if (video2.paused) {
        video2.play();
        btn_b.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video2.pause();
        btn_b.innerHTML = "<i class='fa fa-play'></i>";
    }
}

function myFunction3() {
    if (video3.paused) {
        video3.play();
        btn_c.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video3.pause();
        btn_c.innerHTML = "<i class='fa fa-play'></i>";
    }
}

function myFunction4() {
    if (video4.paused) {
        video4.play();
        btn_d.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video4.pause();
        btn_d.innerHTML = "<i class='fa fa-play'></i>";
    }

}

function myFunction5() {
    if (video5.paused) {
        video5.play();
        btn_e.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video5.pause();
        btn_e.innerHTML = "<i class='fa fa-play'></i>";
    }
}

function myFunction6() {
    if (video6.paused) {
        video6.play();
        btn_f.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video6.pause();
        btn_f.innerHTML = "<i class='fa fa-play'></i>";
    }
}

function myFunction7() {
    if (video7.paused) {
        video7.play();
        btn_g.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video7.pause();
        btn_g.innerHTML = "<i class='fa fa-play'></i>";
    }
}

function myFunction8() {
    if (video8.paused) {
        video8.play();
        btn_h.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video8.pause();
        btn_h.innerHTML = "<i class='fa fa-play'></i>";
    }
}

function myFunction9() {
    if (video9.paused) {
        video9.play();
        btn_i.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video9.pause();
        btn_i.innerHTML = "<i class='fa fa-play'></i>";
    }
}

var $page = $('html, body');
$('.go-to a').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

