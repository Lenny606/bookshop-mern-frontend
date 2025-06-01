import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getBaseUrl} from "../../../utils/baseUrl.js";
import {booksApi} from "../cart/booksApi.js";

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/v1/books`,
    credentials: "include",
    prepareHeaders: (Headers) => {
        return Headers;
    }
})

const homepageApi = createApi({
    reducerPath: "homepageApi",
    baseQuery: baseQuery,
    tagTypes: ['Homepage'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => `/`,
            providesTags: ['Books']
        }),

    })
})
export const {
    fetchOrder
} = homepageApi