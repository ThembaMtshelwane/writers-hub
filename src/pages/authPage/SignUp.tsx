import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthFrom";
import { useState } from "react";
import { UserFormData } from "../../types";

const SignUp = () => {
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState<UserFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    dob: "",
    username: "",
    school: "",
  });
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/pref");
    console.log("Handle Sign-Up");
    console.log("Sign up data", userFormData);
  };
  return (
    <AuthForm
      mode={"sign up"}
      handleForm={handleSignUp}
      userFormData={userFormData}
      setUserFormData={setUserFormData}
    />
  );
};

export default SignUp;
