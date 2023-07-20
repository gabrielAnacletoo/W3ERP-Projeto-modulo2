import * as S from '@/assets/styles/Style'
import ProfileImg from '@/assets/images/perfil.png'
import DownArrow from '@/assets/images/chevron down.png'
import ImgConfig from '@/assets/images/config.png'
import ImgLogOut from '@/assets/images/logout.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserData } from '@/config/User/getUserData'
import { useContext } from 'react'
import TokenContext from '@/Context/TokenContext'

const Profile = () => {
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const [showBtn, setShowBtn] = useState<boolean>(false)
  const [confirmLogout, setConfirmLogOut] = useState<boolean>(false)
  const navigate = useNavigate()
  const contextToken = useContext(TokenContext)

  if (!contextToken) {
    throw new Error('contextToken not found.')
  }

  const { token, handleToken } = contextToken;

  const handleBtn = () => {
    setShowBtn(!showBtn)
  }

  const handleLogOut = () => {
    handleToken('')
    localStorage.removeItem('AUTH_TOKEN')
    navigate('/')
  }
 
  useEffect(() => {
    const fetchUserData = async () => {
      if (token !== null ) {
        const data = await getUserData(token)
      
        setUserData(data)
      }
    }
    fetchUserData()
  }, [])

  const handleConfirm = () => {
    setConfirmLogOut(!confirmLogout)
  }

  const isMobile = window.innerWidth <= 768

  return (
    <S.ProfileStyle className="PoopinsFont">
      <img src={ProfileImg} alt="Profile Image" className="Profileimage" />

      <S.UserContent>
        {!isMobile && (
          <>
            <p className="SoraFonts">
              <b>{userData.nome}</b>
            </p>
            <p className="PoopinsFont">{userData.email}</p>
          </>
        )}
      </S.UserContent>

      <S.Menu>
        <img
          src={DownArrow}
          alt="arrow down"
          onClick={handleBtn}
          className="downArrow"
        />
        {showBtn && (
          <>
            <S.CardLogOut>
              <div className="sair">
                <div>
                  <img src={ImgConfig} alt="config" />
                </div>
                <div>
                  <button className="PoopinsFont"> Configurações</button>
                </div>
              </div>

              <hr />

              <div className="sair" onClick={handleConfirm}>
                <div>
                  <img src={ImgLogOut} alt="Logout" />
                </div>
                <div>
                  {' '}
                  <button className="PoopinsFont">Sair</button>
                </div>
              </div>
            </S.CardLogOut>
          </>
        )}
      </S.Menu>
      {confirmLogout && (
        <S.Backmodal>
          <S.ModalConfirm>
            <p>Deseja realmente sair?</p>
            <div className="DivButtons">
              <button onClick={handleConfirm} className="No">
                Cancelar
              </button>
              <button onClick={handleLogOut} className="Yes">
                Sim
              </button>
            </div>
          </S.ModalConfirm>
        </S.Backmodal>
      )}
    </S.ProfileStyle>
  )
}

export default Profile
