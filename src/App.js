import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HeaderNavLink from './components/HeaderNavLink/HeaderNavLink';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNavLink to="/" text="Home"/>
        <HeaderNavLink to="/resume" text="Resume"/>
      </header>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
