import HomeTemplate from '@/config/HomeTemplate'
import * as S from '@/assets/styles/Style'
import Search from '@/assets/images/search.png'
import { useState, useEffect, ChangeEvent } from 'react'
import ProductsAPI from '@/config/Products/Product'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import TokenContext from '@/Context/TokenContext'
import FitlerIcon from '@/assets/images/filter.png'
import useDebounce from '../../config/Products/useDebounce'
import DebounceAPI from '@/config/Products/Debounce'

const Products = () => {
  const [products, setProducts] = useState<ReturnProduct>({} as ReturnProduct)
  const [searchValue, setSearchValue] = useState<string>('')
  const [totalEmAlta, setTotalEmAlta] = useState<number>(0)
  const [totalEmBaixa, setTotalEmBaixa] = useState<number>(0)

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [filterOption, setFilterOption] = useState<boolean>(false)
  const [classificacao, setClassificacao] = useState<string>('')
  const [pagesShow, setPagesShow] = useState<number[]>([1])
  const debouncedValue = useDebounce(searchValue, 1000)
  const navigate = useNavigate()
  const contextToken = useContext(TokenContext)

  if (!contextToken) {
    throw new Error('contextToken not found.')
  }
  const { token } = contextToken

  // Pagination
  const buttonsOnScreen = 4
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

  const fetchProducts = async () => {
    try {
      if (token !== null) {
        const data = await ProductsAPI(token, currentPage - 1, classificacao)
        setProducts(data)
        setTotalPages(data.totalPages)
      }
    } catch (error) {
      throw new Error('Oops! Houve um problema ao carregar os dados.')
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [currentPage, token])

  //button apply filter
  const handleApplyFilter = async () => {
    setCurrentPage(1)
    setFilterOption(false)
    try {
      await fetchProducts()
    } catch (error) {
      throw new Error('Oops! Houve um problema ao carregar os dados.')
    }
  }

  //props id
  const handleProductClick = (productId: number) => {
    localStorage.setItem('ID_PRODUCT', productId.toString())
    navigate('/details')
  }

  // Filter modal
  const handleShowFilters = () => {
    setFilterOption(!filterOption)
  }

  //If the same checkbox is clicked again, it is unchecked
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = event.target.value
    if (checkboxValue === classificacao) {
      setClassificacao('')
    } else {
      setClassificacao(checkboxValue)
    }
  }

  //search
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
  }

  //debounce
  useEffect(() => {
    const fetchDebounce = async () => {
      try {
        const data = await DebounceAPI(token, debouncedValue)
        setProducts(data)
      } catch (error) {
        throw new Error('A pesquisa falhou.')
      }
    }

    fetchDebounce()
  }, [token, debouncedValue])

  return (
    <HomeTemplate>
      <S.CardSearch>
        <input
          type="text"
          placeholder="Pesquise uma palavra-chave"
          value={searchValue}
          onChange={handleSearch}
        />
        <button className="BtnSearch">
          <img src={Search} alt="Search Button" />
        </button>
        <button className="Filter" onClick={handleShowFilters}>
          <img src={FitlerIcon} alt="Filter Icon" />
        </button>
        {filterOption && (
          <S.CardModal className="PoopinsFont">
            <span className="title">Filtrar por:</span>
            <hr />
            <span>Status</span>

            <S.InfoFilter>
              <div>
                <input
                  type="checkbox"
                  value="TODOS"
                  name="classification"
                  checked={classificacao === 'TODOS'}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="TODOS">Todos</label>
              </div>
              <div className="textAlign"></div>
            </S.InfoFilter>
            <S.InfoFilter>
              <div>
                <input
                  type="checkbox"
                  value="EM_ALTA"
                  name="classification"
                  checked={classificacao === 'EM_ALTA'}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="EM_ALTA">Em alta</label>
              </div>
              <div className="textAlign"></div>
            </S.InfoFilter>
            <S.InfoFilter>
              <div>
                <input
                  type="checkbox"
                  value="EM_BAIXA"
                  name="classification"
                  checked={classificacao === 'EM_BAIXA'}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="EM_BAIXA">Em baixa</label>
              </div>
              <div className="textAlign"></div>
            </S.InfoFilter>

            <S.BtnAplly>
              <button onClick={handleApplyFilter}>Aplicar</button>
            </S.BtnAplly>
          </S.CardModal>
        )}
      </S.CardSearch>

      <S.ContainerProducts>
        <table className="PoopinsFont">
          <thead>
            <tr>
              <th className="RadiusLeft">ID</th>
              <th className="ColumProduct">Produto</th>
              <th>Status</th>
              <th className="RadiusRight">Percentual</th>
            </tr>
          </thead>
          <tbody>
            {products.content &&
              products.content.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td onClick={() => handleProductClick(product.id)}>
                    {product.nome}
                  </td>
                  <td>
                    <span
                      className={
                        product.classificacao === 'EM_ALTA'
                          ? 'GreenResult'
                          : product.classificacao === 'EM_BAIXA'
                          ? 'RedResult'
                          : ''
                      }
                    >
                      {product.classificacao}
                    </span>
                  </td>
                  <td>{product.percentual}%</td>
                </tr>
              ))}
          </tbody>
        </table>
      </S.ContainerProducts>
      <S.BtnPagination>
        <button
          onClick={() => currentPage - 1 > 0 && setCurrentPage(currentPage - 1)}
        >
          {'<'}
        </button>
        {pagesShow.map(pageButton => (
          <button
            onClick={() => setCurrentPage(pageButton)}
            className={currentPage === pageButton ? 'SelectedPage' : ''}
          >
            {' '}
            {pageButton}
          </button>
        ))}
        <button
          onClick={() =>
            currentPage + 1 < totalPages && setCurrentPage(currentPage + 1)
          }
        >
          {'>'}
        </button>
      </S.BtnPagination>
    </HomeTemplate>
  )
}

export default Products
