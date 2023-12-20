// // jQuery script to change navbar style on scroll
// $(document).ready(function () {
//     var scrollThreshold = 150;

//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll >= scrollThreshold) {
//             $(".navbar").addClass("navbar-scrolled");
//         } else {
//             $(".navbar").removeClass("navbar-scrolled");
//         }
//     });
// });

// // Function to handle fade in/out effect on scroll for About Us section
// function fadeInOutAboutUsOnScroll() {
//     var aboutUsSection = $(".about-us-section");

//     try {
//         // Check if the top of the About Us section is in the viewport (with a 75px offset)
//         if (aboutUsSection.length) {
//             if (isTopOfElementInViewport(aboutUsSection[0], 75)) {
//                 aboutUsSection.addClass("fade-in").removeClass("fade-out");
//             } else {
//                 aboutUsSection.removeClass("fade-in").addClass("fade-out");
//             }
//         } else {
//             throw new Error("About Us section not found.");
//         }
//     } catch (error) {
//         console.error("Error in fade effect for About Us section:", error.message);
//     }
// }

// // Function to handle fade in/out effect on scroll for Footer section
// function fadeInOutFooterOnScroll() {
//     var footerSection = $(".footer-section");

//     try {
//         // Check if the top of the Footer section is in the viewport (with a 75px offset)
//         if (footerSection.length) {
//             if (isTopOfElementInViewport(footerSection[0], 75)) {
//                 footerSection.addClass("fade-in").removeClass("fade-out");
//             } else {
//                 footerSection.removeClass("fade-in").addClass("fade-out");
//             }
//         } else {
//             throw new Error("Footer section not found.");
//         }
//     } catch (error) {
//         console.error("Error in fade effect for Footer section:", error.message);
//     }
// }
// // Function to handle fade in/out effect on scroll for Client Reviews section
// function fadeInOutClientReviewsOnScroll() {
//     var clientReviewsSection = $(".client-reviews-section");

//     try {
//         // Check if the top of the Client Reviews section is in the viewport (with a 75px offset)
//         if (clientReviewsSection.length) {
//             if (isTopOfElementInViewport(clientReviewsSection[0], 100)) {
//                 clientReviewsSection.addClass("fade-in").removeClass("fade-out");
//             } else {
//                 clientReviewsSection.removeClass("fade-in").addClass("fade-out");
//             }
//         } else {
//             throw new Error("Client Reviews section not found.");
//         }
//     } catch (error) {
//         console.error("Error in fade effect for Client Reviews section:", error.message);
//     }
// }

// // Attach the scroll event listeners
// $(window).on("scroll", function () {
//     fadeInOutClientReviewsOnScroll();
//     fadeInOutAboutUsOnScroll();
//     fadeInOutFooterOnScroll();
// });

// // Function to check if the top of an element is in the viewport with an offset
// function isTopOfElementInViewport(el, offset) {
//     var rect = el.getBoundingClientRect();
//     return rect.top <= window.innerHeight - offset;
// }
// // Function to handle smooth scrolling for anchor links
// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     var target = $(this.getAttribute('href'));
//     if (target.length) {
//         $('html, body').stop().animate({
//             scrollTop: target.offset().top - 157 // Adjusted offset to account for the fixed navbar
//         }, 1000);
//     }
// });