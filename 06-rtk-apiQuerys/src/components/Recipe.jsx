import React from 'react';
import { dummyApi } from '../redux_rtk/dummyReducer/dummyApi';
import Card from './Card';

const Recipe = () => {
 const {data, isLoading, error} = dummyApi.useAllRecipeQuery({endpoint:"recipe", limit:8})

 console.log(data)
    if( isLoading){
                return (<h1>Loading...</h1>)
            }else if(error){
                return (<h1>something went wrong...</h1>)
            } else{
    return (
        <>
            {
                data?.recipes.map((ele) => (
                    <Card key={ele.id} img={ele.image} name={ele.name} />
                ))
            }
        </>
    );
}
}

export default Recipe;