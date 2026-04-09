# 🚀 GitHub User Explorer

A modern, minimal, and performant web application to search GitHub users, explore their profiles and repositories, and bookmark your favorite developers.

🔗 **Live Demo:** 
📦 **Repository:** https://github.com/Sachin-kumar18/github-user-explorer.git

---

## ✨ Features

### 🔍 User Search

- Search GitHub users with a **debounced input**
- Displays results in clean, responsive cards
- Loading skeletons for better UX
- Graceful error handling with toast notifications

### 👤 User Profile

- View detailed user information:
  - Avatar, name, bio, location
  - Followers / Following
  - Public repository count

- Explore repositories with:
  - Name, description
  - Star count ⭐
  - Language badge

- Sort repositories by:
  - ⭐ Stars
  - 🕒 Last Updated

- Pagination with **Load More**

### 🔖 Bookmarks

- Add / remove users from bookmarks
- Persist bookmarks using **localStorage**
- Dedicated bookmarks page
- Empty state UI when no bookmarks exist

### 🌙 UI & Experience

- Minimalist, clean UI with **shadcn/ui**
- Fully responsive design
- Dark mode toggle using **next-themes**
- Smooth micro-interactions

---

## 🛠 Tech Stack

### Frontend

- **Next.js (App Router)**
- **TypeScript (strict mode)**

### UI & Styling

- **Tailwind CSS**
- **shadcn/ui**

### State Management

- **Redux Toolkit (RTK)**

### Utilities

- **next-themes** (Dark mode)
- **Sonner** (Toast notifications)

### API

- GitHub Public API
  `https://api.github.com`

---

## 📁 Project Structure

```
src/
│
├── app/
│   ├── page.tsx                # Search Page
│   ├── bookmarks/page.tsx      # Bookmarks Page
│   └── user/[username]/page.tsx # User Profile Page
│
├── components/
│   ├── common/                 # Navbar, Theme Toggle
│   ├── search/                 # Search components
│   ├── user/                   # User profile components
│   ├── bookmarks/              # Bookmark components
│   └── ui/                     # shadcn components
│
├── lib/
│   └── github.ts               # All API calls
│
├── store/
│   ├── index.ts
│   └── bookmarksSlice.ts       # Redux slice
│
├── hooks/
│   └── useDebounce.ts          # Debounce hook
│
├── types/
│   └── github.ts               # TypeScript interfaces
│
└── providers/
    ├── ReduxProvider.tsx
    └── ThemeProvider.tsx
```

---

## 🧠 Key Technical Decisions

### 1. Centralized API Layer

All API calls are handled inside `/lib/github.ts`
✔ Ensures separation of concerns
✔ Improves maintainability and scalability

---

### 2. Strict TypeScript Usage

- Defined interfaces for all API responses
- No use of `any` anywhere

✔ Improves type safety and developer experience

---

### 3. Debounced Search

Implemented a custom `useDebounce` hook to:

- Prevent excessive API calls
- Improve performance

---

### 4. Global State with Redux Toolkit

Used RTK for managing bookmarks:

- Accessible across multiple pages
- Clean and scalable state management

---

### 5. LocalStorage Persistence

Bookmarks persist across refresh using:

```js
localStorage;
```

---

### 6. Parallel Data Fetching

Used `Promise.all` for:

- Fetching user details + repositories simultaneously
  ✔ Improves performance

---

### 7. Pagination Strategy

- Implemented incremental loading using "Load More"
- Prevents over-fetching large datasets

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone repo-link
cd github-user-explorer
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run development server

```bash
npm run dev
```

---

### 4. Open in browser

```
http://localhost:3000
```

---

## 🚀 Deployment

This project is deployed on **Vercel**.

To deploy:

1. Push code to GitHub
2. Import repo into Vercel
3. Click **Deploy**

---

## ⚠️ Challenges Faced

- Managing API rate limits and optimizing calls
- Implementing debounce without affecting UX
- Handling pagination with clean state updates
- Maintaining strict TypeScript typing across API responses

---

## 📌 Future Improvements

- Infinite scroll instead of button-based pagination
- Repository filtering by language
- Better caching strategy (React Query / SWR)
- Unit & integration testing

---

## 🙌 Conclusion

This project demonstrates:

- Clean architecture
- Scalable frontend structure
- Strong TypeScript practices
- Performance optimization techniques

---

