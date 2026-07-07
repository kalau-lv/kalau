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
            title: { en: 'Garden Estate Residence', lv: 'Dārza muižas rezidence' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [
                'https://images.unsplash.com/photo-1600573472591-ee6c563a9eb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80'
            ],
            year: 2022,
            location: { en: 'Sigulda, Latvia', lv: 'Sigulda, Latvija' },
            status: { en: 'Completed', lv: 'Pabeigts' },
            team: 'Kalau Studio A',
            developer: { en: 'Private Client', lv: 'Privāts klients' },
            description: {
                en: '<p>A graceful estate residence set within a mature garden landscape in Sigulda. The design draws inspiration from traditional Latvian country architecture while incorporating contemporary living standards.</p><p>Natural wood, stone, and copper accents blend seamlessly with the surrounding Gauja valley landscape.</p>',
                lv: '<p>Eleganta muižas rezidence nobriedušā dārza ainavā Siguldā. Dizains iedvesmots no tradicionālās latviešu lauku arhitektūras, iekļaujot mūsdienu dzīves standartus.</p><p>Dabīgais koks, akmens un vara akcenti harmoniski iekļaujas apkārtējā Gaujas ielejas ainavā.</p>'
            }
        },
        {
            id: 7,
            title: { en: 'Downtown Apartment Block', lv: 'Centra dzīvokļu nams' },
            type: 'apartments',
            typeName: { en: 'Apartment', lv: 'Dzīvoklis' },
            images: [
                'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80'
            ],
            year: 2022,
            location: { en: 'Riga, Latvia', lv: 'Rīga, Latvija' },
            status: { en: 'Completed', lv: 'Pabeigts' },
            team: 'Kalau Studio B',
            developer: { en: 'City Residence SIA', lv: 'City Residence SIA' },
            description: {
                en: '<p>A 6-story residential building in Riga\'s city center, offering 24 premium apartments ranging from compact studios to spacious 3-bedroom units.</p><p>The facade features a rhythmic pattern of balconies and vertical fins that provide solar shading while creating a distinctive streetscape presence.</p>',
                lv: '<p>6 stāvu dzīvojamā ēka Rīgas centrā, piedāvājot 24 premium dzīvokļus no kompaktām studijām līdz plašiem 3 istabu dzīvokļiem.</p><p>Fasādē iekļauts ritmisks balkonu un vertikālu lamellu raksts, kas nodrošina saules aizsardzību, vienlaikus radot izteiksmīgu ielas ainu.</p>'
            }
        },
        {
            id: 8,
            title: { en: 'Boutique Hotel & Spa', lv: 'Butika viesnīca un spa' },
            type: 'commercial',
            typeName: { en: 'Commercial', lv: 'Komerciālais' },
            images: [
                'https://images.unsplash.com/photo-1590490360182-c33d955f3420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80'
            ],
            year: 2022,
            location: { en: 'Cēsis, Latvia', lv: 'Cēsis, Latvija' },
            status: { en: 'Completed', lv: 'Pabeigts' },
            team: 'Kalau Interiors',
            developer: { en: 'Cēsis Hospitality Group', lv: 'Cēsis Hospitality Group' },
            description: {
                en: '<p>A 32-room boutique hotel with full spa facilities in the historic town of Cēsis. The design carefully integrates a new contemporary structure with the existing 19th-century stone building.</p><p>Interior spaces feature locally sourced oak, linen, and ceramic details that celebrate Latvian craft traditions in a modern context.</p>',
                lv: '<p>32 numuru butika viesnīca ar pilnu spa piedāvājumu vēsturiskajā Cēsu pilsētā. Dizains rūpīgi integrē jaunu mūsdienu struktūru ar esošo 19. gadsimta akmens ēku.</p><p>Interjera telpās iekļauti vietēji iegūti ozola, linu un keramikas detaļas, kas svin latviešu amatniecības tradīcijas mūsdienu kontekstā.</p>'
            }
        },
        {
            id: 9,
            title: { en: 'Cultural Arts Center', lv: 'Kultūras un mākslas centrs' },
            type: 'other',
            typeName: { en: 'Cultural', lv: 'Kultūras' },
            images: [
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80'
            ],
            year: 2021,
            location: { en: 'Ventspils, Latvia', lv: 'Ventspils, Latvija' },
            status: { en: 'Completed', lv: 'Pabeigts' },
            team: 'Kalau Studio A',
            developer: { en: 'Ventspils Municipality', lv: 'Ventspils pašvaldība' },
            description: {
                en: '<p>A multifunctional cultural center featuring exhibition galleries, a 200-seat auditorium, artist studios, and community workshop spaces.</p><p>The building\'s sculptural form is wrapped in a perforated metal screen that filters daylight into the interior while creating dramatic shadow patterns throughout the day.</p>',
                lv: '<p>Daudzfunkcionāls kultūras centrs ar izstāžu galerijām, 200 vietu auditoriju, mākslinieku studijām un kopienas darbnīcu telpām.</p><p>Ēkas skulpturālo formu aptver perforēts metāla ekrāns, kas filtrē dienasgaismu interjerā, vienlaikus radot dramatisku ēnu spēli visas dienas garumā.</p>'
            }
        },
        {
            id: 10,
            title: { en: 'Minimal Forest Cabin', lv: 'Minimālā meža māja' },
            type: 'private-houses',
            typeName: { en: 'Private House', lv: 'Privātmāja' },
            images: [
                'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80'
            ],
            year: 2021,
            location: { en: 'Gauja, Latvia', lv: 'Gauja, Latvija' },
            status: { en: 'Completed', lv: 'Pabeigts' },
            team: 'Kalau Studio A',
            developer: { en: 'Private Client', lv: 'Privāts klients' },
            description: {
                en: '<p>A compact 85 m² forest cabin designed as a retreat from urban life. The structure is elevated on steel stilts to minimize ground impact and frame views of the surrounding birch forest.</p><p>Built primarily from cross-laminated timber (CLT), the cabin exemplifies our commitment to sustainable, low-impact architecture.</p>',
                lv: '<p>Kompakta 85 m² meža māja, projektēta kā patvērums no pilsētas dzīves. Struktūra paaugstināta uz tērauda stabiem, lai minimizētu ietekmi uz zemi un ierāmētu apkārtējo bērzu meža skatus.</p><p>Būvēta galvenokārt no šķērslaminētas koksnes (CLT), māja ir piemērs mūsu apņēmībai ilgtspējīgai arhitektūrai.</p>'
            }
        },
        {
            id: 11,
            title: { en: 'Riverside Apartments', lv: 'Upes dzīvokļi' },
            type: 'apartments',
            typeName: { en: 'Apartment', lv: 'Dzīvoklis' },
            images: [
                'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80'
            ],
            year: 2020,
            location: { en: 'Riga, Latvia', lv: 'Rīga, Latvija' },
            status: { en: 'Completed', lv: 'Pabeigts' },
            team: 'Kalau Studio B',
            developer: { en: 'Riverside Development SIA', lv: 'Riverside Development SIA' },
            description: {
                en: '<p>A waterfront residential development along the Daugava river, consisting of three interconnected buildings housing 68 apartments with shared amenities including a fitness center and residents\' garden.</p><p>Every apartment is oriented to capture river views, with generous balconies and floor-to-ceiling windows.</p>',
                lv: '<p>Dzīvojamais projekts Daugavas krastmalā, kas sastāv no trim savienotām ēkām ar 68 dzīvokļiem un kopīgām ērtībām, tostarp fitnesa centru un iedzīvotāju dārzu.</p><p>Katrs dzīvoklis orientēts, lai uztvertu upes skatus, ar plašiem balkoniem un logiem no grīdas līdz griestiem.</p>'
            }
        },
        {
            id: 12,
            title: { en: 'Sports & Wellness Center', lv: 'Sporta un veselības centrs' },
            type: 'other',
            typeName: { en: 'Recreational', lv: 'Atpūtas' },
            images: [
                'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80'
            ],
            year: 2020,
            location: { en: 'Jūrmala, Latvia', lv: 'Jūrmala, Latvija' },
            status: { en: 'Completed', lv: 'Pabeigts' },
            team: 'Kalau Studio B',
            developer: { en: 'Jūrmala Sports Foundation', lv: 'Jūrmalas Sporta fonds' },
            description: {
                en: '<p>A state-of-the-art sports and wellness facility featuring an Olympic-size swimming pool, gym, yoga studios, and a thermal spa area.</p><p>The building\'s undulating roof form is inspired by Baltic Sea waves. Extensive use of natural daylight reduces energy consumption while creating uplifting interior environments.</p>',
                lv: '<p>Modernskākais sporta un veselības centrs ar olimpisko izmēru peldbaseinu, sporta zāli, jogas studijām un termālo spa zonu.</p><p>Ēkas viļņveidīgā jumta forma iedvesmota no Baltijas jūras viļņiem. Plašā dabiskās dienasgaismas izmantošana samazina enerģijas patēriņu, vienlaikus radot iedvesmojošu iekštelpu vidi.</p>'
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

            // Why Us
            whyus_label: 'Why Kalau',
            whyus_title: 'Why Choose <span class="text-gradient">Us</span>',
            feature1_title: 'Experienced Team',
            feature1_desc: 'Our team of seasoned architects brings decades of combined experience and expertise to every project.',
            feature2_title: 'Sustainable Design',
            feature2_desc: 'We prioritize eco-friendly materials and energy-efficient solutions for a greener, more sustainable future.',
            feature3_title: 'Premium Quality',
            feature3_desc: 'Uncompromising attention to detail and quality in every aspect of design, planning, and execution.',

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
            services_subtitle: 'Comprehensive architectural services tailored to bring your vision to life with precision and creativity.',
            services_learn: 'Learn More',
            service1_title: 'Residential Design',
            service1_desc: 'Creating dream homes that blend comfort, functionality, and aesthetic beauty tailored to your lifestyle.',
            service2_title: 'Commercial Design',
            service2_desc: 'Designing innovative commercial spaces that enhance productivity and reflect your brand identity.',
            service3_title: 'Interior Design',
            service3_desc: 'Transforming interiors into captivating spaces with thoughtful layouts, materials, and finishes.',

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

            // Contact
            contact_label: 'Get In Touch',
            contact_title: 'Contact <span class="text-gradient">Us</span>',
            contact_subtitle: "Ready to start your project? Let's discuss how we can bring your architectural vision to life.",
            contact_legal: 'Company Information',
            contact_email: 'Email Us',
            contact_phone: 'Call Us',
            contact_follow: 'Follow Us',

            // Footer
            footer_desc: 'Creating modern, functional, and sustainable architectural solutions that transform visions into reality.',
            footer_links: 'Quick Links',
            footer_aboutus: 'About Us',
            footer_services: 'Services',
            footer_tagline: 'We create modern, functional, and sustainable architectural solutions that turn visions into reality.',
            footer_copyright: '© 2024 Kalau Architecture. All rights reserved.',
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
            cta_button: 'zStart Your Project',

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
