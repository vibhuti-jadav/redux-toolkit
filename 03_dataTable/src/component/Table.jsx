import React from 'react'
import { data } from '../utilitis/data'
import { RiHeartFill, RiSortAlphabetAsc, RiSortAlphabetDesc, RiSortDesc, RiSortNumberAsc, RiSortNumberDesc } from "@remixicon/react";
import { useDispatch, useSelector } from 'react-redux';
import { sortUsersByField } from '../reduxToolkit/dataReducer/dataSlice';

console.log(data)


const Table = () => {

  const dispatch= useDispatch();
  const datas = useSelector((state)=>state.data.data);
  const {sortBy,sortDirection}=useSelector((state)=>state.data)

   
    
  const handlesort =(field)=>{
    dispatch(sortUsersByField(field));
  };
  return (
 
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3"  >
                id <button onClick={()=>handlesort('id')} className='border align-middle rounded ml-1 bg-gray-600 text-white'>{sortBy === 'id' ? (sortDirection === 'asc' ? <RiSortNumberDesc/> : <RiSortNumberAsc/>): ''}</button>
                </th>
                <th scope="col" className="px-6 py-3">
                    first Name<button className='border align-middle rounded ml-1 bg-gray-600 text-white'><RiSortAlphabetAsc/></button> 
                </th>
                <th scope="col" className="px-6 py-3">
                   last name<button className='border align-middle rounded ml-1 bg-gray-600 text-white'><RiSortAlphabetAsc/></button>
                </th>
                <th scope="col" className="px-6 py-3">
                    email<button className='border align-middle rounded ml-1 bg-gray-600 text-white'><RiSortDesc/></button>
                </th>
                <th scope="col" className="px-6 py-3">
                    gender<button className='border align-middle rounded ml-1 bg-gray-600 text-white'><RiSortDesc/></button>
                </th>
                <th scope="col" className="px-6 py-3">
                    city<button className='border align-middle rounded ml-1 bg-gray-600 text-white'><RiSortAlphabetAsc/></button>
                </th>
            </tr>
        </thead>
        <tbody>
          {data.map((ele)=>(
               <tr key={ele.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {ele.id}
                </th>
                <td className="px-6 py-4">
                    {ele.first_name}
                </td>
                <td className="px-6 py-4">
                    {ele.last_name}
                </td>
                <td className="px-6 py-4">
                    {ele.email}
                </td>
                <td className="px-6 py-4">
                    {ele.gender}
                </td>
                <td className="px-6 py-4">
                   {ele.city}
                </td>
            </tr>
          ))}
         

        </tbody>
    </table>
</div>

 

  )
}

export default Table