# ShelfLife - Book Club Tracker

## How to run

**Node version**: v25.2.1

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Or use the start script:
```bash
./start.sh
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Features

- Add books with title, author, genre, and total pages
- Track reading progress
- Filter books by status and genre
- Member management
- Dashboard with statistics
- Archive/restore books
- Book reviews with ratings

## Third-Party Code

- **next** (16.4.3) - React framework
- **react** (19.3.0) - UI library
- **react-dom** (19.3.0) - React DOM rendering
- **tailwindcss** (4.x) - Utility-first CSS framework
- **typescript** (5.x) - Type safety

## Database Design

See `PLAN.md` for the complete database schema. The database uses SQLite with the following tables:

- **books** - Stores book information (title, author, genre, total_pages, current_page, archived, member_id)
- **members** - Stores member names
- **reviews** - Stores book ratings and comments

**Note**: Book status (Not started/Reading/Finished) is **derived**, never stored:
- "Not started" = current_page is 0
- "Reading" = current_page is between 0 and total_pages
- "Finished" = current_page equals total_pages

## Development

- Run tests: `npm test`
- Build: `npm run build`
- Type check: `npx tsc --noEmit`
