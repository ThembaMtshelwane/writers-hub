import AuthForm from "../components/AuthFrom";

const Login = () => {
  const handleLogin = () => {
    console.log("Handle Login");
  };
  return <AuthForm mode={"login"} handleForm={handleLogin} />;
};

export default Login;
