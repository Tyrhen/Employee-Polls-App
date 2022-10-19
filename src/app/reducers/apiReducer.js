import { _getUsers } from "../../_DATA";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = () => () => {
  return { data: "" };
};

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: baseQuery(),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getUsers: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => "/users",
      transformResponse: (response) => _getUsers(),
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetUsersQuery } = apiSlice;
