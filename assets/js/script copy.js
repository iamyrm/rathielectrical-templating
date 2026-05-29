// ===== MAIN NAVIGATION & INTERACTIONS =====
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('mainNav');
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const searchBtn = document.getElementById('searchBtn');
  const searchPanel = document.getElementById('searchPanel');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Desktop dropdowns
  const dropdownItems = document.querySelectorAll('.nav__item[id^="item-"]');
  dropdownItems.forEach(item => {
    const btn = item.querySelector('.nav__link');
    const dd = item.querySelector('.dropdown');
    if (!dd) return;
    let closeTimer;
    const open = () => {
      clearTimeout(closeTimer);
      dropdownItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.dropdown')?.classList.remove('open');
          other.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.add('open');
      dd.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      closeTimer = setTimeout(() => {
        item.classList.remove('open');
        dd.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }, 120);
    };
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);
    dd.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    dd.addEventListener('mouseleave', close);
    btn.addEventListener('click', e => {
      e.preventDefault();
      item.classList.contains('open') ? close() : open();
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#navMenu')) {
      dropdownItems.forEach(item => {
        item.classList.remove('open');
        item.querySelector('.dropdown')?.classList.remove('open');
        item.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Mobile drawer
  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  drawer.addEventListener('click', e => {
    if (e.target === drawer) {
      drawer.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Mobile submenu toggles
  ['businesses', 'investors', 'resources'].forEach(key => {
    const btn = document.getElementById(`mob-btn-${key}`);
    const wrap = document.getElementById(`mob-${key}`);
    if (btn && wrap) {
      btn.addEventListener('click', () => {
        wrap.classList.toggle('open');
        ['businesses', 'investors', 'resources'].forEach(k => {
          if (k !== key) document.getElementById(`mob-${k}`)?.classList.remove('open');
        });
      });
    }
  });

  // Search functionality
  searchBtn.addEventListener('click', e => {
    e.stopPropagation();
    searchPanel.classList.add('open');
    searchBtn.style.opacity = '0';
    searchBtn.style.pointerEvents = 'none';
    setTimeout(() => searchInput.focus(), 320);
  });

  const closeSearch = () => {
    searchPanel.classList.remove('open');
    searchInput.value = '';
    setTimeout(() => {
      searchBtn.style.opacity = '1';
      searchBtn.style.pointerEvents = 'auto';
    }, 300);
  };

  searchClose.addEventListener('click', closeSearch);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#searchWrap')) closeSearch();
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = searchInput.value.trim();
      if (q) console.log('Search:', q);
      closeSearch();
    }
  });

  // ===== SWIPER INITIALIZATION =====
  // Hero Swiper
  if (document.querySelector('.mySwiper')) {
    new Swiper(".mySwiper", {
      pagination: { el: ".swiper-pagination" },
    });
  }

  // Products Swiper (Top Products & Latest Products)
  if (document.querySelector('.productsSwiper')) {
    const productsSliders = document.querySelectorAll('.productsSwiper');
    productsSliders.forEach(slider => {
      new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true },
        pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: false },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: {
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 32 }
        },
        speed: 800,
        effect: 'slide',
        grabCursor: true,
        preventClicks: false,
        watchOverflow: true,
        autoHeight: false,
      });
    });
  }

  // ===== PARALLAX HANDLING =====
  function handleParallax() {
    const ctaSection = document.querySelector('.cta-parallax');
    if (!ctaSection) return;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
    if (isMobile || isFirefox) {
      ctaSection.style.backgroundAttachment = 'scroll';
    } else {
      ctaSection.style.backgroundAttachment = 'fixed';
    }
  }
  window.addEventListener('load', handleParallax);
  window.addEventListener('resize', handleParallax);

  // ===== FAQ ACCORDION =====
// ===== FAQ ACCORDION FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    
    questionBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Toggle current item
      item.classList.toggle('open');
      
      // Update aria-expanded for accessibility
      const isOpen = item.classList.contains('open');
      questionBtn.setAttribute('aria-expanded', isOpen);
    });
    
    // Initialize aria attributes
    questionBtn.setAttribute('aria-expanded', 'false');
  });
});

  // ===== CONTACT FORM SUBMIT HANDLER =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Form submitted');
      alert('Thank you for your message. We will get back to you soon.');
      contactForm.reset();
    });
  }
});



// about page brand carousel
// About Us Page GSAP Animations - Scroll triggered only
// ===== PARTNERS BRAND SWIPER (No navigation, no pagination) =====
if (document.querySelector('.partnersBrandSwiper')) {
  const partnersBrandSwiper = new Swiper('.partnersBrandSwiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    speed: 800,
    grabCursor: true,
    allowTouchMove: true,
  });
}