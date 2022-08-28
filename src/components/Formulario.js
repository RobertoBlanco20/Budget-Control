import React, {useState} from 'react';
import Error from './Error'

const Formulario = ({menssage}) => {

    const [ name, setName ] = useState('');
    const [ amountform, setAmountForm ] = useState(0);
    const [error, setError ] = useState(false)

    const addSpent = e => {
        e.preventDefault();

        // Validar 
        if( name.trim() === '' || amountform <= 0 || isNaN(amountform) ){
            setError(true)
            return
        }
        setError(false)

        // Construir el gasto


        // Pasar el gasto al componente principal


        // Resetear el form
    }

    return ( 
        
            <form 
                className='w-full p-2'
                onSubmit={addSpent}    
            >

                {error ? <Error menssage='Debes colocar un nombre al gasto y una cantidad valida'  /> : null }

                <h2 className="py-4 text-2xl text-center font-light text-cyan-900">Añade tus gastos:</h2>

                <label className='w-full block mt-4'>Nombre del gasto:</label>
                <input 
                    type="text"
                    placeholder="Ej. Comida"
                    className='w-full'
                    value={name}
                    onChange={ e => setName(e.target.value)}
                />        

                <label className='w-full block mt-4'>Cantidad a gastar:</label>
                <input 
                    type="number"
                    placeholder="Ej. 300"
                    className='w-full'
                    value={amountform}
                    onChange={ e => setAmountForm( parseInt(e.target.value), 10 )} // ME DA ERROR (NAN)
                />        

                <input 
                    type="submit"
                    value="Agregar a la lista"
                    className='w-full my-4 border rounded bg-cyan-400 hover:bg-cyan-500 cursor-pointer mt-4 h-10 text-white font-bold'

                />

                
            </form>
        
     );
}
 
export default Formulario;