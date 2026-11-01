# ShelfLife Development Plan

## Feature Table

| ID | Feature | Marks | Difficulty | Depends On |
|----|---------|-------|------------|------------|
| C1 | Add a book with title, author, genre, total pages | 5 | Easy | - |
| C2 | List all books with progress | 4 | Easy | C1 |
| C3 | Update a book's current page | 4 | Easy | C1, C2 |
| C4 | Derived status (Not started/Reading/Finished) | 4 | Easy | C3 |
| F1 | Filter by status and genre | 3 | Medium | C2, C4 |
| F2 | Members: add members, assign books | 5 | Medium | C1 |
| F3 | Dashboard page with stats | 5 | Hard | F2, C4 |
| F4 | Archive/restore books | 4 | Medium | C2 |
| F5 | Reviews: rating and comments | 5 | Hard | C4, F2 |

## Build Order

### Batch 1: Core Foundation (Easy, High Value)
- **C1** (5 marks, Easy) - Add book form with validation
- **C2** (4 marks, Easy) - Book list display with progress
- **C3** (4 marks, Easy) - Update current page
- **C4** (4 marks, Easy) - Derived status calculation

**Total: 17 marks**

### Batch 2: Essential Features (Easy-Medium)
- **F1** (3 marks, Medium) - Filter by status and genre
- **F4** (4 marks, Medium) - Archive and restore books

**Total: 7 marks**

### Batch 3: Member System (Medium)
- **F2** (5 marks, Medium) - Add members, assign books

**Total: 5 marks**

### Batch 4: Advanced Features (Hard, High Value)
- **F3** (5 marks, Hard) - Dashboard with aggregated stats
- **F5** (5 marks, Hard) - Reviews with ratings

**Total: 10 marks**

## Grand Total: 39 marks (17 core + 22 features)

## Database Schema (Preliminary)

```sql
-- Books table
CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  genre TEXT NOT NULL CHECK(genre IN ('Fiction', 'Non-fiction', 'Poetry', 'Other')),
  total_pages INTEGER NOT NULL CHECK(total_pages > 0),
  current_page INTEGER NOT NULL DEFAULT 0 CHECK(current_page >= 0),
  archived BOOLEAN NOT NULL DEFAULT 0,
  member_id INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (member_id) REFERENCES members(id)
);

-- Members table (for F2)
CREATE TABLE members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Reviews table (for F5)
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  book_id INTEGER NOT NULL UNIQUE,
  rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (book_id) REFERENCES books(id)
);

-- Note: status is DERIVED, never stored
-- Status = CASE
--   WHEN current_page = 0 THEN 'Not started'
--   WHEN current_page = total_pages THEN 'Finished'
--   ELSE 'Reading'
-- END
```

## Technology Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Database**: SQLite (via better-sqlite3 or similar)
- **Testing**: Jest + React Testing Library
- **Node Version**: v25.2.1 (fixed, cannot upgrade)

## Development Workflow

1. Work in batches (see above)
2. Run `npm run dev` once in background
3. Quick checks: `npx tsc --noEmit`
4. Checkpoints: `npm test` and `npm run build` (only when asked)
5. After each feature: commit and push
6. Verify push with `git ls-remote origin` vs `git log -1`
