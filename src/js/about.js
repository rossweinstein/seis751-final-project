(function(){

    // set initial content-map-image size
    if ($(window).width() > 768) {
        $('#content-map-image').attr('src', '../images/content-map.png');
    } else {
        $('#content-map-image').attr('src', '../images/content-map-sm.png');
    }



    $(window).resize(() => {
        var screenWidth = $(window).width();
        if (screenWidth > 768) {
           loadLargeImages();
        } else {
            loadSmallImages();
        }
    })


    function loadSmallImages() {
        $('#content-map-image').attr('src', '../images/content-map-sm.png');
    }

    function loadLargeImages() {
        $('#content-map-image').attr('src', '../images/content-map.png');
    }






})();