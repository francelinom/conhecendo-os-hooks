
import './App.css'
import useCounter from './hooks/useCounter';

// Regra 1: Onde usar os hooks? 
// Dentro de uma função React! Tem que está associado a um componente React

// Regra 2: Ordem dos hooks?
// Tem que ser declarado no Top level da função React e a ordem 
// que foi declarado é a ordem que o React vai executar

function App() {

  const counter = useCounter(); 

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
