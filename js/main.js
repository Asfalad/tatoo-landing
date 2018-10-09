$(document).ready(function(){
    if (window.getComputedStyle(document.body).mixBlendMode !== undefined){
        $(".color-me").addClass("mix-blend-mode");
    }
    $('.four-items-carousel').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var carousel = $e.parent();
        var idx = $e.index();
        var itemsPerSlide = $(carousel).parent().data('slides');
        var totalItems = carousel.find('.carousel-item').length;
        
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $(carousel.find('.carousel-item')).eq(i).appendTo(carousel);
                }
                else {
                    $(carousel.find('.carousel-item')).eq(0).appendTo(carousel);
                }
            }
        }
    });

    $('.triple-items-carousel').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var carousel = $e.parent();
        var idx = $e.index();
        var itemsPerSlide = $(carousel).parent().data('slides');
        var totalItems = carousel.find('.carousel-item').length;
        
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $(carousel.find('.carousel-item')).eq(i).appendTo(carousel);
                }
                else {
                    $(carousel.find('.carousel-item')).eq(0).appendTo(carousel);
                }
            }
        }
    });

    $('#reviewsSlider').on('slid.bs.carousel', function (e) {
        var e = $(e.relatedTarget);
        var comment = $(e).data('comment');
        $('#comments > .tab-pane').removeClass('active');
        var totalSlides = $('#comments').data('slides');
        if(comment < totalSlides)
        {
            $('#comment-'+ (Number(comment) + 1)).addClass('active');
        }
        else {
            $('#comment-'+ 1).addClass('active');
        }
    })
})