 $(document).ready(function() {

    $("#breakfast-slider").owlCarousel({
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 2, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from
        });
    });
    
 $(document).ready(function() {

    $("#lunch-slider").owlCarousel({
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 2, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from
        });
    });

$(document).ready(function() {

    $("#dinner-slider").owlCarousel({
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 2, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from
        });
    });


   

