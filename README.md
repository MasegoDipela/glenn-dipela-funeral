# In Loving Memory of Geremane Joshua Glenn Dipela

A simple, dignified memorial website built with Next.js, TypeScript and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Replace placeholders

1. Add the portrait image at `public/images/malome-glenn-primary.jpg`
   (recommended 1200×1500, 4:5 ratio).
2. Add the official programme PDF at
   `public/programmes/joshua-glenn-dipela-order-of-service.pdf`.

The site will pick these up automatically.

## Where to edit content

All copy, names, dates, and the order of service live in
[`data/memorial.ts`](data/memorial.ts).

## Routes

- `/` — single-page memorial (hero, programme, obituary, info, tribute).
- `/programme` — print-friendly order of service. Use a browser's "Print" to produce a clean A4 sheet.

## Build for production

```bash
npm run build
npm run start
```
