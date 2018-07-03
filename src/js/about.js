(function(){

    var usingLargeImages;

    // set initial content-map-image size
    if ($(window).width() > 768) {
       loadLargeImages();
    } else {
       loadSmallImages();
    }


    $(window).resize(() => {
        var screenWidth = $(window).width();
        console.log('Screen Width: ' + screenWidth);
        console.log('Using Large Images: ' + usingLargeImages);
        if (screenWidth > 768) {
            if (!usingLargeImages) {
                loadLargeImages();
            }
        } else {
            if (usingLargeImages) {
                loadSmallImages();
            }
        }
    })


    function loadSmallImages() {
        console.log('Loading Small Images');
        usingLargeImages = false;
        $('#content-map-image').attr('src', '../images/content-map-sm.png');
        $('#wireframe-home-page-image').attr('src', '../images/SEIS751-wireframe-home-sm.png');
        $('#wireframe-featured-page-image').attr('src', '../images/SEIS751-wireframe-featured-sm.png');
        $('#wireframe-about-page-image').attr('src', '../images/SEIS751-wireframe-about-sm.png');
        $('#wireframe-contact-page-image').attr('src', '../images/SEIS751-wireframe-contact-sm.png');
    }

    function loadLargeImages() {
        console.log('Loading Large Images');
        usingLargeImages = true;
        $('#content-map-image').attr('src', '../images/content-map.png');
        $('#wireframe-home-page-image').attr('src', '../images/SEIS751-wireframe-home.png');
        $('#wireframe-featured-page-image').attr('src', '../images/SEIS751-wireframe-featured.png');
        $('#wireframe-about-page-image').attr('src', '../images/SEIS751-wireframe-about.png');
        $('#wireframe-contact-page-image').attr('src', '../images/SEIS751-wireframe-contact.png');
    }
})();