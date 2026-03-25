/**
 * The Master's Tree Service LLC
 * Main JavaScript File
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contact-form');
    const currentYearEl = document.getElementById('current-year');
    const animatedElements = document.querySelectorAll('.animate-fade-up');

    /**
     * Header scroll effect
     * Adds 'scrolled' class when page is scrolled
     */
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    /**
     * Mobile navigation toggle
     */
    function toggleMobileNav() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    /**
     * Close mobile nav when clicking a link
     */
    function closeMobileNav() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    /**
     * Smooth scroll to anchor links
     * Uses native smooth scroll with fallback
     */
    function handleSmoothScroll(e) {
        const href = e.currentTarget.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                closeMobileNav();
            }
        }
    }

    /**
     * Intersection Observer for scroll animations
     */
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optionally stop observing after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    /**
     * Contact form handling
     * Validates and submits via Formspree
     */
    function handleFormSubmit(e) {
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Basic validation is handled by HTML5 required attributes
        // Add custom validation here if needed

        // Show loading state
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;

        // Formspree handles the actual submission
        // This is just for UX feedback

        // Re-enable after form is submitted (Formspree will redirect or show success)
        setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }, 5000);
    }

    /**
     * Phone number formatting
     * Formats input as (XXX) XXX-XXXX
     */
    function formatPhoneNumber(e) {
        const input = e.target;
        let value = input.value.replace(/\D/g, '');

        if (value.length > 0) {
            if (value.length <= 3) {
                value = '(' + value;
            } else if (value.length <= 6) {
                value = '(' + value.substring(0, 3) + ') ' + value.substring(3);
            } else {
                value = '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, 10);
            }
        }

        input.value = value;
    }

    /**
     * Set current year in footer
     */
    function setCurrentYear() {
        if (currentYearEl) {
            currentYearEl.textContent = new Date().getFullYear();
        }
    }

    /**
     * Before/After image slider interaction
     * (Placeholder - implement with actual images)
     */
    function initBeforeAfterSliders() {
        const sliders = document.querySelectorAll('.before-after-slider');

        sliders.forEach(slider => {
            slider.addEventListener('mousemove', (e) => {
                const rect = slider.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percent = (x / rect.width) * 100;

                const afterImage = slider.querySelector('.image-placeholder-after');
                if (afterImage) {
                    afterImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
                }
            });

            slider.addEventListener('mouseleave', () => {
                const afterImage = slider.querySelector('.image-placeholder-after');
                if (afterImage) {
                    afterImage.style.clipPath = 'inset(0 50% 0 0)';
                }
            });

            // Touch support for mobile
            slider.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                const rect = slider.getBoundingClientRect();
                const x = touch.clientX - rect.left;
                const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));

                const afterImage = slider.querySelector('.image-placeholder-after');
                if (afterImage) {
                    afterImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
                }
            });
        });
    }

    /**
     * Close mobile nav on escape key
     */
    function handleEscapeKey(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileNav();
        }
    }

    /**
     * Close mobile nav when clicking outside
     */
    function handleOutsideClick(e) {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            closeMobileNav();
        }
    }

    /**
     * Initialize all event listeners and functionality
     */
    function init() {
        // Set current year
        setCurrentYear();

        // Header scroll effect
        window.addEventListener('scroll', handleHeaderScroll, { passive: true });
        handleHeaderScroll(); // Check on load

        // Mobile navigation
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileNav);
        }

        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Close mobile nav on nav link click
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });

        // Initialize scroll animations
        if ('IntersectionObserver' in window) {
            initScrollAnimations();
        } else {
            // Fallback for older browsers - show all elements
            animatedElements.forEach(el => {
                el.classList.add('visible');
            });
        }

        // Contact form
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);

            // Phone formatting
            const phoneInput = contactForm.querySelector('#phone');
            if (phoneInput) {
                phoneInput.addEventListener('input', formatPhoneNumber);
            }
        }

        // Before/After sliders
        initBeforeAfterSliders();

        // Keyboard and click handlers for accessibility
        document.addEventListener('keydown', handleEscapeKey);
        document.addEventListener('click', handleOutsideClick);

        // Log that the site is loaded (can remove in production)
        console.log('The Master\'s Tree Service website loaded successfully.');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
