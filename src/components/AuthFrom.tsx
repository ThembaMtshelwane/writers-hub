import React from "react";
import { Link } from "react-router-dom";
import { FormData } from "../types";

interface AuthFormProps {
  mode: "login" | "sign up";
  handleForm: (e: React.FormEvent) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  handleForm,
  formData,
  setFormData,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(
      (prevData: FormData) =>
        ({
          ...prevData,
          [name]: value,
        } as FormData)
    );
  };

  return (
    <form
      className="max-w-md mx-auto bg-primary flex flex-col gap-2 rounded-xl py-10 px-10 w-[300px] sm:w-[80%]"
      onSubmit={(e) => handleForm(e)}
    >
      <h2 className="text-accent text-4xl text-center capitalize">{mode}</h2>

      {/* Email Field */}
      <div className="relative z-0 w-full my-5 group">
        <label className="absolute text-sm text-gray-500 peer-focus:-translate-y-6 peer-focus:text-accent">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
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
          value={formData.password}
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
            value={formData.confirmPassword}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm my-3 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
            placeholder=" "
            required
          />
        </div>
      )}

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
                value={formData.firstName}
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
                value={formData.lastName}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 my-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
                placeholder=" "
                required
              />
            </div>
          </div>

          <div className="relative z-0 w-full group">
            <label className="absolute text-sm text-gray-500  peer-focus:text-accent">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 my-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-accent peer"
              required
            />
          </div>
        </>
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
