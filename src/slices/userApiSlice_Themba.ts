import { RegisterResponse, RegisterRequest } from "../types";
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
  }),
});

export const { useRegisterMutation } = usersApiSlice;
