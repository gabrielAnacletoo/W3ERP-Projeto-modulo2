import axios from 'axios'


export const Delete = async (token: string,id:number): Promise<PredictionsType> => {
    const apiUrl = `https://api.predict.app.br/app/predicao/${id}/esgotando`;
    

    try {
     const response = await axios.delete(apiUrl, {
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
export default Delete
