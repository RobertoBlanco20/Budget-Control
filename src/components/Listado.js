import React from 'react';
import Gasto from './Gasto';

const Listado = ({spents}) => ( 

    <div className='w-full p-2'>

        <h2 className='py-4 text-2xl text-center font-light text-cyan-900'> Listado</h2>
        { spents.map( spent => (
            <Gasto 
                key={spent.id }
                spent={spent}
            />
)) } 
    </div>
         
 );

 
export default Listado;