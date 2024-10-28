import AuthForm from "../components/AuthFrom";

const Signup = () => {
  const handleSignUp = () => {
    console.log("Handle Sign-Up");
  };
  return <AuthForm mode={"sign up"} handleForm={handleSignUp} />;
};

export default Signup;
