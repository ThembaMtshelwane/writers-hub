import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../slices/authSlice";
import { useGetProfileMutation } from "../../slices/userApiSlice";
import { RootState } from "../../store";
import avatar from "../../assets/Images/Robert-Frost-Portrait-Square.webp";
import { MdEdit } from "react-icons/md";
import UpdateProfile from "./UpdateProfile";
import { Link } from "react-router-dom";

const PersonalInfoList = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [firstName, setFirstName] = useState(userInfo?.firstName || "");
  const [lastName, setLastName] = useState(userInfo?.lastName || "");
  const [email, setEmail] = useState(userInfo?.email || "");
  const [dob, setDob] = useState(userInfo?.DOB);
  const [username, setUsername] = useState(userInfo?.username);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showUpdateProfile, setShowUpdateProfile] = useState(false); 

  const dispatch = useDispatch();

  const [getProfile] = useGetProfileMutation();

  const handleToggleUpdateProfile = () => {
    setShowUpdateProfile((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col gap-12 items-center">
        <form className="flex flex-col gap-4 items-center bg-white p-12 w-[50vw]">
          <Link className="pl-52 pt-4 cursor-pointer" to={"/profile/update"}>
            <MdEdit className="text-gray-500" />
          </Link>
          <div className="py-4 grid pl-16 md:pr-20">
            <img src={avatar} className="rounded-full w-28" alt="User Avatar" />
            <h1 className="text-xl pl-10">{lastName}</h1>
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
            <h1>Email:</h1>
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
