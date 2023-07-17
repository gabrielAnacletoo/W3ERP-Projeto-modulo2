import axios from 'axios'

const History = async (token: string,id:number): Promise<HistoryData> => {
    const apiUrl = `https://api.predict.app.br/app/predicao/${id}/historico`;

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

export default History
