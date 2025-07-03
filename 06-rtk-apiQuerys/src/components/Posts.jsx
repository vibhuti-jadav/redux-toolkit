import React from 'react';
import { dummyApi } from '../redux_rtk/dummyReducer/dummyApi';
import Card from './Card';

const Posts = () => {

    const {data, isLoading, error} = dummyApi.useAllRecipeQuery({endpoint:"posts", limit:8})

 console.log(data)

            if( isLoading){
                return (<h1>Loading...</h1>)
            }else if(error){
                return (<h1>something went wrong...</h1>)
            } else{
     return (
        <>
            {
                data?.posts.map((ele) => (
                    <Card key={ele.id} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL51_W7wGkMgVb89aa7bqZ25gkU-gPATjisQ&s" name={ele.title} />
                ))
            }
        </>
    );
}
 
   
}

export default Posts;