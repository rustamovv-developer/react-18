import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["User"],
    }),
    // Post request
    createUser: build.mutation({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // Delete request
    // deleteUser: build.mutation({
    //   query: (id) => ({
    //     url: `/`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["User"],
    // }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = userApi;
