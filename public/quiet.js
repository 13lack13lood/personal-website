/* Quiet: Harry Zhu. Classic deferred script, no dependencies. */
(function () {
  "use strict";

  var root = document.documentElement;
  var mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var raf = window.requestAnimationFrame.bind(window);

  /* ------------------------------------------------------------ theme */
  var THEME_KEY = "quiet-theme";
  var THEME_COLOR = { dark: "#141312", light: "#F6F6F3" };
  var themeBtn = document.querySelector(".theme");
  var metaTheme = document.querySelector('meta[name="theme-color"]');

  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    if (metaTheme) metaTheme.setAttribute("content", THEME_COLOR[t]);
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", t === "light" ? "true" : "false");
      themeBtn.title = t === "light" ? "Switch to dark theme" : "Switch to light theme";
    }
  }
  applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* private mode: still switch */ }
      if (document.startViewTransition && !mqReduce.matches) {
        var r = themeBtn.getBoundingClientRect();
        root.style.setProperty("--vt-x", Math.round(r.left + r.width / 2) + "px");
        root.style.setProperty("--vt-y", Math.round(r.top + r.height / 2) + "px");
        document.startViewTransition(function () { applyTheme(next); });
      } else {
        applyTheme(next);
      }
    });
  }

  /* -------------------------------------------- nav: bar + scrollspy */
  var nav = document.querySelector(".nav");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var ind = document.querySelector(".nav-ind");
  var activeLink = null;
  var scrolledQueued = false;

  function updateScrolled() {
    scrolledQueued = false;
    nav.classList.toggle("is-scrolled", window.scrollY > 16);
  }
  window.addEventListener("scroll", function () {
    if (!scrolledQueued) { scrolledQueued = true; raf(updateScrolled); }
  }, { passive: true });
  updateScrolled();

  function placeIndicator() {
    if (!ind) return;
    if (!activeLink) { ind.style.opacity = "0"; return; }
    var list = activeLink.closest(".nav-links").getBoundingClientRect();
    var r = activeLink.getBoundingClientRect();
    var pad = parseFloat(getComputedStyle(activeLink).paddingLeft) || 0;
    var w = Math.max(1, r.width - pad * 2);
    ind.style.transform = "translateX(" + (r.left - list.left + pad).toFixed(1) + "px) scaleX(" + w.toFixed(1) + ")";
    ind.style.opacity = "1";
  }
  function setActive(link) {
    if (link === activeLink) return;
    if (activeLink) activeLink.removeAttribute("aria-current");
    activeLink = link;
    if (link) link.setAttribute("aria-current", "true");
    placeIndicator();
  }

  if ("IntersectionObserver" in window && navLinks.length) {
    var targets = navLinks.map(function (a) { return document.getElementById(a.hash.slice(1)); });
    var inBand = new Map();
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { inBand.set(e.target, e.isIntersecting); });
      var hit = null;
      targets.forEach(function (t, i) { if (t && inBand.get(t)) hit = navLinks[i]; });
      setActive(hit);
    }, { rootMargin: "-38% 0px -58% 0px" });
    targets.forEach(function (t) { if (t) spy.observe(t); });
  }
  window.addEventListener("resize", function () { raf(placeIndicator); }, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeIndicator);

  /* ------------------------------------------------ experience details */
  var jobs = document.querySelector(".jobs");
  if (jobs) {
    var toggles = Array.prototype.slice.call(jobs.querySelectorAll(".job-toggle"));
    var allBtn = document.querySelector(".expand-all");

    var isOpen = function (b) { return b.getAttribute("aria-expanded") === "true"; };
    var setOpen = function (b, open) {
      var panel = document.getElementById(b.getAttribute("aria-controls"));
      b.setAttribute("aria-expanded", open ? "true" : "false");
      b.closest(".job").classList.toggle("is-open", open);
      if (panel) {
        if (open) panel.removeAttribute("inert");
        else panel.setAttribute("inert", "");
      }
    };
    var syncAll = function () {
      if (!allBtn) return;
      var every = toggles.every(isOpen);
      allBtn.textContent = every ? "Collapse all" : "Expand all";
      allBtn.setAttribute("aria-expanded", every ? "true" : "false");
    };

    jobs.classList.add("is-enhanced");
    toggles.forEach(function (b) {
      b.hidden = false;
      setOpen(b, false);
      b.addEventListener("click", function () { setOpen(b, !isOpen(b)); syncAll(); });
    });
    if (allBtn) {
      allBtn.hidden = false;
      allBtn.addEventListener("click", function () {
        var open = !toggles.every(isOpen);
        toggles.forEach(function (b) { setOpen(b, open); });
        syncAll();
      });
    }
    syncAll();
    /* enable the height transition only after the collapsed state has painted */
    raf(function () { raf(function () { jobs.classList.add("is-animated"); }); });
  }

  /* ------------------------------------------------- project figures */
  /* Each project's figure (results chart + how-it-works diagram) is always in
     the page. While it's on screen the chart loops in CSS and the diagram's
     build-up replays on the chart's beat; off screen or in a hidden tab, both
     rest. Reduced motion (or no IntersectionObserver): finished, static figures. */
  var figs = Array.prototype.slice.call(document.querySelectorAll(".fig"));
  if (figs.length && !mqReduce.matches && "IntersectionObserver" in window) {
    var replays = new Map();
    var seen = new Map();

    figs.forEach(function (fig) {
      var viz = fig.querySelector(".viz");
      var beat = fig.querySelector(".row--slow .row-fill, .seg--model .seg-fill");
      var replay = function () {
        if (!viz) return;
        viz.classList.remove("is-armed", "is-in");
        void viz.offsetWidth; /* restart the build-up from its first frame */
        viz.classList.add("is-armed", "is-in");
      };
      fig.classList.add("is-armed");
      if (viz) viz.classList.add("is-armed");
      if (beat) beat.addEventListener("animationiteration", replay);
      replays.set(fig, replay);
    });

    var setOn = function (fig, on) {
      if (fig.classList.contains("is-on") === on) return;
      fig.classList.toggle("is-on", on);
      if (on) replays.get(fig)();
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        seen.set(e.target, e.isIntersecting);
        setOn(e.target, e.isIntersecting && !document.hidden);
      });
    }, { threshold: 0.35 });
    figs.forEach(function (f) { io.observe(f); });
    document.addEventListener("visibilitychange", function () {
      figs.forEach(function (f) { setOn(f, !!seen.get(f) && !document.hidden); });
    });
  }
})();
