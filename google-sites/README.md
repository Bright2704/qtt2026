# Google Sites theme — Qiskit Fall Fest 2026

This English-only design kit uses the existing website's colors, IBM Plex fonts, and bird stickers. It has not been published to Google Sites or connected to a live registration form.

## Recommended setup: banner image and native Google Form

1. Open Themes → Custom → Create theme in Google Sites. Name it `QFF 2026 Thailand`.
2. Use deep purple `#280D5A`, lavender `#B796F6`, pink `#F86DAD`, and background `#F4F2FB`. Use `#280D5A` for body text and `#C81264` for pink text.
3. Select IBM Plex Sans if available, or Arial as a fallback.
4. Add `registration-banner.png` using Insert → Images. Show the complete image without cropping. Insert it as page content rather than a header background, which may crop on mobile.
5. Add the heading `Register for the event` and subtitle `Register for Qiskit Fall Fest 2026: Thailand` below the image as real text so they remain readable on small screens.
6. Use Insert → Forms to add your actual Google Form in the next section. Expand its width and adjust its height as needed.
7. In Google Forms, select a purple theme (`#461D8A`) and a light lavender background. Google Sites theme settings do not automatically style the embedded form. Write the form title, descriptions, questions, options, and confirmation message in English as well.
8. Add buttons labeled `Open registration form ↗` and `Main website ↗`, linking to your actual form and https://qtric.sut.ac.th/qff2026/ respectively.
9. Check desktop and mobile Preview, then test the published page in Safari or Chrome.

## Alternative: responsive HTML banner

Open `header-embed.html` in a text editor and copy its entire contents into Insert → Embed → Embed code.

Images and fonts are included in the file. The banner rearranges text and artwork on narrow screens and has no fixed content height or sticky header. Google Sites controls the outer embed frame: adjust that frame's height and check mobile Preview until all content is visible. Start around 700px and adjust to the actual page. If this leaves too much blank space, use the image method above.

Insert the Google Form as the next block below the banner.

`preview.html` shows the intended layout with a clearly labeled placeholder. It does not collect registrations. `preview-desktop.png` and `preview-mobile.png` show the standalone HTML layout; the final Google Sites layout still needs to be checked after insertion.

References:
- https://support.google.com/sites/answer/6372865
- https://support.google.com/sites/answer/90569
