import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
    reducerPath : "recipeApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints:(builder)=>({
         allRecipe: builder.query({
            query: () => "recipes",
        }),
           productPage: builder.query({
            query: (p) => `products?skip=${p}`,
        })
    })
})  

export const { useAllRecipeQuery , useProductPageQuery  } = recipeApi