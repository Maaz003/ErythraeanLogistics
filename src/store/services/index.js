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
  tagTypes: ['User', 'SubBidder'],

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
    //----------------------------------------------Order-------------------------------------//
    getOrder: builder.query({
      query: () => ({
        url: 'api/orders',
        method: 'Get',
      }),
    }),
    //----------------------------------------------Order-------------------------------------//
    //----------------------------------------------Container List-------------------------------------//
    getContainer: builder.query({
      query: () => ({
        url: 'api/container',
        method: 'Get',
      }),
    }),
    //----------------------------------------------Container List-------------------------------------//
    //----------------------------------------------Notification-------------------------------------//
    getNotification: builder.query({
      query: () => ({
        url: 'api/order_notification',
        method: 'Get',
      }),
    }),
    priceAgreement: builder.mutation({
      query: formData => ({
        url: 'api/price_agreement',
        method: 'POST',
        body: formData,
      }),
    }),
    //----------------------------------------------Notification-------------------------------------//
    //----------------------------------------------Sub Bidder-------------------------------------//
    getSubBidder: builder.query({
      query: () => ({
        url: 'api/sub_bidders',
        method: 'Get',
      }),
      providesTags: ['SubBidder'],
    }),
    createSubBidder: builder.mutation({
      query: formData => ({
        url: 'api/create_sub_bidder',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['SubBidder'],
    }),
    //----------------------------------------------Sub Bidder-------------------------------------//
    //----------------------------------------------Balance US-------------------------------------//
    getBalanceUS: builder.query({
      query: () => ({
        url: 'api/balance_us',
        method: 'Get',
      }),
    }),
    //----------------------------------------------Balance US-------------------------------------//
    //----------------------------------------------Towing Rates-------------------------------------//
    getTowingRates: builder.query({
      query: id => ({
        url: 'api/towing_rates?auction_company_id=' + id,
        method: 'Get',
      }),
    }),
    //----------------------------------------------Towing Rates-------------------------------------//
    //----------------------------------------------Auction-------------------------------------//
    getAuctionCity: builder.query({
      query: id => ({
        url: 'api/get_auction_city?id=' + id,
        method: 'Get',
      }),
    }),

    //----------------------------------------------Auction-------------------------------------//
    //----------------------------------------------POL-------------------------------------//
    getExportPorts: builder.query({
      query: () => ({
        url: 'api/export_ports',
        method: 'Get',
      }),
    }),

    //----------------------------------------------POL-------------------------------------//
  }),
});

export const {
  //AUTH ENDPOINTS
  useLoginUserMutation,
  useSignupUserMutation,
  useGetUserQuery,
  useGetDestinationPortQuery,
  useGetOrderStatisticsQuery,
  useGetOrderQuery,
  useGetContainerQuery,
  useGetNotificationQuery,
  usePriceAgreementMutation,
  useGetSubBidderQuery,
  useCreateSubBidderMutation,
  useGetBalanceUSQuery,
  useGetTowingRatesQuery,
  useGetAuctionCityQuery,
  useGetExportPortsQuery,
} = serviceApi;
