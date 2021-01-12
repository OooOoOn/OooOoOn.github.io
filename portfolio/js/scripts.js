 
    //Contact me animation*
   $('button').click(function(){
    $('button').toggleClass('active');
    $('.title').toggleClass('active');
    $('nav').toggleClass('active');
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
  });
  
  function showSlide(n) {
  
    const slides = document.getElementsByClassName('slide');
    let modalPreviews = document.getElementsByClassName('modal-preview');
  
    if (n > slides.length) {
      slideIndex = 1;	
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
  
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';

    if (modalPreviews.length < 1) {
        return;
    }
    modalPreviews[slideIndex - 1].className += ' active';
  }

  var slideIndex = 1;
  showSlide(slideIndex);
  
  function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
  }
  
  function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
  }
  
  function changeSlide(n) {
      showSlide(slideIndex += n);
  }
  
  function toSlide(n) {
      showSlide(slideIndex = n);
  }

  
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

$(window).load(function(){
    $('#wrapper').addClass('loaded');
  });
  
  $('.more-info').click(function(){
    $("#card").toggleClass('flip');
    $('#arrow').remove();
  });
  $('#background').click(function(){
    $('#card').removeClass('flip');
  });

  /* Get chat user info for dynamic chat */
function projectGallery(project) {
    localStorage.removeItem('projectTitle');
    localStorage.removeItem('projectFeatures');
    switch (project) {
        case "träffpunkten":
            localStorage.setItem( 'projectTitle_storage', 'Träffpunkten' );
            var tags = ["#Social", "#Chatt", "#Activities", "#CSS", "#Bootstrap", "#JS", "#JQuery"];
            localStorage.setItem( 'projectFeatures_storage', JSON.stringify(tags).replaceAll("[", " ").replaceAll(",", " ").replaceAll("]", " ").replaceAll("\"", " "));
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/träffpunkten_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/träffpunkten_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/träffpunkten_3.jpg' );
            break;   
        case "cleano":
            localStorage.setItem( 'projectTitle_storage', 'Cleano' );
            var tags = ["#Tasks", "#Games", "#Family", "#Bootstrap", "#JS", "#JQuery"];
            localStorage.setItem( 'projectFeatures_storage', JSON.stringify(tags).replaceAll("[", " ").replaceAll(",", " ").replaceAll("]", " ").replaceAll("\"", " "));
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/cleano_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/cleano_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/cleano_3.jpg' );
            break;    
        case "carbonfootprint":
            localStorage.setItem( 'projectTitle_storage', 'Carbon Footprint' );
            var tags = ["#Challenges", "#Multiplayer", "#Tamagotchi", "#JQuery", "#CSS", "#Bootstrap", "#JS"];
            localStorage.setItem( 'projectFeatures_storage', JSON.stringify(tags).replaceAll("[", " ").replaceAll(",", " ").replaceAll("]", " ").replaceAll("\"", " "));
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/carbonfootprint_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/carbonfootprint_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/carbonfootprint_3.jpg' );
            break;    
        case "halvåttahosgert":
            localStorage.setItem( 'projectTitle_storage', 'Halv Åtta hos Gert' );
            var tags = ["#JS", "#Parallax Background", "#Restaurant", "#CSS"];
            localStorage.setItem( 'projectFeatures_storage', JSON.stringify(tags).replaceAll("[", " ").replaceAll(",", " ").replaceAll("]", " ").replaceAll("\"", " "));
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/halvåttahosgert_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/halvåttahosgert_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/halvåttahosgert_3.jpg' );
            break;       
        default:
            break;
    }
    document.getElementById("projectTitle").innerHTML = localStorage.getItem('projectTitle_storage');
    document.getElementById("projectFeatures").innerHTML = localStorage.getItem('projectFeatures_storage');
    document.getElementById("projectImage_1").src = localStorage.getItem('projectImage_1_storage');
    document.getElementById("projectImage_2").src = localStorage.getItem('projectImage_2_storage');
    document.getElementById("projectImage_3").src = localStorage.getItem('projectImage_3_storage');
}
