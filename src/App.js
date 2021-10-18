import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Services from './components/Home/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/login">
        <Login></Login>
        </Route>

        <Route path="/services">
          <Services></Services>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
