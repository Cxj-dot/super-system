/**
 * 山东龙达国际 - 多语言支持
 * 中文 / English
 */
var i18n = {
    currentLang: 'zh',
    translations: {
        zh: {
            // 导航
            nav_home: '首页',
            nav_about: '关于我们',
            nav_products: '产品中心',
            nav_advantage: '核心优势',
            nav_contact: '联系我们',

            // 轮播
            carousel_tag1: '工程机械',
            carousel_title1: '品质重型机械<br>助力全球建设',
            carousel_desc1: '20年专业经验，出口全球50+国家，值得信赖的工程机械供应商',
            carousel_tag2: '矿山设备',
            carousel_title2: '高效矿山解决方案<br>为客户创造更大价值',
            carousel_desc2: '从开采到运输，一站式矿山机械配套服务',
            carousel_tag3: '农业机械',
            carousel_title3: '先进农业装备<br>赋能现代农场',
            carousel_desc3: '高品质农业机械出口，满足多样化农作需求',
            carousel_btn: '查看产品',

            // 关于我们
            about_label: '关于龙达',
            about_title: '山东龙达国际',
            about_desc: '专注重型机械海外贸易，以品质赢得全球信赖',
            about_p1: '山东龙达国际是一家专业从事重型机械及工程设备进出口贸易的现代化企业。公司依托山东强大的机械制造产业集群优势，致力于将中国优质的重型机械设备推向全球市场。',
            about_p2: '我们拥有经验丰富的国际贸易团队和专业技术工程师，能够为海外客户提供从设备选型、定制生产到物流运输、售后服务的全链条解决方案。产品远销东南亚、中东、非洲、南美、俄罗斯等50多个国家和地区。',
            stat_years: '行业经验',
            stat_countries: '出口国家',
            stat_clients: '服务客户',
            stat_products: '产品型号',

            // 产品中心
            products_label: '产品中心',
            products_title: '热销产品系列',
            products_desc: 'HOWO / SHACMAN 重卡牵引头、自卸车，出口级品质',
            cat_tractor_head: '牵引头系列',
            cat_dump_truck: '自卸车系列',
            prod_howo_nx_tractor: 'HOWO NX 6×4 371 牵引头',
            prod_howo_nx_tractor_desc: '全新一代NX平台，智能节油，适合中长途运输',
            prod_howo_dump: 'HOWO 6×4 371 自卸车',
            prod_howo_dump_desc: '371马力，承载能力强，适用于矿山和建筑工地',
            prod_shacman_tractor: 'SHACMAN F3000 6×4 牵引头',
            prod_shacman_tractor_desc: '军工品质，潍柴动力，皮实耐用',
            prod_shacman_dump: 'SHACMAN F3000 6×4 自卸车',
            prod_shacman_dump_desc: '超强底盘设计，大箱容量，专为重载运输打造',
            products_more: '查看更多产品',

            // 核心优势
            advantage_label: '核心优势',
            advantage_title: '为什么选择龙达',
            advantage_desc: '以专业服务赢得全球客户信赖',
            adv_global: '全球贸易网络',
            adv_global_desc: '覆盖东南亚、中东、非洲、南美等50+国家和地区，拥有成熟的国际物流与清关体系',
            adv_quality: '严选品质保证',
            adv_quality_desc: '与国内一流机械制造商深度合作，每台设备出厂前均经过严格质检，确保符合国际标准',
            adv_price: '源头价格优势',
            adv_price_desc: '工厂直供模式，去除中间环节，为客户提供最具竞争力的价格',
            adv_service: '完善售后服务',
            adv_service_desc: '专业工程师团队提供远程技术支持和现场维修服务，配件供应及时充足',
            adv_logistics: '专业物流方案',
            adv_logistics_desc: '提供海运、陆运、铁路等多种运输方案，确保设备安全准时到达',
            adv_custom: '定制化服务',
            adv_custom_desc: '根据客户需求提供设备定制、改装及特殊配置服务，满足个性化需求',

            // 联系我们
            contact_label: '联系我们',
            contact_title: '期待与您合作',
            contact_desc: '有任何需求，欢迎随时与我们取得联系',
            contact_addr_label: '公司地址',
            contact_phone_label: '联系 / WhatsApp',
            contact_email_label: '电子邮箱',
            contact_time_label: '工作时间',
            contact_time: '周一至周五 8:30 - 17:30',
            contact_btn: '发送消息',
            contact_success: '感谢您的留言，我们会尽快与您联系！',

            // 产品页 - 筛选
            filter_category: '产品分类',
            filter_all: '全部',
            filter_tractor_head: '牵引头',
            filter_dump_truck: '自卸车',
            filter_brand: '品牌',
            filter_brand_howo: 'HOWO',
            filter_brand_shacman: 'SHACMAN',
            filter_drive: '驱动形式',
            filter_drive_6x4: '6×4',
            filter_search: '搜索产品名称...',
            products_title_all: '全部产品',
            products_total: '共 <span>{count}</span> 款产品',
            empty_title: '没有找到匹配的产品',
            empty_hint: '请尝试调整筛选条件或搜索关键词',
            prod_inquiry: '询价咨询',
            prod_detail: '查看详情 →',
            // 卡片属性标签
            attr_brand_howo: 'HOWO',
            attr_brand_shacman: 'SHACMAN',
            attr_drive_6x4: '6×4',
            attr_category_tractor_head: '牵引头',
            attr_category_dump_truck: '自卸车',

            // 产品详情页
            detail_price: '参考价格',
            detail_price_contact: '联系我们获取报价',
            detail_price_hint: '具体价格根据配置和采购量确定，请联系我们获取最新报价',
            detail_inquiry_btn: '立即咨询',
            detail_paypal_btn: 'PayPal 购买',
            detail_paypal_coming: 'PayPal在线下单功能即将上线，敬请期待',
            detail_desc_title: '产品描述',
            detail_specs_title: '规格参数',
            detail_gallery_title: '产品实拍',
            detail_gallery_hint: '均为实际拍摄图片，未经任何修饰处理',
            detail_back: '← 返回产品列表',
            detail_contact_btn: '联系我们获取报价',

            // 页脚产品
            footer_desc: '专业重型机械海外贸易服务商',
            footer_quick: '快速链接',
            footer_products: '产品系列',
            footer_tractor_head: '牵引头系列',
            footer_dump_truck: '自卸车系列'
        },
        en: {
            // Navigation
            nav_home: 'Home',
            nav_about: 'About Us',
            nav_products: 'Products',
            nav_advantage: 'Advantages',
            nav_contact: 'Contact',

            // Carousel
            carousel_tag1: 'Construction Machinery',
            carousel_title1: 'Quality Heavy Machinery<br>Powering Global Construction',
            carousel_desc1: '20 years of expertise, exporting to 50+ countries, your trusted heavy machinery supplier',
            carousel_tag2: 'Mining Equipment',
            carousel_title2: 'Efficient Mining Solutions<br>Creating Greater Value',
            carousel_desc2: 'One-stop mining machinery solutions from extraction to transportation',
            carousel_tag3: 'Agricultural Machinery',
            carousel_title3: 'Advanced Agricultural Equipment<br>Empowering Modern Farms',
            carousel_desc3: 'High-quality agricultural machinery export for diverse farming needs',
            carousel_btn: 'View Products',

            // About
            about_label: 'About LONGDA',
            about_title: 'Shandong Longda International',
            about_desc: 'Focused on heavy machinery global trade, winning trust through quality',
            about_p1: 'Shandong Longda International is a modern enterprise specializing in the import and export of heavy machinery and engineering equipment. Leveraging the strong machinery manufacturing cluster in Shandong Province, we are committed to bringing premium Chinese heavy machinery to the global market.',
            about_p2: 'We have an experienced international trade team and professional technical engineers who provide overseas clients with end-to-end solutions covering equipment selection, custom manufacturing, logistics, and after-sales service. Our products are exported to over 50 countries and regions including Southeast Asia, the Middle East, Africa, South America, and Russia.',
            stat_years: 'Years Experience',
            stat_countries: 'Export Countries',
            stat_clients: 'Clients Served',
            stat_products: 'Product Models',

            // Products
            products_label: 'Products',
            products_title: 'Hot-Selling Product Series',
            products_desc: 'HOWO / SHACMAN heavy trucks, tractor heads & dump trucks, export quality',
            cat_tractor_head: 'Tractor Head Series',
            cat_dump_truck: 'Dump Truck Series',
            prod_howo_nx_tractor: 'HOWO NX 6×4 371 Tractor Head',
            prod_howo_nx_tractor_desc: 'New generation NX platform, intelligent fuel-saving, ideal for medium-long haul',
            prod_howo_dump: 'HOWO 6×4 371 Dump Truck',
            prod_howo_dump_desc: '371HP, high load capacity, suitable for mining and construction sites',
            prod_shacman_tractor: 'SHACMAN F3000 6×4 Tractor Head',
            prod_shacman_tractor_desc: 'Military-grade quality, Weichai power, tough and durable',
            prod_shacman_dump: 'SHACMAN F3000 6×4 Dump Truck',
            prod_shacman_dump_desc: 'Reinforced chassis design, large cargo capacity, built for heavy-duty transport',
            products_more: 'View All Products',

            // Advantages
            advantage_label: 'Advantages',
            advantage_title: 'Why Choose LONGDA',
            advantage_desc: 'Winning global customer trust through professional service',
            adv_global: 'Global Trade Network',
            adv_global_desc: 'Covering 50+ countries across Southeast Asia, Middle East, Africa, and South America with mature international logistics and customs clearance systems',
            adv_quality: 'Strict Quality Assurance',
            adv_quality_desc: 'Deep collaboration with top-tier Chinese machinery manufacturers; every unit undergoes rigorous inspection before delivery to meet international standards',
            adv_price: 'Direct Factory Pricing',
            adv_price_desc: 'Factory-direct supply model eliminates intermediaries, delivering the most competitive prices to our clients',
            adv_service: 'Comprehensive After-Sales',
            adv_service_desc: 'Professional engineering team provides remote technical support and on-site maintenance with sufficient spare parts supply',
            adv_logistics: 'Professional Logistics',
            adv_logistics_desc: 'Multiple transport solutions including sea, land, and rail to ensure safe and timely equipment delivery',
            adv_custom: 'Customization Service',
            adv_custom_desc: 'Equipment customization, modification, and special configuration services to meet individual client requirements',

            // Contact
            contact_label: 'Contact Us',
            contact_title: 'Looking Forward to Cooperation',
            contact_desc: 'Feel free to reach out with any inquiries',
            contact_addr_label: 'Address',
            contact_phone_label: 'Phone / WhatsApp',
            contact_email_label: 'Email',
            contact_time_label: 'Business Hours',
            contact_time: 'Mon - Fri 8:30 AM - 5:30 PM',
            contact_btn: 'Send Message',
            contact_success: 'Thank you for your message! We will contact you shortly.',

            // Filter & Products Page
            filter_category: 'Category',
            filter_all: 'All',
            filter_tractor_head: 'Tractor Head',
            filter_dump_truck: 'Dump Truck',
            filter_brand: 'Brand',
            filter_brand_howo: 'HOWO',
            filter_brand_shacman: 'SHACMAN',
            filter_drive: 'Drive Type',
            filter_drive_6x4: '6×4',
            filter_search: 'Search products...',
            products_title_all: 'All Products',
            products_total: '<span>{count}</span> Products',
            empty_title: 'No matching products found',
            empty_hint: 'Try adjusting filters or search keywords',
            prod_inquiry: 'Inquiry',
            prod_detail: 'View Details →',
            // Attribute tags
            attr_brand_howo: 'HOWO',
            attr_brand_shacman: 'SHACMAN',
            attr_drive_6x4: '6×4',
            attr_category_tractor_head: 'Tractor Head',
            attr_category_dump_truck: 'Dump Truck',

            // Product Detail Page
            detail_price: 'Reference Price',
            detail_price_contact: 'Contact us for pricing',
            detail_price_hint: 'Price varies by configuration and order quantity. Please contact us for the latest quote.',
            detail_inquiry_btn: 'Inquire Now',
            detail_paypal_btn: 'Buy with PayPal',
            detail_paypal_coming: 'PayPal online ordering is coming soon. Stay tuned!',
            detail_desc_title: 'Product Description',
            detail_specs_title: 'Specifications',
            detail_gallery_title: 'Product Gallery',
            detail_gallery_hint: 'All photos are actual shots without any retouching',
            detail_back: '← Back to Products',
            detail_contact_btn: 'Contact Us for Quote',

            // Footer
            footer_desc: 'Professional Heavy Machinery Global Trade Service Provider',
            footer_quick: 'Quick Links',
            footer_products: 'Product Series',
            footer_tractor_head: 'Tractor Head Series',
            footer_dump_truck: 'Dump Truck Series'
        }
    },

    /**
     * 初始化语言
     */
    init: function () {
        var saved = localStorage.getItem('longda_lang');
        if (saved) {
            this.currentLang = saved;
        }
        this.apply();
        this.updateSwitcher();
    },

    /**
     * 切换语言
     */
    switchTo: function (lang) {
        if (this.currentLang === lang) return;
        this.currentLang = lang;
        localStorage.setItem('longda_lang', lang);
        this.apply();
        this.updateSwitcher();
    },

    /**
     * 应用翻译到所有 [data-i18n] 元素
     */
    apply: function () {
        var dict = this.translations[this.currentLang];
        var elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key]) {
                // 处理含 <br> 的标题
                if (dict[key].indexOf('<br>') !== -1) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });
    },

    /**
     * 更新语言切换按钮状态
     */
    updateSwitcher: function () {
        var btns = document.querySelectorAll('.lang-btn');
        btns.forEach(function (btn) {
            if (btn.getAttribute('data-lang') === i18n.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    },

    /**
     * 获取翻译文本
     */
    t: function (key) {
        return this.translations[this.currentLang][key] || key;
    }
};