import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthFrom";
import { useState } from "react";
import { ErrorMessage, UserFormData } from "../../types";
import { useLoginMutation } from "../../slices/userApiSlice_Themba";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch: AppDispatch = useDispatch();
  const [userFormData, setUserFormData] = useState<UserFormData>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = userFormData;

    try {
      const res = await login({ email, password }).unwrap();
      console.log("res   ", res);
      dispatch(setCredentials({ ...(res.data) }));
      setErrorMessage("");
      navigate("/pref");
    } catch (error) {
      console.error("error  ", error);
      const e: ErrorMessage = error as ErrorMessage;
      setErrorMessage(e.data.message);
    }
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
