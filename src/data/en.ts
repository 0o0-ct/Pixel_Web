/**
 * Site content — English (served under /en prefix).
 * NOTE(real): showcase projects, prices and testimonials are demo content;
 * replace with the agency's real data.
 */
import type { SiteContent } from './types';

export const content: SiteContent = {
  meta: {
    title: 'Pixel Web — Web agency with a live showcase',
    description:
      'We build landing pages, online stores and corporate websites… and show them running in real time. Premium design, speed and SEO from day one.',
    keywords:
      'web agency, web design, landing pages, online stores, corporate websites, live showcase, web development',
  },

  shared: {
    footerTagline:
      'We design professional websites and showcase them live, in real time. Your business, on screen.',
    footerAbout:
      'Landing pages, online stores and corporate sites with premium design, top speed and search-optimized.',
    ctaTitle: 'Ready to get your website live?',
    ctaLead:
      'Tell us about your idea and get a clear proposal in under 48 hours. No strings attached.',
    ctaBtn: 'Start a project',
    ctaBtnAlt: 'See our work',
    backHome: 'Back to home',
    newTab: 'Opens in a new tab',
  },

  home: {
    hero: {
      eyebrow: 'Web agency · Live showcase',
      titlePre: 'We build websites that',
      titleGrad: ' sell',
      titlePost: ' — and we prove it live.',
      lead: 'Pixel Web is your agency and your catalogue: explore real projects running in real time, pick the service you need and launch your site with premium design, speed and SEO from day one.',
      ctaPrimary: { label: 'See live projects', href: '#showcase' },
      ctaSecondary: { label: "Let's talk about your site", href: '/en/contact' },
      hint: 'Landing pages · Online stores · Corporate sites · SEO',
      floatA: { title: 'Live right now', sub: 'lumenstudio.dev' },
      floatB: { title: '+30 projects', sub: 'running in real time' },
    },
    stats: {
      eyebrow: 'Results',
      items: [
        { value: '12+', label: 'Projects launched' },
        { value: '99.9%', label: 'Live uptime' },
        { value: '4.9/5', label: 'Average client rating' },
        { value: '48h', label: 'First proposal' },
      ],
    },
    showcase: {
      eyebrow: 'Live showcase',
      title: 'Projects running right now',
      lead: "We don't show frozen screenshots: these sites are published and active. Click through and browse them yourself.",
      liveLabel: 'Live',
      visitLabel: 'Visit website',
      items: [
        {
          name: 'Centro Educativo Vocacional San José',
          url: 'https://centroeducativovocacionalsanjose.edu.gt/',
          desc: 'Official site of the school in Mixco, Guatemala: comprehensive academic and technical education.',
          tags: ['Education', 'Corporate'],
          theme: 'linear-gradient(135deg,#0b1020 0%,#1e2749 50%,#0e3a5f 100%)',
          image: 'cvsj',
        },
        {
          name: 'Lumen Studio',
          url: 'https://lumenstudio.dev',
          desc: 'Portfolio for a creative studio with fluid animations.',
          tags: ['Web design', 'Portfolio'],
          theme: 'linear-gradient(135deg,#06283d 0%,#0e4d64 48%,#0f766e 100%)',
        },
        {
          name: 'Verde Market',
          url: 'https://verdemarket.shop',
          desc: 'Online store for organic products with integrated checkout.',
          tags: ['E-commerce', 'Store'],
          theme: 'linear-gradient(135deg,#052e1f 0%,#166534 55%,#3f6212 100%)',
        },
        {
          name: 'Atlas Legal',
          url: 'https://atlaslegal.es',
          desc: 'Corporate website for a law firm with consultation booking.',
          tags: ['Corporate', 'Booking'],
          theme: 'linear-gradient(135deg,#111827 0%,#312e81 55%,#1e1b4b 100%)',
        },
        {
          name: 'Nómada Travel',
          url: 'https://nomadatravel.travel',
          desc: 'Travel landing page with search and dynamic deals.',
          tags: ['Landing', 'Travel'],
          theme: 'linear-gradient(135deg,#431407 0%,#9a3412 50%,#a16207 100%)',
        },
        {
          name: 'Café Norte',
          url: 'https://cafenorte.cafe',
          desc: 'Coffee shop site with digital menu and pickup orders.',
          tags: ['Local', 'Digital menu'],
          theme: 'linear-gradient(135deg,#1c1917 0%,#44403c 55%,#78350f 100%)',
        },
        {
          name: 'FitPulse',
          url: 'https://fitpulse.fit',
          desc: 'Fitness app with personalized plans and a community.',
          tags: ['App', 'Subscription'],
          theme: 'linear-gradient(135deg,#4a044e 0%,#86198f 50%,#7e22ce 100%)',
        },
      ],
      ghost: {
        title: 'Yours could be next',
        desc: 'Your website, published and live, so you can watch it grow in real time.',
        cta: 'Start my project',
        href: '/en/contact',
      },
    },
    services: {
      eyebrow: 'Services',
      title: 'Everything your business needs to sell online',
      lead: 'Complete, transparent, tailored solutions: we pick technology for performance, not for hype.',
      items: [
        {
          icon: 'zap',
          title: 'Landing pages',
          desc: 'High-converting pages for campaigns and launches.',
          href: '/en/services#landing',
        },
        {
          icon: 'cart',
          title: 'Online stores',
          desc: 'E-commerce ready to sell, with payments and stock built in.',
          href: '/en/services#store',
        },
        {
          icon: 'building',
          title: 'Corporate websites',
          desc: 'Professional presence that builds trust from the first click.',
          href: '/en/services#corporate',
        },
        {
          icon: 'trending',
          title: 'SEO & performance',
          desc: 'Extreme speed and search ranking so people find you.',
          href: '/en/services#seo',
        },
      ],
    },
    process: {
      eyebrow: 'How we work',
      title: 'From idea to launch in 4 steps',
      lead: 'A clear process with visible milestones at every stage. You always know what is happening.',
      steps: [
        {
          num: '01',
          title: 'Discovery',
          desc: 'We learn about your business, audience and goals in a 30-minute session.',
        },
        {
          num: '02',
          title: 'Design',
          desc: 'Visual proposal and content structure. We iterate until you love it.',
        },
        {
          num: '03',
          title: 'Development',
          desc: 'Built with Astro and modern standards: fast, secure and accessible.',
        },
        {
          num: '04',
          title: 'Live launch',
          desc: 'We publish your site and add it to our real-time showcase.',
        },
      ],
    },
    quote: {
      text: 'Pixel Web did not just build our website: they showed it to us running live from day one. Total transparency and zero surprises.',
      author: 'María Gutiérrez',
      role: 'Founder · Verde Market',
    },
    cta: {
      title: 'Your website could be online this very week',
      lead: 'Book a free call and we will tell you exactly what your project needs.',
      btnPrimary: { label: "Let's talk", href: '/en/contact' },
      btnSecondary: { label: 'See how we work', href: '/en/services' },
    },
  },

  services: {
    page: {
      eyebrow: 'Services',
      title: 'Web solutions that work and show',
      lead: 'From a clear quote to a live delivery: this is how we run every Pixel Web project.',
    },
    items: [
      {
        icon: 'zap',
        title: 'Landing pages',
        desc: 'One page, one goal: turning visitors into customers. Designed with copywriting and visual hierarchy focused on results.',
        features: [
          'Custom design for your brand',
          'Conversion-focused copy and structure',
          'Blazing fast (green Core Web Vitals)',
          'Forms and bookings integrated',
        ],
        anchor: 'landing',
        cta: { label: 'Request a quote', href: '/en/contact' },
      },
      {
        icon: 'cart',
        title: 'Online stores',
        desc: 'Complete e-commerce: catalogue, cart, payment gateways and order management without friction.',
        features: [
          'Catalogue and stock management',
          'Payments and shipping integrated',
          'Easy admin panel',
          'Technical SEO for every product',
        ],
        anchor: 'store',
        cta: { label: 'Request a quote', href: '/en/contact' },
      },
      {
        icon: 'building',
        title: 'Corporate websites',
        desc: 'The digital face of your company: elegant, clear and designed to convey trust.',
        features: [
          'Content architecture and SEO',
          'Built-in blog ready to grow',
          'Multilingual (Spanish / English)',
          'Accessible and responsive',
        ],
        anchor: 'corporate',
        cta: { label: 'Request a quote', href: '/en/contact' },
      },
      {
        icon: 'trending',
        title: 'SEO & performance',
        desc: 'Your site must be findable and load in an instant. We optimize technically and measure with data.',
        features: [
          'Technical speed and SEO audit',
          'Core Web Vitals optimization',
          'Meta tags and structured data',
          'Sitemap, robots and analytics configured',
        ],
        anchor: 'seo',
        cta: { label: 'Request a quote', href: '/en/contact' },
      },
    ],
    pricing: {
      eyebrow: 'Pricing',
      title: 'Transparent plans, no fine print',
      lead: 'Indicative starting prices. Every project is quoted individually after a first call.',
      plans: [
        {
          name: 'Landing',
          tagline: 'To launch a campaign or validate an idea.',
          price: 'From €490',
          priceNote: 'One-time · Delivered in 7 days',
          featured: false,
          features: [
            '1 optimized page',
            'Custom design',
            '100% responsive',
            'Contact form',
            'Basic SEO configured',
            'Live publication and showcase',
          ],
          cta: { label: 'Start a landing', href: '/en/contact' },
        },
        {
          name: 'Professional',
          tagline: 'The complete option for growing businesses.',
          price: 'From €1,290',
          priceNote: 'One-time · Delivered in 2–3 weeks',
          featured: true,
          features: [
            'Up to 8 pages or blog',
            'Premium custom design',
            'Multilingual ES/EN',
            'Advanced SEO + analytics',
            'Content editing panel',
            '3 months of support included',
          ],
          cta: { label: 'Start my website', href: '/en/contact' },
        },
        {
          name: 'Online store',
          tagline: 'To sell products with every guarantee.',
          price: 'From €2,490',
          priceNote: 'One-time · Delivered in 3–5 weeks',
          featured: false,
          features: [
            'Unlimited catalogue and stock',
            'Secure payment gateways',
            'Orders and shipping management',
            'Technical SEO per product',
            'Training included',
            '3 months of support included',
          ],
          cta: { label: 'Start my store', href: '/en/contact' },
        },
      ],
      note: "Doesn't fit your case? We also do redesigns, monthly maintenance and custom projects. Tell us about it.",
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'How long until my website is ready?',
          a: 'A landing page is usually live in 7 days; a professional site in 2–3 weeks; an online store in 3–5 weeks. You always get a concrete timeline before we start.',
        },
        {
          q: 'What exactly does the price include?',
          a: 'Design, development, base copy, domain setup, SSL, analytics and publication. No hidden costs: the quote breaks down every line item.',
        },
        {
          q: 'Do I need to know about technology to manage it?',
          a: "No. You get a simple panel to edit texts and images, plus a training session. For bigger changes, we are one message away.",
        },
        {
          q: 'What about the domain and hosting?',
          a: 'We take care of buying and configuring them for you (or connecting yours if you already have them). Everything documented.',
        },
        {
          q: "Will my site be in the showcase even with a one-time payment?",
          a: "Yes. All our projects are part of Pixel Web's public showcase while they are live — that is our calling card.",
        },
      ],
    },
    cta: {
      title: 'Shall we talk about your project?',
      lead: "The first call is free and without obligation. You'll leave knowing what you need and what it costs.",
      btnLabel: 'Book a call',
      btnHref: '/en/contact',
    },
  },

  about: {
    page: {
      eyebrow: 'About us',
      title: 'An agency that shows what it does',
      lead: 'No hype: every project we build can be visited, browsed and verified in our live showcase.',
    },
    story: {
      heading: 'Our story',
      paragraphs: [
        'Pixel Web was born from a simple frustration: too many agencies sell websites with pretty screenshots you never know actually work. We decided to do the opposite.',
        'We build sites with modern technology —fast, secure and easy to maintain— and show them running in real time. If something is in our showcase, it is published and live.',
        'Today we help brands, local businesses and founders build a digital presence that truly sells. And every new project joins the proof: our own living catalogue.',
      ],
    },
    values: {
      eyebrow: 'Values',
      title: 'What drives us',
      items: [
        {
          icon: 'external',
          title: 'Total transparency',
          desc: 'Clear quotes, visible progress and a public showcase of everything we do.',
        },
        {
          icon: 'zap',
          title: 'Real performance',
          desc: 'Every website is measured: speed, accessibility and SEO with data, not opinions.',
        },
        {
          icon: 'pen',
          title: 'Purposeful design',
          desc: 'Beautiful should also convert. Every visual decision serves a business goal.',
        },
        {
          icon: 'message',
          title: 'Close to the client',
          desc: 'Fast replies, plain language and no unnecessary jargon.',
        },
      ],
    },
    team: {
      eyebrow: 'Team',
      title: 'The people behind the pixels',
      lead: 'A small, specialized team: fewer meetings, more well-done work.',
      members: [
        {
          initials: 'PX',
          name: 'First Last',
          role: 'Founder · Design & direction',
          bio: 'TODO: replace with the real team profile.',
        },
        {
          initials: 'PX',
          name: 'First Last',
          role: 'Development & technology',
          bio: 'TODO: replace with the real team profile.',
        },
        {
          initials: 'PX',
          name: 'First Last',
          role: 'Strategy & SEO',
          bio: 'TODO: replace with the real team profile.',
        },
      ],
    },
    cta: {
      title: 'Work with a team that shows its work',
      lead: 'Tell us your idea: we will reply with a clear proposal in under 48 hours.',
      btnLabel: "Let's talk",
      btnHref: '/en/contact',
    },
  },

  contact: {
    page: {
      eyebrow: 'Contact',
      title: "Let's talk about your project",
      lead: 'Tell us what you need and we will reply within 24 business hours with the next steps.',
    },
    channels: {
      eyebrow: 'Channels',
      title: 'Other ways to reach us',
      notice:
        'The form opens your email app with the message ready to send. Prefer direct? Use the email below.',
      items: [
        {
          icon: 'mail',
          title: 'Email',
          text: 'hola@pixelweb.dev',
          href: 'mailto:hola@pixelweb.dev',
          hint: 'Reply in < 24h',
        },
        {
          icon: 'phone',
          title: 'WhatsApp',
          text: '+34 600 000 000',
          href: 'https://wa.me/34600000000',
          hint: 'Instant reply',
        },
        {
          icon: 'message',
          title: 'Free call',
          text: '30 minutes · no obligation',
          href: 'mailto:hola@pixelweb.dev?subject=Book%20a%20call',
          hint: 'Book via email',
        },
      ],
    },
    form: {
      eyebrow: 'Form',
      title: 'Tell us your idea',
      lead: 'Fill in the form and we will receive it instantly. The more detail, the better the proposal.',
      labels: {
        name: 'Your name',
        namePh: "What's your name?",
        email: 'Your email',
        emailPh: 'where@you-receive.com',
        type: 'What do you need?',
        typePh: 'Choose an option',
        budget: 'Approximate budget',
        budgetPh: 'Choose an option',
        message: 'Tell us about your project',
        messagePh: 'Goal, timeline, references… anything that comes to mind.',
        submit: 'Send message',
        privacy: "By sending you agree that we use your data only to reply to you. No spam.",
      },
      types: [
        { value: 'landing', label: 'Landing page' },
        { value: 'store', label: 'Online store' },
        { value: 'corporate', label: 'Corporate website' },
        { value: 'redesign', label: 'Redesign an existing site' },
        { value: 'maintenance', label: 'Maintenance or SEO' },
        { value: 'other', label: 'Other' },
      ],
      budgets: [
        { value: 'under-1000', label: 'Under €1,000' },
        { value: '1000-2500', label: '€1,000 – €2,500' },
        { value: '2500-5000', label: '€2,500 – €5,000' },
        { value: 'over-5000', label: 'Over €5,000' },
        { value: 'not-sure', label: 'Not sure yet' },
      ],
      success:
        'Thanks! Your message is ready in your email app. If it did not open, write to us at hola@pixelweb.dev.',
    },
  },

  blogIndex: {
    page: {
      eyebrow: 'Blog',
      title: 'Ideas, guides and what we learn while building',
      lead: 'Practical tips on web design, performance, SEO and online business. No fluff, just data.',
    },
    empty: 'No articles published yet. Come back soon!',
    readMore: 'Read article',
    tagsLabel: 'Tags',
  },
};
