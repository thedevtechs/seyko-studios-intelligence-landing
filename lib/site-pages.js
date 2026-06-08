export const legalUpdated = 'June 7, 2026';

export const industries = [
  {
    slug: 'elective-healthcare',
    path: '/elective-healthcare',
    name: 'Elective Healthcare',
    offer: 'Procedure Demand Radar',
    outcome: 'More qualified consults from procedure lanes clinics already want.',
    buyers: 'Plastic surgeons, dental implant clinics, cosmetic dentists, hair transplant clinics, LASIK clinics, fertility and IVF clinics.',
    metric: 'Consults',
    voice: 'Trust-heavy, patient-aware, calm.',
    marketTruth: 'People are buying judgment, reassurance, and a clear next step before they are buying the procedure.',
    bestFitTitle: 'For clinics where trust does the commercial work.',
    bestFitLead:
      'The win is not louder marketing. It is answering the questions patients are already asking before they are willing to book.',
    flavor: [
      ['Trust burden', 'Patients compare proof, language, price cues, recovery expectations, and whether the provider feels careful.'],
      ['Procedure specificity', 'A facelift page, implant page, and IVF page should not sound like the same campaign with swapped nouns.'],
      ['Consult readiness', 'Qualified consults happen when uncertainty gets handled before the form.']
    ],
    deliverables: [
      'Procedure demand map',
      'Competitor angle map',
      'Patient objection brief',
      'Page/ad conversion plan',
      'Monthly local demand radar'
    ],
    examples: [
      'Facelift and deep-plane facelift',
      'Dental implants and cosmetic dentistry',
      'Hair transplant, LASIK, fertility and IVF'
    ]
  },
  {
    slug: 'local-services',
    path: '/local-services',
    name: 'High-Ticket Local Services',
    offer: 'Project Demand Radar',
    outcome: 'More booked estimates from high-ticket local jobs.',
    buyers: 'Roofing, HVAC, solar, restoration, foundation repair, windows and doors, remodeling companies.',
    metric: 'Estimates',
    voice: 'Direct, local, practical.',
    marketTruth: 'Homeowners do not want a funnel. They want to know who can solve the expensive problem without complicating it.',
    bestFitTitle: 'For operators who can actually absorb the demand.',
    bestFitLead:
      'High-ticket local services reward speed, proof, offer clarity, and territory discipline. The market is noisy enough already.',
    flavor: [
      ['Urgency window', 'Storms, failures, repairs, insurance timing, financing, and seasonality change the angle fast.'],
      ['Offer clarity', 'The best competitor is often the one who makes the estimate feel least risky.'],
      ['Territory discipline', 'Service-area demand only matters if capacity, margins, and crews can actually use it.']
    ],
    deliverables: [
      'Local project demand map',
      'Competitor offer map',
      'Homeowner objection brief',
      'Landing page/ad angle plan',
      'Monthly local demand radar'
    ],
    examples: [
      'Roof replacement and storm restoration',
      'HVAC replacement and emergency repair',
      'Solar, windows, foundation and remodel projects'
    ]
  },
  {
    slug: 'b2b-services',
    path: '/b2b-services',
    name: 'B2B Services',
    offer: 'Buyer Demand Radar',
    outcome: 'More qualified sales conversations from companies already showing buying intent.',
    buyers: 'Marketing agencies, MSPs, IT service providers, staffing firms, business brokers, commercial services, and niche B2B providers.',
    metric: 'Sales conversations',
    voice: 'Sharper, account-aware, less polite than a white paper.',
    marketTruth: 'The market usually whispers before it fills out a demo form.',
    bestFitTitle: 'For teams that want better reasons to reach out.',
    bestFitLead:
      'B2B demand shows up in hiring, vendor switching, tool changes, expansion, compliance pressure, and competitor positioning.',
    flavor: [
      ['Buying triggers', 'We look for account and market signals that suggest timing, pain, or switching pressure.'],
      ['Positioning gaps', 'If competitors all sound interchangeable, your outreach has room to be useful.'],
      ['Sales usefulness', 'The output should give a team sharper reasons to call, write, brief, or prioritize.']
    ],
    deliverables: [
      'Target account map',
      'Competitor positioning map',
      'Buyer objection brief',
      'Outbound angle plan',
      'Weekly or monthly buyer intent radar'
    ],
    examples: [
      'Companies researching vendors, tools, or switching moments',
      'Accounts hiring for roles that signal need',
      'Markets where competitor positioning is easy to out-brief'
    ]
  }
];

const routes = {
  home: {
    slug: 'home',
    path: '/',
    title: 'Seyko Studios | Demand Intelligence Systems',
    description:
      'Seyko Studios is a family-run demand intelligence agency serving elective healthcare, high-ticket local services, and B2B services.',
    navLabel: 'Home'
  },
  'elective-healthcare': {
    slug: 'elective-healthcare',
    path: '/elective-healthcare',
    title: 'Elective Healthcare Demand Intelligence',
    description:
      'Procedure Demand Radar maps patient intent, competitor angles, objections, and conversion priorities for elective healthcare clinics.',
    navLabel: 'Healthcare'
  },
  'local-services': {
    slug: 'local-services',
    path: '/local-services',
    title: 'High-Ticket Local Services Demand Intelligence',
    description:
      'Project Demand Radar maps local buyer intent, competitor offers, homeowner objections, and conversion opportunities for high-ticket service companies.',
    navLabel: 'Local Services'
  },
  'b2b-services': {
    slug: 'b2b-services',
    path: '/b2b-services',
    title: 'B2B Buyer Demand Intelligence',
    description:
      'Buyer Demand Radar maps target accounts, competitor positioning, buyer objections, and sharper outreach angles for B2B service providers.',
    navLabel: 'B2B'
  },
  'how-it-works': {
    slug: 'how-it-works',
    path: '/how-it-works',
    title: 'How Demand Radar Works',
    description:
      'How Seyko Studios collects demand signals, reads competitors, extracts objections, and turns the market into clean operating priorities.',
    navLabel: 'How It Works'
  },
  'request-snapshot': {
    slug: 'request-snapshot',
    path: '/request-snapshot',
    title: 'Request a Demand Snapshot',
    description:
      'Request a concise demand snapshot for one market, service, procedure, or buyer segment.',
    navLabel: 'Request Free Snapshot'
  },
  pricing: {
    slug: 'pricing',
    path: '/pricing',
    title: 'Pricing',
    description:
      'Seyko Studios pricing for demand snapshots, radar buildouts, monthly demand radar, and embedded intelligence work.',
    navLabel: 'Pricing'
  },
  about: {
    slug: 'about',
    path: '/about',
    title: 'About',
    description:
      'Seyko Studios is a family-run demand intelligence agency built by a husband-and-wife operator team.',
    navLabel: 'About'
  },
  privacy: {
    slug: 'privacy',
    path: '/privacy',
    title: 'Privacy Policy',
    description: 'How Seyko Studios collects, uses, protects, and handles website and client inquiry information.',
    navLabel: 'Privacy'
  },
  terms: {
    slug: 'terms',
    path: '/terms',
    title: 'Terms of Use',
    description: 'Terms governing use of the Seyko Studios website and public materials.',
    navLabel: 'Terms'
  },
  'data-security': {
    slug: 'data-security',
    path: '/data-security',
    title: 'Data and Security',
    description: 'Seyko Studios data handling, client workspace, and security practices.',
    navLabel: 'Data and Security'
  },
  accessibility: {
    slug: 'accessibility',
    path: '/accessibility',
    title: 'Accessibility',
    description: 'Seyko Studios accessibility commitment and support contact.',
    navLabel: 'Accessibility'
  }
};

