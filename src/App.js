import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './app.css'
import { StateContext } from "./state/StateProvider";
import PrivateRoute from "./Auth/PrivateRoute";
//import Ewallet from "./Main/Ewallet";
//import Home from "./Home/Home";
//import About from "./Files/About";
//import Howto from "./Files/Howto";
//import Faq from "./Files/Faq";
//import Policy from "./Files/Policy";
//import Terms from "./Files/Terms";
//import Signup from "./Auth/Signup";
//import Login from "./Auth/Login";
//import ForgotPassword from "./Auth/ForgotPassword";
//import Register from "./Auth/Register";
//import Start from "./Mines/Start";
//import Min from "./Mines/Min";
//import Profile from "./Main/Profile";
// import Withdrawal from "./Main/Withdrawal";
//import Game from "./Mines/Game";


const Signup = lazy (()=> import ("./Auth/Signup"))
const Login = lazy (()=> import ("./Auth/Login"))
const Register = lazy (()=> import ("./Auth/Register"))
const Home = lazy (()=> import ("./Home/Home"))
const About = lazy (()=> import ("./Files/About"))
const Howto = lazy (()=> import ("./Files/Howto"))
const Faq = lazy (()=> import ( "./Files/Faq"))
const Policy = lazy (()=> import ("./Files/Policy"))
const Terms = lazy (()=> import ("./Files/Terms"))
const ForgotPassword = lazy (()=> import ("./Auth/ForgotPassword"))
//const Start = lazy (()=> import ("./Mines/Start"))
//const Min = lazy (()=> import ("./Mines/Min"))
const Profile = lazy (()=> import ("./Main/Profile"))
//const Game = lazy (()=> import ("./Mines/Game"))
const Ewallet = lazy (()=> import ("./Main/Ewallet"))
const Withdraw = lazy (()=> import ("./Account/Withdraw"))
const Deposit = lazy (()=> import ("./Account/Deposit"))
//const FastPay = lazy (()=> import ("./Account/FastPay"))
const Mines = lazy (()=> import ("./Miners/Mines"))
const PayPal = lazy (()=> import ("./Main/PayPal"))
const Google = lazy (()=> import ("./Main/Google"))
const Success = lazy (()=> import ("./Account/Success"))
const Failed = lazy (()=> import ("./Account/Failed"))




function App() {
  const [ value, setValue ] = useState(0)


  return (
    <Suspense fallback={<div className="app"><div className="app-loader"></div></div>}>
      <Router>
      <StateContext.Provider value= {{value, setValue}}>
        <Switch>
          <PrivateRoute path= '/register' component = {Register} />
          <PrivateRoute path= '/deposit' component = {Deposit} /> 
          <PrivateRoute path= '/withdraw' component = {Withdraw} /> 
          <PrivateRoute path= '/e-wallet' component = {Ewallet} />
          <PrivateRoute path= '/profile' component = {Profile} />
          <PrivateRoute path= '/mines' component = {Mines} />
          <PrivateRoute path= '/google-pay' component = {Google} />
          <PrivateRoute path= '/success' component = {Success} />
          <PrivateRoute path= '/failed' component = {Failed} />
          <Route path= '/signup' component = {Signup} />
          <Route path= '/login' component = {Login} />
          {/* <Route path= '/game' component = {Game} /> */}
          {/* <Route path= '/pay' component = {FastPay} />  */}
          {/* <Route path= '/min' component = {Min} /> */}
          {/* <Route path= '/load' component = {Start} /> */}
          <Route path= '/forgot-password' component = {ForgotPassword} />
          <Route path='/terms-and-conditions' component = {Terms} />
          <Route path='/paypal' component = {PayPal} />
          <Route path= "/privacy-policy" component= {Policy} />
          <Route path= "/faq" component= {Faq} />
          <Route path= '/how-to-mine' component={Howto} />
          <Route path="/about" component = {About} />
          <Route  path='/' >
            <Home />
            </Route>
        </Switch>
      </ StateContext.Provider>
      </Router>
    </Suspense>

  );
}

export default App;
