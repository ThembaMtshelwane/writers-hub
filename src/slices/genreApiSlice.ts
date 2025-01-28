import { IGenre } from "../types";
import { apiSlice } from "./apiSlice";

const GENRE_URL = "http://localhost:5000/api/genres";

export const genreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query<{ data: IGenre[] }, void>({
      query: () => {
        return `${GENRE_URL}`;
      },
      providesTags: ["Genre"],
    }),
    createGenre: builder.mutation({
      query: (data) => ({
        url: `${GENRE_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Genre"],
    }),
  }),
});

export const { useGetGenresQuery, useCreateGenreMutation } = genreApiSlice;
