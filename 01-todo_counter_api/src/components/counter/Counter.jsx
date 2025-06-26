import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deCount, inCount } from '../../reduxToolkit/counterToolkit/CounterSlice'

const Counter = () => {

    let count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

  return (
     <div className='max-w-7xl mx-auto my-10 text-center border p-10'>
            <div className="inline-flex shadow-xs" role="group">
              
                <button onClick={()=>dispatch(inCount())} className='border p-3 bg-black text-white '>+</button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700  ">
                    {count}
                </button>
                 <button onClick={() => dispatch(deCount())} className='border p-3  bg-black text-white'>-</button>
            </div>

        </div>
  )
}

export default Counter
