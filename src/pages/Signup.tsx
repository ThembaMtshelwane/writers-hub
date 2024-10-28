import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthFrom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/pref");
    console.log("Handle Sign-Up");
  };
  return <AuthForm mode={"sign up"} handleForm={handleSignUp} />;
};

export default Signup;
