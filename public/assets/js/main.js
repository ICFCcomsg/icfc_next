(function ($) {
    "use strict";

    /* -----------------------------------------------------------------------------------
    CRITICAL: Global Language Persistence & Automated Widget Injection
    ----------------------------------------------------------------------------------- */
    (function () {
        var STORAGE_KEY = 'user_selected_lang';

        function normalizeTranslatePath() {
            if (window.location.pathname.startsWith('/en/')) {
                var newPath = window.location.pathname.replace(/^\/en/, '') || '/';
                window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
            }
        }

        function clearStaleTranslateCookie() {
            var cookies = document.cookie.split(';');
            cookies.forEach(function(cookie) {
                var trimmed = cookie.trim();
                if (trimmed.indexOf('googtrans=') === 0) {
                    var value = trimmed.substring('googtrans='.length);
                    if (value === '/en/' || value === '/en/en' || /^\/en\/.+/.test(value)) {
                        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
                        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
                    }
                }
            });
        }

        normalizeTranslatePath();
        clearStaleTranslateCookie();

        // Auto-inject the widget div if missing (useful for multi-page sites)
        function injectTranslateWidget() {
            if (!document.getElementById('google_translate_element')) {
                var headerBtn = document.querySelector('.header-btn');
                if (headerBtn) {
                    var div = document.createElement('div');
                    div.id = 'google_translate_element';
                    headerBtn.insertBefore(div, headerBtn.firstChild);
                }
            }
        }
        injectTranslateWidget();

        function setLanguageCookie(lang) {
            var cookieValue = "/en/" + lang;
            var expires = new Date();
            expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000));
            var cookieParams = "googtrans=" + cookieValue + "; expires=" + expires.toUTCString() + "; path=/";
            
            // Set for current domain
            document.cookie = cookieParams;
            
            // Set for apex domain if on a subdomain (e.g. .example.com)
            var hostname = window.location.hostname;
            var domainParts = hostname.split('.');
            if (domainParts.length > 2) {
                var apexDomain = domainParts.slice(-2).join('.');
                document.cookie = cookieParams + "; domain=." + apexDomain;
                document.cookie = cookieParams + "; domain=" + apexDomain;
            }

            console.log("Cookie synchronized for language:", lang);
        }

        function initLanguageListener() {
            function sync() {
                var combo = document.querySelector('.goog-te-combo');
                var savedLang = localStorage.getItem(STORAGE_KEY);
                if (combo && savedLang && savedLang !== 'en' && combo.value !== savedLang) {
                    combo.value = savedLang;
                    combo.dispatchEvent(new Event('change'));
                    return true;
                }
                return false;
            }

            var combo = document.querySelector('.goog-te-combo');
            if (combo) {
                sync();
                combo.addEventListener('change', function () {
                    var lang = this.value;
                    if (lang && lang !== 'en') {
                        localStorage.setItem(STORAGE_KEY, lang);
                        setLanguageCookie(lang);
                    } else {
                        localStorage.removeItem(STORAGE_KEY);
                        // Clear cookie
                        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                    }
                });
                
                // Aggressive check for first 5 seconds to ensure it sticks
                var checks = 0;
                var interval = setInterval(function() {
                    if (sync() || checks > 10) clearInterval(interval);
                    checks++;
                }, 500);

            } else {
                setTimeout(initLanguageListener, 500);
            }
        }

        // Restore saved language on page load
        var savedLang = localStorage.getItem(STORAGE_KEY);
        if (savedLang && savedLang !== 'en') {
            setLanguageCookie(savedLang);
        }

        if (document.readyState === 'complete') {
            initLanguageListener();
        } else {
            window.addEventListener('load', initLanguageListener);
        }
    })();

    var windowOn = $(window);

    /* Windows Load */
    $(window).on('load', function () {
        $("#pre-load").delay(600).fadeOut(500);
        $(".pre-loader").delay(600).fadeOut(500);
        wowAnimation();
    });

    // Safety fallback: Hide preloader after 5 seconds anyway
    setTimeout(function() {
        if ($("#pre-load").is(":visible")) {
            $("#pre-load").fadeOut(500);
        }
    }, 5000);


    // rtl setting start
    function rs_rtl_settings() {
        $('#rs-dir-toggler').on("change", function () {
            toggle_rtl();
            location.reload(true);
        });

        function rs_set_scheme(rs_dir) {
            sessionStorage.setItem('rs_dir', rs_dir);
            document.documentElement.setAttribute("dir", rs_dir);
            if (rs_dir === 'rtl') {
                $('body').addClass('rtl');
                $('.rs-theme-dir-rtl').addClass('active');
                $('.rs-theme-dir-ltr').removeClass('active');
            } else {
                $('body').removeClass('rtl');
                $('.rs-theme-dir-ltr').addClass('active');
                $('.rs-theme-dir-rtl').removeClass('active');
            }
            var list = $("[href='assets/vendor/css/bootstrap.min.css']");
            $(list).attr("href", rs_dir === 'rtl' ? "assets/vendor/css/bootstrap.rtl.min.css" : "assets/vendor/css/bootstrap.min.css");
        }

        function toggle_rtl() {
            if (sessionStorage.getItem('rs_dir') === 'rtl') {
                rs_set_scheme('ltr');
            } else {
                rs_set_scheme('rtl');
            }
        }

        function rs_init_dir() {
            var savedDir = sessionStorage.getItem('rs_dir');
            rs_set_scheme(savedDir || 'ltr');
            document.getElementById('rs-dir-toggler').checked = savedDir === 'rtl';
        }
        rs_init_dir();
    }

    /* Append settings HTML */
    rs_settings_append(true);

    if ($("#rs-theme-toggler").length > 0) {
        rs_theme_toggler();
    }

    $(".-btn").on("click", function () {
        $(".rs-theme-settings-area").toggleClass("settings-opened");
    });

    if ($("#rs-dir-toggler").length > 0) {
        rs_rtl_settings();
    }

    function rs_settings_append($x) {
        var settings = $('body');
        let dark;
        $x === true ? dark = 'd-block' : dark = 'd-none';
        var settings_html = '<div class="rs-theme-settings-area"> <div class="rs-theme-wrapper"> <div class="rs-theme-header text-center"> <h4 class="rs-theme-header-title">Template Settings</h4> </div> <div class="rs-theme-dir"> <label class="rs-theme-dir-main" for="rs-dir-toggler"> <span class="rs-theme-dir-rtl"> RTL</span> <input type="checkbox" id="rs-dir-toggler"> <i class="rs-theme-dir-slide"></i> <span class="rs-theme-dir-ltr active"> LTR</span> </label> </div> <div class="rs-theme-settings"> <div class="rs-theme-settings-wrapper"> <div class=""> <button class="-btn"> <span class="rs-theme-settings-gear"> <i class="ri-settings-2-line"></i> </span> <span class="rs-theme-settings-close"> <i class="ri-close-line"></i> </span> </button> </div> </div> </div> </div> </div>';
        settings.append(settings_html);
    }

    /* footer year */
    var yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.innerHTML = new Date().getFullYear();
    }

    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    /* Sidebar Toggle */
    $(".offcanvas-close,.offcanvas-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("info-open");
        $(".offcanvas-overlay").removeClass("overlay-open");
    });

    $(".sidebar-toggle").on("click", function () {
        $(".offcanvas-area").addClass("info-open");
        $(".offcanvas-overlay").addClass("overlay-open");
    });

    $(".body-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    $("select").niceSelect();

    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    $('.pricing-switcher-wrapper span').on('click', function () {
        $('.rs-pricing-switcher').toggleClass('switched');
        $('.rs-pricing-switcher').addClass('switching');
        setTimeout(() => {
            $('.rs-pricing-switcher').removeClass('switching');
        }, 50);
    });

    flatpickr("#rs-date", {
        dateFormat: "F j, Y"
    });

    flatpickr("#rs-time", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        time_24hr: false
    });

    $(document).on('mouseover', '.is-item-active', function () {
        $(this).addClass('active');
        $('.is-item-active').removeClass('active');
        $(this).addClass('active');
    });

    $('.rs-hover-sync').each(function () {
        const $wrapper = $(this);
        $wrapper.on('mouseenter', '.rs-sync-item', function () {
            const $this = $(this);
            const index = $this.index();
            const $items = $wrapper.find('.rs-sync-item');
            const $thumbs = $wrapper.find('.rs-sync-thumb');
            $items.removeClass('active');
            $thumbs.removeClass('active');
            $this.addClass('active');
            $thumbs.eq(index).addClass('active');
        });
    });

    jQuery('.rs-ripple-item').each(function (index) {
        var uniqueClass = 'rs-ripple-item-' + index;
        jQuery(this).addClass(uniqueClass);
        var parentHotspots = jQuery(this).closest('.rs-contact-wrapper');
        var targetMobileItem = parentHotspots.find('.mobile_item').eq(index);
        jQuery(this).on('click', function () {
            if (targetMobileItem.hasClass('active')) {
                targetMobileItem.removeClass('active');
            } else {
                parentHotspots.find('.mobile_item.active').removeClass('active');
                targetMobileItem.addClass('active');
            }
        });
        parentHotspots.on('click', '.remove-icon', function (event) {
            event.stopPropagation();
            targetMobileItem.removeClass('active');
        });
    });

    var switches = jQuery('.rs-contact-wrapper .rs-ripple-item');
    var currentIndex = 0;
    var interval;
    var speed = 1500;

    function startRotation() {
        interval = setInterval(function () {
            switches.eq(currentIndex).removeClass('ripple');
            currentIndex = (currentIndex + 1) % switches.length;
            switches.eq(currentIndex).addClass('ripple');
        }, speed);
    }

    function stopRotation() {
        clearInterval(interval);
        switches.eq(currentIndex).removeClass('ripple');
    }

    startRotation();
    switches.on('mouseenter', function () {
        stopRotation();
    }).on('mouseleave', function () {
        startRotation();
    });

    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    $('.header-search-icon').on('click', function (event) {
        $('.rs-stickys-form').slideToggle('show');
        $(this).toggleClass('icon-close');
    });

    $(document).ready(function () {
        if ($('.rs-text-circle').length) {
            $(".rs-text-circle").each(function () {
                var sentence = $(this).text().replace(/\s+/g, ' ').trim();
                var wrappedSentence = '';
                for (var i = 0; i < sentence.length; i++) {
                    wrappedSentence += '<span>' + sentence[i] + '</span>';
                }
                $(this).html(wrappedSentence);
                var rotateDegree = $(this).data("rotate-degree") || 20;
                $(this).find("span").each(function (index) {
                    $(this).css("transform", "rotate(" + ((index + 1) * rotateDegree) + "deg)");
                });
            });
        }

        $('.rs-swiper .swiper').each(function (index) {
            var $swiper = $(this);
            var noPause = $swiper.data('no-pause');
            var hoverAutoplay = !(noPause === true || noPause === 'true');
            var loop = $swiper.data('loop') === undefined ? true : $swiper.data('loop');
            var centeredSlides = $swiper.data('center-mode') === undefined ? false : $swiper.data('center-mode');
            var autoplay = $swiper.data('autoplay') === undefined ? true : $swiper.data('autoplay');
            var dynamicBullets = $swiper.data('dots-dynamic') === undefined ? true : $swiper.data('dots-dynamic');
            var direction = $swiper.data('direction') === 'vertical' ? 'vertical' : 'horizontal';
            var fridgeMovement = $swiper.data('play-slide') === undefined ? true : $swiper.data('play-slide');
            var effect = $swiper.data('effect') || 'slide';
            var grabCursor = $swiper.data('grab-cursor') === undefined ? false : $swiper.data('grab-cursor');
            var oneWayMovement = $swiper.data('one-way') === undefined ? false : $swiper.data('one-way');
            var startAt = $swiper.data('start-at');
            var slidesPerView = $swiper.data('item');
            var speed = $swiper.data('speed');
            var gap = (($swiper.data('no-gap') === true) ? 0 : 30);
            var margin = ($swiper.data('margin') ? $swiper.data('margin') : gap);
            var slidesPerViewXl = $swiper.data('item-xl');
            var slidesPerViewLg = $swiper.data('item-lg');
            var slidesPerViewMd = $swiper.data('item-md');
            var slidesPerViewSm = $swiper.data('item-sm');
            var slidesPerViewXs = $swiper.data('item-xs');
            var slidesPerViewMobile = $swiper.data('item-mobile');
            var marginXl = ($swiper.data('margin-xl') ? $swiper.data('margin-xl') : margin);
            var marginLg = ($swiper.data('margin-lg') ? $swiper.data('margin-lg') : marginXl);
            var marginMd = ($swiper.data('margin-md') ? $swiper.data('margin-md') : marginLg);
            var marginSm = ($swiper.data('margin-sm') ? $swiper.data('margin-sm') : marginMd);
            var marginXs = ($swiper.data('margin-xs') ? $swiper.data('margin-xs') : marginSm);
            var marginMobile = ($swiper.data('margin-mobile') ? $swiper.data('margin-mobile') : marginXs);
            var rsNavPrev = 'rs-nav-prev-' + index;
            var rsNavNext = 'rs-nav-next-' + index;
            $swiper.closest('.rs-swiper').find('.swiper-button-prev').addClass(rsNavPrev);
            $swiper.closest('.rs-swiper').find('.swiper-button-next').addClass(rsNavNext);
            var rsPagination = 'rs-pagination-' + index;
            $swiper.closest('.rs-swiper').find('.swiper-pagination').addClass(rsPagination);
            var swiper = new Swiper(this, {
                loop: loop,
                autoplay: autoplay,
                direction: direction,
                effect: effect,
                enabled: fridgeMovement,
                grabCursor: grabCursor,
                oneWayMovement: oneWayMovement,
                centeredSlides: centeredSlides,
                initialSlide: (startAt ? startAt : 0),
                slidesPerView: (slidesPerView ? slidesPerView : 1),
                spaceBetween: margin,
                speed: (speed ? speed : 500),
                pagination: {
                    el: '.' + rsPagination,
                    dynamicBullets: dynamicBullets,
                    clickable: true,
                },
                navigation: {
                    nextEl: '.' + rsNavPrev,
                    prevEl: '.' + rsNavNext,
                },
                breakpoints: {
                    10: { slidesPerView: (slidesPerViewMobile ? slidesPerViewMobile : 1), spaceBetween: marginMobile },
                    481: { slidesPerView: (slidesPerViewXs ? slidesPerViewXs : 1), spaceBetween: marginXs },
                    576: { slidesPerView: (slidesPerViewSm ? slidesPerViewSm : 1), spaceBetween: marginSm },
                    768: { slidesPerView: (slidesPerViewMd ? slidesPerViewMd : 1), spaceBetween: marginMd },
                    992: { slidesPerView: (slidesPerViewLg ? slidesPerViewLg : 1), spaceBetween: marginLg },
                    1025: { slidesPerView: (slidesPerViewXl ? slidesPerViewXl : 1), spaceBetween: marginXl },
                    1201: { slidesPerView: (slidesPerView ? slidesPerView : 1), spaceBetween: margin }
                }
            });
            if (hoverAutoplay && autoplay) {
                $swiper.on('mouseenter', function () {
                    swiper.autoplay.stop();
                }).on('mouseleave', function () {
                    swiper.autoplay.start();
                });
            }
        });

        var productDetails = new Swiper(".product-details-nav", {
            spaceBetween: -20,
            slidesPerView: 4,
            navigation: {
                nextEl: ".product-details-button-next",
                prevEl: ".product-details-button-prev",
            },
        });

        var productDetailsActive = new Swiper(".product-details-active", {
            spaceBetween: 0,
            thumbs: { swiper: productDetails },
            navigation: {
                nextEl: ".product-details-button-next",
                prevEl: ".product-details-button-prev",
            },
        });

        $('.rs-cart-minus').on('click', function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val(), 10) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });

        $('.rs-cart-plus').on('click', function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val(), 10) + 1);
            $input.change();
            return false;
        });

        $('.removeRow').on('click', function () {
            $(this).closest('tr').remove();
        });

        $('.checkout-login-form-reveal-btn').on('click', function () {
            $('#checkout-coupon').slideToggle(400);
        });

        $('.social-trigger-btn').on('click', function () {
            $(this).parents('.team-info-inner').toggleClass('is-open');
        });

        $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop();
            var documentHeight = $(document).height();
            var windowHeight = $(window).height();
            $(".progress-circle").css("stroke-dashoffset", 113.1 - 113.1 * (scrollTop / (documentHeight - windowHeight)));
            if (scrollTop > 150) {
                $(".backtotop-wrap").addClass("active-progress").fadeIn();
            } else {
                $(".backtotop-wrap").removeClass("active-progress").fadeOut();
            }
            var stickyHeader = $("#rs-sticky-header");
            if ($(this).scrollTop() > 200) {
                stickyHeader.addClass("active");
            } else {
                stickyHeader.removeClass("active");
            }
        });

        $(".backtotop-wrap").on("click", function () {
            $("html,body").animate({ scrollTop: 0 }, 500);
        });

        document.querySelectorAll('.backtotop-wrap').forEach(function (el) {
            try {
                var ico = el.querySelector('i');
                var needs = false;
                if (!ico) needs = true;
                else {
                    var txt = (ico.textContent || '').trim();
                    var fnt = getComputedStyle(ico).getPropertyValue('font-family') || '';
                    if (txt === '' || fnt.toLowerCase().indexOf('remix') === -1) needs = true;
                }
                if (needs && !el.querySelector('svg.backtotop-fallback')) {
                    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.setAttribute('viewBox', '0 0 24 24');
                    svg.setAttribute('class', 'backtotop-fallback');
                    svg.setAttribute('aria-hidden', 'true');
                    svg.innerHTML = '<path fill="currentColor" d="M12 4l-6 8h4v8h4v-8h4z"></path>';
                    el.appendChild(svg);
                }
            } catch (e) { }
        });

        $('.active-item-wrapper .active-item').on('mouseenter', function () {
            $('.active-item-wrapper .active-item').removeClass('active');
            $(this).addClass('active');
        });

        var currentPath = window.location.pathname.split('/').pop();
        var menuLinks = document.querySelectorAll('.multipage-menu a');
        menuLinks.forEach(link => {
            var linkPath = link.getAttribute('href');
            if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
                link.classList.add('active');
                var parentLi = link.parentElement;
                while (parentLi) {
                    if (parentLi.tagName === 'LI') {
                        parentLi.classList.add('active');
                    }
                    parentLi = parentLi.parentElement;
                }
            }
        });

        var mainPlan = $('.rs-pricing-area');
        mainPlan.each(function () {
            var yearlySelectBtn = $('.yearly-plan-btn'),
                monthlySelectBtn = $('.monthly-plan-btn'),
                monthlyPrice = $('.monthly-pricing'),
                yearlyPrice = $('.yearly-pricing'),
                buttonSlide = $('.pricing-checkbox');
            $(monthlySelectBtn).on('click', function () {
                buttonSlide.prop('checked', true);
                $(this).addClass('active').parent('.rs-pricing-switcher-tab').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'block');
                yearlyPrice.css('display', 'none');
            });
            $(yearlySelectBtn).on('click', function () {
                buttonSlide.prop('checked', false);
                $(this).addClass('active').parent('.rs-pricing-switcher-tab').siblings().children().removeClass('active');
                monthlyPrice.css('display', 'none');
                yearlyPrice.css('display', 'block');
            });
        });

        var slider1 = document.getElementById('slider-range');
        if ($("#slider-range").length) {
            noUiSlider.create(slider1, {
                start: [0, 1100],
                connect: true,
                range: { 'min': 0, 'max': 2500 }
            });
            var amount1 = document.getElementById('amount');
            slider1.noUiSlider.on('update', function (values, handle) {
                amount1.value = "$" + values[0] + " - $" + values[1];
            });
            $('#filter-btn').on('click', function () {
                $('.filter-widget').slideToggle(1000);
            });
        }

        $("#mobile-menu").meanmenu({
            meanMenuContainer: ".mobile-menu",
            meanScreenWidth: "1199",
            meanExpand: ['<i class="ri-add-large-line"></i>'],
        });

        if ($('.rs-portfolio-accordion').length) {
            $('.portfolio-active .accordion-item').on('click', function () {
                var index = $(this).data('index');
                $('.portfolio-bg-thumb').removeClass('active');
                $('.portfolio-bg-thumb').eq(index).addClass('active');
            });
        }

        function scrollNav() {
            $(".onepage-menu li a").on('click', function () {
                $(".onepage-menu li a.active").removeClass("active");
                $(this).addClass("active");
                $(".offcanvas-area").removeClass("info-open");
                $(".offcanvas-overlay").removeClass("overlay-open");
            });
        }
        scrollNav();

        function makeTimer(endTime, countdownElementId) {
            var now = new Date();
            now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                $("#" + countdownElementId + " [data-unit='days']").html("00<span>Days</span>");
                $("#" + countdownElementId + " [data-unit='hours']").html("00<span>Hours</span>");
                $("#" + countdownElementId + " [data-unit='minutes']").html("00<span>Minutes</span>");
                $("#" + countdownElementId + " [data-unit='seconds']").html("00<span>Seconds</span>");
                return;
            }
            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") hours = "0" + hours;
            if (minutes < "10") minutes = "0" + minutes;
            if (seconds < "10") seconds = "0" + seconds;
            $("#" + countdownElementId + " [data-unit='days']").html(days + "<span>Days</span>");
            $("#" + countdownElementId + " [data-unit='hours']").html(hours + "<span>Hours</span>");
            $("#" + countdownElementId + " [data-unit='minutes']").html(minutes + "<span>Minutes</span>");
            $("#" + countdownElementId + " [data-unit='seconds']").html(seconds + "<span>Seconds</span>");
        }

        var endTime = new Date("5 August 2025 14:00:00 GMT+06:00");
        endTime = (Date.parse(endTime) / 1000);
        var timerInterval = setInterval(function () {
            makeTimer(endTime, "countdown1");
            makeTimer(endTime, "countdown2");
            makeTimer(endTime, "countdown3");
            makeTimer(endTime, "countdown4");
            makeTimer(endTime, "countdown5");
        }, 1000);

        function swiperBgActiveEffect() {
            const $container = $('.portfolio-slide-active .swiper-wrapper');
            if (!$container.length) return;
            $container.each(function () {
                const $this = $(this);
                const $items = $this.find('.swiper-slide');
                function swiperBgHoverHandler() {
                    $items.off('mouseenter.swiperBg').on('mouseenter.swiperBg', function () {
                        const getBgImg = $(this).data('bg');
                        $(this).addClass('swiper-slide-active').siblings('.swiper-slide').removeClass('swiper-slide-active');
                        $this.parent().css({ "background-image": "url(" + getBgImg + ")" });
                    });
                }
                function loadSwiperSlideActive() {
                    const $active = $this.find('.swiper-slide.swiper-slide-active');
                    if (!$active.length) return;
                    $this.parent().css({ "background-image": "url(" + $active.data('bg') + ")" });
                }
                function loaderObserver() {
                    const observer = new MutationObserver(() => {
                        loadSwiperSlideActive();
                    });
                    observer.observe($this[0], { subtree: true, attributes: true, attributeFilter: ['class'] });
                }
                swiperBgHoverHandler();
                loadSwiperSlideActive();
                loaderObserver();
            });
        }
        swiperBgActiveEffect();

        function rs_desc_height(context = document) {
            const desc = $('.rs-desc-height', context);
            desc.each(function () {
                let $this = $(this);
                let descHeight = $this.innerHeight();
                if (descHeight > 0) {
                    $this.css({ '--desc-height': descHeight + 'px', 'height': 0 });
                }
            });
        }
        rs_desc_height();
        $('.rs-portfolio-tab .nav-item').on('click', function () {
            setTimeout(() => {
                rs_desc_height($('.tab-pane.active'));
            }, 50);
        });

        if ($('.prallax-parent').length) {
            $(".prallax-parent").each(function () {
                var prallaxParent = $(this).get(0);
                var parallaxInstance = new Parallax(prallaxParent);
            });
        }

        const accordionItems = document.querySelectorAll('.rs-accordion-item.has-bg-active');
        accordionItems.forEach(item => {
            item.addEventListener('click', () => {
                accordionItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });

        document.addEventListener('mousemove', function (event) {
            let x = event.clientX;
            let y = event.clientY;
            let xPercent = (x / window.innerWidth) - 0.5;
            let yPercent = (y / window.innerHeight) - 0.5;
            let shapes = document.querySelectorAll('.shape-move img');
            shapes.forEach(function (shape, index) {
                let multiplierX = 40 + index * 2;
                let multiplierY = 40 + index * 2;
                let translateX = xPercent * multiplierX;
                let translateY = yPercent * multiplierY;
                shape.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
            });
        });

        if ($('.rs-smoother-yes').length) {
            const lenis = new Lenis({
                smoothWheel: true,
                wheelMultiplier: 1.2,
                duration: 1.5,
                lerp: 0.1,
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            document.querySelectorAll('a[href^="#"]').forEach((el) => {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    const id = el.getAttribute('href')?.slice(1);
                    if (!id) return;
                    const target = document.getElementById(id);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }

        $(function () {
            var swiperTimeline = new Swiper("#time-line-active .rs-timeline-active", {
                slidesPerView: 5,
                initialSlide: 2.5,
                spaceBetween: 30,
                loop: true,
                freeMode: false,
                grabCursor: true,
                centeredSlides: true,
                mousewheel: { enabled: true },
                speed: 1000,
                breakpoints: {
                    1200: { slidesPerView: 5, initialSlide: 2.5, spaceBetween: 30 },
                    992: { slidesPerView: 5, initialSlide: 2.5, spaceBetween: 30 },
                    768: { slidesPerView: 4, initialSlide: 2, spaceBetween: 20 },
                    576: { slidesPerView: 3, initialSlide: 1.5, spaceBetween: 20 },
                    0: { slidesPerView: "2", initialSlide: 1, spaceBetween: 0 }
                }
            });
            $("#time-line-active .swiper-slide").on("click", function () {
                swiperTimeline.slideToLoop($(this).data("swiper-slide-index"));
            });
        });

        document.addEventListener("DOMContentLoaded", () => {
            const timeline = document.getElementById("rs-timeline-wrapper");
            if (!timeline) return;
            const line = timeline.querySelector(".divider-line");
            const circle = timeline.querySelector(".divider-circle");
            const items = timeline.querySelectorAll(".rs-timeline-item");
            const isHorizontal = timeline.classList.contains("dir-horizontal");
            if (isHorizontal) return;
            const win = window;
            const update = () => {
                const { top, height } = timeline.getBoundingClientRect();
                const winH = win.innerHeight;
                const visible = Math.min(Math.max(winH - top, 0), height + winH);
                const percent = (visible / (height + winH)) * 100;
                if (line) line.style.height = percent + "%";
                if (circle) circle.style.top = percent + "%";
                items.forEach(item => {
                    const { top, bottom } = item.getBoundingClientRect();
                    item.classList.toggle("item-visible", bottom > winH * 0.2 && top < winH * 0.8);
                });
            };
            ["scroll", "resize"].forEach(evt => win.addEventListener(evt, update));
            update();
        });

        $('.rs-button-wrapper .rs-btn').mouseenter(function () {
            $(this).find('.rs-icon').css('animation', 'btnHoverEffect 0.5s');
        });
        $('.rs-button-wrapper .rs-btn').mouseleave(function () {
            $(this).find('.rs-icon').css('animation', 'btnHoverEffectReverse 0.5s');
        });

        var form = $('#contact-form');
        var formMessages = $('#form-messages');
        $(form).submit(function (e) {
            e.preventDefault();
            var formData = $(form).serialize();
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function (response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    $(formMessages).text(response);
                    $('#name, #email, #message').val('');
                    if ($('#phone').length) $('#phone').val('');
                    if ($('#website').length) $('#website').val('');
                    if ($('#subject').length) $('#subject').val('');
                    if ($('#date').length) $('#date').val('');
                    if ($('#time').length) $('#time').val('');
                })
                .fail(function (data) {
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occurred and your message could not be sent.');
                    }
                });
        });
    });
})(jQuery);

/**
 * Global Google Translate Initializer
 */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}