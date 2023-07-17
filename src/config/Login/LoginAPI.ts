import axios from 'axios'
import { toast } from 'react-toastify'

const LoginAPI = async (loginData: LoginData): Promise<LoginResponse> => {
  const ApiURL = 'https://api.predict.app.br/central/autenticacao/login'

  try {
    // toast loading
    toast.info('Carregando...', {
      position: toast.POSITION.TOP_LEFT
    })

    // connection with delay
    const connect = (): Promise<LoginResponse> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          axios
            .post(ApiURL, loginData, {
              headers: {
                'Content-Type': 'application/json',
                'X-TENANT-ID': 'arnia'
              }
            })
            .then(response => resolve(response.data))
            .catch(error => reject(error))
        }, 2500) // delay 2500ms
      })
    }

    const response = await connect()

    // Remove o toast de loading
    toast.dismiss()

    return response
  } catch (error) {
    // Exibe o toast de erro
    toast.error('Login ou senha inválidos', {
      position: toast.POSITION.TOP_LEFT
    })

    throw new Error('Oops! Houve um problema ao carregar os dados.')
  }
}

export default LoginAPI
