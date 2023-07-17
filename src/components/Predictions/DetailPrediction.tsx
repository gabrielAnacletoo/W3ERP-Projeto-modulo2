import HomeTemplate from '@/config/HomeTemplate'
import {
  ContainerDetails,
  TopDetails,
  HeaderPrediction,
  Info
} from '@/assets/styles/Style'
import BackArrow from '@/assets/images/left-small.png'
import { useNavigate } from 'react-router-dom'
import PredictionTable from './PredictionsTable'
import { useLocation } from 'react-router-dom'
import Phone from '@/assets/images/phone-telephone.png'
import Mail from '@/assets/images/mail.png'


const DetailPrediction = () => {
  const location = useLocation();
  const navigate = useNavigate()

  //button back
  const handleBack = () => {
    navigate('/predicoes')
  }

  const { nome, email, telefone } = location.state;

  return (
    <>
      <HomeTemplate>
        <ContainerDetails className="PoopinsFont">
          <TopDetails>
            <div>
              <span className="BtnBack" onClick={handleBack}>
                <img src={BackArrow} className='imgBG'/>
              </span>
              <span>Predição</span>
            </div>
          </TopDetails>
          <HeaderPrediction>
          <h2 className='SoraFonts text-overlay'>{nome}</h2>
          <Info>
            <div><img src={Phone} alt="Phone Icon" />{telefone && telefone.length > 0 ? telefone : '-'}</div>
            <div><img src={Mail} alt="Mail Icon" />{email && email.length ? email : '-'}</div>
            </Info>
          </HeaderPrediction>
        </ContainerDetails>
       <PredictionTable/>
      </HomeTemplate>
    </>
  )
}

export default DetailPrediction
