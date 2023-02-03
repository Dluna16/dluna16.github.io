/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            if (window.getComputedStyle(document.body.querySelector('.navbar-toggler')).display !== 'none') {
                document.getElementById("myLogo1").style.display = "block"
                document.getElementById("myLogo").style.display = "none"
            }
            else {
            document.getElementById("myLogo1").style.display = "none"
            document.getElementById("myLogo").style.display = "block"
            }
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            document.getElementById("myLogo1").style.display = "block"
            document.getElementById("myLogo").style.display = "none"
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});