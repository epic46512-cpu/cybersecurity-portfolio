/* ==========================================================================
   CYBERSECURITY PORTFOLIO — JAVASCRIPT
   ==========================================================================
   JavaScript is the part of the page that MOVES and REACTS.

   Everything here is wrapped in one big function that runs when the page
   is ready. We do this so that the code only looks for HTML elements
   AFTER they exist. If it ran too early, the elements would not be found
   and errors would appear in the console.

   THE SIX THINGS THIS FILE DOES:
     1. Type out my job title like a computer is typing it
     2. Show a solid navbar and fill the progress bar when scrolling
     3. Open and close the mobile menu
     4. Fade sections in as they scroll into view
     5. Highlight the menu link of the section you are reading
     6. Show a "back to top" button + put the current year in the footer
   ========================================================================== */

(function () {
    'use strict';

    /* ------------------------------------------------------------------
       A HELPER TO FIND HTML ELEMENTS
       ------------------------------------------------------------------
       Writing document.querySelector('.nav') everywhere gets tiring, so
       we make a short function called $ instead. $ means "give me this".
       ------------------------------------------------------------------ */
    function $(selector) {
        return document.querySelector(selector);
    }

    function $$(selector) {
        return document.querySelectorAll(selector);
    }


    /* ==================================================================
       1. THE TYPING EFFECT
       ==================================================================
       script.js types these three sentences out one letter at a time.
       They come from the data-roles attribute on the <span> in the HTML.
       To change the sentences, edit the HTML — not this file.

       HOW IT WORKS:
         charIndex  = how many letters have been shown so far
         each time   = show one more letter
         finished?  = wait 1.6 seconds, then start the next sentence
       ================================================================== */
    function startTyping() {
        var typedElement = document.getElementById('typedRole');

        // Safety check: if the element is missing, stop quietly instead of
        // throwing an error that would break the rest of the page.
        if (!typedElement) {
            return;
        }

        // Read the attribute. getAttribute returns null if the attribute was
        // deleted by mistake, so we check for that before using it.
        var rolesAttribute = typedElement.getAttribute('data-roles');

        if (!rolesAttribute) {
            return;      // nothing to type — the static text in HTML stays as-is
        }

        // Split the attribute on commas into an array of sentences.
        // "A,B,C" becomes ["A", "B", "C"]
        var sentences = rolesAttribute.split(',');

        var sentenceIndex = 0;   // which sentence we are on
        var charIndex = 0;       // which letter of that sentence
        var deleting = false;    // are we typing, or removing the letters?

        function typeLetter() {
            var current = sentences[sentenceIndex];

            if (!deleting) {
                // --- TYPING ---
                charIndex++;
                typedElement.textContent = current.substring(0, charIndex);

                // Is this sentence completely typed out?
                if (charIndex === current.length) {
                    // Finished. Pause, then start deleting.
                    deleting = true;
                    setTimeout(typeLetter, 1600);
                    return;
                }

                // Random speed between 55ms and 105ms makes it feel human
                // instead of robotic.
                setTimeout(typeLetter, 55 + Math.random() * 50);
            } else {
                // --- DELETING ---
                charIndex--;
                typedElement.textContent = current.substring(0, charIndex);

                // Is this sentence completely gone?
                if (charIndex === 0) {
                    deleting = false;
                    // Move to the next sentence and wrap around at the end.
                    sentenceIndex = (sentenceIndex + 1) % sentences.length;
                    // A small pause before the next sentence starts.
                    setTimeout(typeLetter, 400);
                    return;
                }

                // Deleting is a little faster than typing.
                setTimeout(typeLetter, 30);
            }
        }

        // Wait half a second after the page loads, then begin.
        setTimeout(typeLetter, 500);
    }


    /* ==================================================================
       2. NAVBAR BACKGROUND + TOP PROGRESS BAR
       ==================================================================
       Two things happen while you scroll:
         - the navbar turns solid so the text behind it is not distracting
         - a thin bar at the top fills up to show how far down you are
       ================================================================== */
    function setupScroll() {
        var nav = $('#nav');
        var progressBar = $('#scrollProgress');
        var toTopButton = $('#toTop');

        // getScrollTop() reads the scroll position in a way that works in
        // every browser. Some older browsers use documentElement.
        function getScrollTop() {
            return window.pageYOffset ||
                   document.documentElement.scrollTop ||
                   0;
        }

        // Ticking means "do this work when the browser has a spare moment",
        // which stops the page from stuttering on a slow phone.
        var ticking = false;

        window.addEventListener('scroll', function () {
            if (ticking) {
                return;      // already waiting to run — do nothing for now
            }

            // requestAnimationFrame is the browser's "next best moment".
            window.requestAnimationFrame(function () {
                var scrollTop = getScrollTop();

                // Add the class only after 40px so the top of the page
                // still looks clean.
                if (nav) {
                    nav.classList.toggle('scrolled', scrollTop > 40);
                }

                // How much of the page has been scrolled, as a percentage.
                // Dividing by (total height - screen height) is needed
                // because the very bottom must reach 100%.
                var scrollable = document.documentElement.scrollHeight - window.innerHeight;
                var percentage = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;

                if (progressBar) {
                    progressBar.style.width = percentage + '%';
                }

                // Show the back-to-top button once the user is past 500px.
                if (toTopButton) {
                    toTopButton.classList.toggle('show', scrollTop > 500);
                }

                ticking = false;   // reset so the next scroll can run again
            });

            ticking = true;
        }, { passive: true });
        // { passive: true } tells the browser we will never call
        // preventDefault(), so scrolling stays perfectly smooth.
    }


    /* ==================================================================
       3. THE MOBILE MENU
       ==================================================================
       On small screens the links are hidden behind a hamburger button.
       Clicking it slides the menu down (CSS does the animation).
       ================================================================== */
    function setupMobileMenu() {
        var navToggle = $('#navToggle');
        var navLinks = $('#navLinks');

        if (!navToggle || !navLinks) {
            return;
        }

        navToggle.addEventListener('click', function () {
            var isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);

            // These two lines help people who use a screen reader.
            navToggle.setAttribute('aria-expanded', isOpen);
            navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        // Close the menu as soon as any link inside it is tapped.
        $$('.nav-link', navLinks).forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Open menu');
            });
        });

        // If the phone is turned sideways and becomes wide again, close it.
        window.addEventListener('resize', function () {
            if (window.innerWidth > 820) {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Pressing Escape closes the menu too — expected behaviour for
        // anyone using a keyboard.
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }


    /* ==================================================================
       4. FADE SECTIONS IN AS YOU SCROLL
       ==================================================================
       THE CLASSIC WAY is to listen for the scroll event and check where
       every element is. That works, but it runs a lot of calculations.

       IntersectionObserver is a built-in browser tool that does exactly
       this for us, and it is much faster because the browser handles it
       outside our code. The callback runs whenever an element enters or
       leaves the screen.
       ================================================================== */
    function setupReveal() {
        var revealElements = $$('.reveal');

        // Very old browsers do not support IntersectionObserver.
        // In that case we just show everything straight away.
        if (!('IntersectionObserver' in window)) {
            revealElements.forEach(function (element) {
                element.classList.add('visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                // entry.isIntersecting is true when the element is on screen.
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // unobserve means "stop watching this one".
                    // Without this the animation would replay every time
                    // the element scrolls past.
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,   // start when 12% of the element is visible
            rootMargin: '0px 0px -60px 0px'   // trigger slightly before it appears
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    }


    /* ==================================================================
       5. HIGHLIGHT THE CURRENT SECTION IN THE MENU
       ==================================================================
       A second IntersectionObserver watches each <section>. Whichever one
       is most visible gets its menu link styled as .active.
       ================================================================== */
    function setupActiveLink() {
        var sections = $$('section[id]');
        var navLinks = $$('.nav-link');

        if (!sections.length || !('IntersectionObserver' in window)) {
            return;
        }

        var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                // Only act on the section we are actually scrolling INTO.
                if (!entry.isIntersecting) {
                    return;
                }

                var sectionId = entry.target.id;

                // Remove .active from every link...
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                });

                // ...then add it back to the link pointing at this section.
                navLinks.forEach(function (link) {
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            });
        }, {
            rootMargin: '-40% 0px -55% 0px'
            // Shrinks the area the observer watches to a thin strip in the
            // middle of the screen. Only sections crossing that strip count
            // as "active", which stops links flickering on and off.
        });

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }


    /* ==================================================================
       6. SMALL EXTRAS
       ================================================================== */
    function setupExtras() {
        // --- Back to top button ---
        var toTopButton = $('#toTop');

        if (toTopButton) {
            toTopButton.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'   // glides instead of jumping
                });
            });
        }

        // --- The year in the footer ---
        // new Date().getFullYear() gives the current year automatically,
        // so the copyright notice never needs editing by hand.
        var yearElement = $('#year');

        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }


    /* ==================================================================
       START EVERYTHING
       ==================================================================
       'DOMContentLoaded' fires when the HTML has finished loading, which
       is the earliest safe moment to start looking for elements.
       ================================================================== */
    document.addEventListener('DOMContentLoaded', function () {
        startTyping();
        setupScroll();
        setupMobileMenu();
        setupReveal();
        setupActiveLink();
        setupExtras();
    });

}());