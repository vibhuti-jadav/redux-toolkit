import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "./redux_toolkit/productReducer/productAction"
import { fetchUsers } from "./redux_toolkit/usersReducer/userAction"


function App() {

  const prod = useSelector((state) => state.prod)
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getAllProduct())
  }, [])
  console.log(users)

if(users.loading)
{
  return (
    <div className="p-10 text-lg text-red">
      loading....
    </div>
  )
}
  return (
    <>

    <button onClick={() => dispatch(fetchUsers())} className=" p-2  shadow-sky-950 shadow rounded-lg bg-cyan-800 ml-25 mt-5 mr-20 px-10 text-white">call users</button>
    <button onClick={() => dispatch(fetchUsers(1))} className=" p-2  shadow-sky-950 shadow rounded-lg bg-cyan-800 text-white px-10">single users</button>

    </>
  )
}

export default App