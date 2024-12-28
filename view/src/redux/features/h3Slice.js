import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = process.env.REACT_APP_API_URL

export const h3Slice = createApi({
    reducerPath: "h3",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${apiUrl}/h3`,
        }
    ),
    endpoints: (builder) => ({ 
        getH3Index: builder.query({
            query: (data) => {
                const params = new URLSearchParams()
                if(data.lat) params.append('lat', data.lat);
                if(data.lng) params.append('lng', data.lng);
                if(data.resolution) params.append('resolution', data.resolution);
                return `/getH3Index?${params.toString()}`
            }
        })
    })
})

export const { useGetH3IndexQuery } = h3Slice