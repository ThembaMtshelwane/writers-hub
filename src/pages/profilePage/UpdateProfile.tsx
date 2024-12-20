import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../slices/authSlice";
import { useUpdateUserMutation } from "../../slices/userApiSlice";
import { RootState } from "../../store";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [firstName, setFirstName] = useState(userInfo?.firstName || "");
  const [lastName, setLastName] = useState(userInfo?.lastName || "");
  const [email, setEmail] = useState(userInfo?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const dispatch = useDispatch();
  const [updateProfile] = useUpdateUserMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await updateProfile({
        firstName,
        lastName,
        email,
        password,
      }).unwrap();
      dispatch(
        setCredentials({
          ...res,
          DOB: "",
          username: "",
          _id: "",
          preferences: [],
        })
      );
      setError("");
      setSuccess("Profile updated");
    } catch (err: any) {
      setError(err.data?.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-12 items-center">
      <h1 className="text-4xl pt-12">Update Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center bg-white p-12 w-full max-w-lg"
      >
        <div className="flex gap-4 w-full">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-3 w-full border rounded"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-3 w-full border rounded"
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 w-full border rounded"
          required
        />
        {/* <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 w-full border rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-3 w-full border rounded"
          required
        /> */}
        <p className="text-red-400">{error}</p>
        <p className="text-green-400">{success}</p>
        <button className="buttonStyle w-full" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </button>
        {/* Back Button */}
        <Link className="buttonStyle w-full text-center" to={"/profile/info"}>
          Back to profile
        </Link>
      </form>
    </div>
  );
};

export default UpdateProfile;
