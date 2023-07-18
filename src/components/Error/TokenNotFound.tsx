import { ErrorDiv } from '@/assets/styles/Style'
import { Link } from 'react-router-dom'

const TokenNotFound = () => {
  return (
    <ErrorDiv className="PoopinsFont">
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center">Oops!</h1>
                </div>
                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>
                  <p>You need a token to access the page!</p>
                  <Link to="/" className="link_404">
                    Go back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorDiv>
  )
}

export default TokenNotFound
