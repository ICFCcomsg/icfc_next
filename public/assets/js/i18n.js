(function(){
    const SELECTOR = '#rs-language-select';
    const STORAGE_KEY = 'site_lang';

    async function loadLang(lang){
        try{
            // compute base URL from this script tag so pages in subfolders can load JSON
            const script = document.querySelector('script[src$="i18n.js"]');
            let base = '/';
            if(script){
                try {
                    const url = new URL(script.src, location.href);
                    base = url.origin + url.pathname.replace(/\/assets\/js\/i18n\.js$/,'/').replace(/\/assets\/js\/i18n\.js$/,'/');
                    // strip trailing assets/js/ if present
                    base = base.replace(/assets\/js\/$/, '');
                } catch(e){
                    base = '/';
                }
            }
            const jsonUrl = base + 'lang/' + lang + '.json';
            const res = await fetch(jsonUrl, {cache: 'no-store'});
            if(!res.ok) throw new Error('Missing language file');
            const dict = await res.json();
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const val = key.split('.').reduce((o,k)=> (o||{})[k], dict);
                if(typeof val === 'string'){
                    // Preserve inner elements like icons: replace only text nodes where applicable
                    // If element has no child elements, set textContent; otherwise set firstChild text
                    if(el.children.length === 0){
                        el.textContent = val;
                    } else {
                        // try to find a text node to replace, fallback to setting innerText
                        let textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
                        if(textNode) textNode.nodeValue = val;
                        else el.innerText = val;
                    }
                }
            });

            // Explicit selector map: deterministic updates for shared header/footer elements
            const selectorMap = {
                'top.obstacle_text': '.header-top-left .header-top-content p',
                'top.connect_link': '.header-top-left .header-top-content p a',
                'top.call_us_label': '.header-top-right .header-top-meta:nth-of-type(1) .header-top-meta-content span',
                'top.send_mail_label': '.header-top-right .header-top-meta:nth-of-type(2) .header-top-meta-content span',
                'header.language_label': '.rs-language-picker label[for="rs-language-select"]',
                'nav.home': '.multipage-menu > li.menu-item:nth-of-type(1) > a',
                'nav.industries': '.multipage-menu > li.menu-item-has-children:nth-of-type(2) > a',
                'nav.about': '.multipage-menu > li.menu-item-has-children.rs-mega-menu:nth-of-type(3) > a',
                'nav.services': '.multipage-menu > li:nth-of-type(4) > a',
                'nav.blog': '.multipage-menu > li:nth-of-type(4) .submenu li a',
                'nav.contact': '.multipage-menu > li.menu-item-has-children:nth-of-type(5) > a',
                'nav.contact_primary': '.multipage-menu > li.menu-item-has-children:nth-of-type(5) .submenu li:nth-of-type(1) a',
                'nav.contact_secondary': '.multipage-menu > li.menu-item-has-children:nth-of-type(5) .submenu li:nth-of-type(2) a',
                'header.get_quote': '.header-btn a.rs-btn'
            };

            Object.keys(selectorMap).forEach(key => {
                const sel = selectorMap[key];
                const val = key.split('.').reduce((o,k)=> (o||{})[k], dict);
                if(typeof val !== 'string') return;
                document.querySelectorAll(sel).forEach(el => {
                    if(el.children.length === 0) el.textContent = val;
                    else {
                        let textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
                        if(textNode) textNode.nodeValue = val;
                        else el.innerText = val;
                    }
                });
            });
        }catch(err){
            console.warn('i18n load failed for', lang, err);
        }
    }

    function setSelect(lang){
        const sel = document.querySelector(SELECTOR);
        if(!sel) return;
        sel.value = lang;
    }

    function init(){
        const saved = localStorage.getItem(STORAGE_KEY) || 'en';

        // If language select doesn't exist on the page, inject it into the header
        let sel = document.querySelector(SELECTOR);
        if(!sel){
            const container = document.querySelector('.rs-language-picker') || document.querySelector('.header-right');
            if(container){
                const wrapper = document.createElement('div');
                wrapper.className = 'rs-language-picker';
                wrapper.style.cssText = 'display:flex;align-items:center;gap:8px;margin-right:16px;';
                wrapper.innerHTML = `\n                    <label for="rs-language-select" style="color:#111; font-size:13px; margin:0;" data-i18n="header.language_label">Language</label>\n                    <select id="rs-language-select" aria-label="Select language" style="padding:6px 10px; border-radius:4px; border:1px solid rgba(0,0,0,0.08); background:#fff; color:#111;">\n                        <option value="en">English</option>\n                        <option value="zh">中文 (Chinese)</option>\n                        <option value="ms">Malay / Melayu</option>\n                        <option value="ko">Korean</option>\n                        <option value="id">Bahasa / Indonesian</option>\n                    </select>\n                `;
                // insert at the start of container for visibility
                container.insertBefore(wrapper, container.firstChild);
                sel = wrapper.querySelector(SELECTOR);
            }
        }

        setSelect(saved);
        loadLang(saved);

        if(sel){
            sel.addEventListener('change', (e)=>{
                const v = e.target.value || 'en';
                localStorage.setItem(STORAGE_KEY, v);
                loadLang(v);
            });
        }
    }

    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', init);
    } else init();
})();
