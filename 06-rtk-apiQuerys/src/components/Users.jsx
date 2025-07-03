import React from 'react';
import { dummyApi } from '../redux_rtk/dummyReducer/dummyApi';
import Card from './Card';

const Users = () => {
 const {data, isLoading, error} = dummyApi.useAllRecipeQuery({endpoint:"users", limit:8})
 console.log(data)
            if( isLoading){
                return (<h1>Loading...</h1>)
            }else if(error){
                return (<h1>something went wrong...</h1>)
            } else{
     return (
        <>
            {
                data?.users.map((ele) => (
                    <Card key={ele.id} img={ele.image} name={ele.firstName + ele.lastName} />
                ))
            }
        </>
    )}
}

export default Users;