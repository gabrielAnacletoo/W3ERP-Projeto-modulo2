import axios from 'axios'


const ProductsTable = async (token: string,classification: string): Promise<TablesProducts[]> => {

    const apiUrl = `https://api.predict.app.br/app/dashboard/produtos?classificacao=${classification}`;

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
        throw new Error('Oops! Houve um problema ao carregar os dados dos clientes. Por favor, tente novamente mais tarde.')
       }
   

}
export default ProductsTable;