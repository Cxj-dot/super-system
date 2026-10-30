/**
 * 山东亿盟进出口有限公司 - 产品展示页脚本
 * 多维属性筛选 / 汉堡菜单 / 多语言
 */
document.addEventListener('DOMContentLoaded', function () {
    // ========== 初始化多语言 ==========
    i18n.init();

    // 语言切换
    var langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var lang = this.getAttribute('data-lang');
            i18n.switchTo(lang);
            renderProducts();
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
        if (e.key === 'Escape' && mainNav.classList.contains('open')) closeMenu();
    });
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && mainNav.classList.contains('open')) closeMenu();
    });

    // ========== 导航栏滚动阴影 ==========
    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 20);
    });

    // ========== 产品数据（引用共享数据） ==========
    // PRODUCT_DATA, CatLabels, BadgeMap, getCatLabel 由 product-data.js 提供

    function getProducts() { return PRODUCT_DATA[i18n.currentLang] || PRODUCT_DATA.zh; }
    function catLabel(c) { return getCatLabel(c, i18n.currentLang); }
    var badgeMap = BadgeMap;

    // ========== 多维度筛选状态 ==========
    var filters = {
        category: 'all',
        brand: 'all',
        drive: 'all',
        search: ''
    };

    // ========== 筛选器绑定 ==========
    function bindFilterGroup(groupId, filterKey) {
        var tags = document.querySelectorAll('#' + groupId + ' .filter-tag');
        tags.forEach(function (tag) {
            tag.addEventListener('click', function () {
                tags.forEach(function (t) { t.classList.remove('active'); });
                this.classList.add('active');
                filters[filterKey] = this.getAttribute('data-filter');
                renderProducts();
            });
        });
    }

    bindFilterGroup('categoryFilters', 'category');
    bindFilterGroup('brandFilters', 'brand');
    bindFilterGroup('driveFilters', 'drive');

    // 搜索
    var searchInput = document.getElementById('searchInput');
    var searchTimer;
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimer);
            searchTimer = setTimeout(function () {
                filters.search = searchInput.value.trim().toLowerCase();
                renderProducts();
            }, 300);
        });
    }

    // ========== 筛选逻辑 ==========
    function getFilteredProducts() {
        return getProducts().filter(function (p) {
            if (filters.category !== 'all' && p.category !== filters.category) return false;
            if (filters.brand    !== 'all' && p.brand    !== filters.brand)    return false;
            if (filters.drive    !== 'all' && p.drive    !== filters.drive)    return false;
            if (filters.search) {
                var s = (p.name + ' ' + p.desc + ' ' + catLabel(p.category) + ' ' + p.spec).toLowerCase();
                if (s.indexOf(filters.search) === -1) return false;
            }
            return true;
        });
    }

    // ========== 渲染 ==========
    var productsGrid = document.getElementById('productsGrid');
    var emptyState = document.getElementById('emptyState');
    var productsCount = document.getElementById('productsCount');

    function renderProducts() {
        var filtered = getFilteredProducts();
        var html = '';
        filtered.forEach(function (p, i) {
            var delay = i * 0.04;
            html += '<a href="product-detail.html?id=' + p.id + '" class="product-card" style="animation-delay:' + delay + 's">';
            html += '<div class="product-card-image">';
            html += '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">';
            html += '<span class="product-card-badge ' + (badgeMap[p.category] || 'badge-other') + '">' + catLabel(p.category) + '</span>';
            html += '</div>';
            html += '<div class="product-card-body">';
            html += '<h3 class="product-card-name">' + p.name + '</h3>';
            html += '<p class="product-card-desc">' + p.desc + '</p>';
            html += '<div class="product-card-attrs">';
            html += '<span class="attr-tag attr-brand">'    + i18n.t('attr_brand_' + p.brand)    + '</span>';
            html += '<span class="attr-tag attr-drive">'    + i18n.t('attr_drive_' + p.drive)    + '</span>';
            html += '<span class="attr-tag attr-category">' + catLabel(p.category)                + '</span>';
            html += '</div>';
            html += '<div class="product-card-footer">';
            html += '<span class="product-card-spec">&#9881; <span>' + p.spec + '</span></span>';
            html += '<span class="product-card-link">' + i18n.t('prod_detail') + '</span>';
            html += '</div></div></a>';
        });
        productsGrid.innerHTML = html;
        var span = productsCount.querySelector('span');
        if (span) span.textContent = filtered.length;
        emptyState.style.display = filtered.length ? 'none' : 'block';
    }

    renderProducts();
});