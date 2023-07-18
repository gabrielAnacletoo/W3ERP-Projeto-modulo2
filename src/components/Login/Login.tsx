import { LoginForm, BtnLogin, ImageLogin } from '@/assets/styles/Style'
import { Link } from 'react-router-dom'
import ImgLogin from '@/assets/images/LoginImage.jpeg'
import { ChangeEvent, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import LoginAPI from '@/config/Login/LoginAPI'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TokenContext from '@/Context/TokenContext'

const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    senha: ''
  })
  const [showPassWord, setShowPassword] = useState<boolean>(false)
  const [remember, setRemember] = useState<boolean>(false)
  const navigate = useNavigate()
  const contextToken = useContext(TokenContext)

  if (!contextToken) {
    throw new Error('contextToken not found.')
  }

  const handlesave = (token: string) => {
    contextToken.handleToken(token)
  }

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('REMEMBERED_EMAIL')
    const rememberedPassword = localStorage.getItem('REMEMBERED_PASSWORD')

    if (rememberedEmail && rememberedPassword) {
      setLoginData(prevdata => ({
        ...prevdata,
        email: rememberedEmail,
        senha: rememberedPassword
      }))
    }
  }, [])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData(prevdata => ({
      ...prevdata,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const loginSuccessful = await LoginAPI(loginData)
      handlesave(loginSuccessful.token)
      localStorage.setItem('AUTH_TOKEN', loginSuccessful.token)
      if (remember) {
        localStorage.setItem('REMEMBERED_EMAIL', loginData.email)
        localStorage.setItem('REMEMBERED_PASSWORD', loginData.senha)
      }
      navigate('/home')
      return
    } catch (error) {
      throw new Error('Oops! Houve um problema ao carregar os dados.')
    }
  }

  const handleToggle = () => {
    setShowPassword(!showPassWord)
  }

  const handleRemember = (e: ChangeEvent<HTMLInputElement>) => {
    setRemember(e.target.checked)
  }

  return (
    <LoginForm>
      <div className="Form">
        <p>Seja bem vindo!</p>
        <h2>Realize seu Login</h2>

        <form>
          <div className="input-field PoopinsFont">
            <input
              type="text"
              id="email"
              name="email"
              className="inputData"
              value={loginData.email}
              onChange={handleInput}
              required
            />
            <label htmlFor="email">E-mail</label>
          </div>

          <div className="input-field PoopinsFont">
            <input
              type={showPassWord ? 'text' : 'password'}
              id="password"
              name="senha"
              className="inputData"
              value={loginData.senha}
              onChange={handleInput}
              required
            />
            <label htmlFor="password">Senha</label>
            <button
              className="password-toggle"
              onClick={handleToggle}
              type="button"
            >
              {showPassWord ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </div>

          <div className="buttonsForm">
            <label htmlFor="remember"></label>
            <div className="Remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={handleRemember}
              />
              <b className="PoopinsFont">Lembrar-me</b>
            </div>
            <div>
              <Link to="" className="PoopinsFont">
                Esqueci minha senha
              </Link>
            </div>
          </div>

          <BtnLogin onClick={handleSubmit}>Entrar</BtnLogin>
        </form>
      </div>

      <ImageLogin>
        <img src={ImgLogin} alt="Login" />
      </ImageLogin>

      <ToastContainer />
    </LoginForm>
  )
}

export default Login
