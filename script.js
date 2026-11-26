/**
 * AMO PICKED PHOTOGRAPHY — Modern Interactive UI & Session Configurator
 */
function initAmoSite() {
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  // Light / Dark theme toggle
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.textContent = '☀';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '☾';
    }
  };

  try {
    const saved = localStorage.getItem('amo-theme');
    if (saved) applyTheme(saved);
  } catch {
    // ignore storage errors
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem('amo-theme', next);
    } catch {
      // ignore storage errors
    }
  });

  // Scroll progress & floating navbar shadow
  const onScroll = () => {
    const y = window.scrollY;
    navbar?.classList.toggle('scrolled', y > 24);
    if (scrollProgress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, (y / max) * 100) : 0;
      scrollProgress.style.width = `${pct}%`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (mobileToggle && navLinks) {
    const toggleLabel = mobileToggle.querySelector('span');
    const closeMenu = () => {
      navLinks.classList.remove('mobile-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      if (toggleLabel) toggleLabel.textContent = 'Menu';
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = navLinks.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', String(open));
      if (toggleLabel) toggleLabel.textContent = open ? 'Close' : 'Menu';
    });

    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('mobile-open') && !navbar?.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // Smooth reveal animations (also reveal elements already scrolled past)
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting || e.boundingClientRect.top < window.innerHeight) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // Portfolio filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      galleryItems.forEach((item) => {
        const cats = (item.dataset.category || '').split(' ');
        item.classList.toggle('hidden', f !== 'all' && !cats.includes(f));
      });
    });
  });

  // Smooth Lightbox with counter
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxMeta = document.getElementById('lightboxMeta');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  let currentIndex = 0;

  const visibleItems = () => galleryItems.filter((i) => !i.classList.contains('hidden'));

  const openLightbox = (idx) => {
    const items = visibleItems();
    if (!items.length) return;
    currentIndex = (idx + items.length) % items.length;
    const item = items[currentIndex];
    const img = item.querySelector('img');
    const title = item.querySelector('h4')?.textContent || '';
    const cat = item.querySelector('.gallery-overlay span')?.textContent || '';

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxTitle.textContent = title;
    lightboxMeta.textContent = `${cat} · ${currentIndex + 1} / ${items.length}`;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      openLightbox(visibleItems().indexOf(item));
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => openLightbox(currentIndex - 1));
  lightboxNext?.addEventListener('click', () => openLightbox(currentIndex + 1));
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') openLightbox(currentIndex - 1);
    if (e.key === 'ArrowRight') openLightbox(currentIndex + 1);
  });

  // Coast switcher tabs
  const coastTabs = document.querySelectorAll('.coast-tab');
  const coastPanes = document.querySelectorAll('.coast-pane');
  coastTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      coastTabs.forEach((t) => t.classList.remove('active'));
      coastPanes.forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`coast-${tab.dataset.coast}`)?.classList.add('active');
    });
  });

  // Interactive Session Configurator
  const coastChips = document.querySelectorAll('#coastChips .chip-btn');
  const coverageChips = document.querySelectorAll('#coverageChips .chip-btn');
  const shootChips = document.querySelectorAll('#shootChips .chip-btn');
  const groupSelect = document.getElementById('sessionGroup');
  const summaryText = document.getElementById('summaryText');

  const getActiveSingle = (nodes, fallback) => {
    const found = Array.from(nodes).find((n) => n.classList.contains('active'));
    return found ? found.dataset.val : fallback;
  };

  const getActiveMulti = (nodes) => {
    const vals = Array.from(nodes)
      .filter((n) => n.classList.contains('active'))
      .map((n) => n.dataset.val);
    return vals.length ? vals.join(' + ') : 'Photography';
  };

  const updateSummary = () => {
    if (!summaryText) return;
    const coast = getActiveSingle(coastChips, 'Arugam Bay');
    const shoot = getActiveSingle(shootChips, 'Surf');
    const cov = getActiveMulti(coverageChips);
    const group = groupSelect?.value || 'Individual (1 person)';
    summaryText.textContent = `${coast} · ${shoot} · ${cov} · ${group}`;
  };

  coastChips.forEach((btn) => {
    btn.addEventListener('click', () => {
      coastChips.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      updateSummary();
    });
  });

  shootChips.forEach((btn) => {
    btn.addEventListener('click', () => {
      shootChips.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      updateSummary();
    });
  });

  coverageChips.forEach((btn) => {
    btn.addEventListener('click', () => {
      const activeCount = Array.from(coverageChips).filter((b) => b.classList.contains('active')).length;
      if (btn.classList.contains('active') && activeCount === 1) return;
      btn.classList.toggle('active');
      updateSummary();
    });
  });

  groupSelect?.addEventListener('change', updateSummary);

  // Quick-select from service cards
  document.querySelectorAll('[data-select-shoot]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetShoot = btn.dataset.selectShoot;
      shootChips.forEach((c) => {
        c.classList.toggle('active', c.dataset.val === targetShoot);
      });
      if (btn.dataset.addDrone === 'true') {
        coverageChips.forEach((c) => {
          if (c.dataset.val === '4K Drone') c.classList.add('active');
        });
      }
      updateSummary();
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Seamless right-to-left infinite duplication for Google reviews marquee
  const reviewsTrack = document.getElementById('reviewsTrack');
  if (reviewsTrack) {
    reviewsTrack.innerHTML += reviewsTrack.innerHTML;
  }

  // 1) Optional automatic live Instagram feed via Behold.so (free Meta API bridge)
  // Connect @amo_picked at https://behold.so and paste your JSON feed URL below:
  const AMO_BEHOLD_FEED_URL = '';

  // 2) Or paste specific @amo_picked Instagram post/reel URLs here:
  const AMO_IG_POSTS = [];

  const igFeedGrid = document.getElementById('igFeedGrid');
  const igEmbedMount = document.getElementById('igEmbedMount');
  const igFallback = document.getElementById('igFallback');

  if (AMO_BEHOLD_FEED_URL && igFeedGrid) {
    fetch(AMO_BEHOLD_FEED_URL)
      .then((res) => res.json())
      .then((data) => {
        const posts = (data.posts || data || []).slice(0, 5);
        if (!posts.length) return;
        igFeedGrid.innerHTML = posts
          .map((p) => {
            const img = p.sizes?.medium?.mediaUrl || p.thumbnailUrl || p.mediaUrl || '';
            const caption = (p.prunedCaption || p.caption || 'View post on @amo_picked').slice(0, 72);
            const badge = p.mediaType === 'VIDEO' ? 'Reel' : p.mediaType === 'CAROUSEL_ALBUM' ? 'Album' : 'Photo';
            return `<a href="${p.permalink}" target="_blank" rel="noopener" class="ig-tile">
              <span class="ig-badge">${badge}</span>
              <img src="${img}" alt="Amo Picked Instagram post" loading="lazy" />
              <div class="ig-tile-overlay">
                <strong>${caption}</strong>
                <span>View on @amo_picked →</span>
              </div>
            </a>`;
          })
          .join('');
        igFeedGrid.style.display = 'grid';
        if (igFallback) igFallback.style.display = 'none';
      })
      .catch(() => {
        // Keep clean fallback card if feed fetch fails
      });
  } else if (igEmbedMount && AMO_IG_POSTS.length) {
    igEmbedMount.innerHTML = AMO_IG_POSTS.map((url) => {
      const clean = url.replace(/\/+$/, '');
      return `<iframe class="ig-embed-frame" src="${clean}/embed" loading="lazy" allowtransparency="true" title="Instagram post from @amo_picked"></iframe>`;
    }).join('');
    igEmbedMount.style.display = 'grid';
    if (igFallback) igFallback.style.display = 'none';
  }

  // Booking form -> WhatsApp & Copy
  const bookingForm = document.getElementById('bookingForm');
  const formFeedback = document.getElementById('formFeedback');
  const copyBriefBtn = document.getElementById('copyBriefBtn');

  const buildMessage = () => {
    const name = document.getElementById('clientName')?.value.trim() || 'Guest';
    const coast = getActiveSingle(coastChips, 'Arugam Bay');
    const cov = getActiveMulti(coverageChips);
    const shoot = getActiveSingle(shootChips, 'Surf');
    const group = groupSelect?.value || 'Individual (1 person)';
    const date = document.getElementById('sessionDate')?.value.trim() || 'Flexible dates';
    const notes = document.getElementById('sessionNotes')?.value.trim();

    return [
      'Hello Amo Picked Photography!',
      'Session Inquiry:',
      `• Name: ${name}`,
      `• Coast: ${coast}`,
      `• Shoot Type: ${shoot}`,
      `• Coverage: ${cov}`,
      `• Group: ${group}`,
      `• Preferred Date: ${date}`,
      notes ? `• Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');
  };

  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = `https://wa.me/94771437301?text=${encodeURIComponent(buildMessage())}`;
    if (formFeedback) formFeedback.textContent = 'Opening WhatsApp with your session brief...';
    window.open(url, '_blank', 'noopener');
  });

  copyBriefBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(buildMessage());
      if (formFeedback) formFeedback.textContent = 'Copied! Paste into WhatsApp or Instagram DM (@amo_picked).';
    } catch {
      if (formFeedback) formFeedback.textContent = 'Ready to message on WhatsApp (+94 77 143 7301) or @amo_picked.';
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAmoSite);
} else {
  initAmoSite();
}
