import PostForm from './components/PostForm.jsx'
import PostList from './components/PostList.jsx'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="app-header">
        <div>
          <p className="eyebrow">React Redux</p>
          <h1>Posts</h1>
        </div>
      </header>

      <main className="content">
        <PostForm />
        <PostList />
      </main>
    </div>
  )
}

export default App
