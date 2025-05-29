// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden'); // Toggles visibility of the mobile menu

            // Toggle hamburger/close icons
            const icons = mobileMenuButton.querySelectorAll('svg');
            icons.forEach(icon => icon.classList.toggle('hidden'));
        });
    }

    // Smooth scrolling for navigation links & active link highlighting
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if it's open after clicking a link
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (mobileMenuButton) {
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                    // Ensure icons are reset (hamburger shown, close hidden)
                    const icons = mobileMenuButton.querySelectorAll('svg');
                    if (icons[0]) icons[0].classList.remove('hidden'); // Hamburger
                    if (icons[1]) icons[1].classList.add('hidden');    // Close
                }
            }
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a.nav-link'); // Desktop nav links
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a.nav-link'); // Mobile nav links

    function changeLinkState() {
        let currentIndex = sections.length;

        // Determine which section is currently in view
        while (--currentIndex && window.scrollY + 100 < sections[currentIndex].offsetTop) {} // 100 is an offset

        // Update desktop navigation links
        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLinks[currentIndex]) {
            navLinks[currentIndex].classList.add('active');
        } else if (window.scrollY < (sections[0] ? sections[0].offsetTop : 500) - 100 && navLinks[0]) {
            // If near the top or before the first section, activate the first link
            navLinks[0].classList.add('active');
        }


        // Update mobile navigation links
        mobileNavLinks.forEach((link) => link.classList.remove('active'));
        if (mobileNavLinks[currentIndex]) {
            mobileNavLinks[currentIndex].classList.add('active');
        } else if (window.scrollY < (sections[0] ? sections[0].offsetTop : 500) - 100 && mobileNavLinks[0]) {
            mobileNavLinks[0].classList.add('active');
        }
    }

    // Initial call to set active link based on page load (e.g., if URL has a hash or at the top)
    if (sections.length > 0) {
        changeLinkState();
        // Add scroll event listener only if sections exist
        window.addEventListener('scroll', changeLinkState);
    }


    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Simple scroll to top button
    const body = document.body;
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    // Assign a class for CSS styling (defined in style.css)
    scrollTopButton.className = 'scroll-to-top-button hidden';
    scrollTopButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    body.appendChild(scrollTopButton);

    window.onscroll = () => {
        // Show or hide the scroll-to-top button based on scroll position
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopButton.classList.remove('hidden');
        } else {
            scrollTopButton.classList.add('hidden');
        }
    };
});
