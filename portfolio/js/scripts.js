
    //Contact me animation*
   $('button').click(function(){
    $('button').toggleClass('active');
    $('.title').toggleClass('active');
    $('nav').toggleClass('active');
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
  });

  const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

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

    function showGroup(n) {

    const groups = document.getElementsByClassName('group');

    if (n > groups.length) {
      groupIndex = 1;
    }

    if (n < 1) {
        groupIndex = groups.length;
    }

    for (let i = 0; i < groups.length; i++) {
        groups[i].style.display = "none";
    }
    groups[groupIndex - 1].style.display = 'flex';
  }

  var slideIndex = 1;
  showSlide(slideIndex);

  var groupIndex = 1;
  showGroup(groupIndex)

  function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
  }

  function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
  }

  function changeSlide(n) {
      showSlide(slideIndex += n);
  }

  function changeGroup(n) {
      showGroup(groupIndex += n);
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

   /* Downloadable project */
function addDownloadableItem(project) {
    var div = document.getElementById('downloadable_project');
    div.href = project;
}

  /* UX design process */
function addTimelineItem(text, row) {
    var div = document.createElement('div')
    div.classList.add('timeline__items--item')
    var p = document.createElement('p')
    p.id = `designprocess_${1}`
    p.innerHTML = text
    div.appendChild(p)
    document.getElementsByClassName('timeline__items' + row)[0].appendChild(div)
}

  /* Project overview */
function projectGallery(project) {
    localStorage.removeItem('projectTitle');
    localStorage.removeItem('designprocess_1');
    localStorage.removeItem('designprocess_2');
    localStorage.removeItem('designprocess_3');
    localStorage.removeItem('designprocess_4');
    localStorage.removeItem('designprocess_5');
    localStorage.removeItem('designprocess_6');
    localStorage.removeItem('designprocess_7');
    localStorage.removeItem('secondIteration');
    document.getElementsByClassName('timeline__items1')[0].innerHTML = ''
    document.getElementsByClassName('timeline__items2')[0].innerHTML = ''
    
    switch (project) {
        case "träffpunkten":
            localStorage.setItem( 'projectTitle_storage', 'Träffpunkten' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/träffpunkten_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/träffpunkten_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/träffpunkten_3.jpg' );
            localStorage.setItem( 'secondIteration_storage', '' );
            addTimelineItem('Start', 1);
            addTimelineItem('Emphatize\n(<i>Research</i>)\n(<i>Assumptions</i>)\n(<i>Survey</i>)', 1);
            addTimelineItem('Define\n(<i>Persona</i>)\n(<i>Requirements</i>)', 1);
            addTimelineItem('Ideate\n(<i>Concept</i>)\n(<i>Features</i>)\n(<i>Sketch</i>)', 1);
            addTimelineItem('Prototype\n(<i>Mid-Fi</i>)', 1);
            addTimelineItem('Test\n(<i>Explorative</i>)\n(<i>Think Aloud</i>)', 1);
            addTimelineItem('End', 1);
            addDownloadableItem('assets/docs/Träffpunkten.pdf')
            break;
        case "cleano":
            localStorage.setItem( 'projectTitle_storage', 'Cleano' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/cleano_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/cleano_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/cleano_3.jpg' );
            localStorage.setItem( 'secondIteration_storage', '' );
            addTimelineItem('Start', 1);
            addTimelineItem('Emphatize\n(<i>Goal</i>)\n(<i>Assumptions</i>)\n(<i>Research</i>)', 1);
            addTimelineItem('Define\n(<i>Persona</i>)\n(<i>Requirements</i>)\n(<i>Problem</i>)', 1);
            addTimelineItem('Ideate\n(<i>Research</i>)\n(<i>Features</i>)\n(<i>Sketch</i>)', 1);
            addTimelineItem('Prototype\n(<i>Mid-Fi</i>)', 1);
            addTimelineItem('Test\n(<i>Assessment</i>)\n(<i>Interview</i>)', 1);
            addTimelineItem('End', 1);
            addDownloadableItem('assets/docs/Cleano.pdf')
            break;
        case "carbonfootprint":
            localStorage.setItem( 'projectTitle_storage', 'Carbon Footprint' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/carbonfootprint_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/carbonfootprint_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/carbonfootprint_3.jpg' );
            localStorage.setItem( 'secondIteration_storage', '2nd Iteration' );
            addTimelineItem('Start', 1);
            addTimelineItem('Map\n(<i>Research</i>)\n(<i>Assumptions</i>)\n(<i>Interview</i>)\n(<i>Expectations</i>)', 1);
            addTimelineItem('Sketch\n(<i>Inspiration</i>)\n(<i>Features</i>)', 1);
            addTimelineItem('Decide\n(<i>Heatmap</i>)\n(<i>User flow</i>)\n(<i>Storyboard</i>)', 1);
            addTimelineItem('Prototype\n(<i>Low-Fi</i>)\n(<i>Hypothesis</i>)', 1);
            addTimelineItem('Test\n(<i>Talk aloud</i>)(<i>Moderated</i>)', 1);
            addTimelineItem('End', 1);
            addTimelineItem('Start', 2);
            addTimelineItem('Empathize\n(<i>Goal</i>)\n(<i>Persona</i>)', 2);
            addTimelineItem('Define\n(<i>Key</i>)\n(<i>Aspiration</i>)\n(<i>Requirements</i>)', 2);
            addTimelineItem('Ideate\n(<i>Features</i>)\n(<i>Wireframe</i>)', 2);
            addTimelineItem('Prototype\n(<i>Mid-Fi</i>)\n(<i>Focus areas</i>)', 2);
            addTimelineItem('Test\n(<i>Assessment</i>)\n(<i>A/B</i>)\n(<i>Moderated</i>)', 2);
            addTimelineItem('End', 2);
            addDownloadableItem('assets/docs/carbon_footprint.pdf')
            break;
        case "emergencychecklists":
            localStorage.setItem( 'projectTitle_storage', 'Emergency Checklists' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/emergencychecklists_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/emergencychecklists_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/emergencychecklists_3.jpg' );
            localStorage.setItem( 'secondIteration_storage', '2nd Iteration' );
            addTimelineItem('Start', 1);
            addTimelineItem('Emphatize\n(<i>Problem</i>)\n(<i>Goal</i>)\n(<i>Survey</i>)', 1);
            addTimelineItem('Define\n(<i>Persona</i>)\n(<i>Key</i>)\n(<i>Interviews</i>)', 1);
            addTimelineItem('Ideate\n(<i>Storyboard</i>)\n(<i>Challenges</i>)\n(<i>Concept</i>)', 1);
            addTimelineItem('Prototype\n(<i>Low-Fi</i>)', 1);
            addTimelineItem('Test\n(<i>Explorative</i>)\n(<i>A/B</i>)(<i>Unmoderated</i>)', 1);
            addTimelineItem('End', 1);
            addTimelineItem('Start', 2);
            addTimelineItem('Revise', 2);
            addTimelineItem('Define\n(<i>Interviews</i>)', 2);
            addTimelineItem('Prototype\n(<i>Low-Fi</i>)', 2);
            addTimelineItem('Test\n(<i>Assessment</i>)\n(<i>A/B</i>)\n(<i>Unmoderated</i>)', 2);
            addTimelineItem('End', 2);
            addDownloadableItem('assets/docs/emergency_checklists.pdf')
            break;
        case "gotohub":
            localStorage.setItem( 'projectTitle_storage', 'Goto Hub' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/gotohub_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/gotohub_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/gotohub_3.jpg' );
            break;
        default:
            break;
    }
    document.getElementById("projectTitle").innerHTML = localStorage.getItem('projectTitle_storage');
    document.getElementById("projectImage_1").src = localStorage.getItem('projectImage_1_storage');
    document.getElementById("projectImage_2").src = localStorage.getItem('projectImage_2_storage');
    document.getElementById("projectImage_3").src = localStorage.getItem('projectImage_3_storage');
    document.getElementById("secondIteration").innerHTML = localStorage.getItem('secondIteration_storage');
}
