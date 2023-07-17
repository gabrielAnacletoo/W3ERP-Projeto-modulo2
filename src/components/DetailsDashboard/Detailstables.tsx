import { DetailsHigh, DetailsLow } from '@/config/Details/DetailsTable'
import {TableChildren,CardTableBelow,ContainerTables,CardTables,MenuDetails,Table,HeaderDetails} from '@/assets/styles/Style'
import { useState, useEffect } from 'react'
import ArrowDown from '@/assets/images/trending-down.png'
import ArrowUp from '@/assets/images/trending-up.png'
import { useContext } from 'react'
import TokenContext from '@/Context/TokenContext'


const Detailstables = () => {
    const IdProduct = localStorage.getItem('ID_PRODUCT')
    const [detailsTables, setDetailsTables] = useState<TableDetails[]>([]);
    const [clientsTable, setClientsTables] = useState<TableDetails[]>([]);


    const contextToken = useContext(TokenContext);
  
    if (!contextToken) {
      throw new Error('contextToken not found.');
    }
    const { token } = contextToken;
  
  
    //products
    useEffect(() => {
        const fetchDashData = async () => {
          try {
            if (token !== null && IdProduct !== null) {
              const data = await DetailsLow(token, IdProduct);
              setDetailsTables(data)
            }
          } catch (error) {
            throw new Error('Oops! Houve um problema ao carregar os dados.')
          }
        }
        fetchDashData();
      }, [])

      //clients
      useEffect(() => {
        const fetchDashData = async () => {
          try {
            if (token !== null && IdProduct !== null) {
              const data = await DetailsHigh(token, IdProduct)
              setClientsTables(data)
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
              <span className="SoraFonts">Clientes em Baixa</span>
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
                {detailsTables.length > 0 ? (
                  detailsTables.map((clientes: TableDetails) => (
                    <tr key={clientes.id}>
                      <td>{clientes.id}</td>
                      <td>{clientes.nome.length > 35 ? clientes.nome.substring(0, 35) + '...' : clientes.nome}</td>
                      <td>{clientes.percentual.toFixed(0)}%</td>
                      <td>{clientes.quantidade}</td>
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

        <CardTableBelow>
          <MenuDetails>
          <HeaderDetails>
              <span className='UP'><img src={ArrowUp} /></span>
              <span className="SoraFonts">Clientes em alta</span>
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
                {clientsTable.length > 0 ? (
                  clientsTable.map((clientes: TableDetails) => (
                    <tr key={clientes.id}>
                      <td>{clientes.id}</td>
                      <td>{clientes.nome.length > 35 ? clientes.nome.substring(0, 35) + '...' : clientes.nome}</td>
                      <td>{clientes.percentual.toFixed(0)}%</td>
                      <td>{clientes.quantidade}</td>
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
        </CardTableBelow>
      </ContainerTables>
    </>
  )
}

export default Detailstables;