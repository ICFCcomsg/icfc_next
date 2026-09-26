/**
 * Matches index.html + main.js: #rs-sticky-header gets .active when scrollTop > 200.
 * main.js only updates on "scroll" events; sync once after load for hash/deep-link scroll.
 */
(function () {
  function sync() {
    if (typeof jQuery === "undefined") return;
    jQuery(window).trigger("scroll");
  }
  if (typeof jQuery !== "undefined") {
    jQuery(sync);
    jQuery(window).on("load", sync);
  } else {
    window.addEventListener("load", sync);
  }
})();
