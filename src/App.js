import './App.css';
import Course from './components/CourseList'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Course />
      </Provider>
    </div>
  );
}

export default App;
