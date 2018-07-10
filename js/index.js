$(document).ready(function() {
    new WOW().init();

    $('a[href*="#"]:not([href="#"])').each(function() {
        if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname && this.hash.replace(/#/,'')) {
            var $targetId = $(this.hash);
            var $targetAnchor = $('[name=' + this.hash.slice(1) +']');

            var $target;
            if($targetId.length)
                $target = $targetId;
            else if($targetAnchor.length)
                $target = $targetAnchor;
            else
                $target = false;

            if($target) {
                var targetOffset = $target.offset().top;
                $(this).click(function() {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');
                    $('html, body').animate({scrollTop: targetOffset}, 1000);
                    return false;
                });
            }
        }
    });
});

window.onload = function() {
    //Animate show images when loaded
    $('#home, #roster, #contact').each(function() {
        $(this).animate({ opacity: 1 }, 1000);
    });
};