import React from 'react'

const Error = ({menssage}) => {
    return ( 
        <p className="text-center border bg-red-400 rounded font-bold mt-5 mb-5 p-4 w-full">{menssage}</p>
     );
}
 
export default Error;