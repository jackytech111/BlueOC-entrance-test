import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../features/posts/postsSlice.js'

function PostForm() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim() || !body.trim()) {
      setError('Please enter both title and body.')
      return
    }

    dispatch(addPost({ title: title.trim(), body: body.trim() }))
    setTitle('')
    setBody('')
    setError('')
  }

  return (
    <section className="panel">
      <h2>Add New Post</h2>

      <form className="post-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter post title"
        />

        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          rows="4"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Enter post body"
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit">Add Post</button>
      </form>
    </section>
  )
}

export default PostForm
