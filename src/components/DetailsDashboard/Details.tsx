import HomeTemplate from '@/config/HomeTemplate'
import {
  ContainerDetails,
  Div120,
  CardDetails,
  DivDetails,
  TopDetails
} from '@/assets/styles/Style'
import { useEffect, useState } from 'react'
import DetailsAPI from '@/config/Details/Details'
import BackArrow from '@/assets/images/left-small.png'
import Detailstables from './Detailstables'
import { useContext } from 'react'
import TokenContext from '@/Context/TokenContext'

const Details = () => {
  const IdProduct = localStorage.getItem('ID_PRODUCT')
  const [details, setDetails] = useState<Details>({} as Details)
  const contextToken = useContext(TokenContext)

  if (!contextToken) {
    throw new Error('contextToken not found.')
  }
  const { token } = contextToken

  useEffect(() => {
    const fetchDashData = async () => {
      try {
        if (token !== null) {
          const data = await DetailsAPI(token, IdProduct)
          setDetails(data)
        }
      } catch (error) {
        throw new Error('Oops! Houve um problema ao carregar os dados.')
      }
    }
    fetchDashData()
  }, [])

  const handleBack = () => {
    history.back()
  }

  return (
    <>
      <HomeTemplate>
        <ContainerDetails className="PoopinsFont">
          <TopDetails>
            <div>
              <span className="BtnBack" onClick={handleBack}>
                <img src={BackArrow} />
              </span>{' '}
              <span>Detalhamento</span>
            </div>
            <div>
              <h2 className="SoraFonts">{details.nome}</h2>
            </div>
          </TopDetails>
          <CardDetails>
            <Div120>
              <div>
                <div>
                  <p>Média 120 dias</p>
                </div>
                <span className="NumTotal">{details.media120Dias}</span>
              </div>
            </Div120>

            <DivDetails>
              <div>
                <div>
                  <p>Últimos 30 dias</p>
                </div>
                <div>
                  <span className="NumTotal">{details.ultimos30Dias}</span>{' '}
                  <span className="PercentPositive">
                    {details.percentualUltimos30Dias}%
                  </span>{' '}
                </div>
              </div>
            </DivDetails>

            <DivDetails>
              <div>
                <div>
                  <p>Últimos 60 dias </p>
                </div>
                <div>
                  <span className="NumTotal">{details.ultimos60Dias}</span>
                </div>
              </div>
            </DivDetails>

            <DivDetails>
              <div>
                <div>
                  <p>Últimos 90 dias </p>
                </div>
                <div>
                  <span className="NumTotal">{details.ultimos90Dias}</span>
                </div>
              </div>
            </DivDetails>

            <DivDetails>
              <div>
                <div>
                  <p>Últimos 120 dias </p>
                </div>
                <div>
                  <span className="NumTotal">{details.ultimos120Dias}</span>
                </div>
              </div>
            </DivDetails>
          </CardDetails>
        </ContainerDetails>
        <Detailstables />
      </HomeTemplate>
    </>
  )
}

export default Details
