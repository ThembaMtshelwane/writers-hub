import { apiSlice } from "./apiSlice";
import { IGenre } from "../types"; //TODO: We have to update the type file. Remove unused type.

const TYPE_URL = "/types";

export const typeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTypes: builder.query<{ data: IGenre[] }, void>({
      query: () => {
        return `${TYPE_URL}`;
      },
      providesTags: ["Type"],
    }),
  }),
});

export const { useGetTypesQuery } = typeApiSlice;
