
import './App.css';
import { AuthProvider } from './context/AuthProvider';
import Signup from './component/SignUp/signup';
import Login from './component/Login/login';
import Dashboard from './component/Dashboard/dashboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
    <Router >
    
    <Switch>
      <Route  exact path ="/dash" component = {Dashboard} ></Route>      
       <Route path ="/signup" component = {Signup} exact></Route>
      <Route  path="/login" component = {Login} exact></Route>
    </Switch>
  </Router>
  </AuthProvider>
  );
}



export default App;
