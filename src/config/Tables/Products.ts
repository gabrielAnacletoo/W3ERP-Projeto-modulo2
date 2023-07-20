import axios from 'axios'


const ProductsTable = async (token: string,classification: string): Promise<TablesProducts[]> => {
    if (!classification) {
      const storageClassification = localStorage.getItem('PRODUCT_CLASSIFICATION')
      if (!storageClassification) {
        throw new Error('Classfication not found.')
      }
      classification = storageClassification
    }
    console.log('AAAA')
    let apiUrl = `https://api.predict.app.br/app/dashboard/produtos?classificacao=${classification}`;
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