import { contentResponse, IContent } from "../types";
import { apiSlice } from "./apiSlice";

const CONTENT_URL = "http://localhost:5000/api/content";

export const contentApiSlice_Lwa = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllContent: builder.query<contentResponse, { page?: number } | void>({
      query: (arg = {}) => {
        const { page = 1 } = arg || {};
        return `${CONTENT_URL}?page=${page}`;
      },
      providesTags: ["Content"],
    }),
    getUserContent: builder.query<contentResponse, { page?: number } | void>({
      query: (arg = {}) => {
        const { page = 1 } = arg || {};
        return `${CONTENT_URL}/user?page=${page}`;
      },
      providesTags: ["Content"],
    }),
    createContent: builder.mutation({
      query: (data) => ({
        url: `${CONTENT_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Content"],
    }),
    getContentByID: builder.query<IContent, { id?: string }>({
      query: ({ id }) => {
        return `${CONTENT_URL}/${id}`;
      },
      providesTags: ["Content"],
    }),
  }),
});

export const {
  useGetAllContentQuery,
  useGetUserContentQuery,
  useCreateContentMutation,
  useGetContentByIDQuery,
} = contentApiSlice_Lwa;
