import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthFrom";
import { useState } from "react";
import { FormData } from "../../types";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    dob: "",
  });
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/pref");
    console.log("Handle Sign-Up");
    console.log("Sign up data", formData);
  };
  return (
    <AuthForm
      mode={"sign up"}
      handleForm={handleSignUp}
      formData={formData}
      setFormData={setFormData}
    />
  );
};

export default SignUp;
