import { useState, useEffect } from 'react';

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Configura um temporizador usando setTimeout
    const timer = setTimeout(() => {
      // Define o debouncedValue com o valor atual
      setDebouncedValue(value);
    }, delay);

    // Retorna uma função de limpeza que é executada quando o efeito é desmontado ou quando o value ou delay mudam
    return () => {
      // Cancela o temporizador se o efeito for desmontado antes do seu término
      clearTimeout(timer);
    };
  }, [value, delay]);

  // Retorna o valor atrasado (debouncedValue) que pode ser usado no componente
  return debouncedValue;
}

export default useDebounce
