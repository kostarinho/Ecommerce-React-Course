import SignIn from "../../components/sign-in/sign-in";
import SignUp from '../../components/sign-up/sign-up';

import "./sign-in-sign-up.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
  
);

export default SignInAndSignUp;
