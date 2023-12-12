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
  tagTypes: ['User', 'MCoach', 'MCoaches', 'Chats', 'Notifications', 'Posts'],

  endpoints: builder => ({
    //----------------------------------------------A U T H-------------------------------------//
    loginUser: builder.mutation({
      query: data => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
    }),
    signupUser: builder.mutation({
      query: data => ({
        url: 'signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  //AUTH ENDPOINTS
  useLoginUserMutation,
  useSignupUserMutation,
} = serviceApi;
