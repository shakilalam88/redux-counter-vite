import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store.jsx'
import { Provider } from 'react-redux'

//createStore - globalized state
//action - increment/decrement
//reducer
//dispatch

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
