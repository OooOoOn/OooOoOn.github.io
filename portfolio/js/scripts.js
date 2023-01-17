
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

    //Typewriter animation*
    var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</i>';

            var that = this;
            var delta = 175 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }

            setTimeout(function() {
            that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };

    items.forEach(item => item.addEventListener('click', toggleAccordion));
    
    //Project slides*
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
        if(text !== '') {
        div.classList.add('timeline__items--item')
        }
        var method = document.createElement('div')
        method.id = `designprocess_${1}`
        method.innerHTML = text
        div.appendChild(method)
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
            case "gotohub":
                localStorage.setItem( 'projectTitle_storage', 'Goto Hub' );
                localStorage.setItem( 'introduction_storage', 'assets/img/introduction_gotohub.jpg' );
                localStorage.setItem( 'projectImage_1_storage', 'assets/img/gotohub_1.jpg' );
                localStorage.setItem( 'projectImage_2_storage', 'assets/img/gotohub_2.jpg' );
                localStorage.setItem( 'projectImage_3_storage', 'assets/img/gotohub_3.jpg' );
                localStorage.setItem( 'projectImage_4_storage', 'assets/img/gotohub_4.jpg' );
                localStorage.setItem( 'projectImage_5_storage', 'assets/img/gotohub_5.jpg' );
                localStorage.setItem( 'projectImage_6_storage', 'assets/img/gotohub_6.jpg' );
                localStorage.setItem( 'projectImage_7_storage', 'assets/img/gotohub_7.jpg' );
                localStorage.setItem( 'secondIteration_storage', '' );
                
                addTimelineItem('<b>Empathize</b><br/><i>Problem</i><br/><i>Goal</i><br/><i>Research</i><br/><i>Assumption</i><br/>', 1);
                addTimelineItem('<b>Define</b><br/><i>HMW</i><br/><i>Key</i><br/><i>Need</i><br/>', 1);
                addTimelineItem('<b>Ideate</b><br/><i>Concept</i><br/><i>User Flow</i><br/>', 1);
                addTimelineItem('<b>Prototype</b><br/><i>Mid-Fi</i><br/><i>IA</i><br/><i>Principles</i><br/><i>Future</i><br/>', 1);
                addTimelineItem('<b>Test</b><br/><i>Assessment</i><br/><i>Think Aloud</i><br/><i>5 second</i><br/>', 1);
                addTimelineItem('', 1);
                addDownloadableItem('assets/docs/gotohub.pdf')
                break;
            case "luminaireslocalizator":
                localStorage.setItem( 'projectTitle_storage', 'Signify Luminaires Localizator' );
                localStorage.setItem( 'introduction_storage', 'assets/img/signify_1.jpg' );
                localStorage.setItem( 'projectImage_1_storage', 'assets/img/signify_2.jpg' );
                localStorage.setItem( 'projectImage_2_storage', 'assets/img/signify_3.jpg' );
                localStorage.setItem( 'projectImage_3_storage', 'assets/img/signify_4.jpg' );
                localStorage.setItem( 'projectImage_4_storage', 'assets/img/signify_5.jpg' );
                localStorage.setItem( 'projectImage_5_storage', 'assets/img/signify_6.jpg' );
                localStorage.setItem( 'projectImage_6_storage', 'assets/img/signify_7.jpg' );
                localStorage.setItem( 'projectImage_7_storage', 'assets/img/signify_8.jpg' );
                localStorage.setItem( 'secondIteration_storage', '' );
                
                addTimelineItem('<b>Empathize</b><br/><i>Goal</i><br/><i>Stakeholders</i><br/>', 1);
                addTimelineItem('<b>Define</b><br/><i>Problem</i><br/><i>Requirements</i><br/>', 1);
                addTimelineItem('<b>Ideate</b><br/><i>Task Flow</i><br/><i>Features</i><br/>', 1);
                addTimelineItem('<b>Prototype</b><br/><i>Mid-Fi</i><br/>', 1);
                addTimelineItem('<b>Test</b><br/><i>Explorative</i><br/><i>Unmoderated</i><br/>', 1);
                addTimelineItem('', 1);

                addTimelineItem('<b>Prototype</b><br/><i>Hi-Fi</i><br/>', 2);
                addTimelineItem('<b>Test</b><br/><i>Lab Test</i><br/><i>Moderated</i><br/>', 2);
                addTimelineItem('', 2);
                addDownloadableItem('assets/docs/Signify.pdf')
                break;
            case "kangerluk":
                localStorage.setItem( 'projectTitle_storage', 'Kangerluk' );
                localStorage.setItem( 'introduction_storage', 'assets/img/kangerluk_8.jpg' );
                localStorage.setItem( 'projectImage_1_storage', 'assets/img/kangerluk_1.jpg' );
                localStorage.setItem( 'projectImage_2_storage', 'assets/img/kangerluk_2.jpg' );
                localStorage.setItem( 'projectImage_3_storage', 'assets/img/kangerluk_10.jpg' );
                localStorage.setItem( 'projectImage_4_storage', 'assets/img/kangerluk_4.jpg' );
                localStorage.setItem( 'projectImage_5_storage', 'assets/img/kangerluk_5.jpg' );
                localStorage.setItem( 'projectImage_6_storage', 'assets/img/kangerluk_6.jpg' );
                localStorage.setItem( 'projectImage_7_storage', 'assets/img/kangerluk_7.jpg' );
                localStorage.setItem( 'secondIteration_storage', '2nd Iteration.' );

                addTimelineItem('<b>Empathize</b><br/><i>Stakeholders</i><br/><i>Research</i><br/><i>Goal</i><br/>', 1);
                addTimelineItem('<b>Define</b><br/><i>Problem</i><br/><i>Requirements</i><br/><i>Persona</i><br/>', 1);
                addTimelineItem('<b>Ideate</b><br/><i>Sketch</i><br/><i>Mood Board</i><br/><i>Features</i><br/>', 1);
                addTimelineItem('<b>Prototype</b><br/><i>Low-Fi</i><br/>', 1);
                addTimelineItem('<b>Test</b><br/><i>Explorative</i><br/><i>Talk Aloud</i><br/><i>Click Test</i><br/><i>Heuristic</i><br/>', 1);
                addTimelineItem('', 1);
            
                addTimelineItem('<b>Prototype</b><br/><i>Hi-Fi</i><br/>', 2);
                addTimelineItem('<b>Test</b><br/><i>Interview</i><br/><i>Moderated</i><br/>', 2);
                addTimelineItem('', 2);
                addDownloadableItem('assets/docs/Kangerluk.pdf')
                break;
            case "mirtual":
                localStorage.setItem( 'projectTitle_storage', 'Mirtual' );
                localStorage.setItem( 'introduction_storage', 'assets/img/introduction_mirtual.jpg' );
                localStorage.setItem( 'projectImage_1_storage', 'assets/img/mirtual_1.jpg' );
                localStorage.setItem( 'projectImage_2_storage', 'assets/img/mirtual_2.jpg' );
                localStorage.setItem( 'projectImage_3_storage', 'assets/img/mirtual_3.jpg' );
                localStorage.setItem( 'projectImage_4_storage', 'assets/img/mirtual_1.jpg' );
                localStorage.setItem( 'projectImage_5_storage', 'assets/img/mirtual_2.jpg' );
                localStorage.setItem( 'projectImage_6_storage', 'assets/img/mirtual_3.jpg' );
                localStorage.setItem( 'projectImage_7_storage', 'assets/img/mirtual_1.jpg' );
                localStorage.setItem( 'secondIteration_storage', '' );
                
                addTimelineItem('<b>Empathize</b><br/><i>Stakeholders</i><br/><i>Competitors</i><br/><i>Focus Group</i><br/><i>Purpose</i><br/>', 1);
                addTimelineItem('<b>Define</b><br/><i>Mood Board</i><br/><i>Focus Group</i><Persona/><br><i>Scenario</i><br/>', 1);
                addTimelineItem('<b>Ideate</b><br/><i>Task Flow</i><br/><i>Focus Group</i><br/>', 1);
                addTimelineItem('<b>Prototype</b><br/><i>Hi-Fi</i><br/><i>IA</i><br/><i>Principles</i><br/>', 1);
                addTimelineItem('<b>Test</b><br/><i>Interview</i><br/>', 1);
                addTimelineItem('', 1);
                addDownloadableItem('assets/docs/Mirtual.pdf')
                break;
            case "carelyo":
                localStorage.setItem( 'projectTitle_storage', 'Carelyo' );
                localStorage.setItem( 'introduction_storage', 'assets/img/carelyo_8.jpg' );
                localStorage.setItem( 'projectImage_1_storage', 'assets/img/carelyo_1.jpg' );
                localStorage.setItem( 'projectImage_2_storage', 'assets/img/carelyo_2.jpg' );
                localStorage.setItem( 'projectImage_3_storage', 'assets/img/carelyo_3.jpg' );
                localStorage.setItem( 'projectImage_4_storage', 'assets/img/projects_12.jpg' );
                localStorage.setItem( 'projectImage_5_storage', 'assets/img/carelyo_4.jpg' );
                localStorage.setItem( 'projectImage_6_storage', 'assets/img/carelyo_6.jpg' );
                localStorage.setItem( 'projectImage_7_storage', 'assets/img/carelyo_9.jpg' );
                localStorage.setItem( 'secondIteration_storage', '' );
                
                addTimelineItem('<b>Empathize</b><br/><i>Stakeholders</i><br/><i>Competitors</i><br/><i>User Story</i><br/><i>Focus Group</i><br/>', 1);
                addTimelineItem('<b>Define</b><br/><i>Requirements</i><br/><i>Design System</i><br/>', 1);
                addTimelineItem('<b>Prototype</b><br/><i>Hi-Fi</i><br/>', 1);
                addTimelineItem('<b>Test</b><br/><i>A/B Test</i><br/><i>Talk Aloud</i><br/>', 1);
                addTimelineItem('', 1);
                addDownloadableItem('assets/docs/Carelyo.pdf')
                break;
                case "myhouse":
                    localStorage.setItem( 'projectTitle_storage', 'My House' );
                    localStorage.setItem( 'introduction_storage', 'assets/img/MyHouse_Mockup_sketch-1.png' );
                    localStorage.setItem( 'projectImage_1_storage', 'assets/img/myhouse_2.jpg' );
                    localStorage.setItem( 'projectImage_2_storage', 'assets/img/myhouse_3.jpg' );
                    localStorage.setItem( 'projectImage_3_storage', 'assets/img/myhouse_4.jpg' );
                    localStorage.setItem( 'projectImage_4_storage', 'assets/img/myhouse_5.jpg' );
                    localStorage.setItem( 'projectImage_5_storage', 'assets/img/myhouse_6.jpg' );
                    localStorage.setItem( 'projectImage_6_storage', 'assets/img/myhouse_7.jpg' );
                    localStorage.setItem( 'projectImage_7_storage', 'assets/img/myhouse_8.jpg' );
                    localStorage.setItem( 'secondIteration_storage', '2nd Iteration.' );
    
                    addTimelineItem('<b>Empathize</b><br/><i>Stakeholders</i><br/><i>Research</i><br/><i>Goal</i><br/>', 1);
                    addTimelineItem('<b>Define</b><br/><i>Problem</i><br/><i>Requirements</i><br/><i>Key</i><br/>', 1);
                    addTimelineItem('<b>Ideate</b><br/><i>Sketch</i><br/><i>Mindmap</i><br/><i>Features</i><br/><i>Sitemap</i><br/>', 1);
                    addTimelineItem('<b>Prototype</b><br/><i>Low-Fi</i><br/>', 1);
                    addTimelineItem('<b>Test</b><br/><i>Heuristic</i><br/><i>Interview</i><br/><i>Talk Aloud</i><br/>', 1);
                    addTimelineItem('', 1);
                    
                    addTimelineItem('<b>Prototype</b><br/><i>Hi-Fi</i><br/>', 2);
                    addTimelineItem('<b>Test</b><br/><i>Interview</i><br/><i>Click Test</i><br/>', 2);
                    addTimelineItem('', 2);
                    addDownloadableItem('assets/docs/MyHouse.pdf')
                break;
                case "rentestate":
                    localStorage.setItem( 'projectTitle_storage', 'RentEstate' );
                    localStorage.setItem( 'introduction_storage', 'assets/img/rentestate_1.jpg' );
                    localStorage.setItem( 'projectImage_1_storage', 'assets/img/rentestate_2.jpg' );
                    localStorage.setItem( 'projectImage_2_storage', 'assets/img/rentestate_3.jpg' );
                    localStorage.setItem( 'projectImage_3_storage', 'assets/img/rentestate_4.jpg' );
                    localStorage.setItem( 'projectImage_4_storage', 'assets/img/rentestate_5.jpg' );
                    localStorage.setItem( 'projectImage_5_storage', 'assets/img/rentestate_6.jpg' );
                    localStorage.setItem( 'projectImage_6_storage', 'assets/img/rentestate_7.jpg' );
                    localStorage.setItem( 'projectImage_7_storage', 'assets/img/rentestate_8.jpg' );
                    localStorage.setItem( 'secondIteration_storage', '' );
    
                    addTimelineItem('<b>Empathize</b><br/><i>Stakeholders</i><br/><i>Research</i><br/><i>Goal</i><br/>', 1);
                    addTimelineItem('<b>Define</b><br/><i>Problem</i><br/><i>Requirements</i><br/><i>Key</i><br/><i>User Story</i><br/>', 1);
                    addTimelineItem('<b>Ideate</b><br/><i>Wireframe</i><br/><i>Sitemap</i><br/><i>Features</i><br/><i>Task Flow</i><br/>', 1);
                    addTimelineItem('<b>Prototype</b><br/><i>Low-Fi</i><br/>', 1);
                    addTimelineItem('<b>Test</b><br/><i>Tree Test</i><br/><i>Interview</i><br/><i>Moderated</i><br/>', 1);
                    addTimelineItem('', 1);

                    addTimelineItem('<b>Prototype</b><br/><i>Hi-Fi</i><br/>', 2);
                    addTimelineItem('<b>Test</b><br/><i>Interview</i><br/><i>Moderated</i><br/>', 2);
                    addTimelineItem('', 2);
                    addDownloadableItem('assets/docs/RentEstate.pdf')
                break;
            default:
                break;
        }
        document.getElementById("projectTitle").innerHTML = localStorage.getItem('projectTitle_storage');
        document.getElementById("introduction").src = localStorage.getItem('introduction_storage');
        document.getElementById("projectImage_1").src = localStorage.getItem('projectImage_1_storage');
        document.getElementById("projectImage_2").src = localStorage.getItem('projectImage_2_storage');
        document.getElementById("projectImage_3").src = localStorage.getItem('projectImage_3_storage');
        document.getElementById("projectImage_4").src = localStorage.getItem('projectImage_4_storage');
        document.getElementById("projectImage_5").src = localStorage.getItem('projectImage_5_storage');
        document.getElementById("projectImage_6").src = localStorage.getItem('projectImage_6_storage');
        document.getElementById("projectImage_7").src = localStorage.getItem('projectImage_7_storage');
        document.getElementById("secondIteration").innerHTML = localStorage.getItem('secondIteration_storage');
    }
