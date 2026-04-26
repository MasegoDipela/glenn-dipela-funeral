You are a senior Next.js frontend engineer, creative director, UX designer, and accessibility specialist.

Build a simple, elegant, emotionally respectful, best-in-class funeral memorial website for:

GEREMANE JOSHUA GLENN DIPELA
27 July 1971 – 21 April 2026
Affectionately known as “Malome Glenn”

The website must be beautiful, calm, dignified, and easy to use for non-technical family members and funeral guests. The highest priority is that visitors can quickly access the programme/order of service for the day’s events and download a PDF version of the programme. Everything else on the site should support that purpose.

Use Next.js with the App Router, TypeScript, Tailwind CSS, and clean component architecture. Use tasteful animation only where it improves the emotional experience. Avoid anything flashy, childish, overly modern, or distracting. The design should impress sophisticated audiences through restraint, polish, typography, spacing, and execution.

PROJECT GOAL
Create a polished memorial website that serves as:
1. A digital funeral programme.
2. A respectful obituary reading experience.
3. A simple practical guide for attendees.
4. A place where family and friends can download the official programme PDF.

CONTENT TO INCLUDE

Person:
- Full name: Geremane Joshua Glenn Dipela
- Also known as: Malome Glenn
- Date of birth / Sunrise: 27 July 1971
- Date of passing / Sunset: 21 April 2026
- Burial date: 01 May 2026
- Cemetery: Silicon Cemetery
- Home venue: 198F Luthuli Park
- Church service venue: Regina Pacis Hall, Seshego

Main message:
“It is with deep sorrow and heavy hearts that we announce the passing of our beloved brother, father, and husband, Joshua Glenn Dipela.”

OBITUARY TEXT
Use this obituary, but lightly polish grammar, punctuation, and flow while preserving the family’s voice and meaning:

Geremane Joshua Glenn Dipela (27 July 1971 – 21 April 2026), affectionately known as “Malome Glenn”, departed this life on 21 April 2026 after a short illness.

Born in 1971, the second child of the late Mr Chris Lefi Dipela and Mrs Mothabela Martha Dipela, Glenn lived a life marked by humility, kindness, and a deep sense of respect for others. He completed his schooling up to matric at Pax Institute, the Catholic Boys School. From a young age, his faith was evident. Raised in the Catholic Church, he served as an altar boy, laying a strong spiritual foundation that remained with him throughout his life.

Glenn will be remembered as a joyful soul — full of jokes, laughter, and warmth. His presence brought light to those around him, and he had a special way of making people feel at ease. A loving and peaceful man, he consistently advocated for harmony and unity in his family and community. His obedience, respect, and calm nature earned him admiration from all who knew him.

He found love and companionship in his wife, Mma Moloto, Meriam Duba, with whom he built a beautiful family. Their union was blessed with three children: two daughters, Tiny and Kopanang, and a son, Thabang. Glenn was a devoted husband and caring father who cherished his family deeply.

Professionally, Glenn worked for a brief period in sales and marketing within the publishing sector, where he was employed by Shutter and Shooter, Heinemann, and Nutrient Publishers, mostly on temporary contracts. In addition, he was entrusted with the responsibility of managing the family bottle store business at Ga Hlahla, a role he carried out with diligence and commitment until its eventual sale. He later became a dedicated member of the Seshego Taxi Association, where he was a full member and actively involved in the industry.

He leaves behind his beloved wife and children, as well as his siblings, Rakgadi Refilwe and Ramogolo Junior Mokone Dipela. His passing leaves a profound void in the hearts of his family, friends, and all who had the privilege of knowing him.

Though his journey on earth has come to an end, his legacy of love, laughter, and peace will live on in the lives he touched.

Rest in eternal peace, Mokone. You will forever be remembered and deeply missed.

ORDER OF SERVICE

Part 1: At Home
Venue: 198F Luthuli Park
- Viewing: 05:30 – 06:30
- Short Prayer: 06:00 – 06:45

Part 2: Regina Pacis Hall, Seshego
- Remarks — Programme Director
- Prayer
- Family Representatives — Dipela Family and Duba Family
- Words of Condolences — Neighbour, Friend, Seshego Taxi Association
- Tributes — Siblings, Children, Message by Wife
- Obituary
- Sermon

Part 3: Silicon Cemetery
- Burial Rites
- Laying of Wreaths
- Vote of Thanks
- Closing Prayer

DESIGN DIRECTION
Create a refined, warm, memorial aesthetic inspired by premium funeral stationery, editorial layouts, and understated event websites.

Visual style:
- Soft neutral palette: warm beige, ivory, charcoal, muted gold, soft brown.
- Avoid harsh black-and-white contrast unless used carefully.
- Use generous whitespace.
- Use elegant typography pairing:
  - Serif for headings, e.g. Playfair Display, Cormorant Garamond, or Libre Baskerville.
  - Sans-serif for body/UI, e.g. Inter, Manrope, or Source Sans 3.
- Make it feel dignified, not corporate.
- Use subtle borders, fine divider lines, and soft gradients.
- Use the supplied portrait images thoughtfully.
- The hero should feel like a premium memorial announcement, with the portrait blended naturally into the design.
- Use a soft fade/blur at the bottom of the portrait image if appropriate, similar to the reference announcement.
- No tacky icons. If icons are needed, use very minimal line icons only.
- Avoid unnecessary sections. Keep the site focused.

SITE STRUCTURE

Single-page website preferred, with smooth anchor navigation:
1. Hero / Memorial introduction
2. Quick access card for Programme
3. Order of Service
4. Download Programme PDF
5. Obituary immersive reading section
6. Practical information / venues
7. Closing tribute

