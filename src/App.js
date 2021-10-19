import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import Services from './components/Home/Services/Services';
import Doctors from './components/Home/Doctors/Doctors';
import Register from './components/Login/Register/Register';
import Activities from './components/Home/Activities/Activities';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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

        <PrivateRoute path="/details/:serviceId">
         <ServiceDetails></ServiceDetails>
        </PrivateRoute>

        <PrivateRoute path="/doctors">
        <Doctors></Doctors>
        </PrivateRoute>

        <PrivateRoute path="/activities">
        <Activities></Activities>
        </PrivateRoute>

        <Route path="/register">
        <Register></Register>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
