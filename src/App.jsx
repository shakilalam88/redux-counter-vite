import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions/index.js';
import { decrement } from './actions/index.js';
const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Increment decrement counter</h1>
      <h4>Using react redux</h4>
      <div className="quantity">
        <a
          title="Decrement"
          className="quantity__minus"
          onClick={() => dispatch(decrement())}
        >
          <span>-</span>
        </a>
        <input
          type="text"
          className="quantity__input"
          name="quantity"
          value={isLogged ? counter : ''}
        />
        <a
          className="quantity__plus"
          title="Increment"
          onClick={() => dispatch(increment(5))}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
};
export default App;
