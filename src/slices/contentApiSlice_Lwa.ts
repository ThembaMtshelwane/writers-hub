import { contentResponse } from "../types";
import { apiSlice } from "./apiSlice";

// const CONTENT_URL = "http://localhost:5000/api/content";

export const contentApiSlice_Lwa = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllContent: builder.query<contentResponse, { page?: number } | void>({
      query: (arg = {}) => {
        const { page = 1 } = arg || {};
        return `http://localhost:5000/api/content?page=${page}`;
      },
    }),
  }),
});

export const { useGetAllContentQuery } = contentApiSlice_Lwa;
