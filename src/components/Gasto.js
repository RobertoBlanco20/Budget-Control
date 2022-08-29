import React from 'react'

const Gasto = ({spent}) => { 

    return ( 
        <li className='w-full block mt-4 border-b-2 border-cyan-700 relative'>
            <p className='p-4 w-10/12'>
                {spent.name}
                <span className='p-1.5  bg-cyan-600 rounded text-white absolute right-0'>${spent.amountform}</span>
            </p>
        </li>
 );
}
 
export default Gasto;