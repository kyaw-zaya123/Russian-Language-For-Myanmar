// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Highlight current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    
    if (currentPage === linkPage) {
        link.closest('.nav-item').classList.add('active');
    } else {
        link.closest('.nav-item').classList.remove('active');
    }
});


// Mobile dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});



// About page active state
document.querySelectorAll('.nav-link').forEach(link => {
    if(link.getAttribute('href') === 'about.html' && 
       window.location.pathname.includes('about.html')) {
        link.classList.add('active');
        link.closest('.nav-item').classList.add('active');
    }
});



// Language translations
const translations = {
    my: {
        "home": "ပင်မ",
        "courses": "သင်တန်းများ",
        "about": "ကျွန်ုပ်တို့အကြောင်း",
        "contact": "ဆက်သွယ်ရန်",
        "currentLanguage": "မြန်မာ",
        "siteName": "Russian Language Center",
        "heroTitle": "ရုရှားဘာသာစကားကို အလွယ်တကူသင်ယူပါ",
        "heroSubtitle": "ရုရှား native speakerများနှင့် ထိရောက်သောသင်ကြားနည်းများဖြင့် သင်ကြားပို့ချပေးပါသည်",
        "viewCourses": "သင်တန်းများကြည့်ရှုရန်",
        "feature1Title": "ကျွမ်းကျင်ဆရာများ",
        "feature1Desc": "ရုရှားဘာသာစကားကျွမ်းကျင်သူများမှ သင်ကြားပို့ချပေးပါသည်",
        "feature2Title": "အသိအမှတ်ပြုလက်မှတ်",
        "feature2Desc": "သင်တန်းပြီးဆုံးပါက အသိအမှတ်ပြုလက်မှတ်ထုတ်ပေးပါသည်",
        "feature3Title": "လူဦးရေအကန့်အသတ်",
        "feature3Desc": "တစ်ဦးချင်းဂရုစိုက်သင်ကြားနိုင်ရန် လူဦးရေကန့်သတ်ထားပါသည်",
        "copyright": "&copy; 2025 Russian Language Center. All rights reserved.",
        "pageTitle": "ရုရှားဘာသာစကားသင်တန်း"
    },
    en: {
        "home": "Home",
        "courses": "Courses",
        "about": "About Us",
        "contact": "Contact",
        "currentLanguage": "English",
        "siteName": "Russian Language Center",
        "heroTitle": "Learn Russian Language Easily",
        "heroSubtitle": "Russian native speakers and effective teaching methods are used.",
        "viewCourses": "View Courses",
        "feature1Title": "Expert Teachers",
        "feature1Desc": "Taught by proficient Russian language instructors",
        "feature2Title": "Certification",
        "feature2Desc": "Receive a recognized certificate upon course completion",
        "feature3Title": "Limited Class Size",
        "feature3Desc": "Small class sizes for personalized attention",
        "copyright": "&copy; 2025 Russian Language Center. All rights reserved.",
        "pageTitle": "Russian Language Courses"
    },
    ru: {
        "home": "Главная",
        "courses": "Курсы",
        "about": "О нас",
        "contact": "Контакты",
        "currentLanguage": "Русский",
        "siteName": "Центр русского языка",
        "heroTitle": "Изучайте русский язык легко",
        "heroSubtitle": "Используются носители русского языка и эффективные методы обучения.",
        "viewCourses": "Посмотреть курсы",
        "feature1Title": "Опытные преподаватели",
        "feature1Desc": "Обучение проводят квалифицированные преподаватели русского языка",
        "feature2Title": "Сертификация",
        "feature2Desc": "Получите сертификат по окончании курса",
        "feature3Title": "Маленькие группы",
        "feature3Desc": "Ограниченное количество студентов для индивидуального подхода",
        "copyright": "&copy; 2025 Центр русского языка. Все права защищены.",
        "pageTitle": "Курсы русского языка"
    }
};

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set default language from localStorage or browser preference
    let currentLang = localStorage.getItem('language') || 
                     (navigator.language.startsWith('ru') ? 'ru' : 
                      (navigator.language.startsWith('my') ? 'my' : 'en'));
    
    // Apply translations
    function translatePage(lang) {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if(element.querySelector('span')) {
                element.querySelector('span').textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update other elements by ID
        document.getElementById('current-language').textContent = translations[lang]['currentLanguage'];
        document.getElementById('site-name').textContent = translations[lang]['siteName'];
        document.getElementById('hero-title').textContent = translations[lang]['heroTitle'];
        document.getElementById('hero-subtitle').textContent = translations[lang]['heroSubtitle'];
        document.getElementById('view-courses-btn').textContent = translations[lang]['viewCourses'];
        document.getElementById('feature1-title').textContent = translations[lang]['feature1Title'];
        document.getElementById('feature1-desc').textContent = translations[lang]['feature1Desc'];
        document.getElementById('feature2-title').textContent = translations[lang]['feature2Title'];
        document.getElementById('feature2-desc').textContent = translations[lang]['feature2Desc'];
        document.getElementById('feature3-title').textContent = translations[lang]['feature3Title'];
        document.getElementById('feature3-desc').textContent = translations[lang]['feature3Desc'];
        document.getElementById('copyright').innerHTML = translations[lang]['copyright'];
        document.getElementById('page-title').textContent = translations[lang]['pageTitle'];
        
        // Update html lang attribute
        document.documentElement.lang = lang;
        
        // Save to localStorage
        localStorage.setItem('language', lang);
    }
    
    // Initialize with default language
    translatePage(currentLang);
    
    // Add click event to language menu items
    document.querySelectorAll('.language-menu a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});



//for beginner
// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        header.classList.toggle('active');
        const content = header.nextElementSibling;
        if (header.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});
