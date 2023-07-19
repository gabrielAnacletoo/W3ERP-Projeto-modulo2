import axios from 'axios';

const DashAPI = async (token: string): Promise<DashboardData> => {
  const apiUrl = 'https://api.predict.app.br/app/dashboard/resumo';

  try {
   

    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(
      'Oops! Houve um problema ao carregar os dados. Por favor, tente novamente mais tarde.'
    );
  }
};

export default DashAPI;
