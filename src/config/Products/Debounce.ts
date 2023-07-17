import axios from 'axios';

const DebounceAPI = async (token: string, query:string): Promise<ReturnProduct> => {
  const apiUrl = `https://api.predict.app.br/app/produto?query=${query}&size=5`
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'X-TENANT-ID': 'arnia',
      }
    });

    return response.data;
  } catch (error) {
    throw new Error('Oops! Houve um problema ao carregar os dados.')
  }
}

export default DebounceAPI;
