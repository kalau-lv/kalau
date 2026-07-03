/**
 * Kalau Architecture - Website JavaScript
 * Professional, modern interactions + i18n language switcher
 */

document.addEventListener('DOMContentLoaded', function () {

    // ==================== TRANSLATIONS ====================
    const translations = {
        en: {
            // Nav
            nav_home: 'Home',
            nav_about: 'About',
            nav_services: 'Services',
            nav_projects: 'Projects',
            nav_process: 'Process',
            nav_whyus: 'Why Us',
            nav_testimonials: 'Testimonials',
            nav_contact: 'Contact',
            nav_cta: 'Contact Us-edited',

            // Hero
            hero_tag: 'Award-Winning Architecture Studio',
            hero_line1: 'Designing Spaces,',
            hero_line2: 'Shaping Futures',
            hero_subtitle: 'We create modern, functional, and sustainable architectural solutions that transform visions into reality.',
            hero_cta1: 'Our Projects',
            hero_cta2: 'Contact Us',
            hero_scroll: 'Scroll',

            // About
            about_label: 'About Us',
            about_badge: 'Years',
            about_title: 'Crafting Architectural <br><span class="text-gradient">Excellence</span> Since 2013',
            about_p1: 'At Kalau Architecture, we believe that great design has the power to transform lives. Our team of passionate architects and designers work collaboratively to create spaces that are not only aesthetically stunning but also functional and sustainable.',
            about_p2: 'From concept to completion, we bring innovation, precision, and creativity to every project. Our commitment to excellence has earned us recognition across the industry.',
            about_stat1: 'Years Experience',
            about_stat2: 'Projects Done',
            about_stat3: 'Awards Won',
            about_btn: 'Learn More',

            // Services
            services_label: 'What We Do',
            services_title: 'Our <span class="text-gradient">Services</span>',
            services_subtitle: 'Comprehensive architectural services tailored to bring your vision to life with precision and creativity.',
            services_learn: 'Learn More',
            service1_title: 'Residential Design',
            service1_desc: 'Creating dream homes that blend comfort, functionality, and aesthetic beauty tailored to your lifestyle.',
            service2_title: 'Commercial Design',
            service2_desc: 'Designing innovative commercial spaces that enhance productivity and reflect your brand identity.',
            service3_title: 'Interior Design',
            service3_desc: 'Transforming interiors into captivating spaces with thoughtful layouts, materials, and finishes.',
            service4_title: 'Renovation',
            service4_desc: 'Breathing new life into existing structures with modern upgrades while preserving their character.',
            service5_title: 'Landscape Design',
            service5_desc: 'Creating stunning outdoor environments that complement architecture and enhance natural beauty.',
            service6_title: 'Project Consultation',
            service6_desc: 'Expert guidance and advisory services to help you make informed decisions throughout your project.',

            // Projects
            projects_label: 'Our Portfolio',
            projects_title: 'Featured <span class="text-gradient">Projects</span>',
            projects_subtitle: 'Explore our curated collection of architectural masterpieces that showcase our commitment to excellence.',
            projects_btn: 'View All Projects',
            project1_cat: 'Residential',
            project1_title: 'Modern Villa',
            project2_cat: 'Commercial',
            project2_title: 'Corporate Tower',
            project3_cat: 'Interior',
            project3_title: 'Luxury Apartment',
            project4_cat: 'Mixed Use',
            project4_title: 'Urban Complex',
            project5_cat: 'Residential',
            project5_title: 'Beach House',
            project6_cat: 'Landscape',
            project6_title: 'Garden Estate',

            // Process
            process_label: 'How We Work',
            process_title: 'Our Design <span class="text-warm-beige">Process</span>',
            process_subtitle: 'A streamlined approach that transforms your vision into architectural reality.',
            process_step1_title: 'Consultation',
            process_step1_desc: 'Understanding your vision, requirements, and project goals.',
            process_step2_title: 'Concept',
            process_step2_desc: 'Developing creative concepts and initial design ideas.',
            process_step3_title: 'Design',
            process_step3_desc: 'Creating detailed architectural plans and 3D visualizations.',
            process_step4_title: 'Development',
            process_step4_desc: 'Overseeing construction with precision and quality control.',
            process_step5_title: 'Delivery',
            process_step5_desc: 'Final handover with complete documentation and support.',

            // Why Us
            whyus_label: 'Why Kalau',
            whyus_title: 'Why Choose <span class="text-gradient">Us</span>',
            whyus_subtitle: 'Discover what sets Kalau Architecture apart and why clients trust us with their most important projects.',
            feature1_title: 'Experienced Team',
            feature1_desc: 'Our team of seasoned architects brings decades of combined experience and expertise.',
            feature2_title: 'Sustainable Design',
            feature2_desc: 'We prioritize eco-friendly materials and energy-efficient solutions for a greener future.',
            feature3_title: 'Premium Quality',
            feature3_desc: 'Uncompromising attention to detail and quality in every aspect of design and execution.',
            feature4_title: 'Client Focus',
            feature4_desc: 'Your vision is our priority. We listen, collaborate, and deliver beyond expectations.',
            feature5_title: 'On-Time Delivery',
            feature5_desc: 'We respect deadlines and ensure timely project completion without compromising quality.',
            feature6_title: 'Innovative Solutions',
            feature6_desc: 'Cutting-edge design approaches and technology for forward-thinking architectural solutions.',

            // Testimonials
            testimonials_label: 'Testimonials',
            testimonials_title: 'What Our <span class="text-gradient">Clients</span> Say',
            testimonials_subtitle: "Don't just take our word for it. Hear from the clients who trusted us with their projects.",
            testimonial1_text: '"Kalau Architecture transformed our office space beyond our expectations. Their attention to detail and innovative design approach made all the difference."',
            testimonial1_role: 'CEO, TechVentures',
            testimonial2_text: '"Working with Kalau was an absolute pleasure. They understood our vision from day one and delivered a home that perfectly reflects our lifestyle."',
            testimonial2_role: 'Homeowner',
            testimonial3_text: '"Professional, creative, and reliable. Kalau Architecture has been our trusted partner for multiple projects. Outstanding results every time."',
            testimonial3_role: 'Real Estate Developer',
            testimonial4_text: '"The interior design for our restaurant exceeded all expectations. The ambiance they created has become a key part of our brand identity."',
            testimonial4_role: 'Restaurant Owner',

            // Contact
            contact_label: 'Get In Touch',
            contact_title: 'Contact <span class="text-gradient">Us</span>',
            contact_subtitle: "Ready to start your project? Let's discuss how we can bring your architectural vision to life.",
            contact_info_title: "Let's Build Something Amazing",
            contact_info_desc: "Have a project in mind or want to learn more about our services? We'd love to hear from you.",
            contact_legal: 'Company Information',
            contact_email: 'Email Us',
            contact_phone: 'Call Us',
            contact_follow: 'Follow Us',
            form_name_label: 'Full Name *',
            form_name_placeholder: 'John Doe',
            form_name_error: 'Please enter your name',
            form_email_label: 'Email Address *',
            form_email_placeholder: 'john@example.com',
            form_email_error: 'Please enter a valid email',
            form_phone_label: 'Phone Number',
            form_phone_placeholder: '+1 (555) 000-0000',
            form_message_label: 'Your Message *',
            form_message_placeholder: 'Tell us about your project...',
            form_message_error: 'Please enter your message',
            form_submit: 'Send Message',

            // Footer
            footer_desc: 'Creating modern, functional, and sustainable architectural solutions that transform visions into reality.',
            footer_links: 'Quick Links',
            footer_aboutus: 'About Us',
            footer_process: 'Our Process',
            footer_services: 'Services',
            footer_newsletter: 'Stay Updated',
            footer_newsletter_desc: 'Subscribe to our newsletter for updates and insights.',
            footer_email_placeholder: 'Your email',
            footer_copyright: '© 2024 Kalau Architecture. All rights reserved.',
            footer_privacy: 'Privacy Policy',
            footer_terms: 'Terms of Service',

            // Notifications
            notif_title: 'Message Sent!',
            notif_text: "We'll get back to you soon.",
        },

        lv: {
            // Nav
            nav_home: 'Sākums',
            nav_about: 'Par mums',
            nav_services: 'Pakalpojumi',
            nav_projects: 'Projekti',
            nav_process: 'Process',
            nav_whyus: 'Kāpēc mēs',
            nav_testimonials: 'Atsauksmes',
            nav_contact: 'Kontakti',
            nav_cta: 'Sazināties ar mums - edited',

            // Hero
            hero_tag: 'Apbalvota arhitektūras studija',
            hero_line1: 'Veidojam telpas,',
            hero_line2: 'Veidojam nākotni',
            hero_subtitle: 'Mēs radām modernas, funkcionālas un ilgtspējīgas arhitektūras risinājumus, kas pārvērš vīzijas realitātē.',
            hero_cta1: 'Mūsu projekti',
            hero_cta2: 'Sazināties',
            hero_scroll: 'Ritināt',

            // About
            about_label: 'Par mums',
            about_badge: 'Gadi',
            about_title: 'Radām arhitektūras <br><span class="text-gradient">izcilību</span> kopš 2013',
            about_p1: 'Kalau Architecture mēs ticam, ka lielisks dizains spēj mainīt dzīves. Mūsu aizrautīgo arhitektu un dizaineru komanda sadarbojas, lai radītu telpas, kas ir ne tikai estētiski pārsteidzošas, bet arī funkcionālas un ilgtspējīgas.',
            about_p2: 'No koncepcijas līdz pabeigšanai mēs katrā projektā ienesam inovāciju, precizitāti un radošumu. Mūsu apņemšanās sasniegt izcilību ir nodrošinājusi atzinību visā nozarē.',
            about_stat1: 'Gadu pieredze',
            about_stat2: 'Projekti pabeigti',
            about_stat3: 'Balvas iegūtas',
            about_btn: 'Uzzināt vairāk',

            // Services
            services_label: 'Ko mēs darām',
            services_title: 'Mūsu <span class="text-gradient">pakalpojumi</span>',
            services_subtitle: 'Visaptveroši arhitektūras pakalpojumi, kas pielāgoti jūsu vīzijas realizēšanai ar precizitāti un radošumu.',
            services_learn: 'Uzzināt vairāk',
            service1_title: 'Dzīvojamo māju dizains',
            service1_desc: 'Sapņu māju radīšana, kas apvieno komfortu, funkcionalitāti un estētisko skaistumu atbilstoši jūsu dzīvesveidam.',
            service2_title: 'Komerciālais dizains',
            service2_desc: 'Inovatīvu komerciālo telpu projektēšana, kas uzlabo produktivitāti un atspoguļo jūsu zīmola identitāti.',
            service3_title: 'Interjera dizains',
            service3_desc: 'Interjeru pārvēršana aizraujošās telpās ar pārdomātiem izkārtojumiem, materiāliem un apdarēm.',
            service4_title: 'Renovācija',
            service4_desc: 'Jaunu dzīvību iedvest esošajām konstrukcijām ar moderniem uzlabojumiem, saglabājot to raksturu.',
            service5_title: 'Ainavu dizains',
            service5_desc: 'Satriecošu āra vidi radīšana, kas papildina arhitektūru un uzlabo dabas skaistumu.',
            service6_title: 'Projektu konsultācijas',
            service6_desc: 'Ekspertu vadība un konsultatīvie pakalpojumi, lai palīdzētu jums pieņemt informētus lēmumus visā projekta gaitā.',

            // Projects
            projects_label: 'Mūsu portfolio',
            projects_title: 'Izcelti <span class="text-gradient">projekti</span>',
            projects_subtitle: 'Izpētiet mūsu kurēto arhitektūras šedevru kolekciju, kas demonstrē mūsu apņemšanos sasniegt izcilību.',
            projects_btn: 'Skatīt visus projektus',
            project1_cat: 'Dzīvojamais',
            project1_title: 'Modernā villa',
            project2_cat: 'Komerciālais',
            project2_title: 'Korporatīvais tornis',
            project3_cat: 'Interjers',
            project3_title: 'Luksusa dzīvoklis',
            project4_cat: 'Jaukta izmantošana',
            project4_title: 'Pilsētas komplekss',
            project5_cat: 'Dzīvojamais',
            project5_title: 'Pludmales māja',
            project6_cat: 'Ainava',
            project6_title: 'Dārza muiža',

            // Process
            process_label: 'Kā mēs strādājam',
            process_title: 'Mūsu dizaina <span class="text-warm-beige">process</span>',
            process_subtitle: 'Racionalizēta pieeja, kas pārvērš jūsu vīziju arhitektūras realitātē.',
            process_step1_title: 'Konsultācija',
            process_step1_desc: 'Jūsu vīzijas, prasību un projekta mērķu izpratne.',
            process_step2_title: 'Koncepcija',
            process_step2_desc: 'Radošu koncepciju un sākotnējo dizaina ideju izstrāde.',
            process_step3_title: 'Dizains',
            process_step3_desc: 'Detalizētu arhitektūras plānu un 3D vizualizāciju izveide.',
            process_step4_title: 'Izstrāde',
            process_step4_desc: 'Būvniecības uzraudzība ar precizitāti un kvalitātes kontroli.',
            process_step5_title: 'Nodošana',
            process_step5_desc: 'Galīgā nodošana ar pilnīgu dokumentāciju un atbalstu.',

            // Why Us
            whyus_label: 'Kāpēc Kalau',
            whyus_title: 'Kāpēc izvēlēties <span class="text-gradient">mūs</span>',
            whyus_subtitle: 'Uzziniet, kas atšķir Kalau Architecture un kāpēc klienti mums uztic savus svarīgākos projektus.',
            feature1_title: 'Pieredzējusi komanda',
            feature1_desc: 'Mūsu pieredzējušo arhitektu komanda apvieno gadu desmitu pieredzi un zināšanas.',
            feature2_title: 'Ilgtspējīgs dizains',
            feature2_desc: 'Mēs piešķiram prioritāti videi draudzīgiem materiāliem un energoefektīviem risinājumiem zaļākai nākotnei.',
            feature3_title: 'Augstākā kvalitāte',
            feature3_desc: 'Nekompromitēta uzmanība detaļām un kvalitātei katrā dizaina un izpildes aspektā.',
            feature4_title: 'Klientu fokuss',
            feature4_desc: 'Jūsu vīzija ir mūsu prioritāte. Mēs klausāmies, sadarbojamies un sniedzam vairāk nekā gaidīts.',
            feature5_title: 'Savlaicīga nodošana',
            feature5_desc: 'Mēs ievērojam termiņus un nodrošinām savlaicīgu projekta pabeigšanu, nekompromitējot kvalitāti.',
            feature6_title: 'Inovatīvi risinājumi',
            feature6_desc: 'Progresīvas dizaina pieejas un tehnoloģijas uz nākotni vērstiem arhitektūras risinājumiem.',

            // Testimonials
            testimonials_label: 'Atsauksmes',
            testimonials_title: 'Ko saka mūsu <span class="text-gradient">klienti</span>',
            testimonials_subtitle: 'Neticiet tikai mūsu vārdiem. Uzziniet no klientiem, kuri mums uzticēja savus projektus.',
            testimonial1_text: '"Kalau Architecture pārveidoja mūsu biroja telpu, pārsniedzot visas cerības. Viņu uzmanība detaļām un inovatīvā dizaina pieeja bija izšķiroša."',
            testimonial1_role: 'Izpilddirektors, TechVentures',
            testimonial2_text: '"Sadarbība ar Kalau bija absolūts prieks. Viņi saprata mūsu vīziju no pirmās dienas un radīja māju, kas pilnībā atspoguļo mūsu dzīvesveidu."',
            testimonial2_role: 'Mājas īpašnieks',
            testimonial3_text: '"Profesionāli, radoši un uzticami. Kalau Architecture ir bijis mūsu uzticamais partneris vairākos projektos. Izcili rezultāti katru reizi."',
            testimonial3_role: 'Nekustamā īpašuma attīstītājs',
            testimonial4_text: '"Mūsu restorāna interjera dizains pārsniedza visas cerības. Viņu radītā atmosfēra ir kļuvusi par galveno mūsu zīmola identitātes daļu."',
            testimonial4_role: 'Restorāna īpašnieks',

            // Contact
            contact_label: 'Sazināties',
            contact_title: 'Sazinieties ar <span class="text-gradient">mums</span>',
            contact_subtitle: 'Gatavi sākt savu projektu? Apspriedīsim, kā mēs varam realizēt jūsu arhitektūras vīziju.',
            contact_info_title: 'Radīsim ko izcilu kopā',
            contact_info_desc: 'Vai jums ir projekts prātā vai vēlaties uzzināt vairāk par mūsu pakalpojumiem? Mēs labprāt dzirdētu no jums.',
            contact_legal: 'Uzņēmuma informācija',
            contact_email: 'Rakstiet mums',
            contact_phone: 'Zvaniet mums',
            contact_follow: 'Sekojiet mums',
            form_name_label: 'Pilns vārds *',
            form_name_placeholder: 'Jānis Bērziņš',
            form_name_error: 'Lūdzu ievadiet savu vārdu',
            form_email_label: 'E-pasta adrese *',
            form_email_placeholder: 'janis@piemers.lv',
            form_email_error: 'Lūdzu ievadiet derīgu e-pastu',
            form_phone_label: 'Tālruņa numurs',
            form_phone_placeholder: '+371 20 000 000',
            form_message_label: 'Jūsu ziņojums *',
            form_message_placeholder: 'Pastāstiet mums par savu projektu...',
            form_message_error: 'Lūdzu ievadiet savu ziņojumu',
            form_submit: 'Nosūtīt ziņojumu',

            // Footer
            footer_desc: 'Radām modernas, funkcionālas un ilgtspējīgas arhitektūras risinājumus, kas pārvērš vīzijas realitātē.',
            footer_links: 'Ātrās saites',
            footer_aboutus: 'Par mums',
            footer_process: 'Mūsu process',
            footer_services: 'Pakalpojumi',
            footer_newsletter: 'Jaunumi',
            footer_newsletter_desc: 'Abonējiet mūsu jaunumu vēstuli atjauninājumiem un ieskatiem.',
            footer_email_placeholder: 'Jūsu e-pasts',
            footer_copyright: '© 2024 Kalau Architecture. Visas tiesības aizsargātas.',
            footer_privacy: 'Privātuma politika',
            footer_terms: 'Lietošanas noteikumi',

            // Notifications
            notif_title: 'Ziņojums nosūtīts!',
            notif_text: 'Mēs ar jums sazināsimies drīzumā.',
        }
    };

    // ==================== LANGUAGE STATE ====================
    let currentLang = localStorage.getItem('kalau-lang') || 'en';

    // Flag SVGs
    const flags = {
        en: `<svg class="w-5 h-5 rounded-full overflow-hidden" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#012169"/>
                <path d="M0 0L36 36M36 0L0 36" stroke="#fff" stroke-width="6"/>
                <path d="M0 0L36 36M36 0L0 36" stroke="#C8102E" stroke-width="2"/>
                <path d="M18 0V36M0 18H36" stroke="#fff" stroke-width="10"/>
                <path d="M18 0V36M0 18H36" stroke="#C8102E" stroke-width="6"/>
             </svg>`,
        lv: `<svg class="w-5 h-5 rounded-full overflow-hidden" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#9E3039"/>
                <rect y="14" width="36" height="8" fill="#fff"/>
             </svg>`
    };

    const flagsLarge = {
        en: `<svg class="w-6 h-6 rounded-full overflow-hidden flex-shrink-0" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#012169"/>
                <path d="M0 0L36 36M36 0L0 36" stroke="#fff" stroke-width="6"/>
                <path d="M0 0L36 36M36 0L0 36" stroke="#C8102E" stroke-width="2"/>
                <path d="M18 0V36M0 18H36" stroke="#fff" stroke-width="10"/>
                <path d="M18 0V36M0 18H36" stroke="#C8102E" stroke-width="6"/>
             </svg>`,
        lv: `<svg class="w-6 h-6 rounded-full overflow-hidden flex-shrink-0" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#9E3039"/>
                <rect y="14" width="36" height="8" fill="#fff"/>
             </svg>`
    };

    // ==================== APPLY LANGUAGE ====================
    function applyLanguage(lang, animate) {
        const dict = translations[lang];
        if (!dict) return;

        if (animate) {
            document.body.classList.add('lang-switching');
        }

        const applyTranslations = () => {
            // Text content
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key] !== undefined) {
                    el.innerHTML = dict[key];
                }
            });

            // Placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (dict[key] !== undefined) {
                    el.setAttribute('placeholder', dict[key]);
                }
            });

            // Update HTML lang
            document.documentElement.lang = lang === 'lv' ? 'lv' : 'en';
        };

        if (animate) {
            setTimeout(() => {
                applyTranslations();
                setTimeout(() => {
                    document.body.classList.remove('lang-switching');
                }, 50);
            }, 300);
        } else {
            applyTranslations();
        }

        // Update active state in dropdown
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        // Update button flag + text
        const currentFlag = document.getElementById('current-flag');
        const currentLangText = document.getElementById('current-lang-text');
        const mobileLangFlag = document.querySelector('.mobile-lang-flag');
        const mobileLangText = document.querySelector('.mobile-lang-text');

        if (currentFlag) currentFlag.innerHTML = flags[lang];
        if (currentLangText) currentLangText.textContent = lang.toUpperCase();
        if (mobileLangFlag) mobileLangFlag.innerHTML = flags[lang];
        if (mobileLangText) mobileLangText.textContent = lang.toUpperCase();

        currentLang = lang;
        localStorage.setItem('kalau-lang', lang);
    }

    // ==================== LANGUAGE SWITCHER - DESKTOP ====================
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
            const arrow = langToggle.querySelector('.lang-arrow');
            if (arrow) {
                arrow.style.transform = langDropdown.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
            }
        });

        // Language option click
        langDropdown.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.getAttribute('data-lang');
                if (lang !== currentLang) {
                    applyLanguage(lang, true);
                }
                langDropdown.classList.remove('open');
                const arrow = langToggle.querySelector('.lang-arrow');
                if (arrow) arrow.style.transform = 'rotate(0)';
            });
        });

        // Close dropdown on outside click
        document.addEventListener('click', (e) => {
            if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('open');
                const arrow = langToggle.querySelector('.lang-arrow');
                if (arrow) arrow.style.transform = 'rotate(0)';
            }
        });
    }

    // ==================== LANGUAGE SWITCHER - MOBILE (simple toggle) ====================
    const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    if (mobileLangToggle) {
        mobileLangToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'lv' : 'en';
            applyLanguage(newLang, true);
        });
    }

    // Apply stored language on load
    applyLanguage(currentLang, false);

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

    // ==================== HERO PARALLAX ====================
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

    // ==================== SCROLL REVEALS ====================
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

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
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

        testimonialTrack.addEventListener('mouseenter', stopAuto);
        testimonialTrack.addEventListener('mouseleave', startAuto);

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
                btn.innerHTML = `<svg class="animate-spin w-5 h-5 mr-2" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${currentLang === 'lv' ? 'Sūta...' : 'Sending...'}`;
                btn.disabled = true;

                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.disabled = false;
                    const dict = translations[currentLang];
                    showNotification(dict.notif_title, dict.notif_text);
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


   

    async function sendMessage(data){

    const res = await fetch(
        "https://kalau-contact-api.hariprasath-j-1997.workers.dev/",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );

    if(res.ok){
        alert("Message sent!");
    }else{
        alert("Something went wrong");
    }

}


const form=document.querySelector("form");

form.addEventListener("submit",async(e)=>{

    e.preventDefault();

    console.log(form.name)
    await sendMessage({

        name:form.name.value,

        email:form.email.value,

        message:form.message.value

    });

});
});
