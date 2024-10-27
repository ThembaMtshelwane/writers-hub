import AuthForm from "../components/AuthFrom";

const Signup = () => {
  const handleSignUp = () => {
    console.log("Handle Sign-Up");
  };
  return <AuthForm mode={"signup"} handleForm={handleSignUp} />;
};

export default Signup;
