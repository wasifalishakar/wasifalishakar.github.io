
const portfolioData = {
    "profile": {
        "name": "Wasif Ali",
        "title": "Computer Operator | Office Assistant | Front-End Web Developer",
        "bio": "I love building simple, user-friendly websites and learning new skills. I enjoy solving problems and helping people with smart and creative ideas.",
        "avatar": "./assets/52c79caab85ca72f.webp"
    },
    "contact": {
        "email": "wasifalishakar4@gmail.com",
        "phone": "03338757854",
        "location": "Arifwala , Pakistan"
    },
    "skills": [
        "HTML5 &amp; CSS3",
        "JavaScript (ES6)",
        "Web Responsive Design",
        "WordPress",
        "Data Entry",
        "Internet &amp; Email",
        "MS Office"
    ],
    "projects": [],
    "experience": [
        {
            "title": "Frontend Web Developer (Personal Projects)",
            "company": "Personal",
            "period": "2023 – Present",
            "description": "\r\n Built responsive websites using HTML, CSS, and JavaScript.\r\n\r\n Created portfolio and landing page projects to improve my skills.\r\n\r\n Focused on clean design, responsive layouts, and user-friendly interfaces.\r\n\r\n Continuously learning new web development technologies.\r\n"
        },
        {
            "title": "IT &amp; Tech (Fresher)",
            "company": "Finding Best Job",
            "period": "2026 – Present",
            "description": "A motivated fresher with skills in web development, MS Office, and computer operations. Ready to learn quickly and contribute to any technology-related position.\r\n"
        }
    ],
    "education": [
        {
            "degree": "Matic",
            "school": "Govt MC High School Arifwala",
            "period": "2022 - 2023",
            "description": "English Medium with Science Subjects and achive first devision\r\nBise : Sahiwal"
        },
        {
            "degree": "Intermediate",
            "school": "Govt Degree College Arifwala",
            "period": "2025 - 2026",
            "description": "Group ( ICS ) Good Performance in Computer Science Subject\r\nBise : Sahiwal"
        }
    ],
    "_meta": {
        "version": "1.0.0",
        "created_at": "2026-07-08 09:36:30",
        "template": "aurelia-classic-pro",
        "username": "wasifalishakarportfolio"
    }
}


const renderHero = (profile, social) => {
    const nameEl = document.getElementById('heroName');
    const titleEl = document.getElementById('heroTitle');
    const bioEl = document.getElementById('heroBio');
    const avatarEl = document.getElementById('heroAvatar');
    const socialEl = document.getElementById('heroSocial');
    
    if (profile) {
        if (nameEl) nameEl.textContent = profile.name || '';
        if (titleEl) titleEl.textContent = profile.title || '';
        if (bioEl) bioEl.textContent = profile.bio || '';
        if (avatarEl && profile.avatar) avatarEl.src = profile.avatar;
    }
    
    if (social && socialEl) {
        const socialLinks = [
            { key: 'github', icon: 'fab fa-github' },
            { key: 'linkedin', icon: 'fab fa-linkedin-in' },
            { key: 'twitter', icon: 'fab fa-twitter' },
            { key: 'facebook', icon: 'fab fa-facebook-f' },
            { key: 'instagram', icon: 'fab fa-instagram' },
            { key: 'website', icon: 'fas fa-globe' }
        ];
        
        socialLinks.forEach(({ key, icon }) => {
            if (social[key]) {
                const link = document.createElement('a');
                link.href = social[key];
                link.className = 'hero-social-link';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.innerHTML = `<i class="${icon}"></i>`;
                link.setAttribute('aria-label', key);
                socialEl.appendChild(link);
            }
        });
    }
};

// ============================================
// PROJECTS SECTION RENDER
// ============================================

const renderProjects = (projects) => {
    const container = document.getElementById('projectsGrid');
    if (!container || !projects || projects.length === 0) return;
    
    projects.forEach((project, index) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.style.transitionDelay = `${index * 100}ms`;
        
        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image || ''}" alt="${project.title || 'Project'}" class="project-image" loading="lazy">
                <div class="project-overlay">
                    <a href="${project.link || '#'}" class="project-btn" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title || ''}</h3>
                <p class="project-description">${project.description || ''}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
};

