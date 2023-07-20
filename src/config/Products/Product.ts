import axios from 'axios';

const ProductsAPI = async (token: string, page:number, classification:  string): Promise<ReturnProduct> => {
  if (!token) {
    
    const storageToken = localStorage.getItem('AUTH_TOKEN')
    if (!storageToken){
      throw new Error('Token not found.');
    }
    token = storageToken;
  }
  let apiUrl = `https://api.predict.app.br/app/produto?page=${page}&size=10`
  if (classification === 'TODOS' || classification === undefined) {
    apiUrl = `https://api.predict.app.br/app/produto?page=${page}&size=10`
  } else  if (classification === 'EM_ALTA') {
      apiUrl = `https://api.predict.app.br/app/produto?classificacao=${classification}&page=${page}&size=10&sort=asc`
  } else if (classification === 'EM_BAIXA') {
    apiUrl = `https://api.predict.app.br/app/produto?classificacao=${classification}&page=${page}&size=10&sort=asc`
  } else {
    apiUrl = `https://api.predict.app.br/app/produto?page=${page}&size=10`
  }
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

export default ProductsAPI;
