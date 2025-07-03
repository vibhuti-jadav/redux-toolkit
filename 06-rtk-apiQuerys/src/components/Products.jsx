import React from 'react';
import Card from './Card';
import { dummyApi } from '../redux_rtk/dummyReducer/dummyApi';

const Products = () => {
    const {data, isLoading, error} = dummyApi.useAllRecipeQuery({endpoint:"products", limit:8})
 console.log(data)

            if( isLoading){
                return (<h1>Loading...</h1>)
            }else if(error){
                return (<h1>something went wrong...</h1>)
            } else{
     return (
        <>
            {
                data?.products.map((ele) => (
                    <Card key={ele.id} img={ele.thumbnail} name={ele.title} />
                ))
            }
        </>
    )}
}

export default Products;