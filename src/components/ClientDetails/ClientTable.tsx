import { ProductsHigh,ProductsLow } from '@/config/Details/DetailsTable'
import {TableChildren, ContainerTables,CardTables,MenuDetails,Table,HeaderDetails} from '@/assets/styles/Style'
import { useState, useEffect } from 'react'
import ArrowDown from '@/assets/images/trending-down.png'
import ArrowUp from '@/assets/images/trending-up.png'
import { useContext } from 'react'
import TokenContext from '@/Context/TokenContext'


const ClientTable = () => {
    const IDClient = localStorage.getItem('ID_CLIENT')
    const [HighTable, setHighTable] = useState<TableDetails[]>([])
    const [Lowtable, setLowtable] = useState<TableDetails[]>([])

    const contextToken = useContext(TokenContext);
  
    if (!contextToken) {
      throw new Error('contextToken not found.');
    }
    const { token } = contextToken;
  
  

    //products high
    useEffect(() => {
        const fetchDashData = async () => {
          try {
            if (token !== null && IDClient !== null) {
              const data = await ProductsHigh(token, IDClient);
              setHighTable(data)
            }
          } catch (error) {
            throw new Error('Oops! Houve um problema ao carregar os dados.')
          }
        }
        fetchDashData();
      }, [])


      //products low  
      useEffect(() => {
        const fetchDashData = async () => {
          try {
            if (token !== null && IDClient !== null) {
              const data = await ProductsLow(token, IDClient);
              setLowtable(data)
            }
          } catch (error) {
            throw new Error('Oops! Houve um problema ao carregar os dados.')
          }
        }
        fetchDashData();
      }, [])
      

  return (
    <>
     <ContainerTables>
        <CardTables>
          <MenuDetails>
            <HeaderDetails>
              <span className='Down'><img src={ArrowDown} /></span>
              <span className="SoraFonts">Produtos em Baixa</span>
            </HeaderDetails>
          </MenuDetails>

          <TableChildren>
            <table className="PoopinsFont">
              <thead>
                <tr>
                  <th className="RadiusLeft">ID</th>
                  <th>Cliente</th>
                  <th>Percentual</th>
                  <th className="RadiusRight">Qtd</th>
                </tr>
              </thead>
              <tbody>
                {Lowtable.length > 0 ? (
                  Lowtable.map((produtos: TableDetails) => (
                    <tr key={produtos.id}>
                      <td>{produtos.id}</td>
                      <td>{produtos.nome.length > 35 ? produtos.nome.substring(0, 35) + '...' : produtos.nome}</td>
                      <td>{produtos.percentual.toFixed(0)}%</td>
                      <td>{produtos.quantidade}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>Nenhum cliente encontrado</td>
                  </tr>
                )}
              </tbody>
            </table>
          </TableChildren>
        </CardTables>

        <CardTables>
          <MenuDetails>
          <HeaderDetails>
              <span className='UP'><img src={ArrowUp} /></span>
              <span className="SoraFonts">Produtos em alta</span>
            </HeaderDetails>
          </MenuDetails>

          <TableChildren>
            <table className="PoopinsFont">
              <thead>
                <tr>
                  <th className="RadiusLeft">ID</th>
                  <th>Clientes</th>
                  <th>Percentual</th>
                  <th className="RadiusRight">Qtd</th>
                </tr>
              </thead>
              <tbody>
                {HighTable.length > 0 ? (
                  HighTable.map((produtos: TableDetails) => (
                    <tr key={produtos.id}>
                      <td>{produtos.id}</td>
                      <td>{produtos.nome.length > 35 ? produtos.nome.substring(0, 35) + '...' : produtos.nome}</td>
                      <td>{produtos.percentual.toFixed(0)}%</td>
                      <td>{produtos.quantidade}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>Nenhum cliente encontrado</td>
                  </tr>
                )}
              </tbody>
            </table>
          </TableChildren>
        </CardTables>
      </ContainerTables>
    </>
  )
}

export default ClientTable;