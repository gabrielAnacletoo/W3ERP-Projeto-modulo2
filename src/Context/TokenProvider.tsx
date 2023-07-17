import { ReactNode, useState, useEffect } from 'react';
import TokenContext from './TokenContext';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: ReactNode; 
}


const TokenProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string>('')
  const storedToken = localStorage.getItem('AUTH_TOKEN')

  useEffect(()=> {
      if(storedToken) {
          setToken(storedToken)
      }

  }, [])
  const handleToken = (token: string) => {
    setToken(token)
                }

  return (
    <TokenContext.Provider value={{token, handleToken}}>
      {children}
    </TokenContext.Provider>
  )
}
export default TokenProvider