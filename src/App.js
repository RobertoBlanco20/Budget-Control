import React, {Fragment, useState} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'


function App() {


  const [ budget, setBudget ] = useState(0);
  const [remaining, setRemaining ] = useState(0);
  const [ ask, setAsk ] = useState(true);
  const [ spents, setSpents ] = useState([]);

  const addNewSpent = spent => {
    setSpents([...spents,
      spent]);
  }

  return (
    <Fragment>
        <header className="container mx-auto">
          <h1 className="text-center text-5xl mt-4 text-white">weekly budget</h1>
        </header>

        <main className="container bg-white w-8/12 mx-auto mt-10 my-4 rounded p-5">
          { ask ? (   <Pregunta 
              setBudget={setBudget}
              setRemaining={setRemaining}
              setAsk={setAsk}
            /> ) 
            
            : 
            
            (<article className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <section className='w-full'>
                  <Formulario
                        addNewSpent={addNewSpent}
                  />
                </section>
                <section className='w-full'>2</section>
            </article>)}
         
            
        </main>

    </Fragment>
    );
}

export default App;
