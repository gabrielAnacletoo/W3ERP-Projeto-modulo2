import axios from 'axios';

export const DetailsTables = async (token: string, id: string): Promise<TableDetails> => {
  const apiUrl = `https://api.predict.app.br/app/cliente/${id}/produtos?classificacao=EM_ALTA`;
  if (!token) {
    const storageToken = localStorage.getItem('AUTH_TOKEN')
    if (!storageToken){
      throw new Error('Token not found.');
    }
    token = storageToken;
  }
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'X-TENANT-ID': 'arnia',
      },
    });
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    throw new Error('Oops! Houve um problema ao carregar os detalhes da tabela. Por favor, tente novamente mais tarde.');
  }
}

export const DetailsClients = async (token: string,id:string): Promise<Details> => {
  const apiUrl = `https://api.predict.app.br/app/cliente/${id}/resumo`;
  if (!token) {
    
    const storageToken = localStorage.getItem('AUTH_TOKEN')
    if (!storageToken){
      throw new Error('Token not found.');
    }
    token = storageToken;
  }
  try {
   const response = await axios.get(apiUrl, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-TENANT-ID': 'arnia',
      }
   })
   return response.data;
  
  }catch(error){
      throw new Error('Oops! Houve um problema ao carregar os detalhes do cliente. Por favor, tente novamente mais tarde.');
  }

}
