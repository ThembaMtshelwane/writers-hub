import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthFrom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/pref");
    console.log("Handle Login");
  };
  return <AuthForm mode={"login"} handleForm={handleLogin} />;
};

export default Login;
