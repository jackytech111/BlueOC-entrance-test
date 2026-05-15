# Task 3: React Redux Posts App

## Objective

Create a React Redux application that fetches and displays posts from this API:

```txt
https://jsonplaceholder.typicode.com/posts
```

The app also includes a form to add a new post to the Redux state.

## Features

- Fetch posts from JSONPlaceholder
- Store posts, loading status, and error message in Redux
- Display the post list on the page
- Add a new post using a form
- Show simple loading and error states

## Technologies

- React
- Redux Toolkit
- React Redux
- Vite
- ES6 syntax

## Project Structure

```txt
src/
  app/
    store.js
  components/
    PostForm.jsx
    PostList.jsx
  features/
    posts/
      postsSlice.js
  App.jsx
  main.jsx
```

## How It Works

The Redux store is created in `src/app/store.js`.

The posts logic is inside `src/features/posts/postsSlice.js`.

`fetchPosts` uses `createAsyncThunk` to call the API and save the result to Redux state.

`PostList` reads posts from Redux using `useSelector` and fetches data with `useDispatch`.

`PostForm` dispatches `addPost` to add a new post locally.

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```
