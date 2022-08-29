import React, {Fragment} from 'react'

const ControlPresupuesto = ({budget, remaining}) => {
    return ( 
        <Fragment>
                <div className='w-full mt-2 p-2 bg-cyan-600 rounded text-white'><p>Prespuesto: ${budget}</p></div>

                <div className='w-full p-2 mt-2  '><p>Restante: ${remaining}</p></div>
        </Fragment>
     );
}
 
export default ControlPresupuesto;