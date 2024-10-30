import avatar from "../../assets/Images/Robert-Frost-Portrait-Square.webp";
import { MdEdit } from "react-icons/md";
import Button from "../../components/Button";
import { User } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PersonalInfoList = () => {
  // const { userId } = useParams(); // Retrieves userId from route
  const userId = "39cc70c6-31b6-4074-9ad2-caf1471cd911";
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/users/${userId}`);
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchUser(); // Fetch only if userId is defined
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <section className="grid place-items-center py-10 bg-white border border-white rounded-3xl">
      <div className="grid place-items-center w-[440px] h-[500px]">
        <div className="pl-80 pt-4">
          <MdEdit className="text-gray-500 " />
        </div>
        
        <div className="py-4">
          <img src={avatar} className="rounded-full w-28" alt="User Avatar" />
          <h1 className="text-xl">{user.last_name}</h1>
          <p className="text-center">@{user.username}</p>
        </div>

        <div className="space-y-5 py-10 w-80">
          <div className="grid grid-cols-2 border border-gray-600 py-2">
            <h1 className="pl-3">Username:</h1>
            <p>{user.username}</p>
          </div>
          <div className="grid grid-cols-2 border border-gray-600 py-2">
            <h1 className="pl-3">Email:</h1>
            <p>{user.email}</p>
          </div>
          <div className="grid grid-cols-2 border border-gray-600 py-2">
            <h1 className="pl-3">Password:</h1>
            <p>******</p>
          </div>
          <div className="grid grid-cols-2 border border-gray-600 py-2">
            <h1 className="pl-3">DOB:</h1>
            <p>{user.DOB}</p>
          </div>
        </div>
      </div>
      {/* Optional Button for Save */}
      {/* <Button name="SAVE" buttonFunction={submit} /> */}
    </section>
  );
};

export default PersonalInfoList;
