import axios from 'axios'



const DetailsAPI = async (token: string,id:any): Promise<Details> => {
    const apiUrl = `https://api.predict.app.br/app/produto/${id}/resumo`;

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
        throw new Error('Oops! Houve um problema ao carregar os dados. Por favor, tente novamente mais tarde.');
    }

}
export default DetailsAPI

