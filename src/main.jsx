import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import Counter from './features/counter/Counter.jsx'
import PostsList from './components/PostList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <Counter /> */}
      <PostsList/>
    </Provider>
  </StrictMode>
)
