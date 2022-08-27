import React, {Fragment, useState} from 'react';
import Pregunta from './components/Pregunta'


function App() {


  const [ budget, setBudget ] = useState(0);
  const [remaining, setRemaining ] = useState(0);

  return (
    <Fragment>
        <header className="container mx-auto">
          <h1 className="text-center text-5xl mt-4 text-white">weekly budget</h1>
        </header>

        <main className="container bg-white w-8/12 mx-auto mt-10 my-4 rounded p-5">
            <Pregunta 
              setBudget={setBudget}
              setRemaining={setRemaining}
            />
        </main>

    </Fragment>
    );
}

export default App;
