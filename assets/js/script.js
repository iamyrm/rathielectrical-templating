// ============================================================
// MAIN NAVIGATION & INTERACTIONS
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  // ----- Navbar scroll effect -----
  const nav = document.getElementById("mainNav");
  if (nav) {
    window.addEventListener(
      "scroll",
      () => {
        nav.classList.toggle("scrolled", window.scrollY > 10);
      },
      { passive: true },
    );
  }

  // ----- Desktop dropdowns -----
  const dropdownItems = document.querySelectorAll('.nav__item[id^="item-"]');
  dropdownItems.forEach((item) => {
    const btn = item.querySelector(".nav__link");
    const dd = item.querySelector(".dropdown");
    if (!dd) return;
    let closeTimer;
    const open = () => {
      clearTimeout(closeTimer);
      dropdownItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".dropdown")?.classList.remove("open");
          other
            .querySelector("[aria-expanded]")
            ?.setAttribute("aria-expanded", "false");
        }
      });
      item.classList.add("open");
      dd.classList.add("open");
      if (btn) btn.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      closeTimer = setTimeout(() => {
        item.classList.remove("open");
        dd.classList.remove("open");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }, 120);
    };
    item.addEventListener("mouseenter", open);
    item.addEventListener("mouseleave", close);
    dd.addEventListener("mouseenter", () => clearTimeout(closeTimer));
    dd.addEventListener("mouseleave", close);
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        item.classList.contains("open") ? close() : open();
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#navMenu")) {
      dropdownItems.forEach((item) => {
        item.classList.remove("open");
        item.querySelector(".dropdown")?.classList.remove("open");
        item
          .querySelector("[aria-expanded]")
          ?.setAttribute("aria-expanded", "false");
      });
    }
  });

  // ----- Mobile drawer -----
  const hamburger = document.getElementById("hamburger");
  const drawer = document.getElementById("drawer");
  if (hamburger && drawer) {
    hamburger.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) {
        drawer.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  // ----- Mobile submenu toggles -----
  ["businesses", "investors", "resources"].forEach((key) => {
    const btn = document.getElementById(`mob-btn-${key}`);
    const wrap = document.getElementById(`mob-${key}`);
    if (btn && wrap) {
      btn.addEventListener("click", () => {
        wrap.classList.toggle("open");
        ["businesses", "investors", "resources"].forEach((k) => {
          if (k !== key)
            document.getElementById(`mob-${k}`)?.classList.remove("open");
        });
      });
    }
  });

  // ----- Search functionality -----
  const searchBtn = document.getElementById("searchBtn");
  const searchPanel = document.getElementById("searchPanel");
  const searchClose = document.getElementById("searchClose");
  const searchInput = document.getElementById("searchInput");

  if (searchBtn && searchPanel && searchClose && searchInput) {
    const closeSearch = () => {
      searchPanel.classList.remove("open");
      searchInput.value = "";
      setTimeout(() => {
        if (searchBtn) {
          searchBtn.style.opacity = "1";
          searchBtn.style.pointerEvents = "auto";
        }
      }, 300);
    };

    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      searchPanel.classList.add("open");
      searchBtn.style.opacity = "0";
      searchBtn.style.pointerEvents = "none";
      setTimeout(() => searchInput.focus(), 320);
    });

    searchClose.addEventListener("click", closeSearch);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeSearch();
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#searchWrap")) closeSearch();
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const q = searchInput.value.trim();
        if (q) console.log("Search:", q);
        closeSearch();
      }
    });
  }

  // ----- Parallax handling -----
  const handleParallax = () => {
    const ctaSection = document.querySelector(".cta-parallax");
    if (!ctaSection) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
    if (isMobile || isFirefox) {
      ctaSection.style.backgroundAttachment = "scroll";
    } else {
      ctaSection.style.backgroundAttachment = "fixed";
    }
  };
  window.addEventListener("load", handleParallax);
  window.addEventListener("resize", handleParallax);

  // ----- Contact form submit handler -----
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Form submitted");
      alert("Thank you for your message. We will get back to you soon.");
      contactForm.reset();
    });
  }
});

