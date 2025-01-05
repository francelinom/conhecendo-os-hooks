import { useState } from "react";

function getInitialValue() {
    return 1 + 1;
}

export default function useCounter() {
    /**
     * () => getInitialValue() é uma função que retorna o valor inicial do estado
     * E que deixa otimizado, fazendo apenas uma chamada da função getInitialValue
     * Se não adicionar o " () => " toda vez que chamar a função ela vai está executando sempre
     * então se for uma função complexa vai causar um impacto na performance
     * Porque a função so serve para pegar o valor inicial!
     */
  const [count, setCount] = useState(() => getInitialValue());

  const increment = () => {
    setCount((count) => count + 1);
  }

  return { count, increment };
  
}
