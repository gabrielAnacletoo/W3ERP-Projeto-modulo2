import axios from 'axios';

export const getUserData = async (token: string): Promise<any> => {
  const apiUrl = 'https://api.predict.app.br/central/usuario/me';

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'X-TENANT-ID': 'arnia',
      },
    })

    return response.data;
  } catch (error) {
    throw new Error('Oops! Houve um problema ao obter os dados do usuário. Por favor, tente novamente mais tarde.');

  }
}