// ============================================================
// SWIPER INITIALIZATION
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  // Hero Swiper
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: false,
      },
      autoplay: { delay: 5000, disableOnInteraction: false },
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 1000,
    });
  }

  // Products Swiper (Top Products & Latest Products)
  if (document.querySelector(".productsSwiper")) {
    const productsSliders = document.querySelectorAll(".productsSwiper");
    productsSliders.forEach((slider) => {
      new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: slider
            .closest(".products-section, .latest-products-section")
            ?.querySelector(".swiper-pagination"),
          clickable: true,
          dynamicBullets: false,
        },
        navigation: {
          nextEl: slider
            .closest(".products-section, .latest-products-section")
            ?.querySelector(".swiper-button-next"),
          prevEl: slider
            .closest(".products-section, .latest-products-section")
            ?.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 32 },
        },
        speed: 800,
        effect: "slide",
        grabCursor: true,
        preventClicks: false,
        watchOverflow: true,
        autoHeight: false,
      });
    });
  }

  // Partners Brand Swiper (About page)
  if (document.querySelector(".partnersBrandSwiper")) {
    new Swiper(".partnersBrandSwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 25 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
        1280: { slidesPerView: 5, spaceBetween: 30 },
      },
      speed: 800,
      grabCursor: true,
      allowTouchMove: true,
    });
  }
});

