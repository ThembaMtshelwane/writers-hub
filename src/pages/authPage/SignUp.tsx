import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthFrom";
import { useState } from "react";
import { ErrorMessage, UserFormData } from "../../types";
import { useRegisterMutation } from "../../slices/userApiSlice_Themba";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();
  const dispatch = useDispatch();
  const [userFormData, setUserFormData] = useState<UserFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    DOB: "",
    username: "",
    school: "",
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, username, DOB, email, password } =
      userFormData;
    try {
      const res = await registerUser({
        firstName: firstName || "",
        lastName: lastName || "",
        username: username || "",
        DOB: DOB || "",
        email,
        password,
      }).unwrap();
      console.log("res  ", res.data);

      const userData = res.data;
      dispatch(setCredentials({ ...userData }));
      setErrorMessage("");
      navigate("/pref");
    } catch (error) {
      const e: ErrorMessage = error as ErrorMessage;
      setErrorMessage(e.data.message);
    }
  };
  return (
    <AuthForm
      mode={"sign up"}
      handleForm={handleSignUp}
      userFormData={userFormData}
      setUserFormData={setUserFormData}
      error={errorMessage}
    />
  );
};

export default SignUp;
