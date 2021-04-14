import './App.css';
import Comp from './components/Comp/Comp'
// import {Provider} from 'react-redux'
import store from './store-learn/index'
import {Provider} from './react-redux'
function App() {
  return (
    <Provider store={store}>
      <Comp />
    </Provider>
  );
}

export default App;
