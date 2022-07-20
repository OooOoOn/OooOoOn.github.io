
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
            addTimelineItem('Empathize<br/>(<i>Research</i>)<br/>(<i>Assumptions</i>)<br/>(<i>Survey</i>)', 1);
            addTimelineItem('Define<br/>(<i>Persona</i>)<br/>(<i>Requirements</i>)', 1);
            addTimelineItem('Ideate<br/>(<i>Concept</i>)<br/>(<i>Features</i>)<br/>(<i>Sketch</i>)', 1);
            addTimelineItem('Prototype<br/>(<i>Mid-Fi</i>)', 1);
            addTimelineItem('Test<br/>(<i>Explorative</i>)<br/>(<i>Think Aloud</i>)', 1);
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
            addTimelineItem('Empathize<br/>(<i>Goal</i>)<br/>(<i>Assumptions</i>)<br/>(<i>Research</i>)', 1);
            addTimelineItem('Define<br/>(<i>Persona</i>)<br/>(<i>Requirements</i>)<br/>(<i>Problem</i>)', 1);
            addTimelineItem('Ideate<br/>(<i>Research</i>)<br/>(<i>Features</i>)<br/>(<i>Sketch</i>)', 1);
            addTimelineItem('Prototype<br/>(<i>Mid-Fi</i>)', 1);
            addTimelineItem('Test<br/>(<i>Assessment</i>)<br/>(<i>Interview</i>)', 1);
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
            addTimelineItem('Map<br/>(<i>Research</i>)<br/>(<i>Assumptions</i>)<br/>(<i>Interview</i>)<br/>(<i>Expectations</i>)', 1);
            addTimelineItem('Sketch<br/>(<i>Inspiration</i>)<br/>(<i>Features</i>)', 1);
            addTimelineItem('Decide<br/>(<i>Heatmap</i>)<br/>(<i>User flow</i>)<br/>(<i>Storyboard</i>)', 1);
            addTimelineItem('Prototype<br/>(<i>Low-Fi</i>)<br/>(<i>Hypothesis</i>)', 1);
            addTimelineItem('Test<br/>(<i>Talk aloud</i>)(<i>Moderated</i>)', 1);
            addTimelineItem('End', 1);
            addTimelineItem('Start', 2);
            addTimelineItem('Empathize<br/>(<i>Goal</i>)<br/>(<i>Persona</i>)', 2);
            addTimelineItem('Define<br/>(<i>Key</i>)<br/>(<i>Aspiration</i>)<br/>(<i>Requirements</i>)', 2);
            addTimelineItem('Ideate<br/>(<i>Features</i>)<br/>(<i>Wireframe</i>)', 2);
            addTimelineItem('Prototype<br/>(<i>Mid-Fi</i>)<br/>(<i>Focus areas</i>)', 2);
            addTimelineItem('Test<br/>(<i>Assessment</i>)<br/>(<i>A/B</i>)<br/>(<i>Moderated</i>)', 2);
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
            addTimelineItem('Empathize<br/>(<i>Problem</i>)<br/>(<i>Goal</i>)<br/>(<i>Survey</i>)', 1);
            addTimelineItem('Define<br/>(<i>Persona</i>)<br/>(<i>Key</i>)<br/>(<i>Interviews</i>)', 1);
            addTimelineItem('Ideate<br/>(<i>Storyboard</i>)<br/>(<i>Challenges</i>)<br/>(<i>Concept</i>)', 1);
            addTimelineItem('Prototype<br/>(<i>Low-Fi</i>)', 1);
            addTimelineItem('Test<br/>(<i>Explorative</i>)<br/>(<i>A/B</i>)(<i>Unmoderated</i>)', 1);
            addTimelineItem('End', 1);
            addTimelineItem('Start', 2);
            addTimelineItem('Revise', 2);
            addTimelineItem('Define<br/>(<i>Interviews</i>)', 2);
            addTimelineItem('Prototype<br/>(<i>Low-Fi</i>)', 2);
            addTimelineItem('Test<br/>(<i>Assessment</i>)<br/>(<i>A/B</i>)<br/>(<i>Unmoderated</i>)', 2);
            addTimelineItem('End', 2);
            addDownloadableItem('assets/docs/emergency_checklists.pdf')
            break;
        case "gotohub":
            localStorage.setItem( 'projectTitle_storage', 'Goto Hub' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/gotohub_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/gotohub_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/gotohub_3.jpg' );
            localStorage.setItem( 'secondIteration_storage', '' );
            addTimelineItem('Start', 1);
            addTimelineItem('Empathize<br/>(<i>Problem</i>)<br/>(<i>Goal</i>)<br/>(<i>Research</i>)<br/>(<i>Assumption</i>)', 1);
            addTimelineItem('Define<br/>(<i>HMW</i>)<br/>(<i>Key</i>)<br/>(<i>Need</i>)', 1);
            addTimelineItem('Ideate<br/>(<i>Concept</i>)<br/>(<i>User Flow</i>)', 1);
            addTimelineItem('Prototype<br/>(<i>Mid-Fi</i>)<br/>(<i>IA</i>)<br/>(<i>Principles</i>)<br/>(<i>Future</i>)', 1);
            addTimelineItem('Test<br/>(<i>Assessment</i>)<br/>(<i>Think Aloud</i>)(<i>5 second</i>)', 1);
            addTimelineItem('End', 1);
            addDownloadableItem('assets/docs/gotohub.pdf')
            break;
        case "wolt":
            localStorage.setItem( 'projectTitle_storage', 'WOLT' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/projects_6.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/projects_6.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/projects_6.jpg' );
            localStorage.setItem( 'secondIteration_storage', '' );
            addTimelineItem('Start', 1);
            addTimelineItem('Empathize<br/>(<i>Purpose</i>)<br/>(<i>Goal</i>)<br/>(<i>Research</i>)<br/>(<i>Competitor analysis</i>)', 1);
            addTimelineItem('Test<br/>(<i>Interview</i>)<br/>(<i>Criteria</i>)<br/>(<i>Insights</i>)', 1);
            addTimelineItem('Evaluate<br/>(<i>Sweet spot</i>)<br/>(<i>Priorities</i>)<br/>(<i>User journey</i>)', 1);
            addTimelineItem('Ideate<br/>(<i>HMW</i>)<br/>(<i>Action points</i>)', 1);
            addTimelineItem('Future<br/>(<i>Reexamine</i>)<br/>(<i>Additional Testing</i>)', 1);
            addTimelineItem('End', 1);
            addDownloadableItem('assets/docs/gotohub.pdf')
            break;
        case "urbanfarming":
            localStorage.setItem( 'projectTitle_storage', 'Urban Farming Project' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/urban_farming_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/urban_farming_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/urban_farming_3.jpg' );
            localStorage.setItem( 'secondIteration_storage', '' );
            addTimelineItem('Start', 1);
            addTimelineItem('Empathize<br/>(<i>Purpose</i>)<br/>(<i>Goal</i>)<br/>(<i>Research</i>)<br/>(<i>Competitor analysis</i>)', 1);
            addTimelineItem('Test<br/>(<i>Interview</i>)<br/>(<i>Criteria</i>)<br/>(<i>Insights</i>)', 1);
            addTimelineItem('Evaluate<br/>(<i>Sweet spot</i>)<br/>(<i>Priorities</i>)<br/>(<i>User journey</i>)', 1);
            addTimelineItem('Ideate<br/>(<i>HMW</i>)<br/>(<i>Action points</i>)', 1);
            addTimelineItem('Future<br/>(<i>Reexamine</i>)<br/>(<i>Additional Testing</i>)', 1);
            addTimelineItem('End', 1);
            addDownloadableItem('assets/docs/gotohub.pdf')
            break;
        case "swedisharmedforces":
            localStorage.setItem( 'projectTitle_storage', 'Swedish Armed Forces' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/projects_8.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/projects_8.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/projects_8.jpg' );
            localStorage.setItem( 'secondIteration_storage', '' );
            addTimelineItem('Start', 1);
            addTimelineItem('Components<br/>(<i>Purpose</i>)<br/>(<i>Goal</i>)<br/>(<i>Research</i>)<br/>(<i>Competitor analysis</i>)', 1);
            addTimelineItem('Prototype<br/>(<i>Interview</i>)<br/>(<i>Criteria</i>)<br/>(<i>Insights</i>)', 1);
            addTimelineItem('Layout<br/>(<i>Sweet spot</i>)<br/>(<i>Priorities</i>)<br/>(<i>User journey</i>)', 1);
            addTimelineItem('End', 1);
            addDownloadableItem('assets/docs/swedish_armed_forces_80s.pdf')
            break;
        case "luminaireslocalizator":
            localStorage.setItem( 'projectTitle_storage', 'Luminaires Localizator' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/luminaireslocalizator_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/luminaireslocalizator_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/luminaireslocalizator_3.jpg' );
            localStorage.setItem( 'secondIteration_storage', '' );
            addTimelineItem('Start', 1);
            addTimelineItem('Empathize<br/>(<i>Problem</i>)<br/>(<i>Goal</i>)<br/>(<i>Research</i>)<br/>(<i>Assumptions</i>)', 1);
            addTimelineItem('Define<br/>(<i>Persona</i>)<br/>(<i>HMW</i>)<br/>(<i>Key</i>)<br/>(<i>Need</i>)', 1);
            addTimelineItem('Ideate<br/>(<i>Features</i>)<br/>(<i>Principles</i>)<br/>(<i>User Flow</i>)', 1);
            addTimelineItem('Prototype<br/>(<i>Mid-Fi</i>)', 1);
            addTimelineItem('End', 1);
            addDownloadableItem('assets/docs/Luminaire_localizator.pdf')
            break;
        case "kangerluk":
            localStorage.setItem( 'projectTitle_storage', 'Kangerluk' );
            localStorage.setItem( 'projectImage_1_storage', 'assets/img/kangerluk_1.jpg' );
            localStorage.setItem( 'projectImage_2_storage', 'assets/img/kangerluk_2.jpg' );
            localStorage.setItem( 'projectImage_3_storage', 'assets/img/kangerluk_3.jpg' );
            localStorage.setItem( 'secondIteration_storage', '2nd Iteration' );
            addTimelineItem('Start', 1);
            addTimelineItem('Empathize<br/>(<i>Assumptions</i>)<br/>(<i>Research</i>)<br/>(<i>Goal</i>)<br/>(<i>problem</i>)', 1);
            addTimelineItem('Define<br/>(<i>HMW</i>)<br/>(<i>Need</i>)<br/>(<i>Key</i>)<br/>(<i>Persona</i>)', 1);
            addTimelineItem('Ideate<br/>(<i>Sketch</i>)<br/>(<i>Mood Board</i>)<br/>(<i>Features</i>)<br/>(<i>Design focus</i>)', 1);
            addTimelineItem('Prototype<br/>(<i>Mid-Fi</i>)', 1);
            addTimelineItem('Test<br/>(<i>Explorative</i>)<br/>(<i>Interview</i>)<br/>(<i>Survey</i>)', 1);
            addTimelineItem('End', 1);
            addTimelineItem('Start', 2);
            addTimelineItem('Define<br/>(<i>Pain points</i>)<br/>(<i>Preferences</i>)<br/>(<i>Misconceptions</i>)', 2);
            addTimelineItem('Prototype<br/>(<i>Hi-Fi</i>)', 2);
            addTimelineItem('Test<br/>(<i>Heuristic</i>)<br/>(<i>Talk Aloud</i>)<br/>(<i>Click</i>)<br/>(<i>Moderated</i>)', 2);
            addTimelineItem('End', 2);
            addDownloadableItem('assets/docs/kangerluk.pdf')
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