// ============================================================
// GSAP CORE & SCROLLTRIGGER SETUP
// ============================================================
if (typeof gsap !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================================
// GSAP ANIMATIONS (Homepage & Global Elements)
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined") return;

  // ----- FADE UP ANIMATIONS -----
  // Quality Section Cards
  gsap.fromTo(
    ".quality-card",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".quality-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Tradition Section Content
  gsap.fromTo(
    ".tradition-section__content",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tradition-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Tradition Section Image
  gsap.fromTo(
    ".tradition-section__image-wrapper",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tradition-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Feature Cards Staggered
  gsap.fromTo(
    ".feature-card",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(0.4)",
      scrollTrigger: {
        trigger: ".tradition-features",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Top Products Cards
  gsap.fromTo(
    ".products-section:not(.latest-products-section) .product-card",
    { opacity: 0, y: 40, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".products-section:not(.latest-products-section)",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Latest Products Cards
  gsap.fromTo(
    ".latest-products-section .product-card",
    { opacity: 0, y: 40, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".latest-products-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // CTA Section Animations
  gsap.fromTo(
    ".cta-parallax__left",
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-parallax",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    },
  );
  gsap.fromTo(
    ".cta-parallax__right",
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-parallax",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Contact Section Animations
  gsap.fromTo(
    ".contact-info__card",
    { opacity: 0, x: -40 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    },
  );

  gsap.fromTo(
    ".contact-form-wrapper",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Footer Animations
  gsap.fromTo(
    ".footer__col",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // FAQ Items Staggered
  gsap.fromTo(
    ".faq-item",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer-faq",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Hero Section Animation
  gsap.fromTo(
    ".swiper-slide img",
    { scale: 1.1, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
  );

  // ----- ROTATING IMAGE ANIMATION -----
  const rotatingImage = document.querySelector(".rotating-image");
  if (rotatingImage) {
    gsap.to(rotatingImage, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }

  // ----- SMOOTH SCROLL BEHAVIOR -----
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // ===== FAQ ACCORDION (Global) =====
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (questionBtn) {
      questionBtn.addEventListener("click", function () {
        item.classList.toggle("open");
        questionBtn.setAttribute(
          "aria-expanded",
          item.classList.contains("open"),
        );
      });
      questionBtn.setAttribute("aria-expanded", "false");
    }
  });
});

// ============================================================
// HOVER ANIMATIONS (GSAP)
// ============================================================
if (typeof gsap !== "undefined") {
  // Quality Cards, Product Cards, Contact Cards Hover
  const hoverCards = document.querySelectorAll(
    ".quality-card, .product-card, .contact-info__card",
  );
  hoverCards.forEach((card) => {
    card.addEventListener("mouseenter", () =>
      gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" }),
    );
    card.addEventListener("mouseleave", () =>
      gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" }),
    );
  });

  // Button Hover Effects
  const hoverBtns = document.querySelectorAll(
    ".cta-parallax__btn, .tradition-section__btn, .contact-form__btn, .nav__link--cta",
  );
  hoverBtns.forEach((btn) => {
    btn.addEventListener("mouseenter", () =>
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power2.out" }),
    );
    btn.addEventListener("mouseleave", () =>
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" }),
    );
  });

  // Product Card Image Hover
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    const image = card.querySelector(".product-card__image img");
    if (image) {
      card.addEventListener("mouseenter", () =>
        gsap.to(image, { scale: 1.1, duration: 0.4, ease: "power2.out" }),
      );
      card.addEventListener("mouseleave", () =>
        gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" }),
      );
    }
  });
}

// ============================================================
// PRODUCT LISTING PAGE
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined") return;

  // Title animations
  gsap.fromTo(
    ".listing-title",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  );
  gsap.fromTo(
    ".listing-subtitle",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" },
  );

  // Filter buttons animation
  gsap.fromTo(
    ".filter-btn",
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.08,
      delay: 0.5,
      ease: "back.out(0.4)",
    },
  );

  // Product cards scroll animation
  gsap.fromTo(
    ".products-listing-grid .product-card",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".products-listing-grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Pagination animation
  gsap.fromTo(
    ".listing-pagination",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".listing-pagination",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    },
  );
});
// ============================================================
// PRODUCT DETAIL PAGE
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap !== "undefined") {
    // Product Gallery animation (keep horizontal - it's fine)
    gsap.fromTo(
      ".product-gallery",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2 },
    );

    // Product Info animation - FIXED (changed from x to y)
    gsap.fromTo(
      ".product-info-detail",
      { opacity: 0, y: 50 }, // ← FIXED
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }, // ← FIXED
    );

    // Specifications section
    gsap.fromTo(
      ".specs-table-wrapper",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".specifications-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Description tabs
    gsap.fromTo(
      ".description-tabs",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".description-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Description content
    gsap.fromTo(
      ".tab-panel.active",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".description-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  // ----- Thumbnail gallery -----
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.querySelector(".main-image img");
  if (thumbnails.length && mainImage) {
    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        thumbnails.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
        const newImageSrc = this.querySelector("img")?.src;
        if (newImageSrc && typeof gsap !== "undefined") {
          gsap.to(mainImage, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              mainImage.src = newImageSrc;
              gsap.to(mainImage, { opacity: 1, duration: 0.3 });
            },
          });
        } else if (newImageSrc) {
          mainImage.src = newImageSrc;
        }
      });
    });
  }

  // ----- Description Tabs -----
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  if (tabBtns.length && tabPanels.length) {
    // Ensure initial state
    tabPanels.forEach((panel) => {
      panel.style.display = panel.classList.contains("active")
        ? "block"
        : "none";
    });

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab");
        tabBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        tabPanels.forEach((panel) => {
          if (panel.id === tabId) {
            if (typeof gsap !== "undefined") {
              const currentActive = document.querySelector(".tab-panel.active");
              if (currentActive && currentActive !== panel) {
                gsap.to(currentActive, {
                  opacity: 0,
                  duration: 0.15,
                  onComplete: () => {
                    currentActive.classList.remove("active");
                    currentActive.style.display = "none";
                    panel.classList.add("active");
                    panel.style.display = "block";
                    gsap.fromTo(
                      panel,
                      { opacity: 0, y: 10 },
                      { opacity: 1, y: 0, duration: 0.3 },
                    );
                  },
                });
              } else if (!currentActive) {
                panel.classList.add("active");
                panel.style.display = "block";
                gsap.fromTo(
                  panel,
                  { opacity: 0, y: 10 },
                  { opacity: 1, y: 0, duration: 0.3 },
                );
              }
            } else {
              tabPanels.forEach((p) => {
                p.classList.remove("active");
                p.style.display = "none";
              });
              panel.classList.add("active");
              panel.style.display = "block";
            }
          }
        });
      });
    });
  }
});

