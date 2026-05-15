import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  const posts = await response.json()
  return posts.slice(0, 10)
})

const initialState = {
  items: [],
  status: 'idle',
  error: null,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.items.unshift(action.payload)
      },
      prepare(post) {
        return {
          payload: {
            id: Date.now(),
            userId: 1,
            title: post.title,
            body: post.body,
            isLocal: true,
          },
        }
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { addPost } = postsSlice.actions
export default postsSlice.reducer
