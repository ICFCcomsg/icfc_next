(function(){
    // Load Google Translate element and wire up our dropdown to control it
    function addGoogleTranslateScript(){
        if(window.google && window.google.translate) return initPicker();
        var s = document.createElement('script');
        s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        s.async = true;
        document.head.appendChild(s);
    }

    window.googleTranslateElementInit = function(){
        try{
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,zh-CN,ms,ko,id',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }catch(e){
            // ignore
        }
        initPicker();
    };

    function initPicker(){
        var select = document.getElementById('rs-language-select');
        if(!select) return;
        // If Google Translate not yet available, poll until it is
        var attempts = 0;
        var waiter = setInterval(function(){
            var combo = document.querySelector('.goog-te-combo');
            attempts++;
            if(combo){
                clearInterval(waiter);
                // sync initial value
                var lang = localStorage.getItem('rs_lang') || select.value || 'en';
                setCombo(lang);
                // when user changes our select, change google translate combo
                select.addEventListener('change', function(){
                    var v = select.value;
                    localStorage.setItem('rs_lang', v);
                    setCombo(v);
                });
            }
            if(attempts>60){ clearInterval(waiter); }
        }, 300);
    }

    function setCombo(lang){
        var combo = document.querySelector('.goog-te-combo');
        if(!combo) return;
        if(lang === 'auto'){
            // reset to original language
            combo.value = 'en';
        } else {
            combo.value = lang;
        }
        // dispatch event cross-browser
        var evt;
        try { evt = new Event('change'); } catch(e){ evt = document.createEvent('HTMLEvents'); evt.initEvent('change', true, true); }
        combo.dispatchEvent(evt);
    }

    // add a hidden container for google translate (it will render UI we hide)
    var gtContainer = document.createElement('div');
    gtContainer.id = 'google_translate_element';
    gtContainer.style.display = 'none';
    document.body.appendChild(gtContainer);

    // load the script after DOM is ready
    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', addGoogleTranslateScript);
    } else {
        addGoogleTranslateScript();
    }
})();
