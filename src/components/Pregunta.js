import React, {Fragment, useState} from 'react'
import Error from './Error'

const Pregunta = ({menssage, setBudget, setRemaining}) => {

    const [amount, setAmount] = useState(0) 
    const [error, setError ] = useState(false)


    const addBudget = e => {
        e.preventDefault();

       // Validar
       if(amount <= 0 || amount === '' || isNaN(amount) ){
        setError(true)
        return
       }

       // Si pasa la validacion 
       setError(false)
       setBudget(amount)
       setRemaining(amount)
    
    } 


    return ( 
        <Fragment>
                <h2 className="text-center text-3xl mt-4 text-cyan-900"> Añade tu presupuesto </h2>

                <form
                    onSubmit={addBudget}
                >

                    {error ? <Error menssage='El presupuesto es incorrecto'  /> : null }

                    <input
                        type='number'
                        className='w-full border h-8 p-2 mt-5'
                        placeholder='Add your budget'
                        onChange={e => setAmount( parseInt(e.target.value), 10 )}
                    />

                    <button
                        type='submit'
                        className='w-full bg-cyan-400 p-2 mt-5 text-white font-bold'
                        value='Add budget'
                    >Add budget </button>

                </form>
        </Fragment>
      

     );
}
 
export default Pregunta;