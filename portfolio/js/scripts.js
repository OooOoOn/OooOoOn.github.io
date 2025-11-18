    
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

        /*localStorage.removeItem('secondIteration');
        document.getElementsByClassName('timeline__items1')[0].innerHTML = ''
        document.getElementsByClassName('timeline__items2')[0].innerHTML = ''*/

        var regexPattern = /[^A-Za-z0-9]/g;
        
        
        console.log(project);
        console.log(document.getElementsByClassName('is-active')[0].childNodes[1].textContent.toString().replace(regexPattern, "").toLowerCase());

        switch (project ? project : document.getElementsByClassName('is-active')[0].childNodes[1].textContent.toString().replace(regexPattern, "").toLowerCase()) {
            case "luminaireslocalizator":
                localStorage.setItem( 'projectTitle_storage', 'Luminaires Localizator' );
                localStorage.setItem( 'projectDescription_storage', '3D scan and mapping software to manage tunnel lighting systems.' );
                localStorage.setItem( 'projectProblem_storage', 'The current process of assembling or adjusting a light system was a manual and time-consuming process with having to move each light around. It was also reliant on machinery and several engineers.' );
                localStorage.setItem( 'projectSolution_storage', 'An AR application tailored to engineers that scans, maps and configures the light system. Digital ID tag was added to each unit that in turn syncs with the application.' );
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/signify_1.jpg')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/signify_2.jpg')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/signify_3.jpg')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/signify_4.jpg')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/signify_5.jpg')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/signify_6.jpg')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/signify_7.jpg')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/signify_8.jpg')";
                
                /*localStorage.setItem( 'introduction_storage', 'assets/img/signify_1.jpg' );
                localStorage.setItem( 'projectImage_1_storage', 'assets/img/signify_2.jpg' );
                localStorage.setItem( 'projectImage_2_storage', 'assets/img/signify_3.jpg' );
                localStorage.setItem( 'projectImage_3_storage', 'assets/img/signify_4.jpg' );
                localStorage.setItem( 'projectImage_4_storage', 'assets/img/signify_5.jpg' );
                localStorage.setItem( 'projectImage_5_storage', 'assets/img/signify_6.jpg' );
                localStorage.setItem( 'projectImage_6_storage', 'assets/img/signify_7.jpg' );
                localStorage.setItem( 'projectImage_7_storage', 'assets/img/signify_8.jpg' );
                localStorage.setItem( 'secondIteration_storage', '2nd Iteration.' );
                
                addTimelineItem('<b>Empathize</b><br/><i>Goal</i><br/><i>Stakeholders</i><br/>', 1);
                addTimelineItem('<b>Define</b><br/><i>Problem</i><br/><i>Requirements</i><br/>', 1);
                addTimelineItem('<b>Ideate</b><br/><i>Task Flow</i><br/><i>Features</i><br/>', 1);
                addTimelineItem('<b>Prototype</b><br/><i>Mid-Fi</i><br/>', 1);
                addTimelineItem('<b>Test</b><br/><i>Explorative</i><br/><i>Unmoderated</i><br/>', 1);
                addTimelineItem('', 1);

                addTimelineItem('<b>Prototype</b><br/><i>Hi-Fi</i><br/>', 2);
                addTimelineItem('<b>Test</b><br/><i>Lab Test</i><br/><i>Moderated</i><br/>', 2);
                addTimelineItem('', 2);*/

                addDownloadableItem('assets/docs/Signify.pdf')
                break;
            case "kangerluk":
                localStorage.setItem( 'projectTitle_storage', 'Kangerluk' );
                localStorage.setItem( 'projectDescription_storage', 'AR educational tool for the Greenlandic flora and fauna.' );
                localStorage.setItem( 'projectProblem_storage', 'There was little interest amongst students for the topic. The information used for teaching was scattered and unformatted. There were no interactive teaching elements.' );
                localStorage.setItem( 'projectSolution_storage', 'Standardised data structure using a set of pre-defined tasks. AR application with gaming elements. Progressive leveling system. Interactive indoor and outdoor assignments.' );
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/kangerluk_8.jpg')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/kangerluk_1.jpg')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/kangerluk_2.jpg')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/kangerluk_10.jpg')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/kangerluk_4.jpg')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/kangerluk_5.jpg')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/kangerluk_6.jpg')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/kangerluk_7.jpg')";
                
                /*localStorage.setItem( 'introduction_storage', 'assets/img/kangerluk_8.jpg' );
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
                addTimelineItem('', 2);*/

                addDownloadableItem('assets/docs/Kangerluk.pdf')
                break;
            case "carelyo":
                localStorage.setItem( 'projectTitle_storage', 'Carelyo' );
                localStorage.setItem( 'projectDescription_storage', 'Healthcare application intended for Sub-Saharan Africa.' );
                localStorage.setItem( 'projectProblem_storage', 'The current design lacked coherency and structure and was based on the vision of the company founder, not the requirements of the end user. Lastly, only older phones were utilized.' );
                localStorage.setItem( 'projectSolution_storage', 'Revamped user-friendly design with focus on removing pain points and misconceptions. Standardised design system. Modular design approach to suit older phone models.' );
                document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/carelyo_8.jpg')";
                document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/carelyo_1.jpg')";
                document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/carelyo_2.jpg')";
                document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/carelyo_3.jpg')";
                document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/carelyo_12.jpg')";
                document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/carelyo_4.jpg')";
                document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/carelyo_6.jpg')";
                document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/carelyo_9.jpg')";
                
                /*localStorage.setItem( 'introduction_storage', 'assets/img/carelyo_8.jpg' );
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
                addTimelineItem('', 1);*/

                addDownloadableItem('assets/docs/Carelyo.pdf')
                break;
            case "myhouse":
                    localStorage.setItem( 'projectTitle_storage', 'My House' );
                    localStorage.setItem( 'projectDescription_storage', 'AR shopping application for doors and windows.' );
                    localStorage.setItem( 'projectProblem_storage', 'The customer was struggling to increase its market share and did not have a strong digital presence. They were looking for an cutting-edge immersive experience constrained by a small budget.' );
                    localStorage.setItem( 'projectSolution_storage', 'An easy-to-use AR application with focus on features requested by the users. Lead generation and brand awareness weaved into the design with ties to existing website.' );
                    document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/MyHouse_Mockup_sketch-1.png')";
                    document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/myhouse_2.jpg')";
                    document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/myhouse_3.jpg')";
                    document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/myhouse_4.jpg')";
                    document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/myhouse_5.jpg')";
                    document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/myhouse_6.jpg')";
                    document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/myhouse_7.jpg')";
                    document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/myhouse_8.jpg')";

                    /*localStorage.setItem( 'introduction_storage', 'assets/img/MyHouse_Mockup_sketch-1.png' );
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
                    addTimelineItem('', 2);*/

                    addDownloadableItem('assets/docs/MyHouse.pdf')
                break;
                case "rentestate":
                    localStorage.setItem( 'projectTitle_storage', 'RentEstate' );
                    localStorage.setItem( 'projectDescription_storage', 'User management application for commercial tenants.' );
                    localStorage.setItem( 'projectProblem_storage', 'Call volumes were increasing and the current manual process was time consuming and slow. There was also a dependence on several external systems with different logins.' );
                    localStorage.setItem( 'projectSolution_storage', 'Current process was digitalized, merged and streamlined. Self-service was introduced and encouraged with a tenancy user-management system to regulate access level.' );
                    document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/rent_estate_1.jpg')";
                    document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/rent_estate_2.jpg')";
                    document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/rent_estate_3.jpg')";
                    document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/rent_estate_4.jpg')";
                    document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/rent_estate_5.jpg')";
                    document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/rent_estate_6.jpg')";
                    document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/rent_estate_7.jpg')";
                    document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/rent_estate_8.jpg')";

                    /*localStorage.setItem( 'introduction_storage', 'assets/img/rent_estate_1.jpg' );
                    localStorage.setItem( 'projectImage_1_storage', 'assets/img/rent_estate_2.jpg' );
                    localStorage.setItem( 'projectImage_2_storage', 'assets/img/rent_estate_3.jpg' );
                    localStorage.setItem( 'projectImage_3_storage', 'assets/img/rent_estate_4.jpg' );
                    localStorage.setItem( 'projectImage_4_storage', 'assets/img/rent_estate_5.jpg' );
                    localStorage.setItem( 'projectImage_5_storage', 'assets/img/rent_estate_6.jpg' );
                    localStorage.setItem( 'projectImage_6_storage', 'assets/img/rent_estate_7.jpg' );
                    localStorage.setItem( 'projectImage_7_storage', 'assets/img/rent_estate_8.jpg' );

                    localStorage.setItem( 'secondIteration_storage', '2nd Iteration.' );
    
                    addTimelineItem('<b>Empathize</b><br/><i>Stakeholders</i><br/><i>Research</i><br/><i>Goal</i><br/>', 1);
                    addTimelineItem('<b>Define</b><br/><i>Problem</i><br/><i>Requirements</i><br/><i>Key</i><br/><i>User Story</i><br/>', 1);
                    addTimelineItem('<b>Ideate</b><br/><i>Wireframe</i><br/><i>Sitemap</i><br/><i>Features</i><br/><i>Task Flow</i><br/>', 1);
                    addTimelineItem('<b>Prototype</b><br/><i>Low-Fi</i><br/>', 1);
                    addTimelineItem('<b>Test</b><br/><i>Tree Test</i><br/><i>Interview</i><br/><i>Moderated</i><br/>', 1);
                    addTimelineItem('', 1);

                    addTimelineItem('<b>Prototype</b><br/><i>Hi-Fi</i><br/>', 2);
                    addTimelineItem('<b>Test</b><br/><i>Interview</i><br/><i>Moderated</i><br/>', 2);
                    addTimelineItem('', 2);*/

                    addDownloadableItem('assets/docs/RentEstate.pdf')
                break;
                case "femaleinvest":
                    localStorage.setItem( 'projectTitle_storage', 'Female Invest' );
                    localStorage.setItem( 'projectDescription_storage', 'Financial learning community for female investors.' );
                    localStorage.setItem( 'projectProblem_storage', 'Users were struggling to find the correct information. The community page design was also not coherent with the rest of the application. Few users completed their profiles.' );
                    localStorage.setItem( 'projectSolution_storage', 'Current process was digitalized, merged and streamlined. Self-service was introduced and encouraged with a tenancy user-management system to regulate access level.' );
                    document.getElementById("project_image_1").style.backgroundImage = "url('assets/img/female_invest_1.png')";
                    document.getElementById("project_image_2").style.backgroundImage = "url('assets/img/female_invest_2.png')";
                    document.getElementById("project_image_3").style.backgroundImage = "url('assets/img/female_invest_3.png')";
                    document.getElementById("project_image_4").style.backgroundImage = "url('assets/img/female_invest_4.png')";
                    document.getElementById("project_image_5").style.backgroundImage = "url('assets/img/female_invest_5.png')";
                    document.getElementById("project_image_6").style.backgroundImage = "url('assets/img/female_invest_6.png')";
                    document.getElementById("project_image_7").style.backgroundImage = "url('assets/img/female_invest_7.png')";
                    document.getElementById("project_image_8").style.backgroundImage = "url('assets/img/female_invest_8.png')";

                    /*localStorage.setItem( 'projectImage_1_storage', 'assets/img/female_invest_2.png' );
                    localStorage.setItem( 'projectImage_2_storage', 'assets/img/female_invest_3.png' );
                    localStorage.setItem( 'projectImage_3_storage', 'assets/img/female_invest_4.png' );
                    localStorage.setItem( 'projectImage_4_storage', 'assets/img/female_invest_5.png' );
                    localStorage.setItem( 'projectImage_5_storage', 'assets/img/female_invest_6.png' );
                    localStorage.setItem( 'projectImage_6_storage', 'assets/img/female_invest_7.png' );
                    localStorage.setItem( 'projectImage_7_storage', 'assets/img/female_invest_8.png' );
                    localStorage.setItem( 'secondIteration_storage', '' );
    
                    addTimelineItem('<b>Empathize</b><br/><i>Design Evaluation</i><br/><i>Research</i><br/>', 1);
                    addTimelineItem('<b>Define</b><br/><i>Problem</i><br/><i>Requirements</i><br/>', 1);
                    addTimelineItem('<b>Ideate</b><br/><i>User Story</i><br/>', 1);
                    addTimelineItem('<b>Prototype</b><br/><i>High-Fi</i><br/>', 1);
                    addTimelineItem('', 1);*/
                    
                    addDownloadableItem('assets/docs/FemaleInvest.pdf')
                break;
            default:
                break;
        }
        document.getElementById("projectTitle").innerHTML = localStorage.getItem('projectTitle_storage');
        document.getElementById("projectDescription").innerHTML = localStorage.getItem('projectDescription_storage');
        document.getElementById("projectProblem").innerHTML = localStorage.getItem('projectProblem_storage');
        document.getElementById("projectSolution").innerHTML = localStorage.getItem('projectSolution_storage');
        /*document.getElementById("introduction").src = localStorage.getItem('introduction_storage');
        document.getElementById("projectImage_1").src = localStorage.getItem('projectImage_1_storage');
        document.getElementById("projectImage_2").src = localStorage.getItem('projectImage_2_storage');
        document.getElementById("projectImage_3").src = localStorage.getItem('projectImage_3_storage');
        document.getElementById("projectImage_4").src = localStorage.getItem('projectImage_4_storage');
        document.getElementById("projectImage_5").src = localStorage.getItem('projectImage_5_storage');
        document.getElementById("projectImage_6").src = localStorage.getItem('projectImage_6_storage');
        document.getElementById("projectImage_7").src = localStorage.getItem('projectImage_7_storage');
        document.getElementById("secondIteration").innerHTML = localStorage.getItem('secondIteration_storage');*/

    }

    
        
    
