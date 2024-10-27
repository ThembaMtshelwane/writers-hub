import React, { useState } from "react";

interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  dob?: string;
}

interface AuthFormProps {
  mode: "login" | "signup";
  handleForm: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, handleForm }) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    dob: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      className="max-w-md mx-auto bg-primary flex flex-col gap-2 rounded-xl py-10 px-10 w-[80%]"
      onSubmit={handleForm}
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
      {mode === "signup" && (
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
      {mode === "signup" && (
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

          <div className="relative z-0 w-full mb-5 group">
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

      <button
        type="submit"
        className="mt-1 text-white bg-secondary hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
      >
        {mode === "signup" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default AuthForm;