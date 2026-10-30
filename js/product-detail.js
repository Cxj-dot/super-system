/**
 * 山东亿盟进出口有限公司 - 产品详情页脚本
 * 从 URL 参数获取产品 ID，加载并展示产品详细信息
 */
document.addEventListener('DOMContentLoaded', function () {
    // ========== 初始化多语言 ==========
    i18n.init();

    var langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var lang = this.getAttribute('data-lang');
            i18n.switchTo(lang);
            loadProduct();
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
            mainNav.classList.contains('open') ? closeMenu() : openMenu();
        });
    }
    navOverlay.addEventListener('click', closeMenu);
    document.querySelectorAll('#mainNav .nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            if (mainNav.classList.contains('open')) closeMenu();
        });
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (mainNav.classList.contains('open')) closeMenu();
            closeLightbox();
        }
    });

    // ========== 导航栏滚动阴影 ==========
    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 20);
    });

    // ========== 从 URL 获取产品 ID ==========
    function getProductId() {
        var params = new URLSearchParams(window.location.search);
        var id = parseInt(params.get('id'));
        return isNaN(id) ? null : id;
    }

    // ========== 获取当前语言的产品数据 ==========
    function getProductById(id) {
        var langProducts = PRODUCT_DATA[i18n.currentLang] || PRODUCT_DATA.zh;
        for (var i = 0; i < langProducts.length; i++) {
            if (langProducts[i].id === id) return langProducts[i];
        }
        return null;
    }

    // ========== 加载并渲染产品 ==========
    function loadProduct() {
        var id = getProductId();
        var product = getProductById(id);

        if (!product) {
            showError();
            return;
        }

        // 更新页面标题
        document.title = product.name + ' - 山东亿盟进出口有限公司';

        // 面包屑
        document.getElementById('breadcrumbName').textContent = product.name;

        // 图片画廊
        renderGallery(product);

        // 基本信息
        document.getElementById('detailName').textContent = product.name;
        document.getElementById('detailShortDesc').textContent = product.desc;

        // 徽章
        var badge = document.getElementById('galleryBadge');
        var cat = getCatLabel(product.category, i18n.currentLang);
        badge.textContent = cat;
        badge.className = 'gallery-badge ' + (BadgeMap[product.category] || '');

        // 属性标签
        var attrsHtml = '';
        attrsHtml += '<span class="attr-tag attr-brand">' + i18n.t('attr_brand_' + product.brand) + '</span>';
        attrsHtml += '<span class="attr-tag attr-drive">' + i18n.t('attr_drive_' + product.drive) + '</span>';
        attrsHtml += '<span class="attr-tag attr-category">' + cat + '</span>';
        document.getElementById('detailAttrs').innerHTML = attrsHtml;

        // 详细描述
        document.getElementById('detailFullDesc').textContent = product.desc;

        // 规格参数表
        renderSpecsTable(product);

        // 全景图
        renderGalleryFull(product);
    }

    // ========== 渲染画廊 ==========
    var currentMainIndex = 0;
    var currentGallery = [];

    function renderGallery(product) {
        currentGallery = product.gallery;
        currentMainIndex = 0;

        var mainImg = document.getElementById('galleryMain');
        mainImg.src = product.gallery[0];
        mainImg.alt = product.name;

        var thumbsHtml = '';
        product.gallery.forEach(function (img, i) {
            var cls = i === 0 ? ' active' : '';
            thumbsHtml += '<img src="' + img + '" alt="' + product.name + ' - ' + (i + 1) + '" class="' + cls + '" data-index="' + i + '">';
        });
        document.getElementById('galleryThumbs').innerHTML = thumbsHtml;

        // 缩略图点击
        document.querySelectorAll('.gallery-thumbs img').forEach(function (thumb) {
            thumb.addEventListener('click', function () {
                var idx = parseInt(this.getAttribute('data-index'));
                setMainImage(idx);
            });
        });

        // 主图点击打开灯箱
        mainImg.addEventListener('click', function () {
            openLightbox(product.gallery, currentMainIndex);
        });
    }

    function setMainImage(index) {
        currentMainIndex = index;
        document.getElementById('galleryMain').src = currentGallery[index];

        var thumbs = document.querySelectorAll('.gallery-thumbs img');
        thumbs.forEach(function (t, i) {
            t.classList.toggle('active', i === index);
        });
    }

    // ========== 规格参数表 ==========
    function renderSpecsTable(product) {
        var html = '';
        var specs = product.specs;
        for (var key in specs) {
            if (specs.hasOwnProperty(key)) {
                html += '<tr><td>' + key + '</td><td>' + specs[key] + '</td></tr>';
            }
        }
        document.getElementById('specsTable').innerHTML = html;
    }

    // ========== 全景图 ==========
    function renderGalleryFull(product) {
        var html = '';
        product.gallery.forEach(function (img, i) {
            html += '<img src="' + img + '" alt="' + product.name + ' - ' + (i + 1) + '" data-index="' + i + '">';
        });
        var galleryFull = document.getElementById('galleryFull');
        galleryFull.innerHTML = html;

        galleryFull.querySelectorAll('img').forEach(function (img) {
            img.addEventListener('click', function () {
                var idx = parseInt(this.getAttribute('data-index'));
                openLightbox(product.gallery, idx);
            });
        });
    }

    // ========== 灯箱 ==========
    var lightbox = null;
    var lightboxIndex = 0;
    var lightboxImages = [];

    function createLightbox() {
        if (lightbox) return;
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = '<span class="lightbox-close">&times;</span>' +
            '<span class="lightbox-prev">&lsaquo;</span>' +
            '<span class="lightbox-next">&rsaquo;</span>' +
            '<img src="" alt="">' +
            '<span class="lightbox-counter"></span>';
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', function (e) {
            e.stopPropagation();
            lightboxPrev();
        });
        lightbox.querySelector('.lightbox-next').addEventListener('click', function (e) {
            e.stopPropagation();
            lightboxNext();
        });
    }

    function openLightbox(images, index) {
        createLightbox();
        lightboxImages = images;
        lightboxIndex = index;
        updateLightbox();
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    function lightboxPrev() {
        lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
        updateLightbox();
    }

    function lightboxNext() {
        lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
        updateLightbox();
    }

    function updateLightbox() {
        if (!lightbox) return;
        lightbox.querySelector('img').src = lightboxImages[lightboxIndex];
        lightbox.querySelector('.lightbox-counter').textContent =
            (lightboxIndex + 1) + ' / ' + lightboxImages.length;
    }

    // 键盘切换
    document.addEventListener('keydown', function (e) {
        if (!lightbox || !lightbox.classList.contains('show')) return;
        if (e.key === 'ArrowLeft') lightboxPrev();
        if (e.key === 'ArrowRight') lightboxNext();
    });

    // ========== 错误状态 ==========
    function showError() {
        var main = document.querySelector('.detail-main .container');
        main.innerHTML = '<div class="detail-error">' +
            '<div class="empty-icon">&#128270;</div>' +
            '<h2 data-i18n="empty_title">没有找到该产品</h2>' +
            '<p data-i18n="empty_hint">请返回产品列表选择您感兴趣的产品</p>' +
            '<a href="products.html" class="btn btn-primary" style="margin-top:24px;display:inline-block;text-decoration:none;padding:12px 32px;border-radius:8px;" data-i18n="detail_back">← 返回产品列表</a>' +
            '</div>';
    }

    // ========== 启动 ==========
    loadProduct();
});