// ============================================
// EXPERIENCE SECTION RENDER
// ============================================

const renderExperience = (experience) => {
    const container = document.getElementById('timeline');
    if (!container || !experience || experience.length === 0) return;
    
    experience.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.transitionDelay = `${index * 150}ms`;
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3 class="timeline-title">${item.title || ''}</h3>
                <p class="timeline-company">${item.company || ''}</p>
                <p class="timeline-period">${item.period || ''}</p>
                <p class="timeline-description">${item.description || ''}</p>
            </div>
        `;
        
        container.appendChild(timelineItem);
    });
};

// ============================================
// EDUCATION SECTION RENDER
// ============================================

const renderEducation = (education) => {
    const container = document.getElementById('educationGrid');
    if (!container || !education || education.length === 0) return;
    
    education.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.style.transitionDelay = `${index * 100}ms`;
        
        card.innerHTML = `
            <h3 class="education-degree">${item.degree || ''}</h3>
            <p class="education-school">${item.school || ''}</p>
            <p class="education-period">${item.period || ''}</p>
            <p class="education-description">${item.description || ''}</p>
        `;
        
        container.appendChild(card);
    });
};

// ============================================
// SKILLS SECTION RENDER
// ============================================

const renderSkills = (skills) => {
    const container = document.getElementById('skillsContainer');
    if (!container || !skills || skills.length === 0) return;
    
    skills.forEach((skill, index) => {
        const pill = document.createElement('span');
        pill.className = 'skill-pill';
        pill.textContent = skill;
        pill.style.transitionDelay = `${index * 50}ms`;
        container.appendChild(pill);
    });
};

// ============================================
// CONTACT SECTION RENDER
// ============================================

const renderContact = (contact) => {
    const container = document.getElementById('contactContent');
    if (!container || !contact) return;
    
    const contactItems = [
        { key: 'email', icon: 'fas fa-envelope', label: 'Email', href: contact.email ? `mailto:${contact.email}` : null },
        { key: 'phone', icon: 'fas fa-phone', label: 'Phone', href: contact.phone ? `tel:${contact.phone}` : null },
        { key: 'location', icon: 'fas fa-map-marker-alt', label: 'Location', href: null }
    ];
    
    contactItems.forEach(({ key, icon, label, href }) => {
        if (contact[key]) {
            const item = document.createElement('div');
            item.className = 'contact-item';
            
            const content = `
                <div class="contact-icon"><i class="${icon}"></i></div>
                <div class="contact-info">
                    <span class="contact-label">${label}</span>
                    <span class="contact-value">${contact[key]}</span>
                </div>
            `;
            
            if (href) {
                item.innerHTML = `<a href="${href}" style="display: flex; align-items: center; gap: 16px; width: 100%; color: inherit;">${content}</a>`;
            } else {
                item.innerHTML = content;
            }
            
            container.appendChild(item);
        }
    });
};

// ============================================
// FOOTER RENDER
// ============================================

const renderFooter = (profile) => {
    const yearEl = document.getElementById('footerYear');
    const nameEl = document.getElementById('footerName');
    
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (nameEl && profile) nameEl.textContent = profile.name || '';
};

// ============================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================================

const initScrollAnimations = () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll(
        '.project-card, .timeline-item, .education-card, .skill-pill'
    );
    
    animatedElements.forEach(el => observer.observe(el));
};

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================

const initNavScroll = () => {
    const nav = document.getElementById('nav');
    if (!nav) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
};

// ============================================
// MOBILE NAVIGATION
// ============================================

const initMobileNav = () => {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    const links = menu ? menu.querySelectorAll('.nav-link') : [];
    
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        const isOpen = menu.classList.contains('active');
        toggle.setAttribute('aria-expanded', isOpen);
    });
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const data = portfolioData;

    renderHero(data.profile, data.social);
    renderProjects(data.projects);
    renderExperience(data.experience);
    renderEducation(data.education);
    renderSkills(data.skills);
    renderContact(data.contact);
    renderFooter(data.profile);

    initScrollAnimations();
    initNavScroll();
    initMobileNav();
});