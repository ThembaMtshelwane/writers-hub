import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthFrom";
import { useState } from "react";
import { UserFormData } from "../../types";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState<UserFormData>({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/pref");
    console.log("Handle Login");
    console.log("Login data", userFormData);
    setErrorMessage("");
    setErrorMessage("error ");
  };
  return (
    <AuthForm
      mode={"login"}
      handleForm={handleLogin}
      userFormData={userFormData}
      setUserFormData={setUserFormData}
      error={errorMessage}
    />
  );
};

export default Login;
