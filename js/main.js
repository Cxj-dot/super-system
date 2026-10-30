/**
 * 山东亿盟进出口有限公司 - 主脚本
 * 轮播图 / 导航滚动 / 汉堡菜单 / 表单 / 语言切换
 */
document.addEventListener('DOMContentLoaded', function () {
    // ========== 初始化多语言 ==========
    i18n.init();

    // ========== 语言切换按钮 ==========
    var langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var lang = this.getAttribute('data-lang');
            i18n.switchTo(lang);
        });
    });

    // ========== 汉堡菜单 ==========
    var hamburger = document.getElementById('hamburger');
    var mainNav = document.getElementById('mainNav');
    var navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);

    function openMenu() {
        hamburger.classList.add('active');
        mainNav.classList.add('open');
        navOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
        navOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            if (mainNav.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // 点击遮罩关闭
    navOverlay.addEventListener('click', closeMenu);

    // 点击导航链接关闭
    var navLinkEls = document.querySelectorAll('#mainNav .nav-link');
    navLinkEls.forEach(function (link) {
        link.addEventListener('click', function () {
            if (mainNav.classList.contains('open')) {
                closeMenu();
            }
        });
    });

    // ESC 关闭
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mainNav.classList.contains('open')) {
            closeMenu();
        }
    });

    // 窗口大小变化时，如果从移动端切回桌面端，关闭菜单
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && mainNav.classList.contains('open')) {
            closeMenu();
        }
    });

    // ========== 导航栏滚动效果（使用 requestAnimationFrame 优化性能）==========
    var header = document.getElementById('header');
    var ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                var scrollY = window.scrollY;

                if (scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                // 更新导航高亮
                setActiveLink();

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // ========== 导航高亮 ==========
    var sections = document.querySelectorAll('section[id]');
    var navLinksAll = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        var currentSection = '';

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // ========== 轮播图 ==========
    var carouselTrack = document.getElementById('carouselTrack');
    var slides = carouselTrack.querySelectorAll('.carousel-slide');
    var dots = document.querySelectorAll('.carousel-dots .dot');
    var prevBtn = document.getElementById('carouselPrev');
    var nextBtn = document.getElementById('carouselNext');
    var currentSlide = 0;
    var totalSlides = slides.length;
    var autoplayInterval;
    var autoplayDelay = 5000;

    function goToSlide(index) {
        // 移除所有 active
        slides.forEach(function (slide) { slide.classList.remove('active'); });
        dots.forEach(function (dot) { dot.classList.remove('active'); });

        // 设置当前
        currentSlide = index;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        if (currentSlide >= totalSlides) currentSlide = 0;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    // 按钮事件
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            prevSlide();
            startAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            nextSlide();
            startAutoplay();
        });
    }

    // 指示点点击
    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            goToSlide(index);
            startAutoplay();
        });
    });

    // 触摸滑动支持
    var touchStartX = 0;
    var touchEndX = 0;

    carouselTrack.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselTrack.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        var diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            startAutoplay();
        }
    });

    // 键盘左右箭头
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            startAutoplay();
        }
    });

    // 启动自动播放
    startAutoplay();

    // ========== 数据唤醒 - 数字滚动动画 ==========
    var statNumbers = document.querySelectorAll('.stat-number');
    var statsAnimated = false;

    function animateNumber(el, target, duration) {
        var start = 0;
        var startTime = null;
        var suffix = '';
        var rawTarget = target;

        if (typeof target === 'string') {
            suffix = target.replace(/[0-9]/g, '');
            rawTarget = parseInt(target.replace(/[^0-9]/g, ''), 10);
        }

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * rawTarget);
            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }

        requestAnimationFrame(step);
    }

    if (statNumbers.length > 0) {
        var statsObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    statNumbers.forEach(function (num) {
                        var target = num.textContent.trim();
                        animateNumber(num, target, 1800);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statNumbers[0].closest('.about-stats') || statNumbers[0]);
    }

    // ========== 联系我们表单 ==========
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert(i18n.t('contact_success'));
            contactForm.reset();
        });
    }
});