const notFoundRoute = {
  slug: 'not-found',
  path: '/404',
  title: 'Page Not Found',
  description: 'The requested Seyko Studios page could not be found.',
  navLabel: '404'
};

const industryNav = industries.map(industry => ({ href: industry.path, label: industry.name }));

const legalNav = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/data-security', label: 'Data and Security' },
  { href: '/accessibility', label: 'Accessibility' }
];

const pricingTiers = [
  {
    eyebrow: 'Paid first read',
    name: 'Demand Snapshot',
    amount: '2,500',
    period: 'one-time',
    description: 'A focused read on one market, one offer, and one demand lane.',
    features: [
      'One industry, market, and service line',
      'Demand, competitor, and objection scan with source notes',
      'Priority recommendations with evidence',
      'Delivered in 7-10 business days'
    ]
  },
  {
    eyebrow: 'Build the campaign brief',
    name: 'Radar Buildout',
    amount: '7,500',
    period: 'one-time',
    description: 'A deeper operator brief for teams ready to move pages, ads, or outreach.',
    features: [
      'Expanded demand and competitor map',
      'Page, ad, and outreach angles',
      'Objection-to-response brief',
      'Execution priorities for the next 30 days'
    ]
  },
  {
    eyebrow: 'Ongoing radar',
    name: 'Monthly Demand Radar',
    amount: '9,500',
    period: 'per month',
    description: 'Ongoing market intelligence for operators who will act on the signal.',
    featured: true,
    features: [
      'Monthly demand and competitor movement',
      'Updated objections and offer pressure',
      'Action log and priority calls',
      '3-month minimum engagement'
    ]
  },
  {
    eyebrow: 'Multi-market',
    name: 'Embedded Intelligence',
    amount: '18k+',
    period: 'per month',
    description: 'For groups with multiple locations, service lines, or sales territories.',
    features: [
      'Multi-market or account-level radar',
      'Weekly or monthly intelligence rhythm',
      'Leadership brief and decision log',
      '6-month minimum engagement'
    ]
  }
];

export const routeList = Object.values(routes);

export function hasPage(slug = 'home') {
  return Boolean(routes[slug]);
}

export function getPageMeta(slug = 'home') {
  if (slug === 'not-found') return notFoundRoute;
  return routes[slug] || routes.home;
}

export function getStaticSlugs() {
  return routeList.filter(route => route.slug !== 'home').map(route => route.slug);
}

export const siteInlineStyle = `
  .soft-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); }
  .section-num { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-faint); }
  .source-note { margin: 10px auto 0; max-width: 1180px; padding: 0 24px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-faint); opacity: 0.82; }
  .source-note a { color: var(--text-muted); border-bottom: 1px solid var(--border-strong); }
  .source-note a:hover { color: var(--accent); }
  .mini-list { list-style: none; display: flex; flex-direction: column; gap: 9px; margin-top: 18px; }
  .mini-list li { color: var(--text-muted); font-size: 14px; line-height: 1.45; display: flex; gap: 10px; }
  .mini-list li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); margin-top: 8px; flex-shrink: 0; }
`;

function attrsForLink(href) {
  return `href="${escapeAttribute(href)}"`;
}

