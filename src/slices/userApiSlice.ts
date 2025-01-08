import {
  RegisterResponse,
  RegisterRequest,
  LoginResponse,
  LoginRequest,
  LogoutResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  GetProfileResponse,
  GetProfileRequest,
  DeleteProfileResponse,
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
    updateUser: builder.mutation<UpdateUserResponse, UpdateUserRequest>({
      query: (data) => ({
        url: "http://localhost:5000/api/users/profile",
        method: "PUT",
        body: data,
      }),
    }),
    getProfile: builder.mutation<GetProfileResponse, GetProfileRequest>({
      query: (data) => ({
        url: "http://localhost:5000/api/users/profile",
        method: "GET",
        body: data,
      }),
    }),
    Delete: builder.mutation<DeleteProfileResponse, void>({
      query: () => ({
        url: `http://localhost:5000/api/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useUpdateUserMutation,
  useGetProfileMutation
} = usersApiSlice;
