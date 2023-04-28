import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createStore } from 'redux';
import allReducer from './reducers/index.js';
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//createStore - globalized state
//action - increment/decrement
//reducer
//dispatch

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
