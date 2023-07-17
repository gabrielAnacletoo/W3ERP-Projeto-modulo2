import axios from 'axios'
import { toast } from 'react-toastify'

const PredictionAPI = async (token: string, page: number): Promise<PredictionAPIResponse> => {
  const apiURL = `https://api.predict.app.br/app/predicao?page=${page}&size=8`

  try {
     const response = await axios.get(apiURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    return response.data
  } catch (error) {
    throw new Error('Oops! Houve um problema ao carregar os dados.')
  }
}

export default PredictionAPI
