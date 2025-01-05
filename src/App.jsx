
import { useState } from 'react';
import './App.css'
import useCounter from './hooks/useCounter';

// Regra 1: Onde usar os hooks? 
// Dentro de uma função React! Tem que está associado a um componente React

// Regra 2: Ordem dos hooks?
// Tem que ser declarado no Top level da função React e a ordem 
// que foi declarado é a ordem que o React vai executar

function App() {

  // const counter = useCounter();
  const [password, setPassword] = useState('');
  const [labelCopy, setLabelCopy] = useState('Copiar senha');
  const [passwordSize, setPaswordSize] = useState(10);

  function handleCopy() {
    window.navigator.clipboard.writeText(password);
    setLabelCopy('Senha copiada');
  }

  function generatePassword() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
  
    for (let i = 0; i < passwordSize; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      password += caracteres.charAt(indiceAleatorio);
    }
    
    setLabelCopy('Copiar senha');
    return setPassword(password);
  }
  

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div className="card">
        <div className="marginInput">
          <label htmlFor="passwordSize">Tamanho:</label>
          <input 
            type="number" 
            id="passwordSize" 
            min={1}
            value={passwordSize}
            onChange={(ev) => setPaswordSize(ev.target.value)}/>
        </div>
        <button onClick={generatePassword}>
          Gerar senha de {passwordSize} caracteres
        </button>
        <button onClick={handleCopy}>
          {labelCopy}
        </button>
        <p>
          {password}
        </p>
      </div>
    </>
  )
}

export default App
