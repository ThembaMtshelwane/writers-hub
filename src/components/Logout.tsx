import { useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice_Themba";
import { AppDispatch } from "../store";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [logoutApiCall] = useLogoutMutation();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <li className="p-2 w-[150px] text-center hover:scale-110 transition-transform ">
      <span
        className="hover:underline hover:decoration-white capitalize cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </span>
    </li>
  );
};

export default Logout;
