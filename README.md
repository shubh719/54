# FiveFour

Static one-page marketing site for **FiveFour**, a web design agency selling clean, mobile-first websites to Indian small-business owners (shops, cafes, gyms, local services) at honest one-time INR prices with WhatsApp-first communication.

## About the project

- **Stack**: Vite 8 + React 19 (JSX) + Tailwind CSS v4, static site — no backend or CMS.
- **Fonts**: self-hosted Geist Sans (body), Space Grotesk (headings), Material Symbols Outlined (icons).
- **Sections**: Nav, Hero, Services, Portfolio, Process, Why Choose Us, Testimonials, Pricing, FAQ, Contact, Final CTA, Footer.
- **Content**: all copy lives in `src/data/*.js` — edit those files, not the components.
- **Contact form**: sends submissions to [Web3Forms](https://web3forms.com) using an access key from a `.env` file. No keys are committed to the repo.

## Prerequisites

- Node.js 18+ (with npm)
- A free Web3Forms access key — get one at [https://web3forms.com](https://web3forms.com)

## Step-by-step: clone and run

### 1. Clone the repository

```bash
git clone https://github.com/shubh719/54.git
cd 54
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your `.env` file with the Web3Forms key

Copy the example file:

```bash
cp .env.example .env
```

Open `.env` and paste your access key from [web3forms.com](https://web3forms.com):

```
VITE_WEB3FORMS_KEY=your-access-key-here
```

> `.env` is gitignored and never committed. `.env.example` is committed as a template.

### 4. Start the dev server

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`), go to the Contact section and test the form — you should receive the test submission by email.

> **No key yet?** The site still runs: the form falls back to demo mode (a fake 700ms submit that shows the success state) so the UI works without a key.

### 5. Build for production (optional)

```bash
npm run build
npm run preview
```

The static build is written to `dist/` and can be deployed to Netlify, Vercel, or any static host.

## Project structure

```
src/
  App.jsx                 # section composition
  index.css               # design system tokens + all component styles
  components/             # one file per section + shared Icon/Logo/Reveal
  data/                   # content source of truth (edit these)
public/
  privacy.html            # legal pages
  terms.html
.env.example             # committed template for VITE_WEB3FORMS_KEY
```

## Replacing placeholders

Before going live, update the real details in `src/data/site.js`: email, WhatsApp number, social URLs, and the 3rd portfolio card. Testimonials in `src/data/testimonials.js` are drafts, not real client quotes.
