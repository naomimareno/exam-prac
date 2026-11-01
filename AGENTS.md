<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Development Rules

- Work on one batch at a time. Build nothing the brief doesn't ask for.
- Must run on Node v25.2.1. Never upgrade Node. Every package must support it; on EBADENGINE or "requires node" errors, use an older version of that package.
- Start `npm run dev` ONCE in the background and leave it running (it hot-reloads). Never wait for it to finish. Never start a second one.
- During a batch run only quick checks (`npx tsc --noEmit`). Run `npm test` and `npm run build` only when asked for a CHECKPOINT.
- Write a test for each feature's business rule (temporary database, `npm test`).
- Database: schema file, sensible constraints. Derived values are computed, never stored.
- Follow the DESIGN section on every page and reuse the shared components.
- After each finished feature: commit (`feat:`/`fix:`/`test:`/`docs:`) and push. Check `git ls-remote origin` matches `git log -1`; if the push failed, fix it and push again.
- README.md STARTS with "How to run": Node version, `npm install`, `npm run dev`, `./start.sh`.
- Never commit `node_modules`, `.env` or database files. Secrets go in `.env` with a `.env.example`.

## SPEC CONSTRAINTS

From BRIEF.md - ShelfLife Book Club Tracker:

**Core Requirements (C1-C4):**
- C1: Add a book with title, author, genre (Fiction, Non-fiction, Poetry, Other) and total pages. Title and author are required. Total pages must be a whole number greater than 0. (5 marks)
- C2: List all books, showing title, author, genre and progress (e.g. "120 / 300 pages, 40%"). (4 marks)
- C3: Update a book's current page. The current page can never be more than total pages or less than 0. (4 marks)
- C4: A book's status is derived, never stored: "Not started" (page 0), "Reading" (between), "Finished" (page = total). (4 marks)

**Features (F1-F5):**
- F1: Filter the book list by status and by genre. (3 marks)
- F2: Members: add members by name, and assign each book to one member (the reader). (5 marks)
- F3: Dashboard page: total books, books finished, total pages read across the club, and the member with the most pages read. (5 marks)
- F4: Archive a book. Archived books are hidden from the main list but never deleted, and can be restored. (4 marks)
- F5: Reviews: once a book is Finished, its reader can give it a rating from 1 to 5 stars and a short comment. Books that aren't finished can't be reviewed. (5 marks)

**Hard Constraints:**
- Books are never deleted, only archived (F4).
- Status (C4) and percentages are always calculated, never stored in the database.
- Ratings must be whole numbers from 1 to 5.
- Data must be stored in a database and survive a restart.
- Automated tests must run with `npm test`.
