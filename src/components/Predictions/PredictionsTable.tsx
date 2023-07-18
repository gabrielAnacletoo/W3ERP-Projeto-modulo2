import * as S from '@/assets/styles/Style'
import { useState, useEffect } from 'react'
import Exhausting from '@/config/Pedrictions/Exhausting'
import History from '@/config/Pedrictions/History'
import Clock from '@/assets/images/history.png'
import ExhaustIcon from '@/assets/images/esgotando.png'
import Baixa from '@/assets/images/check-one.png'
import { useContext } from 'react'
import TokenContext from '@/Context/TokenContext'
import { format } from 'date-fns'
import Delete from '@/config/Pedrictions/Delete'

const PredictionTable = () => {
  const PredictionClient = parseInt(localStorage.getItem('ID_PREDICTION')!)
  const [historico, setHistorico] = useState<HistoryData>({} as HistoryData)
  const [exhaustingData, setExhaustingData] = useState<PredictionsType>(
    {} as PredictionsType
  )
  const contextToken = useContext(TokenContext)

  if (!contextToken) {
    throw new Error('contextToken not found.')
  }
  const { token } = contextToken

  // History
  useEffect(() => {
    const fetchDashData = async () => {
      try {
        if (token !== null) {
          const data = await History(token, PredictionClient)
          setHistorico(data)
        }
      } catch (error) {
        throw new Error('Oops! Houve um problema ao carregar os dados.')
      }
    }
    fetchDashData()
  }, [])

  //delete history
  const handleDelete = async (productId: number) => {
    try {
      if (token !== null) {
        const updatedHistorico = await Delete(token, productId)
        setHistorico(updatedHistorico)
      }
    } catch (error) {
      throw new Error('Oops! Houve um problema ao excluir o item.')
    }
  }

  // Exhausting
  useEffect(() => {
    const fetchDashData = async () => {
      try {
        if (token !== null) {
          const data = await Exhausting(token, PredictionClient)
          setExhaustingData(data)
        }
      } catch (error) {
        throw new Error('Oops! Houve um problema ao carregar os dados.')
      }
    }
    fetchDashData()
  }, [])

  return (
    <>
      <S.ContainerTables>
        <S.TableHistory>
          <S.MenuDetails>
            <S.HeaderDetails>
              <span className="Clock">
                <img src={Clock} />
              </span>
              <span className="SoraFonts">Histórico</span>
            </S.HeaderDetails>
          </S.MenuDetails>

          <S.Table>
            <table className="PoopinsFont">
              <thead>
                <tr>
                  <th className="RadiusLeft">ID</th>
                  <th>Produto</th>
                  <th>Última Compra</th>
                  <th>Qtd.</th>
                  <th className="RadiusRight">Dar baixa</th>
                </tr>
              </thead>
              <tbody>
                {historico.content &&
                  historico.content.map(produto => (
                    <tr key={produto.id}>
                      <td>{produto.id}</td>
                      <td>
                        {produto.nome.length > 25
                          ? produto.nome.substring(0, 25) + '...'
                          : produto.nome}
                      </td>
                      <td>
                        {format(new Date(produto.ultimaCompra), 'dd/MM/yyyy')}
                      </td>
                      <td>{produto.quantidade}</td>
                      <td>
                        {' '}
                        <img
                          src={Baixa}
                          alt="Icon dar baixa"
                          className="IconDelete"
                          onClick={() => handleDelete(produto.id)}
                        />{' '}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </S.Table>
        </S.TableHistory>

        <S.TableExhausting>
          <S.MenuDetails>
            <S.HeaderDetails>
              <span className="Exhausting">
                <img src={ExhaustIcon} />
              </span>
              <span className="SoraFonts EXfont">Produtos Esgotando</span>
            </S.HeaderDetails>
          </S.MenuDetails>

          <S.Table>
            <table className="PoopinsFont">
              <thead>
                <tr>
                  <th className="RadiusLeft">ID</th>
                  <th>Produto</th>
                  <th>Última Compra</th>
                  <th>Próxima Compra</th>
                  <th>Qtd.</th>
                  <th className="RadiusRight">Dar baixa</th>
                </tr>
              </thead>
              <tbody>
                {exhaustingData.content &&
                  exhaustingData.content.map(produto => (
                    <tr key={produto.id}>
                      <td>{produto.id}</td>
                      <td>
                        {produto.nome.length > 15
                          ? produto.nome.substring(0, 15) + '...'
                          : produto.nome}
                      </td>
                      <td>
                        {produto.ultimaCompra &&
                          format(new Date(produto.ultimaCompra), 'dd/MM/yyyy')}
                      </td>
                      <td>
                        {produto.proximaCompra &&
                          format(new Date(produto.proximaCompra), 'dd/MM/yyyy')}
                      </td>
                      <td>{produto.quantidade}</td>
                      <td>
                        {' '}
                        <img
                          src={Baixa}
                          alt="Icon dar baixa"
                          className="IconDelete"
                        />{' '}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </S.Table>
        </S.TableExhausting>
      </S.ContainerTables>
    </>
  )
}

export default PredictionTable
