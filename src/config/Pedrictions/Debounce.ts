import axios from 'axios'

const DebounceAPI = async (
  token: string,
  query: string
): Promise<PredictionAPIResponse> => {
  if (!token) {
    const storageToken = localStorage.getItem('AUTH_TOKEN')
    if (!storageToken) {
      throw new Error('Token not found.')
    }
    token = storageToken
  }
  let apiUrl = `https://api.predict.app.br/app/predicao?query=${query}&size=1`
  if (query === '' || query === undefined) {
    apiUrl = 'https://api.predict.app.br/app/predicao?size=8'
  }
  try {
    const response = await axios.get(apiUrl, {
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

export default DebounceAPI
