// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all dropdowns
    var dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            var dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation class to hero elements when page loads
    var heroText = document.querySelector('.hero-text');
    var heroImage = document.querySelector('.hero-image');
    
    if (heroText && heroImage) {
        heroText.classList.add('animate__animated', 'animate__fadeInLeft');
        heroImage.classList.add('animate__animated', 'animate__fadeInRight');
    }
});