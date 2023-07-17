//type recharts 
type Props = {
  percentualTotalProdutosAlta: number;
  percentualTotalProdutosBaixa: number;
  percentualTotalClientesAlta: number;
  percentualTotalClientesBaixa: number;
}


//type Login
type LoginData = {
    email: string;
    senha: string;
}
//types of context
type TokenContexttype = {
  token: string;
  handleToken: (token: string) => void;
}
type LoginRequest = {
    email: string;
    senha: string;
}

type LoginResponse = {
    token: string
    type: string
}

//return User data
type UserData = {
    email: string
    id: number
    nome: string
    papel: string
}

//dashboard api 
type DashboardData = {
    percentualTotalClientesAlta: number,
    percentualTotalClientesBaixa: number,
    percentualTotalProdutosAlta: number,
    percentualTotalProdutosBaixa: number,
    percentualVariacaoClientesAlta: number,
    percentualVariacaoClientesBaixa: number,
    percentualVariacaoProdutosAlta: number,
    percentualVariacaoProdutosBaixa: number,
    quantidadeClientesAlta: number,
    quantidadeClientesBaixa: number,
    quantidadeProdutosAlta: number,
    quantidadeProdutosBaixa: number
  }
  

  //tables 
  type TablesProducts = {
      id: number,
      nome: string,
      percentual: number;
    }

  //return Prediction 
  type PaginationType = {
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    pageable: {
      offset: number
      pageNumber: number
      pageSize: number
      paged: boolean
      sort: {
        empty: boolean
        sorted: boolean
        unsorted: boolean
      }
      unpaged: boolean
    }
    size: number
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    totalElements: number
    totalPages: number
  }

  type GetPredictionsType = PaginationType & {
    content: {
      id: number
      nome: string
      produtos: {
        id: number
        nome: string
        proximaCompra: string
      }[]
    }[]
  }

    //Return Product
type ReturnProduct = PaginationType & {
  content: {
    id: number
    nome: string
    classificacao:string;
    percentual:number;
  }[]
} 

//Details type 
type Details = {
    media120Dias: number
    nome: string
    percentualUltimos30Dias: number
    ultimos120Dias: number
    ultimos30Dias: number
    ultimos60Dias: number
    ultimos90Dias: number 
}

//talbes details 
type TableDetails = {
  id: number;
  nome: string;
  percentual: number;
  quantidade: number;
}



//object link clientes
type ClientsData = {
  id: number;
  nome: string
  telefone: string
  email: string
  whatsapp: string
}

//type history
type HistoryData = {
  content: {
    id: number;
    nome: string;
    quantidade: number;
    ultimaCompra: string;
  }[]
}

//predictions
type PredictionsType =  PaginationType &  {
  content: {
    id: number;
    nome: string;
    ultimaCompra: string;
    proximaCompra?:string;
    quantidade: number;
  }[]
}


interface Produto {
  id: number;
  nome: string;
  proximaCompra: string;
}

interface Empresa {
  id: number;
  nome: string;
  telefone?: string | null;
  email?: string | null;
  whatsapp?: string | null;
  classificacao?: string;
  percentual?: number;
  produtos: Produto[];
}


interface Produto {
  id: number;
  nome: string;
  proximaCompra: string;
}


interface Pageable {
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  pageNumber: number;
  pageSize: number;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

interface ResponseData {
  content: Empresa[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  size: number;
  empty: boolean;
}

type PredictionAPIResponse = ResponseData;


