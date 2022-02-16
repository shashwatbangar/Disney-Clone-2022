import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

// react router dom allow us to navigate between pages without refreshing the page
// we can use the exact path to only show the page when the path is exactly the same
// Routes is now used in place of Switch
function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Switch> 
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
