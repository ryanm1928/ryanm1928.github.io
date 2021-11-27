$(document).ready(function() {

    function showText()
    {
    	$('.text-kiri').addClass('text-muncul-kiri');
    	$('.text-kanan').addClass('text-muncul-kanan');

    }



    $('#fa-github').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $('.fa-github').css('color', 'black');
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $('.fa-github').css('color', 'white');
    });
    $('#fa-github').click(function(e) {
        $('.fa-github').css('color', 'black');
    });

    $(window).scroll(function(event) {        let roll = $(this).scrollTop();
        // $('#img-header').css({
        //     'transform': 'translate(0px,' + roll / 14 + '%)',
        // });
        // $('.text-header').css({
        //     'transform': 'translate(0px,' + roll / 4 + '%)'
        // });
        $('.card').each(function(i) {
            if (roll > 1554) {
                setTimeout(function() {
                    $('.card').eq(i).addClass('card-muncul');

                }, 400 * (i + 1));
            }
            if (roll == 0) {
                $('#nav').css('background-color', '#333333');
            } else {
                $('#nav').css('background-color', '#343a40');
            }

            if(roll >= 370)
            {
            	showText();
            }

            if(roll > 860){
            	$('.skill-table').addClass('show-skill');

            }
            console.log(roll);


        });



    });

    var header = document.getElementById("scroll-ku");
    var btns = header.getElementsByClassName("list-group-item");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active-skill");
            current[0].className = current[0].className.replace(" active-skill", "");
            this.className += " active-skill";
        });
    }

    $(document).ready(function() {
        $(window).on('load', function() {
            //ketiaka layar muncul untuk pertama kali ada efek yang di berikan 
            $('#about .col-sm-5').addClass('text-about-muncul-kiri');
            // $('.text-about-kanan').addClass('text-about-muncul-kanan');
        })
    });

});

new TypeIt("#text-header", {
        speed: 100,
        cursor: true,
        loop: true
    })
    .type("Hello I'am Ryan")
    .exec(async () => {
        //-- Return a promise that resolves after something happens.
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve();
            }, 2000);
        });
    })
    .delete(15)
    .type("Web Programmer")
    .exec(async () => {
        //-- Return a promise that resolves after something happens.
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve();
            }, 2000);
        });
    })
    .go();
VanillaTilt.init(document.querySelectorAll(".link-contact"), {
    max: 25,
    speed: 400
});