function escapeAttribute(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function cta(href = '/request-snapshot', label = 'Request a demand snapshot', extraClass = '') {
  return `<a ${attrsForLink(href)} class="btn btn-primary ${extraClass}">${label} <span class="arrow">&rarr;</span></a>`;
}

function ghost(href, label, extraClass = '') {
  return `<a ${attrsForLink(href)} class="btn btn-ghost ${extraClass}">${label}</a>`;
}

function list(items) {
  return `<ul class="mini-list">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function sectionIntro(kicker, title, lead = '') {
  return `
    <div class="section-head">
      <div>
        <div class="section-num">${kicker}</div>
        <h2 class="h-1">${title}</h2>
      </div>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
    </div>
  `;
}

function renderNav(currentSlug = 'home') {
  const currentPath = getPageMeta(currentSlug).path;
  const isIndustryPage = industries.some(industry => industry.slug === currentSlug);
  const linkClass = href => `nav-link${currentPath === href ? ' active' : ''}`;
  const childLinkClass = href => `nav-dropdown-link${currentPath === href ? ' active' : ''}`;
  const mobileLinkClass = href => `nav-link nav-mobile-link${currentPath === href ? ' active' : ''}`;
  const industryDropdownLinks = industries
    .map(industry => `
      <a href="${industry.path}" class="${childLinkClass(industry.path)}" role="menuitem">
        <span>${industry.name}</span>
        <small>${industry.offer}</small>
      </a>
    `)
    .join('');
  const mobileIndustryLinks = industryNav
    .map(item => `<a href="${item.href}" class="${mobileLinkClass(item.href)}">${item.label}</a>`)
    .join('');

  return `
    <header class="nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo"><span class="nav-logo-mark">S</span><span>Seyko Studios</span></a>
        <nav class="nav-links" id="primary-nav" aria-label="Primary navigation">
          <div class="nav-menu" data-nav-menu>
            <button class="nav-link nav-menu-trigger${isIndustryPage ? ' active' : ''}" type="button" aria-expanded="false" aria-controls="industry-menu" aria-haspopup="true">
              Industries <span class="nav-chevron" aria-hidden="true"></span>
            </button>
            <div class="nav-dropdown" id="industry-menu" role="menu" aria-label="Industries">
              <div class="nav-dropdown-label">Industries</div>
              ${industryDropdownLinks}
            </div>
          </div>
          <a href="/how-it-works" class="${linkClass('/how-it-works')} nav-desktop-link">How It Works</a>
          <a href="/pricing" class="${linkClass('/pricing')} nav-desktop-link">Pricing</a>
          <a href="/about" class="${linkClass('/about')} nav-desktop-link">About</a>
          <div class="nav-mobile-section" aria-label="Industries">
            <div class="nav-mobile-label">Industries</div>
            ${mobileIndustryLinks}
          </div>
          <div class="nav-mobile-section" aria-label="Company">
            <div class="nav-mobile-label">Company</div>
            <a href="/how-it-works" class="${mobileLinkClass('/how-it-works')}">How It Works</a>
            <a href="/pricing" class="${mobileLinkClass('/pricing')}">Pricing</a>
            <a href="/about" class="${mobileLinkClass('/about')}">About</a>
          </div>
          <a href="/request-snapshot" class="nav-link nav-link-mobile-cta${currentPath === '/request-snapshot' ? ' active' : ''}">Request Free snapshot</a>
        </nav>
        <div class="nav-cta">
          ${cta('/request-snapshot', 'Request Free Snapshot', 'btn-sm')}
        </div>
        <button class="nav-toggle" type="button" aria-label="Open navigation" aria-controls="primary-nav" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}

function renderFooter() {
  const industryLinks = industryNav.map(item => `<a href="${item.href}">${item.label}</a>`).join('');
  const legalLinks = legalNav.map(item => `<a href="${item.href}">${item.label}</a>`).join('');

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand"><span class="nav-logo-mark">S</span><span class="mono">Seyko Studios</span></div>
            <p>A demand intelligence agency for elective healthcare, high-ticket local services, and B2B services. Family-run. Built in Los Angeles.</p>
          </div>
          <div>
            <div class="footer-label">Industries</div>
            <div class="footer-link-grid">${industryLinks}</div>
          </div>
          <div>
            <div class="footer-label">Company</div>
            <div class="footer-link-grid">
              <a href="/how-it-works">How It Works</a>
              <a href="/pricing">Pricing</a>
              <a href="/about">About</a>
              <a href="/request-snapshot">Request Free Snapshot</a>
              <a href="mailto:partners@seykostudios.com">partners@seykostudios.com</a>
            </div>
          </div>
          <div>
            <div class="footer-label">Legit</div>
            <div class="footer-link-grid">${legalLinks}</div>
          </div>
        </div>
        <div class="footer-bottom"><div>&copy; 2026 Seyko Studios</div><div>Selective partner work &middot; Husband-and-wife operated</div></div>
      </div>
    </footer>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="hero-eyebrow">
              <span class="mono">Seyko Studios</span>
              <span class="line"></span>
              <span class="mono">Market reads before execution</span>
            </div>
            <h1 class="h-display hero-title">
              Find the buyers already looking.
            </h1>
            <p class="lead hero-lead">
              We map what your market is searching for, comparing, and hesitating over, then turn it into a demand snapshot your team can act on. The point is better-fit calls, consults, and estimates. Not more traffic.
            </p>
            <div class="hero-actions">
              ${cta('/request-snapshot', 'Request Your Free Snapshot')}
              ${ghost('/pricing', 'See pricing')}
              <span class="mono-sm">Named deliverables. Visible inputs.</span>
            </div>
          </div>
          ${renderRadarConsole()}
        </div>
        <div class="signal-strip">
          <div><div class="stat-label">What we do</div><strong>Read the market</strong></div>
          <div><div class="stat-label">What you get</div><strong>Better-fit calls</strong></div>
          <div><div class="stat-label">Why trust us</div><strong>Inputs included</strong></div>
          <div><div class="stat-label">Best fit</div><strong>Ready to act</strong></div>
        </div>
      </div>
    </section>

    ${renderAuthoritySignals()}

    <section class="section" id="what-we-do">
      <div class="container">
        ${sectionIntro('01 &middot; What we do', 'A sharper agency for expensive decisions.', 'We are the partner you bring in before spending more on pages, ads, outreach, or another vendor retainer.')}
        <div class="grid grid-3">
          <div class="soft-card feature-card">
            <div class="mono-sm">Find demand</div>
            <h3 class="h-3">See what buyers are already searching before they call.</h3>
            <p>We identify repeated demand patterns across search, competitor pages, reviews, questions, and public market signals.</p>
          </div>
          <div class="soft-card feature-card">
            <div class="mono-sm">Read friction</div>
            <h3 class="h-3">Map the objections slowing the next step.</h3>
            <p>Price, trust, timing, risk, logistics, proof, switching cost, and urgency all show up before conversion.</p>
          </div>
          <div class="soft-card feature-card">
            <div class="mono-sm">Brief action</div>
            <h3 class="h-3">Turn the read into pages, ads, and outreach angles.</h3>
            <p>The output is not a report for the shelf. It is a ranked brief for what should change next.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="industries">
      <div class="container">
        ${sectionIntro('02 &middot; Industries served', 'Three markets. One agency system.', 'We focus where the economics justify sharper thinking: consults, estimates, and qualified sales conversations.')}
        <div class="grid grid-3">
          ${industries.map(industry => `
            <a href="${industry.path}" class="industry-card soft-card">
              <div class="industry-card-top">
                <span class="chip chip-accent">${industry.metric}</span>
                <span class="mono-sm">${industry.offer}</span>
              </div>
              <h3 class="h-3">${industry.name}</h3>
              <p>${industry.outcome}</p>
              ${list(industry.deliverables.slice(0, 3))}
              <span class="text-link">Open industry &rarr;</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionIntro('03 &middot; Demand Radar', 'The same operating system across every vertical.', 'Map demand, analyze competitors, identify objections, build angles, and track the market monthly.')}
        ${renderSteps()}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split-layout">
          <div>
            <div class="section-num">04 &middot; Not a generic agency audit</div>
            <h2 class="h-1">Agency work, without the saturated agency reflex.</h2>
          </div>
          <div class="copy-stack">
            <p>We are an agency. We are not trying to be another channel vendor with the same deck, same funnel, and same polite recommendations.</p>
            <p>Useful work starts one layer earlier: what the buyer is trying to resolve before they act. That is where pages, ads, and outreach get sharper.</p>
          </div>
        </div>
      </div>
    </section>

    ${renderClientFit()}
    ${renderPricingSection('06 &middot; Pricing')}
    ${renderFamilyBand()}
    ${renderFinalCta('See what your market is already asking.', 'Request a concise demand snapshot for one industry, one market, and one service line.')}
  `;
}

function renderRadarConsole() {
  const profiles = [
    {
      id: 'healthcare',
      tab: 'Healthcare',
      label: 'Procedure Radar',
      market: 'Beverly Hills · Deep-plane facelift',
      score: 84,
      verdict: 'Demand is strongest where trust proof answers recovery, natural results, and surgeon experience before the consult.',
      nextMove: 'Lead with recovery clarity, proof density, and a consult path that feels careful.',
      lanes: [
        ['Deep-plane facelift', 88, 'consult-ready'],
        ['Neck lift cost', 74, 'price-aware'],
        ['Facelift recovery', 69, 'objection'],
        ['Mini vs full facelift', 63, 'comparison']
      ],
      notes: [
        ['Competitor gap', 'Proof pages repeat credentials but under-answer recovery anxiety.'],
        ['Buyer hesitation', 'Natural-looking outcomes and downtime language show up before price.']
      ]
    },
    {
      id: 'local',
      tab: 'Local',
      label: 'Project Radar',
      market: 'Dallas · Roof replacement',
      score: 79,
      verdict: 'The highest-value demand sits around urgency, insurance timing, financing, and who can give a clean estimate fast.',
      nextMove: 'Separate emergency repair from replacement, then make financing and proof impossible to miss.',
      lanes: [
        ['Roof replacement', 86, 'high-ticket'],
        ['Storm damage roof', 78, 'urgent'],
        ['Insurance roof claim', 71, 'timing'],
        ['Roof financing', 58, 'conversion gap']
      ],
      notes: [
        ['Competitor gap', 'Most pages bury financing and crew availability below generic trust copy.'],
        ['Buyer hesitation', 'Homeowners need cost clarity, speed, and less friction around estimates.']
      ]
    },
    {
      id: 'b2b',
      tab: 'B2B',
      label: 'Buyer Radar',
      market: 'Healthcare MSP · Vendor switching',
      score: 81,
      verdict: 'Useful intent appears before the form: hiring changes, compliance pressure, tool sprawl, and vendor fatigue.',
      nextMove: 'Prioritize accounts with a visible switching reason and give sales a sharper first sentence.',
      lanes: [
        ['HIPAA IT support', 83, 'pain visible'],
        ['MSP comparison', 76, 'switching'],
        ['SOC 2 support', 68, 'compliance'],
        ['Healthcare help desk', 61, 'capacity']
      ],
      notes: [
        ['Competitor gap', 'Most MSPs sound interchangeable until the page names a specific operating pain.'],
        ['Buyer hesitation', 'Risk, response time, and migration disruption need to be handled early.']
      ]
    }
  ];

  return `
    <aside class="radar-console" data-radar-console data-spotlight aria-label="Sample Demand Radar view">
      <div class="radar-console-top">
        <div>
          <div class="mono-sm">Sample market read</div>
          <strong>Demand Radar</strong>
        </div>
        <span class="radar-live"><span></span>Signal active</span>
      </div>
      <div class="radar-tabs" role="radiogroup" aria-label="Sample radar industries">
        ${profiles.map((profile, index) => `
          <input class="radar-radio" type="radio" id="radar-${profile.id}" name="sample-radar-view" value="${profile.id}" ${index === 0 ? 'checked' : ''}>
          <label class="radar-tab" for="radar-${profile.id}">
            ${profile.tab}
          </label>
        `).join('')}
      </div>
      <div class="radar-panels">
        ${profiles.map((profile, index) => `
          <div class="radar-panel radar-panel-${profile.id}" id="radar-panel-${profile.id}" data-radar-panel="${profile.id}">
            <div class="radar-panel-grid">
              <div class="radar-map" aria-hidden="true">
                <span class="radar-ring radar-ring-1"></span>
                <span class="radar-ring radar-ring-2"></span>
                <span class="radar-ring radar-ring-3"></span>
                <span class="radar-dot dot-1"></span>
                <span class="radar-dot dot-2"></span>
                <span class="radar-dot dot-3"></span>
                <span class="radar-dot dot-4"></span>
              </div>
              <div class="radar-score">
                <div class="score-orb" style="--score:${profile.score}%">
                  <span>${profile.score}</span>
                </div>
                <div>
                  <div class="mono-sm">${profile.label}</div>
                  <h2>${profile.market}</h2>
                </div>
              </div>
            </div>
            <p class="radar-verdict">${profile.verdict}</p>
            <div class="radar-lanes">
              ${profile.lanes.map(lane => `
                <div class="radar-lane">
                  <div class="radar-lane-meta"><span>${lane[0]}</span><small>${lane[2]}</small></div>
                  <div class="radar-bar"><span style="width:${lane[1]}%"></span></div>
                </div>
              `).join('')}
            </div>
            <div class="radar-notes">
              ${profile.notes.map(note => `
                <div>
                  <span>${note[0]}</span>
                  <p>${note[1]}</p>
                </div>
              `).join('')}
            </div>
            <div class="radar-next">
              <span>Next move</span>
              <p>${profile.nextMove}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </aside>
  `;
}

function renderAuthoritySignals() {
  const signals = [
    ['Demand maps show their inputs', 'We review local and national search patterns, competitor pages, reviews, buyer questions, and visible hesitation before recommending a move.'],
    ['Diagnostic before execution', 'Every client gets a focused demand brief before budget moves into ads, pages, outbound, or ongoing work.'],
    ['Markets stay protected', 'Engagements are capped, and we avoid direct competitors in the same market when the work would conflict.']
  ];

  return `
    <section class="section authority-section">
      <div class="container">
        ${sectionIntro('Authority signals', 'Specific work beats impressive promises.', 'You should know what we looked at, what we found, and what decision the work supports.')}
        <div class="grid grid-3">
          ${signals.map(signal => `
            <div class="soft-card feature-card compact authority-card">
              <div class="mono-sm">${signal[0]}</div>
              <p>${signal[1]}</p>
            </div>
          `).join('')}
        </div>
        <div class="soft-card authority-blurb">
          <p>Most agencies start with a retainer and a content calendar. We start by reading the market: what buyers are searching, what competitors are saying, and where conversion is leaking. You see the demand before execution starts.</p>
        </div>
      </div>
    </section>
  `;
}

function renderSteps() {
  const steps = [
    ['01', 'Map demand', 'Search patterns, questions, reviews, public discussions, service pages, and visible buying signals.'],
    ['02', 'Analyze competitors', 'How competitors package trust, specialization, pricing cues, proof, and next steps.'],
    ['03', 'Identify objections', 'The reasons qualified buyers hesitate before booking, requesting, or replying.'],
    ['04', 'Build angles', 'Page, ad, content, and outreach angles that answer the market instead of guessing.'],
    ['05', 'Track movement', 'A monthly radar for demand shifts, competitor moves, and priority changes.']
  ];

  return `
    <div class="steps-grid">
      ${steps.map(step => `
        <div class="soft-card step-card">
          <div class="stat-label">${step[0]}</div>
          <h3>${step[1]}</h3>
          <p>${step[2]}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderPricingSection(kicker = 'Pricing') {
  return `
    <section class="section" id="pricing">
      <div class="container">
        ${sectionIntro(kicker, 'Pricing is part of the filter.', 'We publish the numbers because the first conversation should be about fit, scope, and how fast you can act.')}
        <div class="pricing-grid grid grid-4">
          ${pricingTiers.map(tier => `
            <div class="price-card${tier.featured ? ' featured' : ''}" data-spotlight>
              <div class="mono-sm">${tier.eyebrow}</div>
              <h3 class="h-3">${tier.name}</h3>
              <div class="price-amount"><span class="currency">$</span>${tier.amount}<span class="period"> ${tier.period}</span></div>
              <p>${tier.description}</p>
              <ul class="price-features">
                ${tier.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
        <div class="notice-card pricing-note">Minimum meaningful work starts at $2,500. Most ongoing engagements land between $9,500 and $18,000+ per month. We publish the range so the first conversation can stay focused on fit, timing, and whether the market is worth reading now.</div>
        <div class="pricing-actions">
          ${cta('/request-snapshot', 'Request Your Free Snapshot')}
        </div>
      </div>
    </section>
  `;
}

function renderDeliveryStandard(kicker = 'Delivery standard') {
  const standards = [
    ['Inputs', 'Search patterns, competitor pages, offer language, reviews, public questions, local modifiers, and visible buyer hesitation.'],
    ['Scoring', 'We rank signals by intent, frequency, commercial value, urgency, and how clearly your team can act on them.'],
    ['Output', 'A named brief with demand lanes, competitor angles, buyer objections, page/ad/outreach priorities, and the evidence behind each call.'],
    ['Quality bar', 'If a recommendation cannot point back to observed market behavior, it does not belong in the deliverable.']
  ];

  return `
    <section class="section">
      <div class="container">
        ${sectionIntro(kicker, 'The product has to be useful before it sounds impressive.', 'Good data work gives you fewer guesses, better priorities, and a clearer reason to act.')}
        <div class="grid grid-4 standard-grid">
          ${standards.map(item => `
            <div class="soft-card feature-card compact standard-card">
              <div class="mono-sm">${item[0]}</div>
              <p>${item[1]}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderValueMath(kicker = 'Value math') {
  const examples = [
    ['Elective healthcare', 'If one better-qualified procedure consult can be worth thousands in contribution margin, the market read does not need to create miracles. It needs to point the practice at the right procedure, question, and trust gap.'],
    ['Local services', 'For roof replacement, HVAC replacement, restoration, solar, windows, or foundation work, one properly qualified estimate can justify a serious demand read if the crew can actually absorb the job.'],
    ['B2B services', 'For high-LTV accounts, one better-timed sales conversation can cover the first read. The value is in knowing who has a reason to listen and what angle is worth using.']
  ];

  return `
    <section class="section">
      <div class="container">
        ${sectionIntro(kicker, 'The pricing only makes sense when the economics are real.', 'We are not a fit for tiny-ticket offers. We are a fit when one good opportunity can materially change the month.')}
        <div class="grid grid-3">
          ${examples.map(item => `
            <div class="soft-card feature-card value-card">
              <div class="mono-sm">${item[0]}</div>
              <p>${item[1]}</p>
            </div>
          `).join('')}
        </div>
        <div class="notice-card pricing-note">No honest partner can guarantee revenue. The standard is simpler: the work should improve a decision that already has meaningful money behind it.</div>
      </div>
    </section>
  `;
}

function renderPricingPage() {
  return `
    <section class="page-hero">
      <div class="container">
        <div class="hero-eyebrow"><span class="mono">Pricing</span><span class="line"></span><span class="mono">Qualified work only</span></div>
        <h1 class="h-display hero-title">Know the number before we talk.</h1>
        <p class="lead hero-lead">We work best with operators who already know the lane, have capital to act, and want a sharper market read before they spend more on execution.</p>
        <div class="hero-actions">${cta('/request-snapshot', 'Request Your Free Snapshot')}${ghost('/how-it-works', 'See the system')}</div>
      </div>
    </section>
    ${renderPricingSection('01 &middot; Engagements')}
    ${renderValueMath('02 &middot; Value math')}
    ${renderDeliveryStandard('03 &middot; Delivery standard')}
    <section class="section">
      <div class="container">
        ${sectionIntro('04 &middot; Before you request', 'Come with a lane, not a broad growth brief.', 'The best first request is specific enough for us to inspect the market cleanly.')}
        <div class="grid grid-3">
          ${[
            ['One market', 'A city, territory, service area, account segment, or clear national niche.'],
            ['One offer', 'A procedure, project, service line, or buyer problem worth commercial attention.'],
            ['Room to act', 'Budget, trust, and decision speed to change pages, offers, ads, or outreach once the read is clear.']
          ].map(item => `
            <div class="soft-card feature-card">
              <div class="mono-sm">${item[0]}</div>
              <p>${item[1]}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderFinalCta('Request Your Free Snapshot when the lane is clear.', 'Send the market, offer, and business context. We will tell you whether the first read makes sense.', 'Request Your Free Snapshot')}
  `;
}

function getIndustryServicePackages(industry) {
  const packages = {
    'elective-healthcare': [
      {
        eyebrow: 'Paid first read',
        name: 'Procedure Demand Snapshot',
        amount: '2,500',
        period: 'one-time',
        description: 'For one procedure lane in one market where consult quality matters.',
        includes: ['Patient search patterns', 'Competing procedure page read', 'Consult objections', 'Next-step priorities']
      },
      {
        eyebrow: 'Buildout',
        name: 'Procedure Radar Buildout',
        amount: '7,500',
        period: 'one-time',
        description: 'For clinics ready to adjust procedure pages, ads, proof, and consult flow.',
        includes: ['Procedure demand map', 'Page/ad conversion plan', 'Proof and pricing cues', '30-day action brief']
      },
      {
        eyebrow: 'Ongoing',
        name: 'Monthly Procedure Radar',
        amount: '9,500',
        period: 'per month',
        description: 'For practices that want a current read on demand, competitors, and patient hesitation.',
        featured: true,
        includes: ['Monthly procedure movement', 'Competitor positioning shifts', 'Patient objection updates', 'Priority calls']
      },
      {
        eyebrow: 'Group',
        name: 'Multi-Location Procedure Intelligence',
        amount: '18k+',
        period: 'per month',
        description: 'For multi-location or multi-provider groups comparing procedure demand across markets.',
        includes: ['Location comparison', 'Procedure focus calls', 'Capacity and pricing cues', 'Leadership brief']
      }
    ],
    'local-services': [
      {
        eyebrow: 'Paid first read',
        name: 'Project Demand Snapshot',
        amount: '2,500',
        period: 'one-time',
        description: 'For one project category in one service area where estimate quality matters.',
        includes: ['High-intent local searches', 'Competitor offer read', 'Homeowner objections', 'Next-step priorities']
      },
      {
        eyebrow: 'Buildout',
        name: 'Project Radar Buildout',
        amount: '7,500',
        period: 'one-time',
        description: 'For operators ready to improve landing pages, ads, offers, and estimate flow.',
        includes: ['Local project demand map', 'Offer and proof plan', 'Landing page/ad angles', '30-day action brief']
      },
      {
        eyebrow: 'Ongoing',
        name: 'Monthly Local Demand Radar',
        amount: '9,500',
        period: 'per month',
        description: 'For service companies that need demand, seasonality, and competitor movement tracked.',
        featured: true,
        includes: ['Monthly territory movement', 'Competitor offer shifts', 'Homeowner objection updates', 'Priority calls']
      },
      {
        eyebrow: 'Multi-territory',
        name: 'Project Intelligence System',
        amount: '18k+',
        period: 'per month',
        description: 'For multi-market operators comparing service lines, crews, capacity, and territory focus.',
        includes: ['Territory comparison', 'Service-line focus calls', 'Capacity and margin cues', 'Leadership brief']
      }
    ],
    'b2b-services': [
      {
        eyebrow: 'Paid first read',
        name: 'Buyer Demand Snapshot',
        amount: '2,500',
        period: 'one-time',
        description: 'For one buyer segment where timing, triggers, and positioning matter.',
        includes: ['Buyer questions and triggers', 'Competitor positioning read', 'Objection scan', 'Next-step priorities']
      },
      {
        eyebrow: 'Buildout',
        name: 'Buyer Radar Buildout',
        amount: '7,500',
        period: 'one-time',
        description: 'For teams ready to sharpen pages, outbound, targeting, and sales conversations.',
        includes: ['Target account map', 'Positioning gap brief', 'Outbound angles', '30-day action brief']
      },
      {
        eyebrow: 'Ongoing',
        name: 'Monthly Buyer Intent Radar',
        amount: '9,500',
        period: 'per month',
        description: 'For B2B teams that want current account and market signals feeding sales priorities.',
        featured: true,
        includes: ['Monthly buyer movement', 'Trigger and hiring signals', 'Positioning updates', 'Priority calls']
      },
      {
        eyebrow: 'Embedded',
        name: 'Embedded Sales Intelligence',
        amount: '18k+',
        period: 'per month',
        description: 'For teams that need a recurring intelligence layer across markets, accounts, or territories.',
        includes: ['Account-level radar', 'Sales priority briefs', 'Market and competitor movement', 'Leadership rhythm']
      }
    ]
  };

  return packages[industry.slug] || pricingTiers.map(tier => ({
    ...tier,
    includes: tier.features
  }));
}

function renderIndustryServicesPricing(industry, kicker = 'Services and pricing') {
  const packages = getIndustryServicePackages(industry);

  return `
    <section class="section" id="services-pricing">
      <div class="container">
        ${sectionIntro(kicker, `${industry.offer} services and pricing.`, 'Pick the level of market read that matches your decision speed, budget, and internal execution capacity.')}
        <div class="pricing-grid grid grid-4">
          ${packages.map(item => `
            <div class="price-card${item.featured ? ' featured' : ''}" data-spotlight>
              <div class="mono-sm">${item.eyebrow}</div>
              <h3 class="h-3">${item.name}</h3>
              <div class="price-amount"><span class="currency">$</span>${item.amount}<span class="period"> ${item.period}</span></div>
              <p>${item.description}</p>
              <ul class="price-features">
                ${item.includes.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
        <div class="notice-card pricing-note">Start with a paid snapshot if the lane is still being validated. Move to monthly radar when you have budget, capacity, and a clear reason to keep tracking the market. The price is meant for businesses where a better-fit consult, estimate, or sales conversation can be worth real money.</div>
      </div>
    </section>
  `;
}

function getIndustry(slug) {
  return industries.find(industry => industry.slug === slug) || industries[0];
}

function renderIndustry(slug) {
  const industry = getIndustry(slug);

  return `
    <section class="page-hero">
      <div class="container">
        <div class="hero-eyebrow">
          <span class="mono">${industry.name}</span>
          <span class="line"></span>
          <span class="mono">${industry.voice}</span>
        </div>
        <h1 class="h-display hero-title">${industry.offer}</h1>
        <p class="lead hero-lead">${industry.marketTruth}</p>
        <div class="hero-actions">
          ${cta('/request-snapshot', 'Request a demand snapshot')}
          ${ghost('/how-it-works', 'See how it works')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split-layout">
          <div>
            <div class="section-num">01 &middot; Best fit</div>
            <h2 class="h-1">${industry.bestFitTitle}</h2>
          </div>
          <div class="soft-card detail-card">
            <div class="mono-sm">Target buyers</div>
            <p>${industry.buyers}</p>
            <p class="detail-muted">${industry.bestFitLead}</p>
          </div>
        </div>
      </div>
    </section>

    ${renderIndustryServicesPricing(industry, '02 &middot; Services and pricing')}

    <section class="section">
      <div class="container">
        ${sectionIntro('03 &middot; Market texture', 'The flavor matters.', 'Same system. Different buying psychology, urgency, and proof burden.')}
        <div class="grid grid-3">
          ${industry.flavor.map(item => `
            <div class="soft-card flavor-card">
              <div class="mono-sm">${item[0]}</div>
              <p>${item[1]}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionIntro('04 &middot; Deliverables', 'What the radar gives you.', 'A practical brief your existing team can execute against.')}
        <div class="grid grid-2">
          ${industry.deliverables.map((item, index) => `
            <div class="soft-card feature-card">
              <div class="mono-sm">${String(index + 1).padStart(2, '0')}</div>
              <h3 class="h-3">${item}</h3>
              <p>${deliverableDescription(item)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionIntro('05 &middot; Starting points', 'Where the first read usually pays off.', 'One lane is enough. Specific beats broad.')}
        <div class="grid grid-3">
          ${industry.examples.map(example => `
            <div class="soft-card feature-card compact">
              <span class="chip">${industry.metric}</span>
              <h3 class="h-3">${example}</h3>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    ${renderFinalCta(`Request the ${industry.offer.toLowerCase()}.`, 'Send the market and service line. We will inspect the signal before recommending a next step.')}
  `;
}

function deliverableDescription(name) {
  if (name.includes('demand') || name.includes('account')) return 'Shows where intent is visible and which signals deserve commercial attention.';
  if (name.includes('Competitor')) return 'Shows how alternatives frame trust, offer, proof, pricing cues, and next steps.';
  if (name.includes('objection')) return 'Ranks the concerns that slow conversion and should be answered earlier.';
  if (name.includes('angle') || name.includes('conversion')) return 'Turns the read into page, ad, landing page, and outreach priorities.';
  return 'Keeps the market read current so decisions are not made from stale assumptions.';
}

function renderClientFit(kicker = '05 &middot; Client fit') {
  return `
    <section class="section">
      <div class="container">
        ${sectionIntro(kicker, 'Best with capital, calm, and room to think.', 'We are not trying to be the safest-looking vendor in a saturated stack. The work is better when the room has trust, budget, and space for independent judgment.')}
        <div class="fit-grid">
          <div class="soft-card fit-card fit-card-main">
            <div class="mono-sm">Best fit</div>
            <h3 class="h-2">Well-capitalized operators with a calm decision room.</h3>
            <p>You have enough money to act when the market read is clear. You care about taste, judgment, and signal. You do not need twelve people to approve a headline.</p>
          </div>
          <div class="soft-card fit-card">
            <div class="mono-sm">Creative freedom</div>
            <p>Give us the business context, the constraints, and the target. Then let the read shape the angles.</p>
          </div>
          <div class="soft-card fit-card">
            <div class="mono-sm">Differentiation</div>
            <p>The goal is not to look like every saturated agency, dashboard, lead vendor, or outsourced marketing department.</p>
          </div>
          <div class="soft-card fit-card">
            <div class="mono-sm">Not ideal</div>
            <p>Exploratory budgets, slow approval chains, vendor shopping, or a need for guaranteed outcomes before the work starts.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHowItWorks() {
  const engine = [
    ['Search demand collection', 'We look for repeated buyer questions, service searches, local modifiers, comparison language, and high-intent patterns.'],
    ['Competitor and page analysis', 'We read how competitors package offers, specialization, trust, proof, pricing cues, and next-step friction.'],
    ['Objection extraction', 'We separate loud noise from repeated concerns that affect consults, estimates, quotes, and sales conversations.'],
    ['Contact and account enrichment', 'Where relevant, we connect market demand to account, territory, or company signals.'],
    ['AI-assisted synthesis', 'AI helps organize the market read. Human review decides what is actually useful.'],
    ['Clean deliverables', 'The output is a ranked operator brief, not a dashboard you need to interpret yourself.']
  ];

  return `
    <section class="page-hero">
      <div class="container">
        <div class="hero-eyebrow"><span class="mono">How it works</span><span class="line"></span><span class="mono">Demand Radar system</span></div>
        <h1 class="h-display hero-title">A market read your team can act on.</h1>
        <p class="lead hero-lead">We collect demand signals, read the competitive field, extract objections, and turn the pattern into sharper actions.</p>
        <div class="hero-actions">${cta('/request-snapshot')}${ghost('/#industries', 'See industries')}</div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          ${engine.map((item, index) => `
            <div class="soft-card feature-card">
              <div class="mono-sm">${String(index + 1).padStart(2, '0')}</div>
              <h3 class="h-3">${item[0]}</h3>
              <p>${item[1]}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderDeliveryStandard('Quality bar')}
    <section class="section">
      <div class="container">
        <div class="split-layout">
          <div>
            <div class="section-num">What we do not lead with</div>
            <h2 class="h-1">No tool-first pitch. No generic lead-gen deck.</h2>
          </div>
          <div class="copy-stack">
            <p>The useful thing is not the tool. The useful thing is knowing what buyers are asking, why they hesitate, and what your team should change.</p>
            <p>We use technical systems to make the work faster and sharper. The final judgment stays human.</p>
          </div>
        </div>
      </div>
    </section>
    ${renderFinalCta('Give your team a sharper market brief.', 'Start with one market and one service line.')}
  `;
}

function renderRequestSnapshot() {
  return `
    <section class="page-hero">
      <div class="container">
        <div class="hero-eyebrow"><span class="mono">Request Free Snapshot</span><span class="line"></span><span class="mono">One market, one lane</span></div>
        <h1 class="h-display hero-title">See what your market is already asking.</h1>
        <p class="lead hero-lead">Send your site, industry, city, and service line. Paid snapshots start at $2,500; ongoing radar starts at $9,500/month.</p>
      </div>
    </section>
    ${renderPricingSection('01 &middot; Pricing')}
    <section class="section-lg dot-bg">
      <div class="container">
        <div class="request-layout">
          <div class="copy-stack">
            <div class="section-num">02 &middot; What to send</div>
            <h2 class="h-1">Enough context to read the market cleanly.</h2>
            ${list(['First and last name', 'Website, industry, and city', 'The service, procedure, project, or buyer segment you want more demand for'])}
            <div class="notice-card">Do not send patient medical records, passwords, payment details, or regulated personal data through this form.</div>
          </div>
          ${renderRequestForm()}
        </div>
      </div>
    </section>
  `;
}

function renderRequestForm() {
  const recaptchaSiteKey = escapeAttribute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '');

  return `
    <div class="card request-card">
      <div class="mono">Demand snapshot request</div>
      <form class="request-form" data-request-form data-recaptcha-site-key="${recaptchaSiteKey}" novalidate>
        <div class="form-grid">
          ${field('snapshot-firstname', 'firstname', 'First name', 'Jane', 'given-name')}
          ${field('snapshot-lastname', 'lastname', 'Last name', 'Doe', 'family-name')}
          ${field('snapshot-email', 'email', 'Email', 'jane@company.com', 'email', 'email')}
          ${field('snapshot-website', 'website', 'Website', 'https://company.com', 'url')}
          <div class="field">
            <label for="snapshot-industry">Industry</label>
            <select class="select" id="snapshot-industry" name="industry" required data-required aria-describedby="snapshot-industry-error">
              <option value="">Select one</option>
              <option>Elective Healthcare</option>
              <option>High-Ticket Local Services</option>
              <option>B2B Services</option>
            </select>
            <p class="field-error" id="snapshot-industry-error" aria-live="polite"></p>
          </div>
          ${field('snapshot-city', 'city', 'City', 'Los Angeles, Dallas, Miami', 'address-level2')}
          <div class="field field-full">
            <label for="snapshot-service">Service, procedure, or project</label>
            <textarea class="textarea" id="snapshot-service" name="service_procedure_project" placeholder="Example: deep-plane facelift, roof replacement, MSP buyer intent, commercial solar..." required data-required aria-describedby="snapshot-service-error"></textarea>
            <p class="field-error" id="snapshot-service-error" aria-live="polite"></p>
          </div>
          <div class="form-hp" aria-hidden="true">
            <label for="snapshot-company-website">Company website</label>
            <input id="snapshot-company-website" name="company_website" type="text" tabindex="-1" autocomplete="off" />
          </div>
          <div class="form-success-panel field-full" data-form-success hidden tabindex="-1">
            <div class="mono-sm">Request sent</div>
            <h3>We got it.</h3>
            <p>Your snapshot request is in HubSpot. We will review the site, market, and service line before recommending the next step.</p>
            <p class="success-note">Replies come from partners@seykostudios.com.</p>
          </div>
          <p class="form-status field-full" data-form-status aria-live="polite"></p>
          <button type="submit" class="btn btn-primary field-full" data-default-text="Request Free Snapshot">Request Free Snapshot <span class="arrow">&rarr;</span></button>
        </div>
      </form>
    </div>
  `;
}

function field(id, name, label, placeholder, autocomplete = '', type = 'text') {
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      <input class="input" id="${id}" name="${name}" type="${type}" placeholder="${placeholder}" required data-required ${autocomplete ? `autocomplete="${autocomplete}"` : ''} aria-describedby="${id}-error" />
      <p class="field-error" id="${id}-error" aria-live="polite"></p>
    </div>
  `;
}

function renderAbout() {
  return `
    <section class="page-hero">
      <div class="container">
        <div class="hero-eyebrow"><span class="mono">About</span><span class="line"></span><span class="mono">Family-run operation</span></div>
        <h1 class="h-display hero-title">Small team. Senior work. Clear calls.</h1>
        <p class="lead hero-lead">Seyko Studios is a family-run agency operated by a husband-and-wife team. We keep the partner load small so the work stays close, private, and useful.</p>
        <div class="hero-actions">${cta('/request-snapshot')}${ghost('/how-it-works', 'See the system')}</div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionIntro('01 &middot; Operating model', 'No account-manager relay.', 'The people reading the market are the people thinking through the work.')}
        <div class="grid grid-4">
          ${[
            ['Family-run', 'A husband-and-wife operation, built for trust and direct communication.'],
            ['Selective load', 'Few accounts at a time. Limited partner load by design.'],
            ['Private workspaces', 'Client materials stay separated and access stays limited.'],
            ['Operator-facing', 'The deliverable is built for decisions, not performance theater.']
          ].map(item => `
            <div class="soft-card feature-card compact">
              <div class="mono-sm">${item[0]}</div>
              <p>${item[1]}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderClientFit('02 &middot; Client fit')}
    ${renderFinalCta('Work with the people doing the thinking.', 'Send one market and one lane. We will tell you what looks worth inspecting.')}
  `;
}

function renderNotFound() {
  const nextStops = [
    ['Pricing', 'Know the number before we talk.', '/pricing'],
    ['How it works', 'See how we read demand before execution.', '/how-it-works'],
    ['Industries', 'Pick the lane that looks closest to your market.', '/#industries'],
    ['Request Free Snapshot', 'Send one market and one service line.', '/request-snapshot']
  ];

  return `
    <section class="page-hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="hero-eyebrow"><span class="mono">404</span><span class="line"></span><span class="mono">Page not found</span></div>
            <h1 class="h-display hero-title">That page is not on our map.</h1>
            <p class="lead hero-lead">The useful routes are still here. Start with the market, the pricing, or the request page if you already know the lane.</p>
            <div class="hero-actions">
              ${cta('/request-snapshot', 'Request Your Free Snapshot')}
              ${ghost('/', 'Back to home')}
            </div>
          </div>
          ${renderRadarConsole()}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionIntro('Useful next stops', 'No drama. Just the nearest clean path.', 'Choose the page that matches what you came here to figure out.')}
        <div class="grid grid-4">
          ${nextStops.map(stop => `
            <a class="soft-card feature-card compact" href="${stop[2]}">
              <div class="mono-sm">${stop[0]}</div>
              <p>${stop[1]}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderFinalCta('Need a sharper market read?', 'Send one market and one service line. We will tell you whether the first snapshot makes sense.', 'Request Your Free Snapshot')}
  `;
}

function renderLegalPage(slug) {
  const content = {
    privacy: {
      kicker: 'Privacy Policy',
      title: 'Privacy, plainly.',
      lead: `Last updated ${legalUpdated}. This page explains how Seyko Studios handles website inquiries and business contact information.`,
      sections: [
        ['Information we collect', 'We may collect name, company, work email, website, industry, market, project details, and any information you choose to send through a form or email. We may also receive basic technical data such as IP address, browser type, referring page, and site usage data.'],
        ['How we use information', 'We use information to respond to inquiries, prepare demand snapshots, evaluate fit, improve the website, protect the business, and manage client relationships.'],
        ['How we share information', 'We do not sell personal information. We may share limited information with service providers that help operate the website, email, analytics, hosting, security, or client workspaces. We may also disclose information if required by law or to protect rights and safety.'],
        ['California and other privacy rights', 'Depending on where you live and whether a law applies to us, you may have rights to request access, correction, deletion, or information about how your personal information is handled. Email partners@seykostudios.com to make a request.'],
        ['Retention', 'We keep inquiry and client information only as long as needed for the purposes described here, unless a longer period is required for legal, tax, security, or legitimate business reasons.'],
        ['Contact', 'Questions about privacy can be sent to partners@seykostudios.com.']
      ]
    },
    terms: {
      kicker: 'Terms of Use',
      title: 'Clear terms for serious work.',
      lead: `Last updated ${legalUpdated}. These terms govern use of the public Seyko Studios website.`,
      sections: [
        ['Website content', 'The website is for general business information. It is not medical, legal, financial, tax, advertising compliance, or professional advice.'],
        ['No guaranteed outcomes', 'Demand intelligence can improve decision quality, but we do not guarantee revenue, rankings, consults, estimates, quote requests, sales conversations, or any specific business result.'],
        ['Engagements', 'Paid work requires a separate written agreement or accepted proposal. If there is a conflict between this page and a signed agreement, the signed agreement controls.'],
        ['Intellectual property', 'The Seyko Studios name, site copy, design, frameworks, and public materials belong to Seyko Studios or its licensors. Do not copy, resell, or misrepresent them.'],
        ['Acceptable use', 'Do not attack, scrape aggressively, disrupt, reverse engineer, or use the website in a way that harms Seyko Studios or other users.'],
        ['Contact', 'Questions about these terms can be sent to partners@seykostudios.com.']
      ]
    },
    'data-security': {
      kicker: 'Data and Security',
      title: 'Private by default.',
      lead: `Last updated ${legalUpdated}. This page describes our baseline approach to client and inquiry data.`,
      sections: [
        ['Public forms', 'Do not send patient medical records, protected health information, payment details, passwords, or highly sensitive personal data through public website forms.'],
        ['Client workspaces', 'Client materials are kept in separated workspaces with limited access. We use client information only for the engagement or inquiry.'],
        ['Healthcare data', 'We do not request patient-level medical data for a public demand snapshot. If a healthcare engagement ever requires regulated data, that work must be handled under a separate written agreement with appropriate safeguards.'],
        ['Vendors', 'We use reputable tools for hosting, email, storage, analytics, and workflow. Vendor access is limited to what is needed to provide the service.'],
        ['AI-assisted work', 'AI may help organize and synthesize market research, but we avoid sending sensitive client materials into tools unless the engagement setup permits it. Human review decides what is delivered.'],
        ['Security contact', 'Send security questions or concerns to partners@seykostudios.com.']
      ]
    },
    accessibility: {
      kicker: 'Accessibility',
      title: 'The site should be usable.',
      lead: `Last updated ${legalUpdated}. We aim to make the Seyko Studios website accessible and usable for as many people as possible.`,
      sections: [
        ['Our approach', 'We design for readable contrast, keyboard navigation, semantic structure, responsive layouts, visible focus states, and accessible form labels.'],
        ['Standards', 'We use widely recognized accessibility practices, including WCAG-informed design decisions, as a practical baseline for the website.'],
        ['Feedback', 'If you find an accessibility issue, email partners@seykostudios.com with the page URL, a short description, and the assistive technology or browser involved if relevant.'],
        ['Ongoing work', 'Accessibility is reviewed as the site changes. We will prioritize fixes that block access to core content or the request form.']
      ]
    }
  }[slug];

  return `
    <section class="page-hero legal-hero">
      <div class="container-tight">
        <div class="section-num">${content.kicker}</div>
        <h1 class="h-display hero-title">${content.title}</h1>
        <p class="lead hero-lead">${content.lead}</p>
      </div>
    </section>
    <section class="section">
      <div class="container-tight legal-stack">
        ${content.sections.map(section => `
          <article class="legal-section">
            <h2>${section[0]}</h2>
            <p>${section[1]}</p>
          </article>
        `).join('')}
        <div class="notice-card">These pages are implementation-ready baseline copy, not a substitute for legal advice from counsel.</div>
      </div>
    </section>
  `;
}

function renderFamilyBand() {
  return `
    <section class="section">
      <div class="container">
        <div class="family-band soft-card">
          <div>
            <div class="section-num">Family-run</div>
            <h2 class="h-2">Husband-and-wife operated. Senior attention by design.</h2>
          </div>
          <p>We keep the agency small so the work stays close to the market read, the client context, and the actual decision. No account-manager relay. No bloated handoff.</p>
        </div>
      </div>
    </section>
  `;
}

function renderFinalCta(title, lead, ctaLabel = 'Request a demand snapshot') {
  return `
    <section class="section-lg dot-bg">
      <div class="container">
        <div class="final-cta">
          <div>
            <div class="section-num">Next step</div>
            <h2 class="h-display">${title}</h2>
            <p class="lead">${lead}</p>
          </div>
          <div class="final-cta-actions">
            ${cta('/request-snapshot', ctaLabel)}
            <a href="mailto:partners@seykostudios.com" class="btn btn-ghost">partners@seykostudios.com</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderPage(slug = 'home') {
  const page = getPageMeta(slug);
  const body = {
    home: renderHome,
    'elective-healthcare': () => renderIndustry('elective-healthcare'),
    'local-services': () => renderIndustry('local-services'),
    'b2b-services': () => renderIndustry('b2b-services'),
    'how-it-works': renderHowItWorks,
    'request-snapshot': renderRequestSnapshot,
    pricing: renderPricingPage,
    about: renderAbout,
    'not-found': renderNotFound,
    privacy: () => renderLegalPage('privacy'),
    terms: () => renderLegalPage('terms'),
    'data-security': () => renderLegalPage('data-security'),
    accessibility: () => renderLegalPage('accessibility')
  }[page.slug];

  return `${renderNav(page.slug)}<main>${body()}</main>${renderFooter()}`;
}
