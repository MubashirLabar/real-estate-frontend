import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const openaiService = createApi({
  reducerPath: "openai",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => {
    return {
      generateContent: builder.mutation({
        query: (data) => {
          return {
            url: "generateContent",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});

export const { useGenerateContentMutation } = openaiService;
export default openaiService;
