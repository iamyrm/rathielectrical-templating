// ===== GSAP SCROLL-TRIGGERED ANIMATIONS =====
document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // ===== FADE UP ANIMATIONS =====
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

  // ===== PRODUCT CARDS ANIMATIONS =====
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

  // ===== CTA SECTION ANIMATIONS =====
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

  // ===== CONTACT SECTION ANIMATIONS =====
  // Contact Info Cards
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

  // Contact Form
  gsap.fromTo(
    ".contact-form-wrapper",
    { opacity: 0, x: 40 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    },
  );

  // ===== FOOTER ANIMATIONS =====
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

  // ===== HERO SECTION ANIMATION =====
  gsap.fromTo(
    ".swiper-slide img",
    { scale: 1.1, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
    },
  );

  // ===== HOVER ANIMATIONS =====
  // Quality Cards Hover
  const cards = document.querySelectorAll(
    ".quality-card, .product-card, .contact-info__card",
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
    });
  });

  // Button Hover Effects
  const btns = document.querySelectorAll(
    ".cta-parallax__btn, .tradition-section__btn, .contact-form__btn, .nav__link--cta",
  );
  btns.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
  });

  // ===== PRODUCT CARDS HOVER =====
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    const image = card.querySelector(".product-card__image img");
    card.addEventListener("mouseenter", () => {
      gsap.to(image, { scale: 1.1, duration: 0.4, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
    });
  });

  // ===== ROTATING IMAGE ANIMATION =====
  const rotatingImage = document.querySelector(".rotating-image");
  if (rotatingImage) {
    gsap.to(rotatingImage, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }

  // ===== SMOOTH SCROLL BEHAVIOR =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ===== PRODUCT SLIDERS INITIALIZATION =====
  // Hero Swiper
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      pagination: { el: ".swiper-pagination" },
      autoplay: { delay: 5000, disableOnInteraction: false },
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 1000,
    });
  }

  // Top Products Slider
  const topProductsSlider = document.querySelector(
    ".products-section:not(.latest-products-section) .productsSwiper",
  );
  if (topProductsSlider) {
    new Swiper(topProductsSlider, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: topProductsSlider
          .closest(".products-section")
          .querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: topProductsSlider
          .closest(".products-section")
          .querySelector(".swiper-button-next"),
        prevEl: topProductsSlider
          .closest(".products-section")
          .querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 28 },
        1280: { slidesPerView: 4, spaceBetween: 32 },
      },
      speed: 800,
      grabCursor: true,
    });
  }

  // Latest Products Slider
  const latestProductsSlider = document.querySelector(
    ".latest-products-section .productsSwiper",
  );
  if (latestProductsSlider) {
    new Swiper(latestProductsSlider, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: latestProductsSlider
          .closest(".latest-products-section")
          .querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: latestProductsSlider
          .closest(".latest-products-section")
          .querySelector(".swiper-button-next"),
        prevEl: latestProductsSlider
          .closest(".latest-products-section")
          .querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 28 },
        1280: { slidesPerView: 4, spaceBetween: 32 },
      },
      speed: 800,
      grabCursor: true,
    });
  }

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", function () {
      item.classList.toggle("open");
      const expanded = item.classList.contains("open");
      questionBtn.setAttribute("aria-expanded", expanded);
    });
    questionBtn.setAttribute("aria-expanded", "false");
  });

  // ===== CONTACT FORM SUBMIT =====
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message. We will get back to you soon.");
      contactForm.reset();
    });
  }
});

// -------------prod listing---------
// Product Listing Page - Complete JavaScript with GSAP Animations

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Check if GSAP is available
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Animate title section
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

    // Animate filter buttons
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

    // Animate product cards on scroll
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

    // Animate pagination
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
  }

  // // Filter functionality with animation
  // const filterBtns = document.querySelectorAll('.filter-btn');
  // const productCards = document.querySelectorAll('.products-listing-grid .product-card');

  // filterBtns.forEach(btn => {
  //   btn.addEventListener('click', function() {
  //     // Update active state
  //     filterBtns.forEach(b => b.classList.remove('active'));
  //     this.classList.add('active');

  //     const filter = this.getAttribute('data-filter');

  //     // Animate filter transition
  //     if (typeof gsap !== 'undefined') {
  //       gsap.to(productCards, {
  //         opacity: 0,
  //         duration: 0.3,
  //         stagger: 0.02,
  //         onComplete: () => {
  //           filterProducts(filter);
  //         }
  //       });
  //     } else {
  //       filterProducts(filter);
  //     }
  //   });
  // });

  // function filterProducts(filter) {
  //   let visibleCount = 0;

  //   productCards.forEach(product => {
  //     const category = product.getAttribute('data-category');

  //     if (filter === 'all' || category === filter) {
  //       product.style.display = 'block';
  //       visibleCount++;
  //       if (typeof gsap !== 'undefined') {
  //         gsap.to(product, { opacity: 1, duration: 0.3, delay: 0.05 });
  //       } else {
  //         product.style.opacity = '1';
  //       }
  //     } else {
  //       product.style.display = 'none';
  //     }
  //   });

  //   // Update pagination info text
  //   const paginationInfo = document.querySelector('.pagination-info');
  //   if (paginationInfo) {
  //     paginationInfo.textContent = `Showing 1-${Math.min(visibleCount, 8)} of ${visibleCount} products`;
  //   }
  // }

  // // Pagination click handlers (UI only - no backend functionality)
  // const paginationLinks = document.querySelectorAll('.pagination-num, .pagination-next, .pagination-prev');
  // paginationLinks.forEach(link => {
  //   link.addEventListener('click', function(e) {
  //     e.preventDefault();

  //     // Remove active class from all pagination numbers
  //     document.querySelectorAll('.pagination-num').forEach(num => {
  //       num.classList.remove('active');
  //     });

  //     // Add active class to clicked number
  //     if (this.classList.contains('pagination-num')) {
  //       this.classList.add('active');
  //     }

  //     // Scroll to top of products section smoothly
  //     const productsSection = document.querySelector('.listing-products-section');
  //     if (productsSection) {
  //       productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }

  //     // Here you would normally fetch new products for the selected page
  //     console.log('Page changed to:', this.textContent);
  //   });
  // });

  // Product card hover effects are already handled by CSS
  // No additional GSAP hover animations needed
});

