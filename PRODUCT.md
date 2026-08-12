# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

User-specified: Vite + React + Tailwind CSS v4, static site (no backend/CMS).

## Users

Indian small-business owners (shops, cafes, gyms, local services) who need a first or replacement website and are price- and trust-sensitive; they communicate on WhatsApp. (Inferred from INR pricing and WhatsApp-first copy in fivefour-pricing.md; assumption labeled.)

## Product Purpose

FiveFour is a web design agency selling clean, mobile-first websites at honest one-time prices. Success: a visitor understands the offer in seconds and starts contact via form or WhatsApp.

## Positioning

Fixed one-time pricing with no subscriptions or hidden line items, transparent timelines, and WhatsApp-direct communication, for a market used to agency quotes and maintenance fees.

## Operating Context

Business runs on WhatsApp; pricing in INR; client provides content (text/images) before the build clock starts; domain/hosting billed separately at actual cost.

## Capabilities and Constraints

- Static marketing site, 12 sections per Design.md.
- Contact form via Formspree (agent's pick per brief delegation: no backend, no API keys in client; endpoint lives in one config constant).
- Social links open in new tabs (Instagram + WhatsApp + mail at minimum).
- Portfolio: 3 placeholder entries, structured in a data file for easy swap.
- Pricing section renders fivefour-pricing.md content verbatim.
- Palette strictly black/white; Geist Sans 400/500 (body) + Space Grotesk 400-700 (display), self-hosted via @fontsource; Material Symbols Outlined, consistent stroke.

## Brand Commitments

- Name "FiveFour". Black/white-only palette; no new colors, no new fonts.
- Type system: Geist Sans (body) + Space Grotesk (display), self-hosted via @fontsource.
- Outlined Material Symbols throughout (no Filled variants).

## Evidence on Hand

- Design.md (full page spec) and fivefour-pricing.md (verbatim pricing content).
- Absent: real client logos, testimonials, portfolio screenshots, social URLs, Formspree endpoint; shipped as clearly labeled placeholders, synthetic copy marked in code comments.

## Product Principles

1. Honest money talk: fixed prices, no hidden items, support scope stated plainly.
2. Minimalist restraint: remove rather than add; whitespace is the brand.
3. WhatsApp-native service: every ask points to a real conversation.
4. Fast for the customer: Starter sites live in 7-10 days from content received.
5. Placeholders never masquerade as real content.

## Accessibility & Inclusion

WCAG AA throughout (spec-mandated), visible focus states, aria-labels on icon-only controls, reduced-motion respected.