/**
 * Site content — English (served under /en prefix).
 */
import type { SiteContent } from './types';

export const content: SiteContent = {
  meta: {
    title: 'Design Web — Websites for schools, businesses and projects',
    description:
      'We build tailored websites for schools, businesses, blogs, and online stores… and showcase them running in real time. Premium design, speed and SEO from day one.',
    keywords:
      'web agency, websites for schools, corporate websites, blogs, online stores, live showcase, professional web design, web development',
  },

  shared: {
    footerTagline:
      'We build professional websites for schools, businesses and creators, showcasing them running live in real time.',
    footerAbout:
      'Custom websites for schools, companies, blogs, and online stores with premium design, top speed, and technical optimization.',
    ctaTitle: 'Ready to get your website live?',
    ctaLead:
      'Tell us about your project —whether for a school, a business, a blog, or a store— and get a clear proposal in under 48 hours. No strings attached.',
    ctaBtn: 'Start a project',
    ctaBtnAlt: 'See our work',
    backHome: 'Back to home',
    newTab: 'Opens in a new tab',
  },

  home: {
    hero: {
      eyebrow: 'Tailored web development · Live showcase',
      titlePre: 'Schools, businesses or blogs:',
      titleGrad: ' your website ready',
      titlePost: ' and running live.',
      lead: 'Design Web is your studio and catalogue: explore real projects running in real time for schools, companies, blogs, and stores. Pick the type of website you need and launch your site with premium design, speed and SEO from day one.',
      miniTitle: 'Your project, running in real time.',
      ctaPrimary: { label: 'See live projects', href: '#showcase' },
      ctaSecondary: { label: "Let's talk about your site", href: '/en/contact' },
      hint: 'Schools & institutions · Companies & services · Blogs & media · Online stores',
      floatA: { title: 'Live right now', sub: 'lumenstudio.dev' },
      floatB: { title: '+30 projects', sub: 'running in real time' },
    },
    showcase: {
      eyebrow: 'Live showcase',
      title: 'Projects running right now',
      lead: "We don't show static screenshots or mockups: these sites are published and active for real clients. Click through and browse them yourself.",
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
      ],
      ghost: {
        title: 'Yours could be next',
        desc: 'Your website —for your school, company, blog, or store— published and live, so you can watch it grow in real time.',
        cta: 'Start my project',
        href: '/en/contact',
      },
    },
    services: {
      eyebrow: 'Services',
      title: 'We build the digital presence your organization needs',
      lead: 'Complete, transparent, tailored solutions for every industry: we pick modern technology for performance, security, and durability.',
      items: [
        {
          icon: 'school',
          title: 'Schools & Institutions',
          desc: 'Web platforms designed for admissions, school calendars, and communication with families and students. Centralizing your institution info with prestige and clarity.',
          href: '/en/services#landing',
        },
        {
          icon: 'cart',
          title: 'Online Stores & Commerce',
          desc: 'Fast, secure e-commerce platforms to sell physical or digital products and collect payments online with built-in catalogue and checkout.',
          href: '/en/services#store',
        },
        {
          icon: 'building',
          title: 'Companies, Services & Blogs',
          desc: 'Solid digital presence for professional firms, consultancies, and media publications or blogs that need to project authority and confidence.',
          href: '/en/services#corporate',
        },
        {
          icon: 'wrench',
          title: 'Website Redesign & Support',
          desc: 'We modernize, speed up, and maintain your existing website: design revamps, domain migrations, speed boosts, and new sections without starting from scratch.',
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
          desc: 'We learn about your organization, audience, and goals in an initial consultation.',
        },
        {
          num: '02',
          title: 'Design',
          desc: 'Visual proposal and content structure tailored to your identity. We iterate until you love it.',
        },
        {
          num: '03',
          title: 'Development',
          desc: 'Built with Astro and modern standards: ultra-fast, secure, and responsive on all devices.',
        },
        {
          num: '04',
          title: 'Live launch',
          desc: 'We publish your site with domain and SSL ready, and add it to our real-time showcase.',
        },
      ],
    },
    quote: {
      text: 'Design Web did not just build our website: they showed it to us running live from day one. Total transparency, zero surprises, and genuine ongoing support.',
      author: 'María Gutiérrez',
      role: 'Founder · Verde Market',
    },
    cta: {
      title: 'Your digital presence, ready to stand out',
      lead: 'Honest, transparent guidance on what your school, business, blog, or store actually needs.',
      btnPrimary: { label: "Let's talk", href: '/en/contact' },
      btnSecondary: { label: 'See how we work', href: '/en/services' },
    },
  },

  services: {
    page: {
      eyebrow: 'Services',
      title: 'Web solutions that work and show',
      lead: 'For schools, companies, blogs, and online stores: from a clear quote to a live delivery, this is how we craft every Design Web project.',
    },
    items: [
      {
        icon: 'school',
        title: 'Schools & Institutions',
        desc: 'Web platforms designed to streamline admissions, centralize announcements, and project your educational institution identity with clarity.',
        features: [
          'Institutional identity, heritage, and prestige.',
          'Admissions, requirements, and enrollment forms.',
          'Academic calendar and official announcements section.',
          'Direct contact channel for families and students.',
        ],
        anchor: 'landing',
        cta: { label: 'Request a quote', href: '/en/contact' },
      },
      {
        icon: 'cart',
        title: 'Online Stores & Commerce',
        desc: 'Fast, modern, and secure e-commerce platforms to sell physical or digital products and manage orders with peace of mind.',
        features: [
          'Intuitive management for catalogue, inventory, and product variants.',
          '100% secure payment gateways (credit/debit cards and bank transfers).',
          'Easy admin dashboard designed for your day-to-day business.',
          'Automated invoices, receipts, and order notifications.',
        ],
        anchor: 'store',
        cta: { label: 'Request a quote', href: '/en/contact' },
      },
      {
        icon: 'building',
        title: 'Companies, Services & Blogs',
        desc: 'A professional and editorial presence that builds trust among clients and readers, reflecting corporate solidity from the first click.',
        features: [
          'Clear layout to showcase services, team, and case studies.',
          'Blog and news module optimized for easy reading and sharing.',
          'Bilingual option (ES / EN) ideal for international reach.',
          'Flawless display and instant loading on any mobile device.',
        ],
        anchor: 'corporate',
        cta: { label: 'Request a quote', href: '/en/contact' },
      },
      {
        icon: 'wrench',
        title: 'Website Redesign & Support',
        desc: 'We renew, accelerate, and maintain your current website: modern visual redesign, hosting & domain migration, new sections, and continuous maintenance.',
        features: [
          'Modern visual redesign adapted to phones and tablets.',
          'Extreme page speed optimization and Core Web Vitals audit.',
          'Safe hosting, domain, and data migration without downtime.',
          'Continuous technical support, security updates, and enhancements.',
        ],
        anchor: 'seo',
        cta: { label: 'Request a quote', href: '/en/contact' },
      },
    ],
    pricing: {
      eyebrow: 'Pricing',
      title: 'Plans tailored to your project type',
      lead: 'Indicative, transparent pricing. Every solution is tailored to the goals of your organization.',
      plans: [
        {
          name: 'Starter',
          badge: 'Schools & Projects',
          tagline: 'Ideal for schools, educational institutions, community projects, or institutional websites.',
          price: 'From $490',
          priceNote: 'One-time · Delivered in 7–10 days',
          featured: false,
          features: [
            '1 to 3 optimized institutional pages',
            'Academic info & admissions module',
            'Inquiry and direct contact form',
            'Mobile-responsive design for phones and tablets',
            'Google Maps location + Basic technical SEO',
            'Domain, hosting setup & SSL certificate ready',
          ],
          cta: { label: 'Start a project', href: '/en/contact' },
        },
        {
          name: 'Professional',
          badge: 'Companies & Services',
          tagline: 'The corporate solution for companies, consulting firms, service providers, or blogs with regular articles.',
          price: 'From $1,290',
          priceNote: 'One-time · Delivered in 2–3 weeks',
          featured: true,
          features: [
            'Up to 8 corporate pages or complete Blog with articles',
            'Services catalogue & interactive portfolio',
            'Custom premium design + Bilingual ES/EN option',
            'WhatsApp & lead capture integration',
            'Advanced SEO + Google Analytics setup',
            'Easy editor panel + 3 months of technical support',
          ],
          cta: { label: 'Start my website', href: '/en/contact' },
        },
        {
          name: 'Online Store',
          badge: 'Sell Products',
          tagline: 'Robust e-commerce for brands and businesses selling physical or digital products online.',
          price: 'From $2,490',
          priceNote: 'One-time · Delivered in 3–5 weeks',
          featured: false,
          features: [
            'Unlimited product catalogue & stock tracking',
            'Secure payment gateways (Cards & Transfers)',
            'Shopping cart & shipping calculations',
            'Product SEO optimization',
            'One-on-one training to manage your store',
            '3 months of included technical maintenance',
          ],
          cta: { label: 'Start my store', href: '/en/contact' },
        },
      ],
      note: 'Need a custom portal or an editorial blog at scale? We also build 100% bespoke projects and provide monthly maintenance. Reach out.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'How long until my website is live?',
          a: 'An institutional or landing site is usually live in 7–10 days; a corporate or blog site in 2–3 weeks; an online store in 3–5 weeks. We always provide a clear timeline before starting.',
        },
        {
          q: 'What is included in the price?',
          a: 'Custom design, technical development, content structure, domain setup, SSL, analytics, and launch. No hidden fees: our proposal details every single line item.',
        },
        {
          q: 'Do I need technical skills to manage it?',
          a: 'No. We provide a simple panel to edit text, upload photos, or publish articles, and train you in a walkthrough session. If you ever have questions, we are just a message away.',
        },
        {
          q: 'What about domain and hosting?',
          a: 'We configure them for you (or connect them if you already have them). Everything is registered under your name and documented clearly.',
        },
        {
          q: 'Will my site be featured in the live showcase?',
          a: 'Yes. Our featured projects remain in Design Web’s live showcase while active — it is our biggest proof of quality and our best business card.',
        },
      ],
    },
    cta: {
      title: 'Ready to strengthen your digital presence?',
      btnLabel: 'Book a call',
      btnHref: '/en/contact',
    },
  },

  about: {
    page: {
      eyebrow: 'About',
      title: 'A studio that shows what it builds',
      lead: 'Real results, not empty promises. Explore and inspect the quality of every project we develop in our live showcase.',
    },
    story: {
      heading: 'Our story',
      paragraphs: [
        'Design Web was founded on a simple conviction: organizations deserve to see exactly how their website works before considering it done. Too many agencies sell sites with static mockups that might not even work properly. We chose the opposite path.',
        'We build sites using modern web technology —ultra-fast, secure, and easy to maintain— and showcase them running in real time. If a project is in our showcase, it is live and active.',
        'We partner with schools, educational institutions, businesses, blogs, and online stores to establish a modern, functional digital presence that lives up to their vision. Every finished project backs our commitment and becomes part of our living portfolio.',
      ],
    },
    values: {
      eyebrow: 'Values',
      title: 'What drives us',
      items: [
        {
          icon: 'external',
          title: 'Total transparency',
          desc: 'Clear quotes, visible milestones, and a public showcase of everything we build.',
        },
        {
          icon: 'zap',
          title: 'Real performance',
          desc: 'Every site is measured: speed, accessibility, and SEO backed by data, not opinions.',
        },
        {
          icon: 'pen',
          title: 'Purpose-driven design',
          desc: 'Aesthetics must serve a function. Every visual decision supports an objective of your institution or business.',
        },
        {
          icon: 'message',
          title: 'Close to the client',
          desc: 'Fast communication, clear language, and zero unnecessary tech jargon.',
        },
      ],
    },
    team: {
      eyebrow: 'Team',
      title: 'The people behind the pixels',
      lead: 'A small, focused team: fewer meetings, more quality work delivered.',
      members: [
        {
          initials: 'PX',
          name: 'Firstname Lastname',
          role: 'Founder · Design & direction',
          bio: 'TODO: replace with actual team member profile.',
        },
        {
          initials: 'PX',
          name: 'Firstname Lastname',
          role: 'Development & technology',
          bio: 'TODO: replace with actual team member profile.',
        },
        {
          initials: 'PX',
          name: 'Firstname Lastname',
          role: 'Strategy & SEO',
          bio: 'TODO: replace with actual team member profile.',
        },
      ],
    },
    cta: {
      title: 'Work with a team that demonstrates its craft',
      lead: 'Tell us your idea: we will get back to you with a clear proposal in under 48 hours.',
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
        'The form prepares an email with your message ready. If you prefer, write to us directly at the email below.',
      items: [
        {
          icon: 'mail',
          title: 'Email',
          text: 'hola@pixelweb.dev',
          href: 'mailto:hola@pixelweb.dev',
          hint: 'Reply in < 24 hrs',
        },
        {
          icon: 'phone',
          title: 'WhatsApp',
          text: '+34 600 000 000',
          href: 'https://wa.me/34600000000',
          hint: 'Immediate reply',
        },
      ],
    },
    form: {
      eyebrow: 'Form',
      title: 'Tell us your idea',
      lead: 'Fill out the form and we will receive it right away. The more details you share, the better our proposal.',
      labels: {
        name: 'Your name',
        namePh: 'What is your name?',
        email: 'Your email',
        emailPh: 'where@youreceive.com',
        type: 'What do you need?',
        typePh: 'Pick an option',
        budget: 'Approximate budget',
        budgetPh: 'Pick an option',
        message: 'Tell us about your project',
        messagePh: 'Goal, sector, references, timeline… anything you would like to share.',
        submit: 'Send message',
        privacy: 'By sending you agree that we use your data only to reply to you. Zero spam.',
      },
      types: [
        { value: 'school', label: 'School or Educational Institution' },
        { value: 'corporate', label: 'Company or Professional Services' },
        { value: 'blog', label: 'Blog, Magazine or Digital Media' },
        { value: 'store', label: 'Online Store / E-commerce' },
        { value: 'landing', label: 'Landing Page for Campaigns' },
        { value: 'redesign', label: 'Website Redesign / Renovation' },
        { value: 'other', label: 'Other type of project' },
      ],
      budgets: [
        { value: 'under-1000', label: 'Under $1,000' },
        { value: '1000-2500', label: '$1,000 – $2,500' },
        { value: '2500-5000', label: '$2,500 – $5,000' },
        { value: '5000-10000', label: '$5,000 – $10,000' },
        { value: '10000-20000', label: '$10,000 – $20,000' },
        { value: 'over-20000', label: 'Over $20,000' },
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
      lead: 'Practical criteria on web development, SEO, and digital performance. Honest insights for smart decisions.',
    },
    empty: 'No articles published yet. Come back soon!',
    readMore: 'Read article',
    tagsLabel: 'Tags',
  },
};
