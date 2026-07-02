/**
 * Kalau Architecture - Website JavaScript
 * Professional, modern, and trendy interactions
 * Clean, no cursor or bubble animations
 */

document.addEventListener('DOMContentLoaded', function () {

    // ==================== ELEMENT REFERENCES ====================
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = mobileMenuBtn.querySelector('.hamburger-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.getElementById('back-to-top');
    const contactForm = document.getElementById('contact-form');
    const scrollProgress = document.getElementById('scroll-progress');

    // ==================== PAGE LOAD ANIMATION ====================
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1)';
        document.body.style.opacity = '1';

        // Trigger hero animations after page load
        setTimeout(() => {
            document.querySelectorAll('.hero-tag, .hero-line-1, .hero-line-2, .hero-subtitle, .hero-buttons').forEach(el => {
                el.classList.add('animate');
            });
        }, 100);
    });

    // ==================== SCROLL HANDLER (RAF-based) ====================
    let lastScrollY = 0;
    let ticking = false;

    function onScroll() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleStickyHeader();
                handleBackToTop();
                handleScrollProgress();
                handleParallax();
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ==================== STICKY HEADER ====================
    function handleStickyHeader() {
        if (lastScrollY > 80) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }

    // ==================== BACK TO TOP ====================
    function handleBackToTop() {
        if (lastScrollY > 600) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==================== SCROLL PROGRESS BAR ====================
    function handleScrollProgress() {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = (lastScrollY / docHeight) * 100;
        scrollProgress.style.width = percent + '%';
    }

    // ==================== HERO PARALLAX (subtle) ====================
    function handleParallax() {
        const heroImg = document.querySelector('.hero-parallax');
        if (heroImg && lastScrollY < window.innerHeight) {
            heroImg.style.transform = `translateY(${lastScrollY * 0.3}px) scale(1.1)`;
        }
    }

    // ==================== ACTIVE NAV LINK ====================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerH = header.offsetHeight;
                const pos = target.offsetTop - headerH;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });

    // ==================== MOBILE MENU ====================
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('open');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('open');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            toggleMobileMenu();
        }
    });

    // ==================== INTERSECTION OBSERVER - SCROLL REVEALS ====================
    const revealElements = document.querySelectorAll('.reveal-element');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==================== PROCESS STEPS REVEAL ====================
    const processSteps = document.querySelectorAll('.process-step');

    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const steps = document.querySelectorAll('.process-step');
                steps.forEach((step, i) => {
                    setTimeout(() => {
                        step.classList.add('revealed');
                    }, i * 150);
                });
                processObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (processSteps.length > 0) {
        processObserver.observe(processSteps[0]);
    }

    // ==================== COUNTER ANIMATION ====================
    const counterNumbers = document.querySelectorAll('.counter-number');
    let counterAnimated = false;

    function animateCounters() {
        if (counterAnimated) return;
        counterAnimated = true;

        counterNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // ease-out-cubic
                const ease = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.round(target * ease);

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            }

            requestAnimationFrame(update);
        });
    }

    // Observe about section for counter trigger
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Stagger stat items
                    document.querySelectorAll('.stat-item').forEach((item, index) => {
                        setTimeout(() => item.classList.add('animate'), index * 200);
                    });
                    setTimeout(animateCounters, 400);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        counterObserver.observe(aboutSection);
    }

    // ==================== TESTIMONIALS SLIDER ====================
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const sliderDots = document.querySelectorAll('.slider-dot');

    if (testimonialTrack && testimonialSlides.length > 0) {
        let currentSlide = 0;
        let slidesPerView = getSlidesPerView();
        let maxSlide = Math.max(0, testimonialSlides.length - slidesPerView);
        let autoInterval;
        let isMoving = false;

        function getSlidesPerView() {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }

        function updateSlider() {
            if (isMoving) return;
            isMoving = true;

            const slideW = testimonialSlides[0].offsetWidth;
            testimonialTrack.style.transform = `translateX(-${currentSlide * slideW}px)`;

            sliderDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
                dot.classList.toggle('bg-charcoal', i === currentSlide);
                dot.classList.toggle('bg-gray-200', i !== currentSlide);
            });

            setTimeout(() => { isMoving = false; }, 700);
        }

        function goNext() {
            currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
            updateSlider();
        }

        function goPrev() {
            currentSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1;
            updateSlider();
        }

        function startAuto() { autoInterval = setInterval(goNext, 5000); }
        function stopAuto() { clearInterval(autoInterval); }

        nextBtn.addEventListener('click', () => { stopAuto(); goNext(); startAuto(); });
        prevBtn.addEventListener('click', () => { stopAuto(); goPrev(); startAuto(); });

        sliderDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                stopAuto();
                currentSlide = Math.min(i, maxSlide);
                updateSlider();
                startAuto();
            });
        });

        // Touch/swipe
        let touchStartX = 0;
        testimonialTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAuto();
        }, { passive: true });

        testimonialTrack.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? goNext() : goPrev();
            }
            startAuto();
        }, { passive: true });

        // Pause on hover
        testimonialTrack.addEventListener('mouseenter', stopAuto);
        testimonialTrack.addEventListener('mouseleave', startAuto);

        // Resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                slidesPerView = getSlidesPerView();
                maxSlide = Math.max(0, testimonialSlides.length - slidesPerView);
                if (currentSlide > maxSlide) currentSlide = maxSlide;
                updateSlider();
            }, 250);
        });

        updateSlider();
        startAuto();
    }

    // ==================== FORM VALIDATION ====================
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Reset
            document.querySelectorAll('.error-message').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('visible');
            });
            document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));

            if (!name.value.trim()) { showError(name); isValid = false; }
            if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { showError(email); isValid = false; }
            if (!message.value.trim()) { showError(message); isValid = false; }

            if (isValid) {
                const btn = contactForm.querySelector('button[type="submit"]');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `<svg class="animate-spin w-5 h-5 mr-2" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...`;
                btn.disabled = true;

                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.disabled = false;
                    showNotification('Message Sent!', 'We\'ll get back to you soon.');
                    contactForm.reset();
                }, 1500);
            }
        });
    }

    function showError(el) {
        el.classList.add('error');
        const msg = el.parentElement.querySelector('.error-message');
        if (msg) {
            msg.classList.remove('hidden');
            msg.classList.add('visible');
        }
    }

    // ==================== SUCCESS NOTIFICATION ====================
    function showNotification(title, text) {
        const notif = document.createElement('div');
        notif.className = 'fixed top-28 right-6 bg-charcoal text-white px-6 py-4 rounded-2xl shadow-2xl z-[200] flex items-center gap-3 transform translate-x-[120%] transition-transform duration-500';
        notif.innerHTML = `
            <div class="w-10 h-10 bg-warm-beige rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <div>
                <div class="font-semibold text-sm">${title}</div>
                <div class="text-xs text-gray-400">${text}</div>
            </div>
        `;
        document.body.appendChild(notif);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                notif.style.transform = 'translateX(0)';
            });
        });

        setTimeout(() => {
            notif.style.transform = 'translateX(120%)';
            setTimeout(() => notif.remove(), 500);
        }, 4000);
    }

    // ==================== NEWSLETTER FORM ====================
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput.value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                const btn = newsletterForm.querySelector('button');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    emailInput.value = '';
                }, 2000);
            }
        });
    }

    // ==================== KEYBOARD - ARROW KEYS FOR SLIDER ====================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
        if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    });

});
