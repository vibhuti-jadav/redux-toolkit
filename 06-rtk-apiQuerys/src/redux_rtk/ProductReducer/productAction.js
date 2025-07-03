import { allProd } from "./prodSlice"


export const getAllProduct = () =>{
    return async (dispatch) => {
       const fetchProduct = async (params) => {
           let res = await fetch('https://fakestoreapi.com/products')
           return await res.json()
        }
        try {
           let data = await fetchProduct()
           console.log(data)
        //    dispatch(allProd(data))
        } catch (error) {
            console.log(error)
        }
        
    }
}