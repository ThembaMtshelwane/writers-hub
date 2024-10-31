import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthFrom";
import { useState } from "react";
import { FormData } from "../../types";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/pref");
    console.log("Handle Login");
    console.log("Login data", formData);
  };
  return (
    <AuthForm
      mode={"login"}
      handleForm={handleLogin}
      formData={formData}
      setFormData={setFormData}
    />
  );
};

export default Login;
