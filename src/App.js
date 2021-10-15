import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