// ============================================================
// ABOUT US PAGE
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined") return;

  // Hero Section
  gsap.fromTo(
    ".about-hero-content",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  );

  // Founder Section
  gsap.fromTo(
    ".founder-content",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".founder-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // // Timeline Items
  // gsap.fromTo(
  //   ".timeline-item",
  //   { opacity: 0, y: -40 },
  //   {
  //     opacity: 1,
  //     x: 0,
  //     duration: 0.7,
  //     stagger: 0.2,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".journey-section",
  //       start: "top 75%",
  //       toggleActions: "play none none reverse",
  //     },
  //   },
  // );
  // gsap.fromTo(
  //   ".timeline-item:nth-child(even)",
  //   { opacity: 0, y: 40 },
  //   {
  //     opacity: 1,
  //     x: 0,
  //     duration: 0.7,
  //     stagger: 0.2,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".journey-section",
  //       start: "top 75%",
  //       toggleActions: "play none none reverse",
  //     },
  //   },
  // );

  // Timeline Items
  gsap.fromTo(
    ".timeline-item",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".journey-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Diversification Cards
  gsap.fromTo(
    ".diversification-card",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".diversification-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Partner Cards (if they exist)
  gsap.fromTo(
    ".partner-card",
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".partnerships-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Value Cards
  gsap.fromTo(
    ".value-card",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".values-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Leadership Cards
  gsap.fromTo(
    ".leader-card",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".leadership-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Global Section
  gsap.fromTo(
    ".global-content",
    { opacity: 0, scale: 0.95 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".global-section",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    },
  );
});

// ============================================================
// FAQ PAGE
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap !== "undefined") {
    // Accordion items stagger
    gsap.fromTo(
      ".faq-page-accordion-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-page-accordion",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Contact section animation
    gsap.fromTo(
      ".faq-page-contact",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-page-contact",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  // FAQ Accordion functionality
  const faqPageItems = document.querySelectorAll(".faq-page-accordion-item");
  faqPageItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-page-accordion-question");
    if (questionBtn) {
      questionBtn.addEventListener("click", function (e) {
        e.preventDefault();
        item.classList.toggle("open");
        questionBtn.setAttribute(
          "aria-expanded",
          item.classList.contains("open"),
        );
      });
      questionBtn.setAttribute("aria-expanded", "false");
    }
  });
});

// ============================================================
// PRIVACY POLICY PAGE
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined") return;

  // Hero section
  gsap.fromTo(
    ".privacy-page-hero-content",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  );

  // Intro text
  gsap.fromTo(
    ".privacy-page-intro",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".privacy-page-content",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // Content blocks stagger
  gsap.fromTo(
    ".privacy-page-block",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".privacy-page-content",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    },
  );
});
// ============================================================
// DEALER SEARCH PAGE
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.fromTo(
      ".dealers-page-hero-content",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    // Search Section Animation
    gsap.fromTo(
      ".dealers-search-wrapper",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      },
    );

    // Dealer Cards Stagger Animation
    gsap.fromTo(
      ".dealer-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".dealers-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }
});

// ============================================================
// TERMS AND CONDITIONS PAGE
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.fromTo(
      ".terms-page-hero-content",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    // Intro Text Animation
    gsap.fromTo(
      ".terms-page-intro",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".terms-page-content",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Warning Text Animation
    gsap.fromTo(
      ".terms-page-warning",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".terms-page-content",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Content Blocks Stagger Animation
    gsap.fromTo(
      ".terms-page-block",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".terms-page-content",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }
});
