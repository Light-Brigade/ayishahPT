$(document).ready(function () {
    // Variables
    var scrollThreshold = 250;
    var navbar = $(".navbar");
    var navbarToggle = $(".navbar-toggler");

    // Function to update the navbar on scroll
    function updateNavbar() {
        var scroll = $(window).scrollTop();

        if ($(window).width() >= 992) {
            // For large and medium screens
            if (scroll >= scrollThreshold) {
                navbar.addClass("navbar-scrolled");
            } else {
                navbar.removeClass("navbar-scrolled");
            }
        } else {
            // For small screens
            if (navbar.hasClass("show") || navbar.data("clicked")) {
                // Check if the navigation bar has the 'show' class or if it was clicked
                navbar.addClass("navbar-scrolled");
            } else {
                // Check the scroll position to determine if the 'navbar-scrolled' class should be removed
                if (scroll >= scrollThreshold) {
                    navbar.addClass("navbar-scrolled");
                } else {
                    navbar.removeClass("navbar-scrolled");
                }
            }
        }
    }

    // Event listeners
    $(window).scroll(updateNavbar);
    navbarToggle.on("click", function () {
        // Set a data attribute to track if the toggle button was clicked
        navbar.data("clicked", true);
        updateNavbar();
    });

    // Close the navigation bar on small screens when a link is clicked
    $('.navbar-nav .nav-item .nav-link').on('click', function () {
        if ($(window).width() < 992) {
            navbarToggle.click(); // Simulate a click on the toggle button to close the navigation
            navbar.data("clicked", false); // Reset the data attribute
        }
    });

    // Function to handle fade in/out effect on scroll for sections
    function fadeInOutOnScroll(sectionClass, offset) {
        var section = $("." + sectionClass);

        try {
            if (section.length) {
                // Check if the top of the section is in the viewport (with the specified offset)
                if (isTopOfElementInViewport(section[0], offset)) {
                    section.addClass("fade-in").removeClass("fade-out");
                } else {
                    section.removeClass("fade-in").addClass("fade-out");
                }
            } else {
                throw new Error(sectionClass + " section not found.");
            }
        } catch (error) {
            console.error("Error in fade effect for " + sectionClass + " section:", error.message);
        }
    }

    // Attach the scroll event listeners for different sections
    $(window).on("scroll", function () {
        fadeInOutOnScroll("client-reviews-section", 75);
        fadeInOutOnScroll("about-us-section", 75);
        fadeInOutOnScroll("footer-section", 75);
        fadeInOutOnScroll("services-section", 75);
        fadeInOutOnScroll("portfolio-section", 75);
        fadeInOutOnScroll("contact-section", 75);
    });

    // Function to check if the top of an element is in the viewport with an offset
    function isTopOfElementInViewport(el, offset) {
        var rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight - offset;
    }

    // Smooth scrolling for anchor links
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 157 // Adjusted offset to account for the fixed navbar
            }, 800);
        }
    });

    // Initialize Slick slider
    $(document).ready(function () {
        var slickOptions = {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        variableWidth: false
                    }
                }
            ]
        };

        var slickSlider = $('#portfolio-slider').slick(slickOptions);

        // Automatically slide to the next image every 3 seconds
        var intervalId = setInterval(function () {
            slickSlider.slick('slickNext');
        }, 4000);

        // Click event for manual navigation to the previous image
        $('.slick-prev').on('click', function () {
            clearInterval(intervalId); // Stop the automatic sliding
            slickSlider.slick('slickPrev'); // Move to the previous image
        });

        // Click event for manual navigation to the next image
        $('.slick-next').on('click', function () {
            clearInterval(intervalId); // Stop the automatic sliding
            slickSlider.slick('slickNext'); // Move to the next image
        });
    });

    // Function to update the active state of the navigation links based on scroll position
    function updateActiveNav() {
        var navbarHeight = $('.navbar').outerHeight();
        var scrollPosition = $(window).scrollTop() + navbarHeight;

        // Loop through each section and check if it is in view
        $('section').each(function () {
            var target = $(this);
            var targetId = target.attr('id');

            if (target.position().top <= scrollPosition && (target.position().top + target.outerHeight()) > scrollPosition) {
                // Remove the active class from all navigation links
                $('.navbar-nav .nav-item').removeClass('active');

                // Add the active class to the corresponding navigation link
                $('.navbar-nav .nav-item a[href="#' + targetId + '"]').parent().addClass('active');
            }
        });
    }

    // Attach the scroll event listener
    $(window).scroll(function () {
        updateActiveNav();
    });

    // Attach click event listener for smooth scrolling
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $($(this).attr('href'));

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - $('.navbar').outerHeight()
            }, 800);

            // Update the active state after scrolling
            updateActiveNav();
        }
    });

    // Call the function on initial load
    updateActiveNav();
});