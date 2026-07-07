/**
 * ============================================================
 *  KALAU ARCHITECTURE — CENTRALIZED CONTENT DATA
 * ============================================================
 *  
 *  📌  ALL website content lives here. Edit this ONE file
 *      to update text, projects, team members, contact info,
 *      stats, images, etc. across every page.
 *
 *  🌐  Bilingual support: every text field uses { en: '...', lv: '...' }
 *
 *  ✅  HOW TO USE:
 *      - Add <script src="assets/js/contents.js"></script> BEFORE
 *        script.js and page-specific scripts.
 *      - Access any data via the global `SITE` object.
 *
 * ============================================================
 */

const SITE = {

    // ============================================================
    //  COMPANY INFO  —  logo, name, registration, contact details
    // ============================================================
    company: {
        name: 'Kalau Architecture',
        legalName: 'Kalau, SIA',
        regNumber: '40203479498',
        buildingReg: '20711',
        email: 'kalau@kalau.lv',
        phone: '+371 28364517',
        foundedYear: 2025,
        logoPath: 'assets/images/logo.png',
        socialLinks: {
            instagram: 'https://www.instagram.com/kalau_architecture/',
            facebook: 'https://www.facebook.com/profile.php?id=61586458139668',
        },
    },

    // ============================================================
    //  STATS  —  numbers shown in the About section
    // ============================================================
    stats: {
        yearsExperience: 10,
        projectsDone: 50,
        awardsWon: "100%",
        teamSize: 15,
    },

    // ============================================================
    //  HERO IMAGES  —  background images for each page hero
    // ============================================================
    heroImages: {
        home: 'assets/images/hero/hero.png',
        projects: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        about: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        teamGroup: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },

    // ============================================================
    //  PROJECTS  —  Add / edit / remove project entries here
    //
    //  Fields:
    //    id          — unique number (increment for new entries)
    //    title       — { en: '...', lv: '...' }
    //    type        — 'private-houses' | 'apartments' | 'commercial' | 'other'
    //    typeName    — { en: '...', lv: '...' }   (display label)
    //    images      — array of image URLs (first = thumbnail)
    //    year        — number
    //    location    — { en: '...', lv: '...' }
    //    status      — { en: '...', lv: '...' }
    //    team        — string (architect / team name)
    //    developer   — { en: '...', lv: '...' }
    //    description — { en: '<p>...</p>', lv: '<p>...</p>' }  (HTML ok)
    // ============================================================
    projects: [
        {
            id: 1,
            featured: true,
            homepageOrder: 100,
            title: { en: 'Private house next to water', lv: 'Privātmāja pie ūdens' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
           images: [
    'assets/images/projects/house01/1-Ziemeli-1.png',
    'assets/images/projects/house01/2austrumi.png',
    'assets/images/projects/house01/3dienvidi2.png',
    'assets/images/projects/house01/4dienvidi22.png',
    'assets/images/projects/house01/5rietumu.png',
    'assets/images/projects/house01/ieeja.jpeg',
    'assets/images/projects/house01/int.jpeg',
    'assets/images/projects/house01/int_5 - Photo-2.png',
    'assets/images/projects/house01/int67.png',
    'assets/images/projects/house01/Istaba3.jpeg'
],
           year: 2025,

location: {
    en: 'Riga, Latvia',
    lv: 'Rīga, Latvija'
},

area: '245 m²',

description: {
                en: '<p>A modern villa near river, designed to harmonize with the natural landscape while offering luxurious contemporary living.</p><p>The design features floor-to-ceiling glazing, and an open-plan living concept that seamlessly connects indoor and outdoor spaces.</p>',
                lv: '<p>Moderna privātmāja pie upes, kas veidota, lai harmonizētu ar dabisko ainavu, vienlaikus piedāvājot mūsdienīgu dzīvesveidu.</p><p>Projektā veidoti augsti stiklojumi un atvērta plānojuma koncepcija, kas nemanāmi savieno iekštelpu un ārtelpas. </p>'
            }
        },
        {
            id: 2,
            featured: true,
              homepageOrder: 99,
            title: { en: 'Private house', lv: 'Privātmāja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [
                'assets/images/projects/house02/01-exterior.png',
                'assets/images/projects/house02/02-interior.png',
            
            ],
            year: 2026,
            location: { en: 'Riga, Latvia', lv: 'Rīga, Latvija' },
          
            area: '220 m²',
            description: {
                en: '<p>A Private house with an open plan, a spacious terrace and a large living room window. </p><p>The layout is designed to face the garden as much as possible, as well as to have an open view of the River from the 2nd floor.</p>',
                lv: '<p>Privātmāja ar atvērtu plānojumu, plašu terasi un lielu viesistabas logu.</p><p>Plānojums veidots, lai pēc iespējas tiktu vērsts uz dārza pusi, kā arī no 2.stāva atvērtu skatu uz Upi. </p>'
            }
        },
        {
            id: 3,
            featured: true,
                homepageOrder: 98,
            title: { en: 'Private house', lv: 'Privātmāja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [
                'assets/images/projects/house03/1-viz3.png',
                'assets/images/projects/house03/2-viz2.png',
                'assets/images/projects/house03/3-viz2.png',
                'assets/images/projects/house03/4-viz-closeup.png',
               ' assets/images/projects/house03/5-viz.png',
            ],
            year: 2026,
            location: { en: 'Riga, Latvia', lv: 'Rīga, Latvija' },
          
            area: '260 m²',
            description: {
                en: '<p>A Private house with an open plan, a spacious terrace and a large living room window. </p><p>The layout is designed to face the garden as much as possible, as well as to have an open view of the River from the 2nd floor.</p>',
                lv: '<p>Privātmāja ar atvērtu plānojumu, plašu terasi un lielu viesistabas logu.</p><p>Plānojums veidots, lai pēc iespējas tiktu vērsts uz dārza pusi, kā arī no 2.stāva atvērtu skatu uz Upi. </p>'
            }
        },
        {
             id: 4,
            featured: true,
             homepageOrder: 97,
            title: { en: 'Private house', lv: 'Privātmāja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [
                'assets/images/projects/house04/int1.jpeg',
                'assets/images/projects/house04/int2.jpeg',
                'assets/images/projects/house04/int3.jpeg',
            ],
            year: 2023,
            location: { en: 'Baldone, Latvia', lv: 'Baldone, Latvija' },
          
            area: '180 m²',
            description: {
                en: '<p>A Private house with an open plan, a spacious terrace and a large living room window. </p><p>The layout is designed to face the forest as much as possible.</p>',
                lv: '<p>Privātmāja ar atvērtu plānojumu, plašu terasi un lielu viesistabas logu.</p><p>Plānojums veidots, lai pēc iespējas tiktu vērsts uz meža pusi. </p>'
            }
        },
        {
            id: 5,
            featured: true,
             homepageOrder: 96,
            title: { en: 'Private house', lv: 'Privātmāja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [
                'assets/images/projects/house05/1.png',
                'assets/images/projects/house05/2.png',
                'assets/images/projects/house05/3.png',
                'assets/images/projects/house05/4.png', 
            ],
            year: 2026,
            location: { en: 'Jūrmala, Latvia', lv: 'Jūrmala, Latvija' },
          
            area: '180 m²',
            description: {
                en: '<p>A Private house with an open plan, a spacious terrace and a large living room window. </p><p>The layout is designed to face the forest as much as possible.</p>',
                lv: '<p>Privātmāja ar atvērtu plānojumu, plašu terasi un lielu viesistabas logu.</p><p>Plānojums veidots, lai pēc iespējas tiktu vērsts uz meža pusi. </p>'
            }
        },
        {
            id: 6,
             featured: true,
            homepageOrder: 95,
            title: { en: 'Private house', lv: 'Privātmāja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [
                'assets/images/projects/house06/1.png',
                'assets/images/projects/house06/2.png',
            
            ],
            year: 2025,
            location: { en: 'Baldone, Latvia', lv: 'Baldone, Latvija' },
          
            area: '180 m²',
            description: {
                en: '<p>A simple barn house type private house with an open plan, a spacious terrace and a large living room window. </p><p>The layout is designed to face the forest as much as possible.</p>',
                lv: '<p>Privātmāja ar atvērtu plānojumu, plašu terasi un lielu viesistabas logu.</p><p>Plānojums veidots, lai pēc iespējas tiktu vērsts uz meža pusi. </p>'
            }
        },
        {
            id: 7,
             featured: false,
            homepageOrder: 94,
             title: { en: 'Private house renovation', lv: 'Privātmājas pārbūve' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [    'assets/images/projects/house07/view1.png',
                'assets/images/projects/house07/view2.png',
                     'assets/images/projects/house07/view3.png',
                
            ],
            year: 2025,
            location: { en: 'Marupe, Latvia', lv: 'Mārupe, Latvija' },
          
            area: '200 m²',
            description: {
                en: '<p>A private house with an open plan and spaciou living room. </p><p> In the renovation project we added 3 more rooms, while not interacting much with the existing architecture.</p>',
                lv: '<p>Privātmāja ar atvērtu plānojumu un plašu dzīvojamo istabu</p><p>Pārbūves projektā mēs pievienojām vēl 3 istabas, nemainot kopējo ēkas arhitektūras stilu. </p>'
                }
        },
        {
            id: 8,
             featured: false,
            homepageOrder: 93,
            title: { en: 'Private house', lv: 'Privātmāja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [
                'assets/images/projects/house08/1.jpeg',
                'assets/images/projects/house08/2.jpeg',
                'assets/images/projects/house08/3-int.png'
            
            ],
            year: 2025,
            location: { en: 'Jekabpils, Latvia', lv: 'Jēkabpils, Latvija' },
          
            area: '120 m²',
            description: {
                en: '<p>Private house with an open plan, a spacious terrace and a living room window.</p><p>The layout is compact, but fulfills all the necessary client programs, including 4 large rooms, an office, and a laundry room.</p>',
                lv: '<p>Privātmāja ar atvērtu plānojumu, plašu terasi un lielu viesistabas logu.</p><p>Plānojums veidots kompakts, taču izpildot visu nepieciešamo klienta programmu, iekļaujot 4 guļamistabas, kabinetu, veļas telpu. </p>'
            }
        },
        {
            id: 9,
             featured: false,
            homepageOrder: 92,
             title: { en: 'Studio apartment', lv: 'Studio dzīvoklis' },
            type: 'apartments',
            typeName: { en: 'Apartment', lv: 'Dzīvoklis' },
            images: [
                'assets/images/projects/house09/1-int.jpeg',
                'assets/images/projects/house09/2-int.jpeg',
                'assets/images/projects/house09/3-plans.jpeg', 
            
            ],
            year: 2025,
            location: { en: 'Riga, Latvia', lv: 'Rīga, Latvija' },
          
            area: '50 m²',
            description: {
                en: '<p>Studio apartment in Roof floor. </p><p>The layout is designed to as much space as possible, by adding roof windows and creating more light in room.</p>',
                lv: '<p>Studio tipa dzīvoklis jumta stāvā.</p><p>Plānojums veidots, lai pēc iespējas vairak izmantotu platību, paredzot jumta logus un ienesot papildus gaismu. </p>'
            }
        },
        {
            id: 10,
             featured: false,
            homepageOrder: 91,
             title: { en: 'Private house', lv: 'Privātmāja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [
                'assets/images/projects/house10/1.png',
                'assets/images/projects/house10/2.png',
                'assets/images/projects/house10/3.png',
                
            ],
            year: 2026,
            location: { en: 'Daugmale, Latvia', lv: 'Daugmale, Latvija' },
          
            area: '250 m²',
            description: {
                en: '<p>A Private house with an open plan, a spacious terrace and a large living room window. </p><p>The layout is designed to face the river as much as possible.</p>',
                lv: '<p>Privātmāja ar atvērtu plānojumu, plašu terasi un lielu viesistabas logu.</p><p>Plānojums veidots, lai pēc iespējas tiktu vērsts uz Upes pusi. </p>'
            }
        },
        {
            id: 11,
             featured: false,
            homepageOrder: 90,
           title: { en: 'Private house', lv: 'Privātmāja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
           images: [
    'assets/images/projects/house11/1.jpeg',
    'assets/images/projects/house11/2.jpeg',
    'assets/images/projects/house11/3.jpeg',
],
           year: 2022,

location: {
    en: 'Babite, Latvia',
    lv: 'Babīte, Latvija'
},

area: '200 m²',

description: {
                en: '<p>A modern villa, designed to harmonize with the natural landscape while offering luxurious contemporary living.</p><p>The design features floor-to-ceiling glazing, and an open-plan living concept that seamlessly connects indoor and outdoor spaces.</p>',
                lv: '<p>Moderna privātmāja, kas veidota, lai harmonizētu ar dabisko ainavu, vienlaikus piedāvājot mūsdienīgu dzīvesveidu.</p><p>Projektā veidoti augsti stiklojumi un atvērta plānojuma koncepcija, kas nemanāmi savieno iekštelpu un ārtelpas. </p>'
            }
        },
        {
            id: 12,
            featured: false,
            homepageOrder: 89,
            title: { en: 'Private house', lv: 'Privātmāja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
           images: [    'assets/images/projects/house12/1-5.png',
                    'assets/images/projects/house12/2-3.png',
                    'assets/images/projects/house12/3-3.png', 
                    'assets/images/projects/house12/4-3.png', 
  
],
           year: 2026,

location: {
    en: 'Jurmala, Latvia',
    lv: 'Jūrmala, Latvija'
},

area: '240 m²',

description: {
                en: '<p>A modern villa, designed to harmonize with the natural landscape while offering luxurious contemporary living.</p><p>The design features floor-to-ceiling glazing, and an open-plan living concept that seamlessly connects indoor and outdoor spaces.</p>',
                lv: '<p>Moderna privātmāja, kas veidota, lai harmonizētu ar dabisko ainavu, vienlaikus piedāvājot mūsdienīgu dzīvesveidu.</p><p>Projektā veidoti augsti stiklojumi un atvērta plānojuma koncepcija, kas nemanāmi savieno iekštelpu un ārtelpas. </p>'
            }
        },
    ],

    // ============================================================
    //  TEAM MEMBERS  —  Add / edit / remove team entries here
    //
    //  Fields:
    //    id         — unique number
    //    name       — string
    //    role       — { en: '...', lv: '...' }
    //    department — 'leadership' | 'architecture' | 'interior' | 'engineering'
    //    image      — URL to portrait photo
    //    bio        — { en: '...', lv: '...' }
    //    linkedin   — URL  (optional)
    //    email      — email (optional)
    // ============================================================
    team: [
        {
            id: 1,
            name: 'Serkan Kalau',
            role: { en: 'Founder & Lead Architect', lv: 'Dibinātājs un galvenais arhitekts' },
            department: 'leadership',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            bio: {
                en: 'Over 20 years of experience leading innovative architectural projects across the Baltic region.',
                lv: 'Vairāk nekā 20 gadu pieredze, vadot inovatīvus arhitektūras projektus Baltijas reģionā.'
            },
        },
    ],

    // ============================================================
    //  TRANSLATIONS  —  All UI text in EN and LV
    //  
    //  Used by data-i18n="key" attributes in HTML.
    //  Key names match the data-i18n values in the HTML templates.
    // ============================================================
    translations: {
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
            nav_team: 'Team',
            nav_cta: 'Contact Us',

            // Hero
            hero_tag: 'Modern Architecture Studio',
            hero_line1: 'Thoughtful Architecture,',
            hero_line2: 'for Every Project',
            hero_subtitle: 'We create modern, functional, and sustainable architectural solutions that transform your vision into reality.',
            hero_cta1: 'Our Projects',
            hero_cta2: 'Contact Us',
            hero_scroll: 'Scroll',

            // About
            about_label: 'About Us',
            about_badge: 'Years',
            about_title: 'Designing Architecture for the <br><span class="text-gradient">Way You Live</span> ',
            about_p1: 'Every project begins with a thorough understanding of our client\'s needs and the unique qualities of the site. Our goal is to create architecture that is timeless, functional, and sustainable, while preserving the individuality of each project.',
            about_p2: 'From the first sketch to construction supervision, we are by your side throughout the entire design process, ensuring every vision is transformed into a thoughtful, high-quality result.',
            about_stat1: 'Years Experience',
            about_stat2: 'Projects Done',
            about_stat3: 'Individual approach',
            about_btn: 'Learn More',

            // Why Us
            whyus_label: 'Why Kalau',
            whyus_title: 'Our Design <span class="text-gradient">Approach</span>',
            feature1_title: 'Individual approach',
            feature1_desc: 'Each project is created by carefully studying the client\'s needs, lifestyle, and land characteristics to create a solution that is right specifically for you.',
            feature2_title: 'Thoughtful solutions',
            feature2_desc: 'In architecture, we combine aesthetics, functionality, and sustainable solutions, creating buildings that are comfortable in everyday life and retain their value in the long term.',
            feature3_title: '3D Design',
            feature3_desc: 'We prepare a 3D model and visualizations for each project so that you can fully get to know your future home during the design process.',

            // Team (home page)
            team_label: 'Our Team',
            team_title: 'Meet the <span class="text-gradient">Minds</span> Behind Every Project',
            team_p1: 'Our team is a diverse group of passionate architects, designers, and engineers who bring creativity, precision, and years of expertise to every project we undertake.',
            team_p2: 'From initial concept to final delivery, our collaborative approach ensures that every detail is thoughtfully considered. Together, we turn ambitious visions into architectural reality.',
            team_btn: 'See All Our Team',
            team_badge: 'Experts',

            // Services
            services_label: 'What We Do',
            services_title: 'Our <span class="text-gradient">Services</span>',
            services_subtitle: 'A variety of architectural services tailored to realize your vision with precision and creativity. From small solutions to complex projects.',
            services_learn: 'Learn More',
            service1_title: 'Solutions for existing buildings',
            service1_desc: 'Reconstructions and extensions. Legalization of buildings. Project changes.',
            service2_title: 'New construction solutions',
            service2_desc: 'Private house projects. Public building projects. Various functions and scales.',
            service3_title: 'Simplified projects',
            service3_desc: 'Apartment renovations. Buildings up to 60m². Various auxiliary buildings (sauna houses, barns, garages, sheds).',

            // Process
            process_label: 'How We Work',
            process_title: 'Our Design <span class="text-warm-beige">Process</span>',
            process_subtitle: 'A clear and thoughtful design process – from the first consultation to project implementation.',
            process_step1_title: 'Consultation',
            process_step1_desc: 'We discuss your wishes, budget, land options, and project goals.',
            process_step2_title: 'Concept',
            process_step2_desc: 'We create the first sketches and spatial concept, searching for the most suitable architectural solution.',
            process_step3_title: 'Design',
            process_step3_desc: 'We develop the project in a 3D environment and prepare visualizations to make it easier to understand the plan before construction.',
            process_step4_title: 'Project',
            process_step4_desc: 'We prepare a complete construction project and coordinate the necessary parts of the project.',
            process_step5_title: 'Supervision',
            process_step5_desc: 'During construction, we monitor project compliance and help find solutions if necessary.',

            // Projects
            projects_label: 'Our Portfolio',
            projects_title: 'Featured <span class="text-gradient">Projects</span>',
            projects_subtitle: 'Check out our works, which combine modern architecture, functionality, and an individual approach to each idea.',
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

            // Contact
            contact_label: 'Get In Touch',
            contact_title: 'Contact <span class="text-gradient">Us</span>',
            contact_subtitle: "Ready to start your project? Let's discuss how we can bring your architectural vision to life.",
            contact_legal: 'Info',
            contact_email: 'Email Us',
            contact_phone: 'Call Us',
            contact_follow: 'Follow Us',

            // Footer
            footer_desc: 'Creating modern, functional, and sustainable architectural solutions that transform visions into reality.',
            footer_links: 'Quick Links',
            footer_aboutus: 'About Us',
            footer_services: 'Services',
            footer_tagline: 'We create modern, functional, and sustainable architectural solutions that turn visions into reality.',
            footer_copyright: '© 2025 Kalau Architecture. All rights reserved.',
            footer_privacy: 'Privacy Policy',
            footer_terms: 'Terms of Service',

            // Notifications
            notif_title: 'Message Sent!',
            notif_text: "We'll get back to you soon.",

            // Forms
            form_name_label: 'Full Name *',
            form_name_placeholder: 'John Doe',
            form_name_error: 'Please enter your name',
            form_email_label: 'Email Address *',
            form_email_placeholder: 'john@example.com',
            form_email_error: 'Please enter a valid email',
            form_phone_label: 'Phone Number',
            form_phone_placeholder: '+371 28364517',
            form_message_label: 'Your Message *',
            form_message_placeholder: 'Tell us about your project...',
            form_message_error: 'Please enter your message',
            form_submit: 'Send Message',

            // Projects page
            projects_page_label: 'Our Portfolio',
            projects_page_title: 'All Projects',
            breadcrumb_home: 'Home',
            filter_type_label: 'Type:',
            filter_all: 'All',
            filter_private: 'Private Houses',
            filter_apartments: 'Apartments',
            filter_commercial: 'Commercial / Mixed Use',
            filter_other: 'Other',
            sort_new_old: 'New to Old',
            sort_old_new: 'Old to New',
            sort_az: 'Alphabetical A–Z',
            results_text: 'projects',
            no_results_title: 'No projects found',
            no_results_desc: 'Try adjusting your filters to find what you\'re looking for.',
            clear_filters: 'Clear Filters',
            detail_back: 'All Projects',
            detail_back_link: 'Back to All Projects',
            detail_desc_label: 'Project Description',
            detail_info_label: 'Project Information',
            detail_cta_text: 'Interested in a similar project?',
            detail_cta_btn: 'Contact Us',
            detail_kv_location: 'Location',
            detail_kv_year: 'Year',
            detail_kv_area: 'Area',
            detail_kv_status: 'Status',
            detail_kv_team: 'Team',
            detail_kv_developer: 'Developer',
            detail_kv_type: 'Type',
            cta_title: 'Have a Project in Mind?',
            cta_desc: 'Let\'s discuss how we can bring your architectural vision to life with our expertise and passion.',
            cta_button: 'Contact Us',

            // Teams page
            team_page_label: 'The People',
            team_page_title: 'Our Team',
            breadcrumb_team: 'Team',
            filter_dept_label: 'Department:',
            filter_leadership: 'Leadership',
            filter_architecture: 'Architecture',
            filter_interior: 'Interior Design',
            filter_engineering: 'Engineering',
            team_cta_title: 'Join Our Team',
            team_cta_desc: 'We\'re always looking for talented individuals who share our passion for exceptional architecture and design.',
            team_cta_btn: 'Get in Touch',
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
            nav_team: 'Komanda',
            nav_cta: 'Sazināties',

            // Hero
            hero_tag: 'Mūsdienīga arhitektūras studija',
            hero_line1: 'Pārdomāta arhitektūra',
            hero_line2: 'ikvienam projektam',
            hero_subtitle: 'Mēs radām modernus, funkcionālus un ilgtspējīgus arhitektūras risinājumus, kas pārvērš Jūsu vīziju realitātē. ',
            hero_cta1: 'Mūsu projekti',
            hero_cta2: 'Sazināties',
            hero_scroll: '↓ Turpināt',

            // About
            about_label: 'Par mums',
            about_badge: 'Gadi',
            about_title: 'Projektējam arhitektūru  <br><span class="text-gradient">un vidi</span> kurā gribas dzīvot',
            about_p1: 'Katrs projekts sākas ar rūpīgu klienta vajadzību un vietas izpēti. Mūsu mērķis ir radīt arhitektūru, kas ir estētiska, funkcionāla un ilgtspējīga, vienlaikus saglabājot katra projekta individualitāti.',
            about_p2: 'No pirmās skices līdz autoruzraudzībai esam līdzās visā projektēšanas procesā, lai ieceres pārtaptu kvalitatīvā un pārdomātā rezultātā.',
            about_stat1: 'Gadu pieredze',
            about_stat2: 'Izstrādāti projekti',
            about_stat3: 'Individuāli risinājumi',
            about_btn: 'Uzzināt vairāk',

            // Why Us
            whyus_label: 'Kāpēc Kalau',
            whyus_title: 'Mūsu pieeja <span class="text-gradient">projektēšanai</span>',
            feature1_title: 'Individuāla pieeja',
            feature1_desc: 'Katrs projekts tiek veidots, rūpīgi iepazīstot klienta vajadzības, dzīvesveidu un zemesgabala īpatnības, lai radītu risinājumu, kas ir piemērots tieši Jums.',
            feature2_title: 'Pārdomāti risinājumi',
            feature2_desc: 'Arhitektūrā apvienojam estētiku, funkcionalitāti un ilgtspējīgus risinājumus, radot ēkas, kas ir ērtas ikdienā un saglabā savu vērtību ilgtermiņā.',
            feature3_title: '3D projektēšana',
            feature3_desc: 'Katram projektam sagatavojam 3D modeli un vizualizācijas, lai Jūs jau projektēšanas laikā varētu pilnvērtīgi iepazīt savu nākamo māju.',

            // Team (home page)
            team_label: 'Mūsu komanda',
            team_title: 'Iepazīstieties ar <span class="text-gradient">prātiem</span> aiz katra projekta',
            team_p1: 'Mūsu komanda ir daudzveidīga aizrautīgu arhitektu, dizaineru un inženieru grupa, kas katrā projektā ienes radošumu, precizitāti un gadu pieredzi.',
            team_p2: 'No sākotnējās koncepcijas līdz galīgajai nodošanai mūsu sadarbības pieeja nodrošina, ka katra detaļa ir pārdomāta. Kopā mēs pārvēršam vērienīgas vīzijas arhitektūras realitātē.',
            team_btn: 'Skatīt visu komandu',
            team_badge: 'Eksperti',

            // Services
            services_label: 'Ko mēs darām',
            services_title: 'Mūsu <span class="text-gradient">pakalpojumi</span>',
            services_subtitle: 'Dažādi arhitektūras pakalpojumi, kas pielāgoti jūsu vīzijas realizēšanai ar precizitāti un radošumu. No nelieliem risinājumiem līdz sarežģītiem projektiem.',
            services_learn: 'Uzzināt vairāk',
            service1_title: 'Esošu ēku risinājumi',
            service1_desc: 'Pārbūves un piebūves. Ēku legalizācija. Projekta izmaiņas.',
            service2_title: 'Jaunbūvju risinājumi',
            service2_desc: 'Privātmāju projekti. Publisku ēku projekti. Dažādas funkcijas un mērogi.',
            service3_title: 'Vienkāršoti projekti',
            service3_desc: 'Dzīvokļu renovācijas. Būves līdz 60m². Dažādas palīgēkas (pirtis, šķūņi, garāžas, nojumes).',

            // Process
            process_label: 'Kā mēs strādājam',
            process_title: 'Projektēšanas <span class="text-warm-beige">process</span>',
            process_subtitle: 'Skaidrs un pārdomāts projektēšanas process – no pirmās konsultācijas līdz projekta realizācijai.',
            process_step1_title: 'Konsultācija',
            process_step1_desc: 'Pārrunājam vēlmes, budžetu, zemesgabala iespējas un projekta mērķus.',
            process_step2_title: 'Koncepcija',
            process_step2_desc: 'Veidojam pirmās skices un telpisko koncepciju, meklējot piemērotāko arhitektūras risinājumu.',
            process_step3_title: 'Projektēšana',
            process_step3_desc: 'Izstrādājam projektu 3D vidē un sagatavojam vizualizācijas, lai ieceri būtu vieglāk izprast vēl pirms būvniecības.',
            process_step4_title: 'Būvprojekts',
            process_step4_desc: 'Sagatavojam pilnu būvprojektu un koordinējam nepieciešamās projekta daļas.',
            process_step5_title: 'Autoruzraudzība',
            process_step5_desc: 'Būvniecības laikā uzraugām projekta atbilstību un palīdzam rast risinājumus nepieciešamības gadījumā.',

            // Projects
            projects_label: 'Mūsu portfolio',
            projects_title: 'Jaunākie <span class="text-gradient">projekti</span>',
            projects_subtitle: 'Iepazīstieties ar mūsu darbiem, kuros apvienota mūsdienīga arhitektūra, funkcionalitāte un individuāla pieeja katrai iecerei.',
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

            // Contact
            contact_label: 'Sazināties',
            contact_title: 'Sazinieties ar <span class="text-gradient">mums</span>',
            contact_subtitle: 'Nepieciešams projekts? Apspriedīsim, kā mēs varam realizēt jūsu vēlmes un iespējas.',
            contact_legal: 'Info',
            contact_email: 'Droši raksti',
            contact_phone: 'Uzzvani',
            contact_follow: 'Pieseko',

            // Footer
            footer_desc: 'Radām modernas, funkcionālas un ilgtspējīgas arhitektūras risinājumus, kas pārvērš vīzijas realitātē.',
            footer_links: 'Ātrās saites',
            footer_aboutus: 'Par mums',
            footer_services: 'Pakalpojumi',
            footer_tagline: 'Mēs radām modernus, funkcionālus un ilgtspējīgus arhitektūras risinājumus. Pārvēršam vīzijas realitātē.',
            footer_copyright: '© 2025 kalau-architecture. Visas tiesības aizsargātas.',
            footer_privacy: 'Privātuma politika',
            footer_terms: 'Lietošanas noteikumi',

            // Notifications
            notif_title: 'Ziņojums nosūtīts!',
            notif_text: 'Mēs ar jums sazināsimies drīzumā.',

            // Forms
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

            // Projects page
            projects_page_label: 'Mūsu portfolio',
            projects_page_title: 'Visi projekti',
            breadcrumb_home: 'Sākums',
            filter_type_label: 'Veids:',
            filter_all: 'Visi',
            filter_private: 'Privātmājas',
            filter_apartments: 'Dzīvokļi',
            filter_commercial: 'Komerciālais / Jaukts',
            filter_other: 'Citi',
            sort_new_old: 'Jaunākais vispirms',
            sort_old_new: 'Vecākais vispirms',
            sort_az: 'Alfabētiski A–Z',
            results_text: 'projekti',
            no_results_title: 'Projekti nav atrasti',
            no_results_desc: 'Mēģiniet mainīt filtrus, lai atrastu meklēto.',
            clear_filters: 'Notīrīt filtrus',
            detail_back: 'Visi projekti',
            detail_back_link: 'Atpakaļ uz visiem projektiem',
            detail_desc_label: 'Projekta apraksts',
            detail_info_label: 'Projekta informācija',
            detail_cta_text: 'Interesē līdzīgs projekts?',
            detail_cta_btn: 'Sazināties ar mums',
            detail_kv_location: 'Atrašanās vieta',
            detail_kv_area: 'Platība',
            detail_kv_year: 'Gads',
            detail_kv_status: 'Statuss',
            detail_kv_team: 'Komanda',
            detail_kv_developer: 'Attīstītājs',
            detail_kv_type: 'Veids',
            cta_title: 'Nepieciešams projekts?',
            cta_desc: 'Apspriedīsim, kā mēs varam realizēt jūsu vēlmes un iespējas.',
            cta_button: 'Sazināties',

            // Teams page
            team_page_label: 'Cilvēki',
            team_page_title: 'Mūsu komanda',
            breadcrumb_team: 'Komanda',
            filter_dept_label: 'Nodaļa:',
            filter_leadership: 'Vadība',
            filter_architecture: 'Arhitektūra',
            filter_interior: 'Interjera dizains',
            filter_engineering: 'Inženierija',
            team_cta_title: 'Pievienojies mūsu komandai',
            team_cta_desc: 'Mēs vienmēr meklējam talantīgus cilvēkus, kuri dalās mūsu aizrautībā par izcilu arhitektūru un dizainu.',
            team_cta_btn: 'Sazināties ar mums',
        }
    },
};

// ============================================================
//  HELPER FUNCTIONS  —  use these in page scripts
// ============================================================

/**
 * Get text for current language.
 * Usage: t('hero_title')  →  returns EN or LV text
 */
function t(key) {
    const lang = localStorage.getItem('kalau-lang') || 'en';
    const dict = SITE.translations[lang] || SITE.translations.en;
    return dict[key] || key;
}

/**
 * Get localized field from an object like { en: '...', lv: '...' }
 * Usage: localized(project.title)  →  returns title in current lang
 */
function localized(obj) {
    if (!obj) return '';
    const lang = localStorage.getItem('kalau-lang') || 'en';
    return obj[lang] || obj.en || '';
}

/**
 * Get current language code
 */
function getCurrentLang() {
    return localStorage.getItem('kalau-lang') || 'en';
}
