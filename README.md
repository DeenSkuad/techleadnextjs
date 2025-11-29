# 🚀 Launch UI – Next.js Template

**Landing page components built with React, Shadcn/ui and Tailwind that you can copy/paste into your project.**

This template is meant to serve as a starting point for building a website with [Launch UI](https://launchuicomponents.com).

It comes with a basic Next.js app setup, Tailwind and all the components you need to get started.

<img src="https://launchuicomponents.com/og.jpg" alt="Launch UI components mockups" />

* [Preview](https://launchuicomponents.com/preview)
* [Documentation](https://www.launchuicomponents.com/docs/getting-started/introduction)
* [Get all components](https://launchuicomponents.com/pricing)

## Getting Started

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

All the components are in the `components` folder.

## License

This project is licensed under the [MIT License](https://github.com/launch-ui/launch-ui/blob/main/LICENSE.md).

## Todo



### Feature Tambahan (Cadangan)
7. **Cost Estimator / Quote Calculator** - Multi-step form untuk estimate kos projek
   - Jenis aplikasi (Web, Mobile, PWA)
   - Design complexity (Basic, Standard, Premium)
   - Features diperlukan (Auth, E-commerce, Payment, Chat)
   - Admin features (User Management, Reports)
   - Industri/Sektor
   - Contact info → Email result
8. **Project Timeline Calculator** - Anggaran tempoh projek berdasarkan scope
9. **Case Studies / Portfolio Detail Pages** - Page individual untuk setiap projek
    - Challenge & Solution
    - Technologies used
    - Results & Metrics
    - Client testimonial
10. **Blog / Tech Insights** - Content marketing untuk SEO
11. **Career / Join Us Page** - Untuk hiring
12. **Interactive Services Comparison** - Jadual perbandingan packages/plans

## Completed Updates (30 Nov 2024)

### Asset Management Page
- [x] Animated Marquee untuk Trusted By Logos dengan logo lebih besar
- [x] Hero Badge design baru dengan style pill (badgeLabel + badgeText)
- [x] FAQ section dikemaskini dengan soalan relevan (QR Code, Mobile, Keselamatan, Sokongan)

### Homepage
- [x] FAQ Section dengan Tabs + Accordion (3 kategori: General, Project & Development, Support)
- [x] Testimonials dikemaskini dengan content umum (kerjasama, latihan, perisian)
- [x] CTA Section dengan floating team member avatars (Razlan, Zahrin, Ammar, Din)

### Hero Parallax
- [x] Badge ditambah ("Kerja Kami" / "Our Work")
- [x] Title & Description ditranslate (EN/MS)
- [x] Content dikemaskini: "Digital Experiences Strategically Engineered To Perform"

### Navbar
- [x] WhatsApp button text menggunakan translation `navigation.talkToUs`

### Translations (EN & MS)
- [x] `heroParallax` - badge, title, titleLine2, description
- [x] `faq` - 3 kategori dengan 13 soalan total
- [x] `testimonials` - 5 testimoni baru
- [x] `assetManagement.faq` - 6 soalan relevan
- [x] `assetManagement.hero` - badgeLabel, badgeText
- [x] `assetManagement.problem` - title, titleHighlight (fix highlight word)
- [x] `products.hrms.heroImageAlt` & `products.ecommerce.heroImageAlt` - fix missing keys 
