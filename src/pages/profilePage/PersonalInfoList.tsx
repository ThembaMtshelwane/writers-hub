import { FormEvent } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../slices/authSlice";
import { useGetProfileMutation } from "../../slices/userApiSlice";
import { RootState } from "../../store";
import avatar from "../../assets/Images/Robert-Frost-Portrait-Square.webp";
import { MdEdit } from "react-icons/md";


const PersonalInfoList = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [firstName, setFirstName] = useState(userInfo?.firstName || "");
  const [lastName, setLastName] = useState(userInfo?.lastName || "");
  const [email, setEmail] = useState(userInfo?.email || "");
  const [dob, setDob] = useState(userInfo?.DOB )
  const [username, SetUsername] = useState(userInfo?.username)
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const dispatch = useDispatch();

  // const [updateProfile] = useUpdateUserMutation();
  const [getProfile] = useGetProfileMutation()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else {
      try {
        const res = await getProfile({
          firstName,
          lastName,
          email,
          password,
        }).unwrap();
        dispatch(
          setCredentials({
            ...res,
            email: "",
            firstName: "",
            lastName: "",
            DOB: "",
            username: "",
            _id: "",
            preferences: []
          })
        );
        setError("");
        setSuccess("Profile updated");
      } catch (err) {
        //  console.log(err);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[50px] items-center >                                                                                            ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center bg-white p-[50px] w-[50vw]"
        >
          <div className="pl-52 pt-4 cursor-pointer">
            <MdEdit className="text-gray-500" />
          </div>
          <div className="py-4 grid pl-16 md:pr-20 ">
            <img src={avatar} className="rounded-full w-28" alt="User Avatar" />
            <h1 className="text-xl pl-10 ">{lastName}</h1>
            <p className="pl-8">@{username}</p>
          </div>
          <div className="flex justify-around border border-gray-600 py-2 w-[270px] lg:w-[370px] big-screen:w-[700px]">
            <h1>First Name:</h1>
            <p>{firstName}</p>
          </div>

          <div className="flex justify-around border border-gray-600 py-2 w-[270px] lg:w-[370px] big-screen:w-[700px]">
            <h1>Last Name:</h1>
            <p>{lastName}</p>
          </div>
          <div className="flex justify-around border border-gray-600 py-2 w-[270px] lg:w-[370px] big-screen:w-[700px]">
            <h1> Email :</h1>
            <p>{email}</p>
          </div>
          <div className="flex justify-around border border-gray-600 py-2 w-[270px] lg:w-[370px] big-screen:w-[700px]">
            <h1>DOB:</h1>
            <p>{dob}</p>
          </div>

          <p className="text-red-400">{error}</p>
          <p className="text-green-400">{success}</p>
        </form>
      </div>
    </>
  );
};

export default PersonalInfoList;
