# PORTFOLIO CONTENT — WHAT'S DONE & WHAT'S STILL NEEDED

Status as of **Oct 1, 2026**. The site only shows verified info; placeholders are labelled in the UI.

## ✅ VERIFIED & LIVE ON SITE

- **Name / positioning** — Sudhanshu Pandey · Software Engineer · AI • Cloud • DevOps • Full Stack
- **Profile photo** — `public/profile-photo.jpeg` (from your `SP Image.jpeg`)
- **GitHub** — https://github.com/Psudhanshu-07 (all 4 repos linked)
- **LinkedIn** — https://www.linkedin.com/in/sudhanshu-pandey-b783192a9/
- **Projects (real repos + demos)**:
  - KisanKart — LIVE · repo + live demo linked
  - Atmosyn — LIVE · repo + live demo linked
  - Autoploy — BUILDING · repo linked, demo marked "DEMO SOON"
  - WeatherGPT — BUILDING · repo linked, demo marked "DEMO SOON"
- **Academics (home page)** — Sem 1 SGPA 8.47 · Sem 2 SGPA 8.95 → Year-1 CGPA 8.71/10 · Department Rank 1 (academic ID card + progress bars)
- **Achievements** — Department Rank 1 (2026) · Google Gemini Student Ambassador '26 (ongoing)
- **Blog** — 2 published milestone posts (Rank 1 academics, Gemini Ambassador) + 3 labelled drafts

## ⚠️ STILL NEEDED FROM YOU

| Item | Where it goes | Notes |
|---|---|---|
| **Email address** | `src/data/socials.ts` → `email` | Currently a placeholder — the EMAIL button hides itself until real |
| **Resume PDF** | `public/resume.pdf` | DOWNLOAD_RESUME button is wired; file just needs to exist |
| **College / university name** | `src/data/education.ts` → `institution`, `university` | Shows "TODO" chips |
| **Exact branch** | `src/data/education.ts` → `degree` | e.g. "B.Tech — Computer Science & Engineering" |
| **Verify batch years** | `src/data/education.ts` → `period` | Currently 2025—2029 (assumed) |
| **Exact department name** | `src/data/education.ts` → achievements[0].org | e.g. "Department of CSE" |
| **Certification credential links** | `src/data/education.ts` → `verifyUrl` | Gemini Ambassador credential/ID if shareable |
| **Blog post content** | `src/data/blog.ts` (drafts) | Flip `draft: false` + add full text when written |

## 📝 NOTES

- Terminal `status` command already reflects real statuses: LIVE (KisanKart, Atmosyn) / BUILDING (Autoploy, WeatherGPT) / RANK 1 + GSA '26.
- All project descriptions come from your public repo READMEs — nothing invented.
- When any data file changes, the site hot-reloads — no config needed.
