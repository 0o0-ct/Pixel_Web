---
title: 'Website speed and sales: every second counts (with data)'
description: 'Speed is not a technical luxury: it is a conversion metric. Here is what to measure and which improvements pay off most.'
pubDate: 2026-08-05
tags: ['Performance', 'SEO', 'Conversion']
author: 'Design Web team'
---

"My site loads in three seconds — isn't that enough?" It is the question we hear most. The short answer: **it depends on your competition** — and almost always, it is not.

## What the evidence says

The most cited studies have pointed the same way for years:

- 53 % of mobile visits are abandoned if loading takes more than 3 seconds.
- Google uses experience metrics (Core Web Vitals) as a ranking factor.
- Every tenth of a second of improvement in response time can translate into more conversions on online stores.

You do not have to take our word for it: **measure your own bounce rate** in Google Analytics and compare it with the speed reported by PageSpeed Insights. The correlation usually shows up by itself.

## What we measure on every project

We work with three metrics that non-technical people can also understand:

1. **LCP (Largest Contentful Paint)**: how long until the main content is visible. Target: under 2.5 s.
2. **INP (Interaction to Next Paint)**: how long the page takes to respond to your clicks. Target: under 200 ms.
3. **CLS (Cumulative Layout Shift)**: how much the page "dances" while loading. Target: under 0.1.

All three green = Core Web Vitals passed.

## Improvements with the biggest return

If you have to prioritize, start here:

- **Images**: modern formats (WebP/AVIF), exact dimensions and lazy loading. Usually the biggest win for the least effort.
- **Fonts**: serve only the weights you use and preload the critical file.
- **CSS/JS**: remove what is unused and defer third-party scripts (analytics, widgets) until after load.
- **Hosting and caching**: good infrastructure with a CDN does more than a hundred micro-optimizations.

At Design Web we build with **Astro**, which ships minimal HTML by default and defers JavaScript to what is strictly necessary. It is not magic: it is not sending the browser what it does not need.

## The proof is in the showcase

Every project in our [live showcase](/en/services) can be opened and felt. If you want to know how fast your website would load, write to us and we will run a quick audit — no strings attached.
