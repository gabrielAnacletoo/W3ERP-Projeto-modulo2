import axios from 'axios'

export const getUserData = async (token: string): Promise<UserData> => {
  const apiUrl = 'https://api.predict.app.br/central/usuario/me'
  if (!token) {
    const storageToken = localStorage.getItem('AUTH_TOKEN')
    if (!storageToken) {
      throw new Error('Token not found.')
    }
    token = storageToken
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
    throw new Error(
      'Oops! Houve um problema ao obter os dados do usuário. Por favor, tente novamente mais tarde.'
    )
  }
}
