import * as S from '@/assets/styles/Style'
import {
  ChartComponent1,
  ChartComponent2,
  ChartComponent3,
  ChartComponent4
} from '../ChartComponent/ChartComponent'
import DashAPI from '@/config/Dashboard/Dashboard'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import TokenContext from '@/Context/TokenContext'
import CalendarIcon from '@/assets/images/calendar.png'
import Downarrow from '@/assets/images/chevron down.png'

const Dashboard = () => {
  const [dashData, setDashData] = useState<DashboardData>({} as DashboardData)
  const [ModalMonth, setModalMonth] = useState<boolean>(false)
  const contextToken = useContext(TokenContext)

  if (!contextToken) {
    throw new Error('contextToken not found.')
  }

  const { token } = contextToken

  useEffect(() => {
    const fetchDashData = async () => {
      try {
        if (token !== null) {
          const data = await DashAPI(token)
          setDashData(data)
        }
      } catch (error) {
        throw new Error('Oops! Houve um problema ao carregar os dados.')
      }
    }
    fetchDashData()
  }, [])

  const isMobile = window.innerWidth <= 768

  return (
    <>
      <S.ContainerDashBoard className="PoopinsFont">
        <S.Filter>
          <div>
            <h2 className="PoopinsFont">Dashboard</h2>
          </div>
          <S.FilterMonth>
            <img src={CalendarIcon} alt="Calendar Icon" /> <span>Mostrar:</span>
            <div className="SelectMonth">
              Esse mês{' '}
              <img
                src={Downarrow}
                alt="Icon down"
                onClick={() => setModalMonth(!ModalMonth)}
              />
            </div>
            {ModalMonth && (
              <S.MonthModal className="active">
                <span className="SelectMonth">120 dias</span>
                <span className="SelectMonth">90 dias</span>
                <span className="SelectMonth">60 dias</span>
                <span className="SelectMonth">30 dias</span>
              </S.MonthModal>
            )}
          </S.FilterMonth>
        </S.Filter>
        <S.DivCards>
          <S.DivInfo>
            {!isMobile && (
              <ChartComponent1
                percentualTotalProdutosAlta={
                  dashData.percentualTotalProdutosAlta
                }
                percentualTotalProdutosBaixa={0}
                percentualTotalClientesAlta={0}
                percentualTotalClientesBaixa={0}
              />
            )}
            <div>
              <div>
                <p>Total produtos em alta </p>
              </div>
              <div>
                <span className="NumTotal">
                  {dashData.quantidadeProdutosAlta}
                </span>{' '}
                <span className="PercentPositive">
                  +{dashData.percentualVariacaoProdutosAlta}%
                </span>
              </div>
            </div>
          </S.DivInfo>

          <S.DivInfo>
            {!isMobile && (
              <ChartComponent2
                percentualTotalProdutosBaixa={
                  dashData.percentualTotalProdutosBaixa
                }
                percentualTotalProdutosAlta={0}
                percentualTotalClientesAlta={0}
                percentualTotalClientesBaixa={0}
              />
            )}
            <div>
              <div>
                <p>Total produtos em baixa</p>
              </div>
              <div>
                <span className="NumTotal">
                  {dashData.quantidadeProdutosBaixa}
                </span>{' '}
                <span className="PercentNegative">
                  {dashData.percentualVariacaoProdutosBaixa}%
                </span>{' '}
              </div>
            </div>
          </S.DivInfo>

          <S.DivInfo>
            {!isMobile && (
              <ChartComponent3
                percentualTotalClientesAlta={
                  dashData.percentualTotalClientesAlta
                }
                percentualTotalProdutosAlta={0}
                percentualTotalProdutosBaixa={0}
                percentualTotalClientesBaixa={0}
              />
            )}
            <div>
              <div>
                <p>Total clientes em alta </p>
              </div>
              <div>
                <span className="NumTotal">
                  {dashData.quantidadeClientesAlta}
                </span>
                <span className="PercentPositive">
                  +{dashData.percentualVariacaoClientesAlta}%
                </span>{' '}
              </div>
            </div>
          </S.DivInfo>

          <S.DivInfo>
            {!isMobile && (
              <ChartComponent4
                percentualTotalClientesBaixa={
                  dashData.percentualTotalClientesBaixa
                }
                percentualTotalProdutosAlta={0}
                percentualTotalProdutosBaixa={0}
                percentualTotalClientesAlta={0}
              />
            )}
            <div>
              <div>
                <p>Total clientes em baixa </p>
              </div>
              <div>
                <span className="NumTotal">
                  {dashData.quantidadeClientesBaixa}
                </span>{' '}
                <span className="PercentNegative">
                  {dashData.percentualVariacaoClientesBaixa}%
                </span>{' '}
              </div>
            </div>
          </S.DivInfo>
        </S.DivCards>
      </S.ContainerDashBoard>
    </>
  )
}

export default Dashboard
