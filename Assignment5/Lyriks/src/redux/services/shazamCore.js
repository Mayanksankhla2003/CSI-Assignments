import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ShazamCoreApi = createApi({
    reducerPath: "ShazamApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core7.p.rapidapi.com/",
        prepareHeaders: (headers) => {
            headers.set("x-rapidapi-key", VITE_SHAZAM_CORE_RAPID_API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => `/charts/get-top-songs-in-world`,
        }),
        getSongsByGenre: builder.query({
            query: (genre) =>
                `/charts/get-top-songs-in_world_by_genre?genre=${genre}`,
        }),
        getSongsByCountry: builder.query({
            query: (countryCode) =>
                `/charts/get-top-songs-in-country?country_code=${countryCode}`,
        }),
        getSongsBySearch: builder.query({
            query: (searchTerm) => `/search?term=${searchTerm}`,
        }),
        getArtistDetails: builder.query({
            query: (artistId) => `/artists/get_details?id=${artistId}`,
        }),
        getSongDetails: builder.query({
            query: ({ songid }) => `/songs/get_details?id=${songid}`,
        }),
        getSongRelated: builder.query({
            query: ({ songid }) => `/tracks/related?track_id=${songid}`,
        }),
    }),
});
export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = ShazamCoreApi;
