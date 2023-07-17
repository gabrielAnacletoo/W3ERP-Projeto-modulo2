import * as S from '@/assets/styles/Style'
import Products from '@/assets/images/facial-cleanser.svg'
import Clients from '@/assets/images/Clients.png'
import ArrowRight from '@/assets/images/rightTable.png'
import { useEffect, useState } from 'react'
import ProductsTable from '@/config/Tables/Products'
import ClientsTable from '@/config/Tables/Clientes'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import TokenContext from '@/Context/TokenContext'


const CardTable = () => {
  const [productList, setProductList] = useState<TablesProducts[]>([])
  const [clientList, setClientList] = useState<TablesProducts[]>([])
  const [productClassification, setProductClassification] = useState<'EM_ALTA' | 'EM_BAIXA'>('EM_ALTA')
  const [clientClassification, setClientClassification] = useState<'EM_ALTA' | 'EM_BAIXA'>('EM_BAIXA')
  const contextToken = useContext(TokenContext);
  
  if (!contextToken) {
    throw new Error('contextToken not found.');
  }
  const { token } = contextToken;


 
  // Fetch data for products and clients
  useEffect(() => {
    const fetchData = async () => {
        try {
          if(token) {
            const productData = await ProductsTable(token, productClassification)
            setProductList(productData)
          }
        } catch (error) {
          throw new Error('Oops! Houve um problema ao carregar os dados.')
        }

        try {
          if(token) {
            const clientData = await ClientsTable(token, clientClassification)
            setClientList(clientData)
          }
        } catch (error) {
          throw new Error('Oops! Houve um problema ao carregar os dados.')
        }
    }

    fetchData();
  }, [productClassification, clientClassification])



  const handleProductClassification = (value: 'EM_ALTA' | 'EM_BAIXA') => {
    setProductClassification(value)
  }

  const handleClientClassification = (value: 'EM_ALTA' | 'EM_BAIXA') => {
    setClientClassification(value)
  }

  const handleDetails = (id: any) => {
    localStorage.setItem('ID_PRODUCT', id)
    localStorage.setItem('ID_CLIENT', id)
  }

  return (
    <>
      <S.ContainerTables>
        <S.CardTables>
          <S.MenuTables>
            <div className="ContainerProducts">
              <img src={Products} className="Products" />
              <span className="SoraFonts">Produtos</span>
            </div>
            <div className="PoopinsFont BtnToggle">
              <button
                className={
                  productClassification === 'EM_ALTA' ? 'BtnGreen' : 'BtnGray'
                }
                onClick={() => handleProductClassification('EM_ALTA')}
              >
                Em alta
              </button>

              <button
                className={
                  productClassification === 'EM_BAIXA' ? 'BtnRed' : 'BtnGray'
                }
                onClick={() => handleProductClassification('EM_BAIXA')}
              >
                Em baixa
              </button>
            </div>
          </S.MenuTables>

          <S.Table>
            <table className="PoopinsFont">
              <thead>
                <tr>
                  <th className="RadiusLeft">ID</th>
                  <th>Produto</th>
                  <th>Percentual</th>
                  <th className="RadiusRight"></th>
                </tr>
              </thead>
              <tbody>
                {productList.map((produtos: TablesProducts) => (
                  <tr key={produtos.id}>
                    <td>{produtos.id}</td>
                    <td>
                      {produtos.nome.length > 25 ? produtos.nome.substring(0, 25)+ '...' : produtos.nome}
                    </td>
                    <td>{produtos.percentual}%</td>
                    <td>
                      <Link
                        to="/details"
                        onClick={() =>
                          produtos.id && handleDetails(produtos.id)
                        }
                      >
                        {' '}
                        <img src={ArrowRight} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </S.Table>
        </S.CardTables>

        <S.CardTables>
          <S.MenuTables>
            <div className="ContainerProducts">
              <img src={Clients} className="Clients" />
              <span className="SoraFonts">Clientes</span>
            </div>
            <div className="PoopinsFont BtnToggle">
              <button
                className={
                  clientClassification === 'EM_ALTA' ? 'BtnGreen' : 'BtnGray'
                }
                onClick={() => handleClientClassification('EM_ALTA')}
              >
                Em alta
              </button>

              <button
                className={
                  clientClassification === 'EM_BAIXA' ? 'BtnRed' : 'BtnGray'
                }
                onClick={() => handleClientClassification('EM_BAIXA')}
              >
                Em baixa
              </button>
            </div>
          </S.MenuTables>

          <S.Table>
            <table className="PoopinsFont">
              <thead>
                <tr>
                  <th className="RadiusLeft">ID</th>
                  <th>Clientes</th>
                  <th>Percentual</th>
                  <th className="RadiusRight"></th>
                </tr>
              </thead>
              <tbody>
                {clientList.map(cliente => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>
                      {cliente.nome.length > 25 ? cliente.nome.substring(0, 25) + '...' : cliente.nome}
                    </td>
                    <td>{cliente.percentual}%</td>
                    <td>
                      <Link
                        to="/clientedetails"
                        onClick={() => cliente.id && handleDetails(cliente.id)}
                      >
                        {' '}
                        <img src={ArrowRight} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </S.Table>
        </S.CardTables>
      </S.ContainerTables>
    </>
  )
}

export default CardTable
