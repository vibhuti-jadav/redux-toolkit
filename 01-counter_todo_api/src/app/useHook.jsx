import React, { useEffect, useState } from 'react';

const useHook = (url) => {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false);
   const [data, setData] = useState([])

   useEffect(()=>{
      
       async function fetchApi(){
          let res = await fetch(url)
          let result = await res.json()
          setData(result)
       }
       fetchApi();

   },[])

   return {loading, error, data}

  
}

export default useHook