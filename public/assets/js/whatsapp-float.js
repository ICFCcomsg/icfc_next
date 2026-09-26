// Ripple for floating WhatsApp / WeChat.
// WeChat reads the WhatsApp wa.me number: mapped numbers open chat by WeChat ID (weixin://dl/chat?…); others use add-by-phone.
(function () {
  /** WhatsApp wa.me digits (no +) → WeChat wxid for weixin://dl/chat?wxid */
  var WECHAT_WXID_BY_WA_PHONE = {
    "6586017001": "wxid_u43uaoapqr5g22",
  };
  function bindRipple(btn) {
    if (!btn) return;
    btn.addEventListener(
      "click",
      function (e) {
        var rect = btn.getBoundingClientRect();
        var ripple = document.createElement("span");
        ripple.className = "wa-ripple";
        var size = Math.max(rect.width, rect.height) * 1.2;
        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = e.clientX - rect.left - size / 2 + "px";
        ripple.style.top = e.clientY - rect.top - size / 2 + "px";
        btn.appendChild(ripple);
        setTimeout(function () {
          if (ripple && ripple.parentNode) ripple.parentNode.removeChild(ripple);
        }, 700);
      },
      false
    );
  }

  function parseWaPhoneFromHref(href) {
    if (!href || typeof href !== "string") return "";
    href = href.trim();
    var m = href.match(/wa\.me\/(\d+)/i);
    if (m) return m[1];
    m = href.match(/[\?&]phone=(\d+)/i);
    if (m) return m[1];
    return "";
  }

  function formatPhoneLabel(digits) {
    if (!digits) return "";
    if (/^65\d{8}$/.test(digits)) {
      return "+65 " + digits.slice(2, 6) + " " + digits.slice(6);
    }
    return "+" + digits;
  }

  function wechatWxidForWaPhone(phoneDigits) {
    if (!phoneDigits) return "";
    return WECHAT_WXID_BY_WA_PHONE[phoneDigits] || "";
  }

  function weixinSchemeForWaPhone(phoneDigits) {
    var wxid = wechatWxidForWaPhone(phoneDigits);
    if (wxid) {
      return "weixin://dl/chat?" + wxid;
    }
    return "weixin://dl/addcontact?phone=" + encodeURIComponent(phoneDigits);
  }

  bindRipple(document.getElementById("whatsapp-float"));

  var wc = document.getElementById("wechat-float");
  if (!wc) return;

  bindRipple(wc);

  var wa = document.getElementById("whatsapp-float");
  var syncedPhone = "";
  if (wa) {
    syncedPhone = parseWaPhoneFromHref(wa.getAttribute("href") || "");
    if (syncedPhone) {
      wc.setAttribute("data-synced-phone", syncedPhone);
      var wx = wechatWxidForWaPhone(syncedPhone);
      if (wx) {
        wc.setAttribute("data-wechat-wxid", wx);
        wc.setAttribute(
          "title",
          "WeChat — " + wx + " (+65 8601 7001)"
        );
      } else {
        wc.setAttribute("title", "WeChat — same number as WhatsApp (" + formatPhoneLabel(syncedPhone) + ")");
      }
    }
  }

  function closeDialog(root) {
    if (!root || !root.parentNode) return;
    root.parentNode.removeChild(root);
    document.removeEventListener("keydown", onKey);
  }

  function onKey(ev) {
    if (ev.key === "Escape") {
      var bd = document.querySelector(".wechat-float-backdrop");
      if (bd) closeDialog(bd);
    }
  }

  function openWeChatDialog(trigger, phoneDigits) {
    var existing = document.querySelector(".wechat-float-backdrop");
    if (existing) closeDialog(existing);

    var qrSrc =
      trigger.getAttribute("data-qr-src") || "assets/images/wechat-qr.svg";
    var hint =
      trigger.getAttribute("data-wechat-hint") ||
      "If WeChat did not open: open WeChat → Add friends → search by this mobile number, or scan the QR code.";
    var wechatId = (trigger.getAttribute("data-wechat-id") || "").trim();
    var sync = (phoneDigits || trigger.getAttribute("data-synced-phone") || "").trim();
    var mappedWxid = sync ? wechatWxidForWaPhone(sync) : "";
    if (!wechatId && mappedWxid) {
      wechatId = mappedWxid;
    } else if (!wechatId && sync) {
      wechatId = formatPhoneLabel(sync);
    }

    var backdrop = document.createElement("div");
    backdrop.className = "wechat-float-backdrop";
    backdrop.setAttribute("role", "presentation");

    var dialog = document.createElement("div");
    dialog.className = "wechat-float-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "wechat-float-dialog-title");

    var title = document.createElement("h3");
    title.id = "wechat-float-dialog-title";
    title.textContent = "WeChat";

    var p = document.createElement("p");
    p.textContent = hint;

    var img = document.createElement("img");
    img.className = "wechat-float-qr";
    img.alt = "WeChat QR code";
    img.src = qrSrc;
    img.addEventListener("error", function () {
      img.style.display = "none";
    });

    var idEl = null;
    if (wechatId) {
      idEl = document.createElement("div");
      idEl.className = "wechat-float-id";
      idEl.textContent = wechatId;
    }

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "wechat-float-close";
    closeBtn.textContent = "Close";

    dialog.appendChild(title);
    dialog.appendChild(p);
    dialog.appendChild(img);
    if (idEl) dialog.appendChild(idEl);
    dialog.appendChild(closeBtn);
    backdrop.appendChild(dialog);
    document.body.appendChild(backdrop);

    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) closeDialog(backdrop);
    });
    closeBtn.addEventListener("click", function () {
      closeDialog(backdrop);
    });
    document.addEventListener("keydown", onKey);
  }

  function tryWeixinScheme(scheme, trigger, phoneForDialog) {
    var fallbackTimer;
    var cleaned = false;

    function clearFallback() {
      if (cleaned) return;
      cleaned = true;
      clearTimeout(fallbackTimer);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pagehide", onHide);
    }

    function onVis() {
      if (document.visibilityState === "hidden") clearFallback();
    }

    function onHide() {
      clearFallback();
    }

    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pagehide", onHide);

    fallbackTimer = setTimeout(function () {
      if (cleaned) return;
      clearFallback();
      openWeChatDialog(trigger, phoneForDialog || "");
    }, 1800);

    window.location.href = scheme;
  }

  function tryWeixinRedirect(phone, trigger) {
    tryWeixinScheme(weixinSchemeForWaPhone(phone), trigger, phone);
  }

  function tryWeixinRaw(scheme, trigger) {
    var phone =
      (trigger.getAttribute("data-synced-phone") || "").trim() ||
      (wa ? parseWaPhoneFromHref(wa.getAttribute("href") || "") : "");
    tryWeixinScheme(scheme, trigger, phone);
  }

  wc.addEventListener("click", function (e) {
    var ext = (wc.getAttribute("data-wechat-url") || "").trim();
    if (ext) {
      e.preventDefault();
      if (/^weixin:/i.test(ext)) {
        tryWeixinRaw(ext, wc);
      } else {
        window.open(ext, "_blank", "noopener,noreferrer");
      }
      return;
    }
    var href = (wc.getAttribute("href") || "").trim();
    if (href && href !== "#" && /^https?:\/\//i.test(href)) {
      return;
    }

    var phone =
      (wc.getAttribute("data-synced-phone") || "").trim() ||
      (wa ? parseWaPhoneFromHref(wa.getAttribute("href") || "") : "");

    e.preventDefault();

    if (phone) {
      tryWeixinRedirect(phone, wc);
      return;
    }

    openWeChatDialog(wc, "");
  });
})();
