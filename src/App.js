import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import { auth } from "./firebase/firebase.util";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = 
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <Header currentUser ={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
