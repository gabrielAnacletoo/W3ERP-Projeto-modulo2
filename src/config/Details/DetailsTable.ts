import axios from 'axios'


//Productst
export const DetailsHigh = async (token: string,id:any): Promise<TableDetails[]> => {
    const apiUrl = `https://api.predict.app.br/app/produto/${id}/clientes?classificacao=EM_ALTA`;

    
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

//Products
export const DetailsLow = async (token: string,id:string): Promise<TableDetails[]> => {
    const apiUrl = `https://api.predict.app.br/app/produto/${id}/clientes?classificacao=EM_BAIXA`;

    
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

//Clientes 


export const ProductsHigh = async (token: string,id:string): Promise<TableDetails[]> => {
    const apiUrl = `https://api.predict.app.br/app/cliente/${id}/produtos?classificacao=EM_ALTA`;

    
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

//products low
export const ProductsLow = async (token: string,id:string): Promise<TableDetails[]> => {
    const apiUrl = `https://api.predict.app.br/app/cliente/${id}/produtos?classificacao=EM_BAIXA`;

    
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