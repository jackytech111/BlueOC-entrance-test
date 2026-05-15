import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/posts/postsSlice.js'

function PostList() {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.posts)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [dispatch, status])

  if (status === 'loading') {
    return <p className="message">Loading posts...</p>
  }

  if (status === 'failed') {
    return (
      <section className="panel">
        <p className="message error">Error: {error}</p>
        <button type="button" onClick={() => dispatch(fetchPosts())}>
          Try Again
        </button>
      </section>
    )
  }

  return (
    <section className="posts-section">
      <div className="section-header">
        <h2>Post List</h2>
        <span>{items.length} posts</span>
      </div>

      <div className="post-list">
        {items.map((post) => (
          <article className="post-card" key={post.id}>
            <div className="post-title-row">
              <h3>{post.title}</h3>
              {post.isLocal && <span className="badge">New</span>}
            </div>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PostList
