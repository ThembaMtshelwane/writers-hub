import {
    RegisterResponse,
    RegisterRequest,
    LoginResponse,
    LoginRequest,
    LogoutResponse,
  } from "../types";
  import { apiSlice } from "./apiSlice";
  
  
  export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      register: builder.mutation<RegisterResponse, RegisterRequest>({
        query: (data) => ({
          url: "http://localhost:5000/api/users",
          method: "POST",
          body: data,
        }),
      }),
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: (data) => ({
          url: "http://localhost:5000/api/users/login",
          method: "POST",
          body: data,
        }),
      }),
      logout: builder.mutation<LogoutResponse, void>({
        query: () => ({
          url: `http://localhost:5000/api/users/logout`,
          method: "POST",
        }),
      }),
    }),
  });
  
  export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
    usersApiSlice;
  