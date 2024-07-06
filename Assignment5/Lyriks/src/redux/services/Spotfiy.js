import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const options = {
//     method: "GET",
//     headers: {
//         "x-rapidapi-key": "026bc57fa3msh10f40c420027d42p1e5be4jsn763be7fcdb3b",
//         "x-rapidapi-host": "spotify23.p.rapidapi.com",
//     },
// };

// fetch("https://spotify23.p.rapidapi.com/browse_all/", options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

export const SpotifyApi = createApi({
    reducerPath: "SpotifyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/",
        prepareHeaders: (headers) => {
            headers.set(
                "x-rapidapi-key",
                "026bc57fa3msh10f40c420027d42p1e5be4jsn763be7fcdb3b"
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
