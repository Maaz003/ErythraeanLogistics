import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseURL = 'https://erythraean.thebackendprojects.com/';

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: async (headers, {getState}) => {
      const state = getState();
      if (state?.user?.userToken) {
        headers.set('token', `${state?.user?.userToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],

  endpoints: builder => ({
    //----------------------------------------------A U T H-------------------------------------//
    loginUser: builder.mutation({
      query: formData => ({
        url: 'api/auth/login',
        method: 'POST',
        body: formData, // Accepts FormData
      }),
    }),
    signupUser: builder.mutation({
      query: formData => ({
        url: 'api/auth/signup',
        method: 'POST',
        body: formData, // Accepts FormData
        headers: headersFormdata,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: 'api/userinfo',
        method: 'Get',
      }),
    }),
  }),
});

export const {
  //AUTH ENDPOINTS
  useLoginUserMutation,
  useSignupUserMutation,
  useGetUserQuery,
} = serviceApi;
