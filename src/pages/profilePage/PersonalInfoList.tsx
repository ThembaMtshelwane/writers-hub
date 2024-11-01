import avatar from "../../assets/Images/Robert-Frost-Portrait-Square.webp";
import { MdEdit } from "react-icons/md";
import Button from "../../components/Button";
import { User } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";

const PersonalInfoList = () => {
  const userId = "39cc70c6-31b6-4074-9ad2-caf1471cd911";
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/users/${userId}`);
        setUser(data);
        setEditedUser(data); // Initialize editedUser with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchUser();
  }, [userId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editedUser) {
      setEditedUser({ ...editedUser, [name]: value });
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/users/${userId}`, editedUser);
      setUser(editedUser);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <section className="grid  px-1 py-1 bg-white border border-white rounded-3xl w-[280px] m-auto h-[600px] md:w-[450px] lg:w-[600px] xl:w-[800px]">
      <div className="grid  h-[500px] md:place-items-center ">
        <div className="pl-52 pt-4 cursor-pointer" onClick={handleEditClick}>
          <MdEdit className="text-gray-500" />
        </div>

        <div className="py-4 grid pl-16 md:pr-20 ">
          <img src={avatar} className="rounded-full w-28" alt="User Avatar" />
          <h1 className="text-xl pl-10 ">{user.last_name}</h1>
          <p className="pl-8">@{user.username}</p>
        </div>

        <div className="space-y-5 ">
          <div className="grid grid-cols-2 border border-gray-600 py-2 w-[270px] lg:w-[370px] ">
            <h1 className="pl-3">Username:</h1>
            <p className="">
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={editedUser?.username || ""}
                  onChange={handleInputChange}
                  className="border rounded-md w-full px-2"
                />
              ) : (
                user.username
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 border border-gray-600 py-2  w-[270px] lg:w-[370px]">
            <h1 className="pl-3">Email:</h1>
            <p>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editedUser?.email || ""}
                  onChange={handleInputChange}
                  className="border rounded-md w-full px-2"
                />
              ) : (
                user.email
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 border border-gray-600 py-2  w-[270px] lg:w-[370px]">
            <h1 className="pl-3">Password:</h1>
            <p>
              {isEditing ? (
                <input
                  type="password"
                  name="password"
                  value={editedUser?.password || ""}
                  onChange={handleInputChange}
                  className="border rounded-md w-full px-2"
                />
              ) : (
                "******"
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 border border-gray-600 py-2  w-[270px] lg:w-[370px]">
            <h1 className="pl-3">DOB:</h1>
            <p>{user.DOB}</p>
          </div>
        </div>
      </div>
      <div className="pt-5 grid place-items-center">
        {isEditing && <Button name="Save" buttonFunction={handleSave} />}
      </div>
    </section>
  );
};

export default PersonalInfoList;
