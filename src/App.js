import githubLogo from './github-logo.svg';
import './App.css';
import Input from './input.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' exact element={ <Input/> }></Route>  
          </Routes>  
      </div>
    </Router>
  );
}

export default App;
// <img src={githubLogo} className="App-logo" alt="logo" />