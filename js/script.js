$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
        if ($(window).width() < 768) {
            if ($(this).hasClass('active')) {
                $('header').css({'height': '100vh', 'background': 'rgba(1,125,149,0.7)', 'position': 'fixed'});
            } else {
                $('header').css({'height': 'auto', 'background': 'rgba(1,125,149,0.7)'});
            }

        }
    });
    /*******Fixed Header footer**********/
    var footer = jQuery('footer'),
        header = jQuery('header'),
        fh = footer.height();
    jQuery(window).on('scroll', function () {
        var st = jQuery(this).scrollTop();
        // Fixed Footer
        if (footer.hasClass('fixed')) {
            if (jQuery(window).width() > 767) {
                var dh = jQuery(document).height(),
                    wh = jQuery(window).height(),
                    cb = jQuery('.content-wrapper')[0].getBoundingClientRect();
                if (wh - cb.bottom <= fh) {
                    footer.css({
                        'opacity': Math.ceil(((wh - cb.bottom) / fh) * 100) / 100
                    });
                }
            }
        }

        // Fixed Header
        (st > header.outerHeight(true)) ? header.addClass('not-visible') : header.removeClass('not-visible');
        (st > header.outerHeight(true) + 70) ? header.addClass('fixed') : header.removeClass('fixed');
    });
    if (footer.hasClass('fixed')) {
        if (jQuery(window).width() > 767) {
            jQuery('.content-wrapper').css({
                'margin-bottom': fh
            });
        } else {
            jQuery('.content-wrapper').css({
                'margin-bottom': 0
            });
        }

        jQuery(window).on('resize', function () {
            fh = footer.height();
            if (jQuery(window).width() > 767) {
                jQuery('.content-wrapper').css({
                    'margin-bottom': fh
                });
            } else {
                jQuery('.content-wrapper').css({
                    'margin-bottom': 0
                });
            }
        });
    }
});

$().ready(function () {
    var sName = "cookiesok";
    $("#close-cookie-warn").click(function () {
        var oExpire = new Date();
        oExpire.setTime((new Date()).getTime() + 2000);
        document.cookie = sName + "=1;expires=" + oExpire;
        $("#cookie-warn").hide("slow");
    });
    var sStr = '; ' + document.cookie + ';';
    var nIndex = sStr.indexOf('; ' + escape(sName) + '=');
    if (nIndex === -1) {
        $("#cookie-warn").show();
    }
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}