import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseURL = 'https://erythraean.thebackendprojects.com/';

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: async (headers, {getState}) => {
      const state = getState();
      console.log('state ===>', state.user?.userToken);
      if (state?.user?.userToken) {
        headers.append('Authorization', 'Bearer ' + state.user.userToken);
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
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: 'api/userinfo',
        method: 'Get',
      }),
    }),
    //----------------------------------------------A U T H-------------------------------------//
    //----------------------------------------------Destination Port-------------------------------------//
    getDestinationPort: builder.query({
      query: () => ({
        url: 'api/destination',
        method: 'Get',
      }),
    }),
    //----------------------------------------------Destination Port-------------------------------------//
    //----------------------------------------------Statistics-------------------------------------//
    getOrderStatistics: builder.query({
      query: () => ({
        url: 'api/order_statistics',
        method: 'Get',
      }),
    }),
    //----------------------------------------------Statistics-------------------------------------//
  }),
});

export const {
  //AUTH ENDPOINTS
  useLoginUserMutation,
  useSignupUserMutation,
  useGetUserQuery,
  useGetDestinationPortQuery,
  useGetOrderStatisticsQuery,
} = serviceApi;
