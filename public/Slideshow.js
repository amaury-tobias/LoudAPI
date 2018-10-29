var slideIndex1, slideIndex2, slideIndex3

function changeSlides(n, sI) 
{
    switch(n)
        {
            case 1:
                showSlides(n, slideIndex1 += sI);       
            break;
            case 2:
                showSlides(n, slideIndex2 += sI);       
            break;
            case 3:
                showSlides(n, slideIndex3 += sI);       
            break;
        }  
}

function currentSlide(n, sI) 
{
    switch(n)
    {
        case 1:
            showSlides(n, slideIndex1 = sI);       
        break;
        case 2:
            showSlides(n, slideIndex2 = sI);       
        break;
        case 3:
            showSlides(n, slideIndex3 = sI);       
        break;
    }  
}

function showSlides(n, sI) 
{
    var i, slides, thumbnails;

    switch(n)
        {
            case 1:
                // Get slides and thumbnails.
                slides = document.getElementsByClassName("slide1");
                thumbnails = document.getElementsByClassName("thumbnail1");

                // Cycle through slides if necessary.
                if (sI > slides.length) {slideIndex1 = 1}
                if (sI < 1) {slideIndex1 = slides.length}

                // Hide slides.
                for (i = 0; i < slides.length; i++)
                    slides[i].style.display = "none";

                // Remove active thumbnails.
                for (i = 0; i < thumbnails.length; i++)
                        thumbnails[i].className = thumbnails[i].className.replace(" active", "");

                // Show slide and make active thumbnail.
                slides[slideIndex1-1].style.display = "block";
                thumbnails[slideIndex1-1].className += " active"; 
            break;
            case 2:
                // Get slides and thumbnails.
                slides = document.getElementsByClassName("slide2");
                thumbnails = document.getElementsByClassName("thumbnail2");

                // Cycle through slides if necessary.
                if (sI > slides.length) {slideIndex2 = 1}
                if (sI < 1) {slideIndex2 = slides.length}

                // Hide slides.
                for (i = 0; i < slides.length; i++)
                    slides[i].style.display = "none";

                // Remove active thumbnails.
                for (i = 0; i < thumbnails.length; i++)
                        thumbnails[i].className = thumbnails[i].className.replace(" active", "");

                // Show slide and make active thumbnail.
                slides[slideIndex2-1].style.display = "block";
                thumbnails[slideIndex2-1].className += " active"; 
            break;
            case 3:
                // Get slides and thumbnails.
                slides = document.getElementsByClassName("slide3");
                thumbnails = document.getElementsByClassName("thumbnail3");

                // Cycle through slides if necessary.
                if (sI > slides.length) {slideIndex3 = 1}
                if (sI < 1) {slideIndex3 = slides.length}

                // Hide slides.
                for (i = 0; i < slides.length; i++)
                    slides[i].style.display = "none";

                // Remove active thumbnails.
                for (i = 0; i < thumbnails.length; i++)
                        thumbnails[i].className = thumbnails[i].className.replace(" active", "");

                // Show slide and make active thumbnail.
                slides[slideIndex3-1].style.display = "block";
                thumbnails[slideIndex3-1].className += " active"; 
            break;
        }
}

$(document).ready
(
    function() 
    {      
        $(".next1, .prev1").click
        (
            function()
            {                
                var a = $('.thumbnail1.active');
                var g = $('.gallery1');
                var pos = a.offset().left + a.outerWidth(true)/2 + g.scrollLeft() - g.width()/2;
                g.animate({scrollLeft: pos});
            }
        );    
        $(".next2, .prev2").click
        (
            function()
            {                
                var a = $('.thumbnail2.active');
                var g = $('.gallery2');
                var pos = a.offset().left + a.outerWidth(true)/2 + g.scrollLeft() - g.width()/2;
                g.animate({scrollLeft: pos});
            }
        );
        $(".next3, .prev3").click
        (
            function()
            {                
                var a = $('.thumbnail3.active');
                var g = $('.gallery3');
                var pos = a.offset().left + a.outerWidth(true)/2 + g.scrollLeft() - g.width()/2;
                g.animate({scrollLeft: pos});
            }
        );
    }
);

