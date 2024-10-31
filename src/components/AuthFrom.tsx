import React from "react";
import { Link } from "react-router-dom";
import { UserFormData } from "../types";

interface AuthFormProps {
  mode: "login" | "sign up";
  handleForm: (e: React.FormEvent) => void;
  userFormData: UserFormData;
  setUserFormData: React.Dispatch<React.SetStateAction<UserFormData>>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  handleForm,
  userFormData,
  setUserFormData,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserFormData(
      (prevData) =>
        ({
          ...prevData,
          [name]: value,
        } as UserFormData)
    );
  };

  return (
    <form
      className="mx-auto my-auto bg-primary flex flex-col gap-2 rounded-xl p-10  overflow-auto w-[90%] max-w-[600px]"
      onSubmit={(e) => handleForm(e)}
    >
      <h2 className="text-accent text-4xl text-center capitalize mb-6">
        {mode}
      </h2>

      {/* Additional Fields - Only for Signup */}
      {mode === "sign up" && (
        <>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <label className="absolute text-sm text-gray-500 peer-focus:-translate-y-6 peer-focus:text-accent">
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={userFormData.firstName}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 my-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
                placeholder=" "
                required
              />
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label className="absolute text-sm text-gray-500 peer-focus:-translate-y-6 peer-focus:text-accent">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={userFormData.lastName}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 my-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
                placeholder=" "
                required
              />
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label className="absolute text-sm text-gray-500 peer-focus:-translate-y-6 peer-focus:text-accent">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={userFormData.username}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 my-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
                placeholder=" "
                required
              />
            </div>
            <div className="relative z-0 w-full group">
              <label className="absolute text-sm text-gray-500  peer-focus:text-accent">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={userFormData.dob}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 my-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
                required
              />
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label className="absolute text-sm text-gray-500 peer-focus:-translate-y-6 peer-focus:text-accent">
              School
            </label>
            <input
              type="text"
              name="school"
              value={userFormData.school}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 my-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              required
            />
          </div>
        </>
      )}

      {/* Email Field */}
      <div className="relative z-0 w-full my-5 group">
        <label className="absolute text-sm text-gray-500 peer-focus:-translate-y-6 peer-focus:text-accent">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={userFormData.email}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm my-3 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
          placeholder=" "
          required
        />
      </div>

      {/* Password Field */}
      <div className="relative z-0 w-full group">
        <label className="absolute text-sm text-gray-500 peer-focus:-translate-y-6 peer-focus:text-accent">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={userFormData.password}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm  my-3 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
          placeholder=" "
          required
        />
      </div>

      {/* Confirm Password Field - Only for Signup */}
      {mode === "sign up" && (
        <div className="relative z-0 w-full my-5 group">
          <label className="absolute text-sm text-gray-500 peer-focus:-translate-y-6 peer-focus:text-accent">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={userFormData.confirmPassword}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm my-3 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
            placeholder=" "
            required
          />
        </div>
      )}

      <p className="mb-2">
        {mode === "sign up" ? (
          <Link to="/auth/login">Already have an account? Login</Link>
        ) : (
          <Link to="/auth/signup">Register an account here</Link>
        )}
      </p>
      <p>
        <Link to="/pref">Continue as guest</Link>{" "}
      </p>
      <button
        type="submit"
        className="mt-1 text-white bg-secondary hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
      >
        {mode === "sign up" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;
