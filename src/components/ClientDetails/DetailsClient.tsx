import HomeTemplate from '@/config/HomeTemplate'
import {
  ContainerDetails,
  Div120,
  CardDetails,
  DivDetails,
  TopDetails
} from '@/assets/styles/Style'
import { useEffect, useState } from 'react'
import { DetailsClients } from '@/config/ClientDetail/ClientTable'
import BackArrow from '@/assets/images/left-small.png'
import { useNavigate } from 'react-router-dom'
import ClientTable from './ClientTable'
import { useContext } from 'react'
import TokenContext from '@/Context/TokenContext'


const DetailsClientes = () => {
  const IDClient = localStorage.getItem('ID_CLIENT')
  const [detailsClient, setDetailsClient] = useState<Details>({} as Details)
  const navigate = useNavigate()
  const contextToken = useContext(TokenContext);
  
  if (!contextToken) {
    throw new Error('contextToken not found.');
  }
  const { token } = contextToken;




  useEffect(() => {
    const fetchDashData = async () => {
      try {
        if (token !== null && IDClient !== null) {
          const data = await DetailsClients(token, IDClient)
          setDetailsClient(data)
        }
      } catch (error) {
        throw new Error('Oops! Houve um problema ao carregar os dados.')
      }
    }
    fetchDashData()
  }, [])

  const handleBack = () => {
    navigate('/home')
  }



  return (
    <>
      <HomeTemplate>
        <ContainerDetails className="PoopinsFont">
          <TopDetails>
            <div>
              {' '}
              <span className="BtnBack" onClick={handleBack}>
                <img src={BackArrow} />
              </span>{' '}
              <span>Detalhamento</span>
            </div>
            <div>
              <h2 className="SoraFonts">{detailsClient.nome}</h2>
            </div>
          </TopDetails>
          <CardDetails>
            <Div120>
              <div>
                <div>
                  <p>Média 120 dias</p>
                </div>
                <span className="NumTotal">{detailsClient.media120Dias}</span>
              </div>
            </Div120>

            <DivDetails>
              <div>
                <div>
                  <p>Últimos 30 dias</p>
                </div>
                <div>
                  <span className="NumTotal">{detailsClient.ultimos30Dias}</span>{' '}
                  <span className="PercentPositive">
                    {detailsClient.percentualUltimos30Dias}%
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
                  <span className="NumTotal">{detailsClient.ultimos60Dias}</span>
                </div>
              </div>
            </DivDetails>

            <DivDetails>
              <div>
                <div>
                  <p>Últimos 90 dias </p>
                </div>
                <div>
                  <span className="NumTotal">{detailsClient.ultimos90Dias}</span>
                </div>
              </div>
            </DivDetails>

            <DivDetails>
              <div>
                <div>
                  <p>Últimos 120 dias </p>
                </div>
                <div>
                  <span className="NumTotal">{detailsClient.ultimos120Dias}</span>
                </div>
              </div>
            </DivDetails>
          </CardDetails>
        </ContainerDetails>
        <ClientTable/>
      </HomeTemplate>
    </>
  )
}

export default DetailsClientes
