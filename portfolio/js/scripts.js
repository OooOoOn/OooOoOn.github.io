    
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml14 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '.ml14 .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeInOutExpo",
        duration: 1100
    }).add({
        targets: '.ml14 .letter',
        opacity: [0,1],
        translateX: [40,0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 1100,
        offset: '-=600',
        delay: (el, i) => 150 + 25 * i
    });
    
    
    {
    class SliderClip {
      constructor(el) {
        this.el = el;
        this.Slides = Array.from(this.el.querySelectorAll('li'));
        this.Nav = Array.from(this.el.querySelectorAll('nav a'));
        this.totalSlides = this.Slides.length;
        this.current = 0;
        this.autoPlay = true; //true or false
        this.timeTrans = 4000; //transition time in milliseconds
        this.IndexElements = [];
  
        for (let i = 0; i < this.totalSlides; i++) {
          this.IndexElements.push(i);
        }
  
        this.setCurret();
        this.initEvents();
      }
      setCurret() {
        this.Slides[this.current].classList.add('current2');
        this.Nav[this.current].classList.add('current_dot');
      }
      initEvents() {
        const self = this;
  
        this.Nav.forEach(dot => {
          dot.addEventListener('click', ele => {
            ele.preventDefault();
            this.changeSlide(this.Nav.indexOf(dot));
          });
        });
  
        this.el.addEventListener('mouseenter', () => self.autoPlay = false);
        this.el.addEventListener('mouseleave', () => self.autoPlay = true);
  
        setInterval(function () {
          if (self.autoPlay) {
            self.current = self.current < self.Slides.length - 1 ? self.current + 1 : 0;
            self.changeSlide(self.current);
          }
        }, this.timeTrans);
  
      }
      changeSlide(index) {
  
        this.Nav.forEach(allDot => allDot.classList.remove('current_dot'));
  
        this.Slides.forEach(allSlides => allSlides.classList.remove('prev2', 'current2'));
  
        const getAllPrev = value => value < index;
  
        const prevElements = this.IndexElements.filter(getAllPrev);
  
        prevElements.forEach(indexPrevEle => this.Slides[indexPrevEle].classList.add('prev2'));
  
        this.Slides[index].classList.add('current2');
        this.Nav[index].classList.add('current_dot');
      }}
  
  
    const slider = new SliderClip(document.querySelector('.slider2'));
  }


// Refs
const wrapCta  = document.querySelector('#wrap-cta'),
      btnCta   = document.querySelector('#cta'),
      content  = document.querySelector('#content'),
      btnClose = document.querySelector('#close');


// Anime.js Commons Values for SVG Morph
const common = {
  targets: '.polymorph',
  easing: 'easeOutQuad',
  duration: 600,
  loop: false
};


// // Show content on click
// btnCta.addEventListener('click', () => {
//   // Elements apparence
//   wrapCta.classList.remove('active');
//   content.classList.add('active');
  
//   // Morph SVG
//   anime({
//     ...common,
//     points: [
//       { value: '215,110 0,110 186,86 215,0' }
//     ],
//   });
// });


// // Hide content  
// btnClose.addEventListener('click', () => {
//   // Elements apparence
//   content.classList.remove('active');
//   wrapCta.classList.add('active');
  
//   // Morph SVG
//   anime({
//     ...common,
//     points: [
//       { value: '215,110 0,110 0,0 215,0' }
//     ]
//   }); 
// });

    
    //Animated bee

    const path = anime.path('#path');

    const timeline = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 1000,
    complete: () => {
        anime({
        targets: '.leaf',
        rotate: 40,
        duration: 3000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad'
        });
        anime({
        targets: '.petals',
        scale: 1.05,
        duration: 6000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad'
        });
    }
    });

    timeline.add({
    targets: '.stem',
    scale: [0, 1],
    })

    timeline.add({
    targets: '.leaf',
    rotate: [0, 45],
    })
    timeline.add({
    targets: '.petals',
    scale: [0, 1],
    }, '-=1000');

    timeline.add({
    targets: '#bee',
    opacity: [0, 1],
    }, '-=750');


    anime({
    targets: '#bee',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    loop: true,
    duration: 6500,
    easing: 'linear'
    });
    
    //Portfolio*
    
    function init() {
        const slider = document.querySelector(".slider");
        const nextBtn = slider.querySelector(".slider .nav .next");
        const prevBtn = slider.querySelector(".slider .nav .prev");
        const items = slider.querySelectorAll(".slider .item");
    
        let current = 0;
    
        items.forEach((item) => {
        const textWrapper = item.querySelector(".wrap");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );
        });
    
        function anim(current, next, callback) {
        const currentImgs = current.querySelectorAll(".img");
        const currentText = current.querySelectorAll(".content .letter");
        const nextImgs = next.querySelectorAll(".img");
        const nextText = next.querySelectorAll(".content .letter");
    
        const t = 400;
        const offset = "-=" + t*.4;
        const imgOffset = t*.8;
    
        const tl = anime.timeline({
            easing: "easeInOutQuint",
            duration: t,
            complete: callback
        });
    
        // Add children
        tl.add({
            targets: currentText,
            translateY: [0, '-.75em'],
            /*clipPath: ['polygon(0 0, 100% 0, 100% 100%, 0% 100%)', 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'],*/
            opacity: [1, 0],
            easing: "easeInQuint",
            duration: t,
            delay: (el, i) => 10 * (i + 1)
        })
            .add(
            {
                targets: currentImgs[0],
                translateY: -600,
                translateZ: 0,
                rotate: [0, '-15deg'],
                opacity: [1, 0],
                easing: "easeInCubic"
            },
            offset
            )
            .add(
            {
                targets: currentImgs[1],
                translateY: -600,
                translateZ: 0,
                rotate: [0, '15deg'],
                opacity: [1, 0],
                easing: "easeInCubic"
            },
            "-=" + imgOffset
            )
            .add(
            {
                targets: currentImgs[2],
                translateY: -600,
                translateZ: 0,
                rotate: [0, '-15deg'],
                opacity: [1, 0],
                easing: "easeInCubic"
            },
            "-=" + imgOffset
            )
            .add(
            {
                targets: currentImgs[3],
                translateY: -600,
                translateZ: 0,
                rotate: [0, '15deg'],
                opacity: [1, 0],
                easing: "easeInCubic"
            },
            "-=" + imgOffset
            )
            .add({
            targets: current,
            opacity: 0,
            visibility: 'hidden',
            duration: 10,
            easing: "easeInCubic"
            })
            .add(
            {
                targets: next,
                opacity: 1,
                visibility: 'visible',
                duration: 10
            },
            offset
            )
            .add(
            {
                targets: nextImgs[0],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ['15deg', 0],
                opacity: [0, 1],
                easing: "easeOutCubic"
            },
            offset
            )
            .add(
            {
                targets: nextImgs[1],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ['-15deg', 0],
                opacity: [0, 1],
                easing: "easeOutCubic"
            },
            "-=" + imgOffset
            )
            .add(
            {
                targets: nextImgs[2],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ['15deg', 0],
                opacity: [0, 1],
                easing: "easeOutCubic"
            },
            "-=" + imgOffset
            )
            .add(
            {
                targets: nextImgs[3],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ['-15deg', 0],
                opacity: [0, 1],
                easing: "easeOutCubic"
            },
            "-=" + imgOffset
            )
            .add(
            {
                targets: nextText,
                translateY: ['.75em', 0],
                translateZ: 0,
                /*clipPath: ['polygon(0 0, 100% 0, 100% 0, 0 0)','polygon(0 0, 100% 0, 100% 100%, 0% 100%)'],*/
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: t*1.5,
                delay: (el, i) => 10 * (i + 1)
            },
            offset
            );
        }
    
        let isPlaying = false;
    
        function updateSlider(newIndex) {
        const currentItem = items[current];
        const newItem = items[newIndex];
    
        function callback() {
            currentItem.classList.remove("is-active");
            newItem.classList.add("is-active");
            current = newIndex;
            isPlaying = false;
        }
    
        anim(currentItem, newItem, callback);
        }
    
        function next() {
        if (isPlaying) return;
        isPlaying = true;
        const newIndex = current === items.length - 1 ? 0 : current + 1;
        updateSlider(newIndex);
        }
    
        function prev() {
        if (isPlaying) return;
        isPlaying = true;
        const newIndex = current === 0 ? items.length - 1 : current - 1;
        updateSlider(newIndex);
        }
    
        nextBtn.onclick = next;
        prevBtn.onclick = prev;
    }
    
    document.addEventListener("DOMContentLoaded", init);
  
    
    
    //Text marker*
    (function (document) {
        const markers = [...document.querySelectorAll('mark')];
        
        const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
            }
        });
        }, {
        threshold: 0.8
        });
        
        markers.forEach(mark => {
        observer.observe(mark);
        });
    })(document);
     
     
     
     //Contact me animation*
    $('button').click(function(){
        $('button').toggleClass('active');
        $('.title').toggleClass('active');
        $('nav').toggleClass('active');
    });

    //Redirect to portfolio*
    function portfolioRedirect(){
        var url = "#projects";
        window.location.href = url;
    };

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus');
    });

    const items = document.querySelectorAll(".accordion a");

    function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
    }

    //Fade in text animation*
    const intersectAnimation = function(entries, observer){
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('inview');
            observer.unobserve(entry.target);
          }
        });
      }


    const segments2 = document.getElementsByClassName('logo')
    Array.prototype.forEach.call(
        segments2,
        (segment) => {
            const io = new IntersectionObserver(intersectAnimation);
            io.observe(segment);
        }
      );

      const segments = document.getElementsByClassName('FadeInSegment')
      Array.prototype.forEach.call(
          segments,
          (segment) => {
              const io = new IntersectionObserver(intersectAnimation);
              io.observe(segment);
          }
        );


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
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            var div = document.getElementById('downloadable_project_mobile');  
        }
        else {
        var div = document.getElementById('downloadable_project');
        }
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
        // Clear localStorage
        localStorage.removeItem('projectTitle');
        localStorage.removeItem('projectProblem');
        localStorage.removeItem('projectSolution');
        localStorage.removeItem('designprocess_1');
        localStorage.removeItem('designprocess_2');
        localStorage.removeItem('designprocess_3');
        localStorage.removeItem('designprocess_4');
        localStorage.removeItem('designprocess_5');
        localStorage.removeItem('designprocess_6');
        localStorage.removeItem('designprocess_7');
    
        var regexPattern = /[^A-Za-z0-9]/g;
        
        // Get project key from argument or from active slider
        var projectKey = project ? project : document.getElementsByClassName('is-active')[0].childNodes[1].textContent.toString().replace(regexPattern, "").toLowerCase();
    
        // List of projects where DETAILS button should be hidden
        var hideDetailsFor = ["stellaris", "europauniversalisv"];
    
        // Show/hide DETAILS button
        var desktopBtn = document.getElementById("downloadable_project");
        var mobileBtn = document.getElementById("downloadable_project_mobile");
    
        if (hideDetailsFor.includes(projectKey)) {
            desktopBtn.style.display = "none";
            mobileBtn.style.display = "none";
        } else {
            desktopBtn.style.display = "inline-block";
            mobileBtn.style.display = "inline-block";
        }
    
        // Set project data based on projectKey
        switch (projectKey) {
            case "stellaris":
                localStorage.setItem('projectTitle_storage', 'Stellaris');
                localStorage.setItem('projectDescription_storage', 'UX for fast-paced interstellar strategy.');
                localStorage.setItem('projectProblem_storage', 'Game had grown content-heavy, bombarding the player with information. Gameplay mechanics were difficult to learn for new players, with more being added.');
                localStorage.setItem('projectSolution_storage', 'Reworked tutorial and overall early game flow. Redesigned several UI components. Reduced visual clutter and information overload. Refined spacing, readability, and visual consistency across existing interface. Designed two new features: Databank and Colonization');
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/stellaris_6.png')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/stellaris_6.png')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/stellaris_6.png')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/stellaris_6.png')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/stellaris_6.png')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/stellaris_6.png')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/stellaris_6.png')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/stellaris_6.png')";
                break;

            case "europauniversalisv":
                localStorage.setItem('projectTitle_storage', 'Europa Universalis V');
                localStorage.setItem('projectDescription_storage', 'UX for complex grand strategy.');
                localStorage.setItem('projectProblem_storage', 'The interface struggled with low readability, cluttered UI, and inconsistent visual hierarchy, making navigation and interactions frustrating.');
                localStorage.setItem('projectSolution_storage', 'Redesigned and implemented several UI components. Reworked visual hierarchy to improve readability. Streamlined navigation for usability and flow. Optimized layouts by refining spacing and grouping content clearly.');
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/eu5_placeholder.png')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/eu5_placeholder.png')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/eu5_placeholder.png')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/eu5_placeholder.png')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/eu5_placeholder.png')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/eu5_placeholder.png')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/eu5_placeholder.png')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/eu5_placeholder.png')";
                break;                
    
            case "luminaireslocalizator":
                localStorage.setItem('projectTitle_storage', 'Luminaires Localizator');
                localStorage.setItem('projectDescription_storage', '3D scan and mapping software to manage tunnel lighting systems.');
                localStorage.setItem('projectProblem_storage', 'The process of assembling or adjusting tunnel lighting systems was manual, time-consuming, and relied heavily on machinery and multiple engineers.');
                localStorage.setItem('projectSolution_storage', 'Developed an AR application for engineers to scan, map, and configure tunnel lighting systems. Added digital ID tags to each unit to sync with the app.');
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/signify_1.jpg')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/signify_2.jpg')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/signify_3.jpg')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/signify_4.jpg')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/signify_5.jpg')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/signify_6.jpg')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/signify_7.jpg')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/signify_8.jpg')";
                addDownloadableItem('assets/docs/Signify.pdf');
                break;
    
            case "kangerluk":
                localStorage.setItem('projectTitle_storage', 'Kangerluk');
                localStorage.setItem('projectDescription_storage', 'AR educational tool for the Greenlandic flora and fauna.');
                localStorage.setItem('projectProblem_storage', 'Students showed low engagement due to scattered, unformatted information and a lack of interactive teaching elements.');
                localStorage.setItem('projectSolution_storage', 'Standardized educational content and structured tasks. Built an AR application with gaming elements, progressive leveling, and interactive indoor and outdoor assignments.');
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/kangerluk_8.jpg')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/kangerluk_1.jpg')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/kangerluk_2.jpg')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/kangerluk_10.jpg')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/kangerluk_4.jpg')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/kangerluk_5.jpg')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/kangerluk_6.jpg')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/kangerluk_7.jpg')";
                addDownloadableItem('assets/docs/Kangerluk.pdf');
                break;
    
            case "carelyo":
                localStorage.setItem('projectTitle_storage', 'Carelyo');
                localStorage.setItem('projectDescription_storage', 'Healthcare application intended for Sub-Saharan Africa.');
                localStorage.setItem('projectProblem_storage', 'The interface lacked coherence and structure, reflecting company vision rather than user needs, and was constrained by older phone models.');
                localStorage.setItem('projectSolution_storage', 'Revamped the interface to improve coherence and usability. Implemented a standardized, modular design system tailored to older phone models and user needs.');
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/carelyo_8.jpg')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/carelyo_1.jpg')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/carelyo_2.jpg')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/carelyo_3.jpg')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/carelyo_12.jpg')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/carelyo_4.jpg')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/carelyo_6.jpg')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/carelyo_9.jpg')";
                addDownloadableItem('assets/docs/Carelyo.pdf');
                break;
    
            case "myhouse":
                localStorage.setItem('projectTitle_storage', 'My House');
                localStorage.setItem('projectDescription_storage', 'AR shopping application for doors and windows.');
                localStorage.setItem('projectProblem_storage', 'The client struggled to grow market share and lacked a strong digital presence, while needing an immersive AR experience on a limited budget.');
                localStorage.setItem('projectSolution_storage', 'Created an easy-to-use AR application focused on user-requested features. Integrated lead generation and brand awareness while connecting to the existing website.');
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/MyHouse_Mockup_sketch-1.png')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/myhouse_2.jpg')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/myhouse_3.jpg')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/myhouse_4.jpg')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/myhouse_5.jpg')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/myhouse_6.jpg')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/myhouse_7.jpg')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/myhouse_8.jpg')";
                addDownloadableItem('assets/docs/MyHouse.pdf');
                break;
    
            case "rentestate":
                localStorage.setItem('projectTitle_storage', 'RentEstate');
                localStorage.setItem('projectDescription_storage', 'User management application for commercial tenants.');
                localStorage.setItem('projectProblem_storage', 'Managing commercial tenants was time-consuming and slow, with high call volumes and dependence on multiple external systems with different logins.');
                localStorage.setItem('projectSolution_storage', 'Designed a user management application to digitize, merge, and streamline tenant processes. Introduced self-service tools and a user-management system to regulate access levels.');
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/rent_estate_1.jpg')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/rent_estate_2.jpg')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/rent_estate_3.jpg')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/rent_estate_4.jpg')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/rent_estate_5.jpg')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/rent_estate_6.jpg')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/rent_estate_7.jpg')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/rent_estate_8.jpg')";
                addDownloadableItem('assets/docs/RentEstate.pdf');
                break;
    
            case "femaleinvest":
                localStorage.setItem('projectTitle_storage', 'Female Invest');
                localStorage.setItem('projectDescription_storage', 'Financial learning community for female investors.');
                localStorage.setItem('projectProblem_storage', 'Users had difficulty finding relevant information, the community page design lacked coherence with the app, and few users completed their profiles.');
                localStorage.setItem('projectSolution_storage', 'Redesigned the app for clearer information access. Aligned community page design with the app, encouraging profile completion and engagement.');
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/female_invest_1.png')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/female_invest_2.png')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/female_invest_3.png')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/female_invest_4.png')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/female_invest_5.png')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/female_invest_6.png')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/female_invest_7.png')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/female_invest_8.png')";
                addDownloadableItem('assets/docs/FemaleInvest.pdf');
                break;
    
            default:
                break;
        }
    
        // Update modal content
        document.getElementById("projectTitle").innerHTML = localStorage.getItem('projectTitle_storage');
        document.getElementById("projectDescription").innerHTML = localStorage.getItem('projectDescription_storage');
        document.getElementById("projectProblem").innerHTML = localStorage.getItem('projectProblem_storage');
        // document.getElementById("projectSolution").innerHTML = localStorage.getItem('projectSolution_storage');
        document.getElementById("projectSolution").innerHTML = '<ul>' + localStorage.getItem('projectSolution_storage').split('.').filter(x=>x.trim()).map(x=>`<li>${x.trim()}</li>`).join('') + '</ul>';
    }
    

    
        
    
