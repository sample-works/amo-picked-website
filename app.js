(function () {
  const mount = document.getElementById('amo-app');
  if (!mount) return;
  mount.innerHTML = "<div class=\"scroll-progress\" id=\"scrollProgress\" aria-hidden=\"true\"></div>\n\n  <!-- ======================================================================\n       Floating Glass Header\n       ====================================================================== -->\n  <div class=\"navbar-wrap\">\n    <header class=\"navbar\" id=\"navbar\">\n      <div class=\"nav-inner\">\n        <a href=\"#top\" class=\"brand\" aria-label=\"Amo Picked Photography Home\">\n          <div class=\"brand-dot\" aria-hidden=\"true\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\">\n              <path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\" />\n              <circle cx=\"12\" cy=\"13\" r=\"4\" />\n            </svg>\n          </div>\n          <div class=\"brand-text\">\n            <span class=\"brand-name\">Amo Picked</span>\n            <span class=\"brand-sub\">Arugam Bay \u00b7 Weligama</span>\n          </div>\n        </a>\n\n        <nav aria-label=\"Primary Navigation\">\n          <ul class=\"nav-links\" id=\"navLinks\">\n            <li><a href=\"#services\">Services</a></li>\n            <li><a href=\"#portfolio\">Portfolio</a></li>\n            <li><a href=\"#coasts\">Locations</a></li>\n            <li><a href=\"#book\">Book Session</a></li>\n          </ul>\n        </nav>\n\n        <div class=\"nav-actions\">\n          <button class=\"icon-pill\" id=\"themeToggle\" type=\"button\" aria-label=\"Toggle dark mode\" title=\"Toggle Light / Dark mode\">\n            <span id=\"themeIcon\" aria-hidden=\"true\">\u263e</span>\n          </button>\n          <a href=\"#book\" class=\"btn btn-primary btn-sm\">Book Now</a>\n          <button class=\"mobile-toggle\" id=\"mobileToggle\" aria-label=\"Toggle Menu\" aria-expanded=\"false\">\n            Menu\n          </button>\n        </div>\n      </div>\n    </header>\n  </div>\n\n  <main id=\"top\">\n    <!-- ====================================================================\n         Hero Section\n         ==================================================================== -->\n    <section class=\"hero\">\n      <div class=\"container hero-grid\">\n        <div>\n          <div class=\"hero-badges\">\n            <span class=\"badge-clean\">\n              <span class=\"star-accent\" aria-hidden=\"true\">\u2605</span>\n              4.9 \u00b7 58 Google Reviews\n            </span>\n            <span class=\"badge-clean\">Open 24 Hours</span>\n          </div>\n\n          <h1 class=\"hero-title\">\n            Photo, Video &amp; Drone in <span>Arugam Bay &amp; Weligama.</span>\n          </h1>\n\n          <p class=\"hero-desc\">\n            Over 8 years capturing surfing, coastal travel, camping, wildlife safaris, and events across Sri Lanka for individuals and groups worldwide.\n          </p>\n\n          <div class=\"hero-cta\">\n            <a href=\"#book\" class=\"btn btn-primary\">Build Your Session \u2192</a>\n            <a href=\"tel:+94771437301\" class=\"btn btn-soft\">Call +94 77 143 7301</a>\n          </div>\n\n          <div class=\"hero-stats\">\n            <div class=\"stat-box\">\n              <strong>8+ Years</strong>\n              <span>Arugam Bay Experience</span>\n            </div>\n            <div class=\"stat-box\">\n              <strong>4.9 \u2605</strong>\n              <span>58 Google Reviews</span>\n            </div>\n            <div class=\"stat-box\">\n              <strong>2 Coasts</strong>\n              <span>East &amp; South Sri Lanka</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"hero-visual\">\n          <div class=\"hero-card\">\n            <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/hero-surf.jpg\" alt=\"Surfer carving across a wave \u2014 surf action photography\" />\n            <div class=\"hero-float-bar\">\n              <div>\n                <strong>Amo Picked Photography</strong>\n                <span>349 Main Street, Arugam Bay 32500</span>\n              </div>\n              <a href=\"#portfolio\" class=\"btn btn-primary btn-sm\">Explore Work</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- ====================================================================\n         Services\n         ==================================================================== -->\n    <section class=\"section section-soft\" id=\"services\">\n      <div class=\"container\">\n        <div class=\"section-top reveal\">\n          <div>\n            <span class=\"pill-tag\">What We Cover</span>\n            <h2 class=\"section-title\">Photo, Video &amp; Drone Services</h2>\n          </div>\n          <p class=\"section-sub\">\n            Available for solo travelers, couples, surf camps, and large events. Pick any service below to pre-fill your booking.\n          </p>\n        </div>\n\n        <div class=\"services-grid\">\n          <article class=\"service-card reveal\">\n            <div class=\"service-media\">\n              <span class=\"service-chip\">Surf</span>\n              <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/hero-surf.jpg\" alt=\"Surf photography and wave action\" />\n            </div>\n            <div class=\"service-body\">\n              <div>\n                <h3>Surf Photo &amp; Video</h3>\n                <p>Shoreline and lineup coverage for sunrise and afternoon swells\u2014built for surfers, learners, and surf camps.</p>\n              </div>\n              <div class=\"service-footer\">\n                <span class=\"service-meta\">Arugam Bay &amp; Weligama</span>\n                <button class=\"text-action\" data-select-shoot=\"Surf\">Select \u2192</button>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"service-card reveal\">\n            <div class=\"service-media\">\n              <span class=\"service-chip\">4K Aerial</span>\n              <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/drone-bay.jpg\" alt=\"Arugam Bay coastline view\" />\n            </div>\n            <div class=\"service-body\">\n              <div>\n                <h3>Aerial Drone Coverage</h3>\n                <p>High-resolution coastal, reef, and villa drone photo &amp; video coverage across the east and south coasts.</p>\n              </div>\n              <div class=\"service-footer\">\n                <span class=\"service-meta\">Photo &amp; 4K Video</span>\n                <button class=\"text-action\" data-select-shoot=\"Travel &amp; Lifestyle\" data-add-drone=\"true\">Select \u2192</button>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"service-card reveal\">\n            <div class=\"service-media\">\n              <span class=\"service-chip\">Lifestyle</span>\n              <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/lifestyle-beach.jpg\" alt=\"Sri Lankan rocky coast and lighthouse\" />\n            </div>\n            <div class=\"service-body\">\n              <div>\n                <h3>Travel &amp; Lifestyle</h3>\n                <p>Natural, relaxed beach and town shoots for solo travelers, couples, retreats, and coastal brands.</p>\n              </div>\n              <div class=\"service-footer\">\n                <span class=\"service-meta\">Solo &amp; Groups</span>\n                <button class=\"text-action\" data-select-shoot=\"Travel &amp; Lifestyle\">Select \u2192</button>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"service-card reveal\">\n            <div class=\"service-media\">\n              <span class=\"service-chip\">Expeditions</span>\n              <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/safari-camp.jpg\" alt=\"Elephants in Sri Lanka national park safari\" />\n            </div>\n            <div class=\"service-body\">\n              <div>\n                <h3>Safari &amp; Camping</h3>\n                <p>Documentary photography and video for Yala/Kumana safaris and overnight coastal camping trips.</p>\n              </div>\n              <div class=\"service-footer\">\n                <span class=\"service-meta\">Half / Full Day</span>\n                <button class=\"text-action\" data-select-shoot=\"Safari &amp; Camping\">Select \u2192</button>\n              </div>\n            </div>\n          </article>\n\n          <article class=\"service-card reveal\">\n            <div class=\"service-media\">\n              <span class=\"service-chip\">Official Event</span>\n              <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/marathon-event.jpg\" alt=\"Weligama Bay surf coastline in Sri Lanka\" />\n            </div>\n            <div class=\"service-body\">\n              <div>\n                <h3>Events &amp; Sports</h3>\n                <p>Official photographer for the Arugam Bay Half Marathon\u2014experienced in races, group camps, and live events.</p>\n              </div>\n              <div class=\"service-footer\">\n                <span class=\"service-meta\">Arugam Bay Half Marathon</span>\n                <button class=\"text-action\" data-select-shoot=\"Event Coverage\">Select \u2192</button>\n              </div>\n            </div>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <!-- ====================================================================\n         Portfolio Gallery + Lightbox\n         ==================================================================== -->\n    <section class=\"section\" id=\"portfolio\">\n      <div class=\"container\">\n        <div class=\"section-top reveal\">\n          <div>\n            <span class=\"pill-tag\">Portfolio</span>\n            <h2 class=\"section-title\">Selected Work</h2>\n          </div>\n\n          <div class=\"filter-bar\" role=\"tablist\" aria-label=\"Filter gallery\">\n            <button class=\"filter-btn active\" data-filter=\"all\">All</button>\n            <button class=\"filter-btn\" data-filter=\"surf\">Surf</button>\n            <button class=\"filter-btn\" data-filter=\"coast\">Coast</button>\n            <button class=\"filter-btn\" data-filter=\"safari\">Safari</button>\n            <button class=\"filter-btn\" data-filter=\"weligama\">Weligama</button>\n          </div>\n        </div>\n\n        <div class=\"gallery-grid\">\n          <figure class=\"gallery-item wide reveal\" data-category=\"surf\">\n            <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/hero-surf.jpg\" alt=\"Backlit surf carve on ocean wave\" />\n            <figcaption class=\"gallery-overlay\">\n              <span>Surf Photography</span>\n              <h4>Backlit Ocean Wave</h4>\n            </figcaption>\n          </figure>\n\n          <figure class=\"gallery-item reveal\" data-category=\"coast\">\n            <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/drone-bay.jpg\" alt=\"Arugam Bay Main Point at dusk\" />\n            <figcaption class=\"gallery-overlay\">\n              <span>East Coast</span>\n              <h4>Arugam Bay Main Point</h4>\n            </figcaption>\n          </figure>\n\n          <figure class=\"gallery-item reveal\" data-category=\"coast\">\n            <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/lifestyle-beach.jpg\" alt=\"Sri Lankan rocky coast and lighthouse\" />\n            <figcaption class=\"gallery-overlay\">\n              <span>Coastal Travel</span>\n              <h4>Island Shoreline</h4>\n            </figcaption>\n          </figure>\n\n          <figure class=\"gallery-item reveal\" data-category=\"safari\">\n            <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/safari-camp.jpg\" alt=\"Wild elephants in Sri Lanka national park\" />\n            <figcaption class=\"gallery-overlay\">\n              <span>Wildlife &amp; Safari</span>\n              <h4>Sri Lanka Safari</h4>\n            </figcaption>\n          </figure>\n\n          <figure class=\"gallery-item reveal\" data-category=\"weligama surf\">\n            <img src=\"https://cdn.jsdelivr.net/gh/sample-works/amo-picked-website@main/assets/marathon-event.jpg\" alt=\"Weligama Bay coastline in southern Sri Lanka\" />\n            <figcaption class=\"gallery-overlay\">\n              <span>South Coast</span>\n              <h4>Weligama Bay</h4>\n            </figcaption>\n          </figure>\n        </div>\n      </div>\n    </section>\n\n    <!-- ====================================================================\n         Interactive Coast Switcher & About\n         ==================================================================== -->\n    <section class=\"section section-soft\" id=\"coasts\">\n      <div class=\"container coast-layout\">\n        <div class=\"reveal\">\n          <span class=\"pill-tag\">About Amo Picked</span>\n          <h2 class=\"section-title\">8+ Years Serving Travelers Worldwide</h2>\n\n          <blockquote class=\"quote-card\">\n            <p>\n              \u201cOur service has over 8 years experience in photography and videography services in Arugam Bay. We have many customers around the world. Amo Picked is here to provide professional and personalized photography services that will exceed your expectations.\u201d\n            </p>\n            <footer>Amo Picked Photography \u00b7 Arugam Bay</footer>\n          </blockquote>\n\n          <div class=\"event-pill-card\">\n            <strong>Official Photographer \u2014 Arugam Bay Half Marathon</strong>\n          </div>\n        </div>\n\n        <div class=\"coast-panel reveal\">\n          <div class=\"coast-tabs\" role=\"tablist\" aria-label=\"Select coast location\">\n            <button class=\"coast-tab active\" data-coast=\"arugam\" type=\"button\">Arugam Bay</button>\n            <button class=\"coast-tab\" data-coast=\"weligama\" type=\"button\">Weligama</button>\n          </div>\n\n          <div class=\"coast-pane active\" id=\"coast-arugam\">\n            <h3>Arugam Bay Studio (HQ)</h3>\n            <p>\n              Located at 349 Main Street, Arugam Bay 32500. Open 24 hours for dawn patrol surf shoots, aerial drone sessions, beach lifestyle, and Kumana safari coverage.\n            </p>\n            <div class=\"spot-chips\">\n              <span>Main Point</span>\n              <span>Whiskey Point</span>\n              <span>Peanut Farm</span>\n              <span>Pottuvil Point</span>\n              <span>Kumana Safari</span>\n            </div>\n          </div>\n\n          <div class=\"coast-pane\" id=\"coast-weligama\">\n            <h3>Weligama South Coast</h3>\n            <p>\n              Full photography, videography, and drone coverage along Sri Lanka's southern coast for surf sessions, coastal stays, and travel stories.\n            </p>\n            <div class=\"spot-chips\">\n              <span>Weligama Bay</span>\n              <span>South Coast Surf</span>\n              <span>Drone Reels</span>\n              <span>Lifestyle Shoots</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- ====================================================================\n         Google Reviews Strip\n         ==================================================================== -->\n    <section class=\"section\" id=\"reviews\">\n      <div class=\"container\">\n        <div class=\"reviews-strip reveal\">\n          <div class=\"score-pill\">\n            <span class=\"score-num\">4.9</span>\n            <div>\n              <div class=\"star-accent\" aria-hidden=\"true\">\u2605\u2605\u2605\u2605\u2605</div>\n              <strong>58 Google Reviews</strong>\n            </div>\n          </div>\n\n          <div>\n            <h3>Rated 4.9/5 by Global Clients</h3>\n            <p class=\"section-sub\">Trusted by surfers, travelers, and event organizers across Sri Lanka.</p>\n          </div>\n\n          <div class=\"reviews-actions\">\n            <a href=\"https://share.google/11RldXUr6Thj8JJgH\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-primary btn-sm\">\n              View All on Google\n            </a>\n            <a href=\"https://www.instagram.com/amo_picked/\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-soft btn-sm\">\n              @amo_picked\n            </a>\n          </div>\n        </div>\n\n        <!-- Sliding Right-to-Left Google Reviews Carousel -->\n        <div class=\"reviews-marquee-wrap\" aria-label=\"Client Google Reviews\">\n          <div class=\"reviews-track\" id=\"reviewsTrack\">\n            <article class=\"review-card\">\n              <div>\n                <div class=\"review-head\">\n                  <div class=\"review-author\">\n                    <div class=\"review-avatar\">CB</div>\n                    <div>\n                      <div class=\"review-name\">Camryn van den Bergh</div>\n                      <div class=\"review-meta\">Local Guide \u00b7 76 reviews \u00b7 72 photos</div>\n                    </div>\n                  </div>\n                  <span class=\"google-g\" aria-hidden=\"true\">G</span>\n                </div>\n                <div class=\"review-stars-row\" style=\"margin:0.65rem 0 0.5rem;\">\n                  <span class=\"star-accent\">\u2605\u2605\u2605\u2605\u2605</span>\n                  <span>4 months ago</span>\n                </div>\n                <p class=\"review-quote\">\n                  \u201cIf you're looking for a surf photographer in Arugam Bay, I can't recommend Amo Picked Photography highly enough.\u201d\n                </p>\n              </div>\n              <div class=\"review-reply\">\n                <strong>Amo Picked Photography:</strong> \u201cThank you \ud83d\ude0a\u201d\n              </div>\n            </article>\n\n            <article class=\"review-card\">\n              <div>\n                <div class=\"review-head\">\n                  <div class=\"review-author\">\n                    <div class=\"review-avatar\">TC</div>\n                    <div>\n                      <div class=\"review-name\">trinity Collison</div>\n                      <div class=\"review-meta\">3 reviews</div>\n                    </div>\n                  </div>\n                  <span class=\"google-g\" aria-hidden=\"true\">G</span>\n                </div>\n                <div class=\"review-stars-row\" style=\"margin:0.65rem 0 0.5rem;\">\n                  <span class=\"star-accent\">\u2605\u2605\u2605\u2605\u2605</span>\n                  <span>4 months ago</span>\n                </div>\n                <p class=\"review-quote\">\n                  \u201cGreat photos and videos! Very professional and very fast turnaround - highly recommend\u201d\n                </p>\n              </div>\n              <div class=\"review-reply\">\n                <strong>Amo Picked Photography:</strong> \u201cThank you so much \ud83d\ude0a\u201d\n              </div>\n            </article>\n\n            <article class=\"review-card\">\n              <div>\n                <div class=\"review-head\">\n                  <div class=\"review-author\">\n                    <div class=\"review-avatar\">\u042e\u041a</div>\n                    <div>\n                      <div class=\"review-name\">\u042e\u043b\u0438\u044f \u041a\u043e\u0432\u0430\u043b\u044c</div>\n                      <div class=\"review-meta\">Local Guide \u00b7 33 reviews \u00b7 100 photos</div>\n                    </div>\n                  </div>\n                  <span class=\"google-g\" aria-hidden=\"true\">G</span>\n                </div>\n                <div class=\"review-stars-row\" style=\"margin:0.65rem 0 0.5rem;\">\n                  <span class=\"star-accent\">\u2605\u2605\u2605\u2605\u2605</span>\n                  <span>5 months ago</span>\n                </div>\n                <p class=\"review-quote\">\n                  \u201cI booked a drone surf shooting session and the results are absolutely brilliant! The sheer volume of high-quality videos, his confident flight style, and his eye for a clean, perfect shot are incredible.\u201d\n                </p>\n              </div>\n              <div class=\"review-reply\">\n                <strong>Amo Picked Photography:</strong> \u201cThank you \ud83d\ude0a\u201d\n              </div>\n            </article>\n\n            <article class=\"review-card\">\n              <div>\n                <div class=\"review-head\">\n                  <div class=\"review-author\">\n                    <div class=\"review-avatar\">AW</div>\n                    <div>\n                      <div class=\"review-name\">Aadhya Wije</div>\n                      <div class=\"review-meta\">Local Guide \u00b7 40 reviews \u00b7 44 photos</div>\n                    </div>\n                  </div>\n                  <span class=\"google-g\" aria-hidden=\"true\">G</span>\n                </div>\n                <div class=\"review-stars-row\" style=\"margin:0.65rem 0 0.5rem;\">\n                  <span class=\"star-accent\">\u2605\u2605\u2605\u2605\u2605</span>\n                  <span>8 months ago</span>\n                </div>\n                <p class=\"review-quote\">\n                  \u201cFantastic surf videography! He really knows how to make the most out of the lighting - we were backlit as it was sunrise. Really happy with all the content! And super efficient receiving the photos too! If you're looking for a pro - this is it\u201d\n                </p>\n              </div>\n              <div class=\"review-reply\">\n                <strong>Amo Picked Photography:</strong> \u201cThank you \ud83d\ude0a\u201d\n              </div>\n            </article>\n\n            <article class=\"review-card\">\n              <div>\n                <div class=\"review-head\">\n                  <div class=\"review-author\">\n                    <div class=\"review-avatar\">NH</div>\n                    <div>\n                      <div class=\"review-name\">Naleef Haroon</div>\n                      <div class=\"review-meta\">6 photos \u00b7 Verified Google Rating</div>\n                    </div>\n                  </div>\n                  <span class=\"google-g\" aria-hidden=\"true\">G</span>\n                </div>\n                <div class=\"review-stars-row\" style=\"margin:0.65rem 0 0.5rem;\">\n                  <span class=\"star-accent\">\u2605\u2605\u2605\u2605\u2605</span>\n                  <span>3 months ago</span>\n                </div>\n                <p class=\"review-quote\">\n                  Rated 5.0 stars on Google and shared 6 photos from their session with Amo Picked Photography in Arugam Bay.\n                </p>\n              </div>\n              <div class=\"review-reply\">\n                <strong>Verified Google Review</strong> \u00b7 Arugam Bay\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- ====================================================================\n         Instagram Latest Posts & Feed (@amo_picked)\n         ==================================================================== -->\n    <section class=\"section\" id=\"instagram\">\n      <div class=\"container\">\n        <div class=\"section-top reveal\">\n          <div>\n            <span class=\"pill-tag\">Instagram Feed</span>\n            <h2 class=\"section-title\">Latest on @amo_picked</h2>\n          </div>\n          <p class=\"section-sub\">\n            Daily surf sessions, drone reels, camping, and wildlife shoots straight from Arugam Bay and Weligama.\n          </p>\n        </div>\n\n        <div class=\"ig-shell reveal\">\n          <div class=\"ig-header\">\n            <div class=\"ig-profile\">\n              <div class=\"ig-avatar-ring\">\n                <div class=\"ig-avatar-inner\" style=\"display:grid;place-items:center;font-weight:800;font-size:0.85rem;\">\n                  AMO\n                </div>\n              </div>\n              <div>\n                <div class=\"ig-handle\">@amo_picked</div>\n                <div class=\"ig-bio\">Amo Picked Photography \u00b7 Surf \u00b7 Drone \u00b7 Travel \u00b7 Safari \u00b7 Arugam Bay &amp; Weligama</div>\n              </div>\n            </div>\n            <a href=\"https://www.instagram.com/amo_picked/\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-primary btn-sm\">\n              View Live on Instagram \u2192\n            </a>\n          </div>\n\n          <!-- Populated automatically when AMO_BEHOLD_FEED_URL is set in script -->\n          <div class=\"ig-grid\" id=\"igFeedGrid\" style=\"display:none;\"></div>\n\n          <!-- Populated automatically when AMO_IG_POSTS URLs are added in script -->\n          <div class=\"ig-embed-grid\" id=\"igEmbedMount\" style=\"display:none;\"></div>\n\n          <!-- Shown when no live API feed / post links are connected yet -->\n          <div class=\"ig-connect-box\" id=\"igFallback\">\n            <div>\n              <strong>Daily Surf, Drone &amp; Travel Stories on @amo_picked</strong>\n              <p>\n                See our newest surf sessions, 4K drone reels, camping trips, and Arugam Bay &amp; Weligama highlights directly on our official Instagram profile.\n              </p>\n            </div>\n            <a href=\"https://www.instagram.com/amo_picked/\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-soft btn-sm\">\n              Open @amo_picked on Instagram \u2192\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- ====================================================================\n         Interactive Session Builder & Direct Contact\n         ==================================================================== -->\n    <section class=\"section section-soft\" id=\"book\">\n      <div class=\"container\">\n        <div class=\"section-top reveal\">\n          <div>\n            <span class=\"pill-tag\">Instant Booking</span>\n            <h2 class=\"section-title\">Build Your Session</h2>\n          </div>\n          <p class=\"section-sub\">\n            Customize your coast, coverage options, and dates\u2014then send straight to WhatsApp (+94 77 143 7301) or copy for Instagram DM.\n          </p>\n        </div>\n\n        <div class=\"builder-grid\">\n          <div class=\"builder-card reveal\">\n            <form id=\"bookingForm\">\n              <div class=\"builder-group\">\n                <span class=\"builder-label\">1. Coast</span>\n                <div class=\"chip-select\" id=\"coastChips\">\n                  <button type=\"button\" class=\"chip-btn active\" data-val=\"Arugam Bay\">Arugam Bay</button>\n                  <button type=\"button\" class=\"chip-btn\" data-val=\"Weligama\">Weligama</button>\n                  <button type=\"button\" class=\"chip-btn\" data-val=\"Both Coasts\">Both Coasts</button>\n                </div>\n              </div>\n\n              <div class=\"builder-group\">\n                <span class=\"builder-label\">2. Coverage (select one or more)</span>\n                <div class=\"chip-select\" id=\"coverageChips\">\n                  <button type=\"button\" class=\"chip-btn active\" data-val=\"Photography\">Photography</button>\n                  <button type=\"button\" class=\"chip-btn\" data-val=\"Videography\">Videography</button>\n                  <button type=\"button\" class=\"chip-btn\" data-val=\"4K Drone\">4K Drone</button>\n                </div>\n              </div>\n\n              <div class=\"builder-group\">\n                <span class=\"builder-label\">3. Shoot Type</span>\n                <div class=\"chip-select\" id=\"shootChips\">\n                  <button type=\"button\" class=\"chip-btn active\" data-val=\"Surf\">Surf</button>\n                  <button type=\"button\" class=\"chip-btn\" data-val=\"Travel &amp; Lifestyle\">Travel &amp; Lifestyle</button>\n                  <button type=\"button\" class=\"chip-btn\" data-val=\"Safari &amp; Camping\">Safari &amp; Camping</button>\n                  <button type=\"button\" class=\"chip-btn\" data-val=\"Event Coverage\">Event Coverage</button>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"field\">\n                  <label for=\"clientName\">Your Name</label>\n                  <input type=\"text\" id=\"clientName\" placeholder=\"Your name\" required />\n                </div>\n                <div class=\"field\">\n                  <label for=\"sessionGroup\">Group Size</label>\n                  <select id=\"sessionGroup\">\n                    <option value=\"Individual (1 person)\">Individual (1 person)</option>\n                    <option value=\"Couple / Duo (2 people)\">Couple / Duo (2 people)</option>\n                    <option value=\"Small Group (3\u20136 people)\">Small Group (3\u20136 people)</option>\n                    <option value=\"Camp / Event (7+)\">Camp / Event (7+)</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"field\">\n                  <label for=\"sessionDate\">Preferred Date(s)</label>\n                  <input type=\"text\" id=\"sessionDate\" placeholder=\"e.g. July 15 morning\" />\n                </div>\n                <div class=\"field\">\n                  <label for=\"sessionNotes\">Notes (Optional)</label>\n                  <input type=\"text\" id=\"sessionNotes\" placeholder=\"Surf break, hotel, or idea\" />\n                </div>\n              </div>\n\n              <div class=\"summary-box\" id=\"liveSummary\">\n                <strong>Session Summary</strong>\n                <span id=\"summaryText\">Arugam Bay \u00b7 Surf \u00b7 Photography \u00b7 Individual (1 person)</span>\n              </div>\n\n              <div class=\"form-actions\">\n                <button type=\"submit\" class=\"btn btn-primary\">Send on WhatsApp \u2192</button>\n                <button type=\"button\" id=\"copyBriefBtn\" class=\"btn btn-soft\">Copy Brief</button>\n              </div>\n              <div class=\"form-feedback\" id=\"formFeedback\" role=\"status\" aria-live=\"polite\"></div>\n            </form>\n          </div>\n\n          <div class=\"contact-card reveal\">\n            <div class=\"info-list\">\n              <div class=\"info-row\">\n                <small>Studio Address</small>\n                <a href=\"https://www.google.com/maps/search/?api=1&query=349+Main+Street+Arugam+Bay+32500+Sri+Lanka\" target=\"_blank\" rel=\"noopener\">\n                  349 Main Street, Arugam Bay 32500, Sri Lanka\n                </a>\n              </div>\n              <div class=\"info-row\">\n                <small>Phone &amp; WhatsApp</small>\n                <a href=\"tel:+94771437301\">+94 77 143 7301</a>\n              </div>\n              <div class=\"info-row\">\n                <small>Hours</small>\n                <span>Open 24 hours</span>\n              </div>\n            </div>\n\n            <div class=\"social-row\">\n              <a href=\"https://www.instagram.com/amo_picked/\" target=\"_blank\" rel=\"noopener\" class=\"social-pill\">Instagram @amo_picked</a>\n              <a href=\"https://lk.linkedin.com/in/amo-picked-66b3a1344\" target=\"_blank\" rel=\"noopener\" class=\"social-pill\">LinkedIn</a>\n              <a href=\"https://businessmap.lk/listing/amo-picked-arugam-bay\" target=\"_blank\" rel=\"noopener\" class=\"social-pill\">BusinessMap.lk</a>\n            </div>\n\n            <div class=\"map-frame\">\n              <iframe\n                title=\"Amo Picked Photography Location Map\"\n                loading=\"lazy\"\n                referrerpolicy=\"no-referrer-when-downgrade\"\n                src=\"https://www.google.com/maps?q=349+Main+Street,+Arugam+Bay+32500,+Sri+Lanka&output=embed\"\n              ></iframe>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </main>\n\n  <footer class=\"footer\">\n    <div class=\"container footer-inner\">\n      <div>Amo Picked Photography \u00b7 349 Main Street, Arugam Bay 32500, Sri Lanka \u00b7 Open 24 Hours</div>\n      <div class=\"footer-links\">\n        <a href=\"tel:+94771437301\">+94 77 143 7301</a>\n        <a href=\"https://www.instagram.com/amo_picked/\" target=\"_blank\" rel=\"noopener\">Instagram</a>\n        <a href=\"https://lk.linkedin.com/in/amo-picked-66b3a1344\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n        <a href=\"#top\">Back to Top \u2191</a>\n      </div>\n    </div>\n  </footer>\n\n  <a href=\"https://wa.me/94771437301\" target=\"_blank\" rel=\"noopener\" class=\"floating-wa\" aria-label=\"Chat on WhatsApp\">\n    WhatsApp \u00b7 +94 77 143 7301\n  </a>\n\n  <div class=\"lightbox\" id=\"lightbox\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Image Lightbox\">\n    <div class=\"lightbox-inner\">\n      <div class=\"lightbox-img-wrap\">\n        <img id=\"lightboxImg\" src=\"\" alt=\"\" />\n      </div>\n      <div class=\"lightbox-bar\">\n        <div class=\"lightbox-info\">\n          <span id=\"lightboxMeta\"></span>\n          <h4 id=\"lightboxTitle\"></h4>\n        </div>\n        <div class=\"lightbox-controls\">\n          <button class=\"lb-btn\" id=\"lightboxPrev\" aria-label=\"Previous image\">\u2190</button>\n          <button class=\"lb-btn\" id=\"lightboxNext\" aria-label=\"Next image\">\u2192</button>\n          <button class=\"lb-btn\" id=\"lightboxClose\" aria-label=\"Close lightbox\">\u2715</button>\n        </div>\n      </div>\n    </div>\n  </div>";

  // Move any non-empty Blogger posts inside #journal if present
  const journalWrap = document.getElementById('blogger-journal-slot');
  if (journalWrap) {
    let count = 0;
    journalWrap.querySelectorAll('.post-outer').forEach((post) => {
      const hasText = post.innerText.trim().length > 0;
      const hasMedia = !!post.querySelector('img, iframe');
      if (!hasText && !hasMedia) {
        post.style.display = 'none';
      } else {
        count++;
      }
    });
    if (count > 0) {
      journalWrap.style.display = 'block';
    }
  }
})();

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
    mobileToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth reveal animations
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
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

