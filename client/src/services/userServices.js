import { baseAppApi } from './baseService'

export const userServices = baseAppApi.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => '/users/get-current-user',
      transformResponse: (apiResponse) => apiResponse.data
    }),
    loginUser: build.mutation({
        query: (payload) => ({
            url: '/users/login',
            method: 'POST',
            body: payload
        }),
    }),
    registerUser: build.mutation({
        query: (payload) => ({
            url: '/users/register',
            method: 'POST',
            body: payload
        }),
        
    }),
  }),
  overrideExisting: false,
})

export const { useGetUserInfoQuery, useLoginUserMutation, useRegisterUserMutation } = userServices