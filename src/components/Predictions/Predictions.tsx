  import HomeTemplate from '@/config/HomeTemplate'
  import * as S from '@/assets/styles/Style'
  import Search from '@/assets/images/search.png'
  import User from '@/assets/images/user.png'
  import BtnRight from '@/assets/images/right.png'
  import { useState, useEffect } from 'react'
  import PredictionAPI from '@/config/Pedrictions/Predictions'
  import { format } from 'date-fns'
  import { Link } from 'react-router-dom'
  import { useContext,ChangeEvent } from 'react'
  import TokenContext from '@/Context/TokenContext'
  import DebounceAPI from '@/config/Pedrictions/Debounce'
  import useDebounce from '../../config/Products/useDebounce'

const Predictions = () => {
  const [prediction, setPrediction] = useState<GetPredictionsType>({} as GetPredictionsType);
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pagesShow, setPagesShow] = useState<number[]>([1])
  const debouncedValue = useDebounce(searchValue, 1000)


  const contextToken = useContext(TokenContext);
  
  if (!contextToken) {
    throw new Error('contextToken not found.');
  }
  const { token } = contextToken;

  // Pagination
  const buttonsOnScreen = 4;
  useEffect(() => {
    if (totalPages) {
      setPagesShow(
        Array(buttonsOnScreen)
          .fill(0)
          .reduce((accumulator, _, index) => {
            if (currentPage + index < totalPages) {
              return [...accumulator, currentPage + index]
            }
            return accumulator
          }, [])
      )
    }
  }, [currentPage, totalPages])


  useEffect(() => {
    const fetchDashData = async () => {
      try {
        if (token !== null) {
          const data = await PredictionAPI(token, currentPage - 1);
          setPrediction(data);
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        throw new Error('Oops! Houve um problema ao carregar os dados.');
      }
    };
  
    fetchDashData();
  }, [currentPage, token]);
  
       
           
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setSearchValue(value)
  }
      
 //updates the searchvalue state whenever something is typed in
 const handleprediction = (id: string) => {
 localStorage.setItem('ID_PREDICTION', id)
 localStorage.setItem('ID_CLIENT', id)
 }


   //debounce 
   useEffect(() => {
    const fetchDebounce = async () => {
      try {
        const data = await DebounceAPI(token, debouncedValue);
        setPrediction(data);
      } catch (error) {
        throw new Error('A pesquisa falhou.');
      }
    }
  
    fetchDebounce();
  }, [token, debouncedValue])

  const isMobile = window.innerWidth <= 768;

 return (
          <>
            <HomeTemplate>
              {!isMobile &&
              <h2 className="SoraFonts">Predições</h2>
              }
              <S.CardSearch>
                <input
                  type="text"
                  placeholder="Pesquise uma palavra-chave"
                  value={searchValue}
                  onChange={handleSearch}
                />
                <button className='BtnSearch'>
                  <img src={Search} alt="Search Icon" />
                </button>
              </S.CardSearch>
      
              <S.GridCards className="PoopinsFont">
              {prediction.content && prediction.content.map((clientsData: Empresa) => (
                    <S.CardClient key={clientsData.id}>
                      <S.Cardheader>
                        <span>
                          <img src={User} />
                        </span>{' '}
                        {clientsData.nome.length > 15
                          ? clientsData.nome.substring(0, 15) + '...'
                          : clientsData.nome}
                        <Link
                          to="/DetailPrediction"
                          state={{
                            nome: clientsData.nome,
                            email: clientsData.email,
                            telefone: clientsData.telefone,
                            whatsapp: clientsData.whatsapp
                          }}
                          onClick={() =>
                            clientsData.id &&
                            handleprediction(clientsData.id.toString())
                          }
                        >
                          {' '}
                          <img src={BtnRight} />{' '}
                        </Link>
                      </S.Cardheader>
                      <S.ProductInfo>
                        <thead>
                          <tr>
                            <th>Produto</th>
                            <th>Próx. compra</th>
                          </tr>
                        </thead>
                        <tbody>
                          {clientsData.produtos.map((produto) => (
                            <tr key={produto.id}>
                              <td>
                                {produto.nome.length > 15
                                  ? produto.nome.substring(0, 15) + '...'
                                  : produto.nome}
                              </td>
                              <td>
                                {format(
                                  new Date(produto.proximaCompra),
                                  'dd/MM/yyyy'
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </S.ProductInfo>
                    </S.CardClient>
                  ))}
              </S.GridCards>
              <S.BtnPagination>
      <button
        onClick={() => currentPage - 1 > 0 && setCurrentPage(currentPage - 1)}
      >
        {"<"}
      </button>
      {pagesShow.map((pageButton) => (
        <button onClick={() => setCurrentPage(pageButton)}
        className={currentPage === pageButton ? 'SelectedPage' : ''}
        > {pageButton}</button>
      ))}
      <button
        onClick={() =>
          currentPage + 1 < totalPages && setCurrentPage(currentPage + 1)
          
        }
      >
        {">"}
      </button>
      </S.BtnPagination>
            </HomeTemplate>
          </>
        )
      }
      
      export default Predictions;