NAVIGATION
The users may not be tech-savvy, so navigation must be extremely clear:
- Sticky top navigation on desktop.
- Simple bottom action bar or sticky button on mobile:
  - “View Programme”
  - “Download PDF”
- Large touch targets.
- Clear section headings.
- No hidden complex menus.
- Smooth scroll to sections.
- Always make it obvious where the programme is.

HERO SECTION
Create a calm full-screen or near-full-screen hero:
- Portrait of Malome Glenn.
- Text:
  “In Loving Memory of”
  “Geremane Joshua Glenn Dipela”
  “27 July 1971 – 21 April 2026”
  “Affectionately known as Malome Glenn”
- Include two prominent buttons:
  - “View Programme”
  - “Download Programme”
- The hero should feel emotional but not dramatic.
- Add a subtle line such as:
  “A life remembered with love, laughter, humility, and peace.”

PROGRAMME SECTION
This is the most important part of the website.

Design it as a clean timeline or structured programme card system. It must be easy to read on a phone.

Requirements:
- Split into three clear parts:
  1. At Home
  2. Regina Pacis Hall
  3. Silicon Cemetery
- Use time blocks where times exist.
- Use clear labels for venue and time.
- Make the programme visually scannable.
- Include a “Download PDF Programme” button at the top and bottom of this section.
- Include a “Back to top” or “Return to programme” helper where useful.
- On mobile, use stacked cards.
- On desktop, consider a vertical timeline or premium card layout.

PDF DOWNLOAD
Implement a download button that links to:
`/programmes/joshua-glenn-dipela-order-of-service.pdf`

Assume the PDF will be placed in:
`public/programmes/joshua-glenn-dipela-order-of-service.pdf`

Also create a print-friendly route or section if possible:
- `/programme`
- Include print CSS using `@media print`
- The printed version should be clean and readable.
- Add a fallback message if the PDF file is missing:
  “If the download does not start, please ask a family representative for the printed programme.”

OBITUARY SECTION
Create a best-in-class obituary reading experience:
- It should feel immersive, like reading a tribute in a premium memorial booklet.
- Use elegant typography and generous line height.
- Break the obituary into readable paragraphs.
- Add subtle pull quotes, for example:
  “His legacy of love, laughter, and peace will live on.”
  “A joyful soul — full of jokes, laughter, and warmth.”
- Include a gentle progress/section feel, but do not over-engineer it.
- Make it easy for older visitors to read: strong enough contrast, large enough text, no tiny decorative fonts for body copy.
- Consider a “Read Obituary” button from the hero that scrolls here.
- Avoid unnecessary complex animation. Use soft fade-ins only.

PRACTICAL INFORMATION SECTION
Add a simple section with:
- Burial: 01 May 2026
- Home: 198F Luthuli Park
- Church Service: Regina Pacis Hall, Seshego
- Cemetery: Silicon Cemetery

Do not add maps unless there are exact coordinates. Instead, provide clear names and addresses. If adding a map link, make it optional and clearly labelled.

CLOSING SECTION
End with a dignified final tribute:
“Rest in eternal peace, Mokone.”
“You will forever be remembered and deeply missed.”

Add a final button:
- “Download Programme”
- “Return to Top”

TECHNICAL REQUIREMENTS
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Component-based structure.
- Responsive from 320px mobile to large desktop.
- Excellent accessibility:
  - semantic HTML
  - proper heading hierarchy
  - keyboard navigation
  - visible focus states
  - alt text for images
  - sufficient contrast
- Optimise images using Next.js Image.
- Use local data objects for programme items and obituary content.
- Use clean constants/data files where appropriate.
- Use no unnecessary dependencies unless there is a clear reason.
- If using animation, use Framer Motion sparingly.
- Ensure page loads fast even on mobile data.
- Include metadata for SEO and social sharing:
  - title: “In Loving Memory of Geremane Joshua Glenn Dipela”
  - description: “Funeral programme and obituary for Geremane Joshua Glenn Dipela, affectionately known as Malome Glenn.”
- Add Open Graph metadata.
- Add a respectful favicon or simple monogram if possible.

FILES / STRUCTURE
Create or update the following suggested structure:

app/
  layout.tsx
  page.tsx
  globals.css
  programme/page.tsx

components/
  Hero.tsx
  Navigation.tsx
  ProgrammeSection.tsx
  ProgrammeTimeline.tsx
  ObituarySection.tsx
  PracticalInfo.tsx
  DownloadProgrammeButton.tsx
  FooterTribute.tsx

data/
  memorial.ts

public/
  images/
    malome-glenn-primary.jpg
    malome-glenn-secondary.jpg
  programmes/
    joshua-glenn-dipela-order-of-service.pdf

The image filenames can be placeholders. Use clear comments showing where I should place the actual images.

QUALITY BAR
The final result should feel like a premium, intimate memorial site — not a generic template.

Avoid:
- clutter
- excessive sections
- loud colours
- gimmicky animations
- cheesy funeral clipart
- complicated navigation
- childish icons
- overdesigned cards
- anything that distracts from the programme and obituary

Prioritise:
- clarity
- dignity
- warmth
- readability
- mobile usability
- beautiful typography
- easy PDF access
- emotional restraint
- polished spacing and layout

Before finishing, review the site as if you are:
1. An elderly family member trying to find the programme quickly.
2. A guest arriving at the funeral and opening the site on a phone.
3. A sophisticated designer judging the quality of the experience.
4. A grieving family member reading the obituary.

Make improvements until it satisfies all four perspectives.