// product details
// Product Detail Page - Complete JavaScript with GSAP Animations

document.addEventListener("DOMContentLoaded", function () {
  // ===== GSAP ANIMATIONS =====
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Breadcrumb animation
    gsap.fromTo(
      ".breadcrumb",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    );

    // Product Gallery animation
    gsap.fromTo(
      ".product-gallery",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2 },
    );

    // Product Info animation
    gsap.fromTo(
      ".product-info-detail",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.3 },
    );

    // Specifications section scroll animation
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

    // Description tabs animation
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

    // Description content animation
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

    // Related products cards animation
    gsap.fromTo(
      ".related-grid .product-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".related-products",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Enquiry section animation
    gsap.fromTo(
      ".enquiry-wrapper",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(0.3)",
        scrollTrigger: {
          trigger: ".enquiry-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  // ===== THUMBNAIL GALLERY =====
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.querySelector(".main-image img");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      // Update active state
      thumbnails.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Update main image
      const newImageSrc = this.querySelector("img").src;
      if (mainImage) {
        if (typeof gsap !== "undefined") {
          gsap.to(mainImage, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              mainImage.src = newImageSrc;
              gsap.to(mainImage, { opacity: 1, duration: 0.3 });
            },
          });
        } else {
          mainImage.src = newImageSrc;
        }
      }
    });
  });

  // ===== DESCRIPTION TABS =====
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  // Ensure Overview tab is active by default and content is visible
  // This is already set in HTML, but we verify and set styles
  if (tabPanels.length > 0) {
    // Make sure only the active panel is visible
    tabPanels.forEach((panel) => {
      if (panel.classList.contains("active")) {
        panel.style.display = "block";
        panel.style.opacity = "1";
      } else {
        panel.style.display = "none";
      }
    });
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Update active tab button
      tabBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Update active panel with animation
      tabPanels.forEach((panel) => {
        if (panel.id === tabId) {
          if (typeof gsap !== "undefined") {
            // Hide current panel with fade out
            const currentActive = document.querySelector(".tab-panel.active");
            if (currentActive && currentActive !== panel) {
              gsap.to(currentActive, {
                opacity: 0,
                duration: 0.15,
                onComplete: () => {
                  currentActive.classList.remove("active");
                  currentActive.style.display = "none";

                  // Show new panel
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
            // Fallback without GSAP
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
});

// About page
// About Us Page GSAP Animations
// About Us Page GSAP Animations - Scroll triggered only

document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.fromTo(
      ".about-hero-content",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    // Founder Section Animation
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

    // Timeline Items Animation
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
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

    // Timeline items even - from right side
    gsap.fromTo(
      ".timeline-item:nth-child(even)",
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
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

    // Diversification Cards Animation
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

    // Partner Cards Animation
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

    // Value Cards Animation
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

    // Leadership Cards Animation
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

    // Global Section Animation
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
  }
});

// FAQ Section Codes

// FAQ Page - GSAP Animations & Accordion

document.addEventListener("DOMContentLoaded", function () {
  // ===== GSAP ANIMATIONS =====
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Accordion Items Stagger Animation
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

    // Contact Section Animation
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

  // ===== FAQ ACCORDION FUNCTIONALITY =====
  const faqItems = document.querySelectorAll(".faq-page-accordion-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-page-accordion-question");

    questionBtn.addEventListener("click", function (e) {
      e.preventDefault();
      item.classList.toggle("open");

      const isOpen = item.classList.contains("open");
      questionBtn.setAttribute("aria-expanded", isOpen);
    });

    questionBtn.setAttribute("aria-expanded", "false");
  });
});

// Privacy Policy Page - GSAP Animations

document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.fromTo(
      ".privacy-page-hero-content",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    // Intro Text Animation
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

    // Content Blocks Stagger Animation
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
  }
});
