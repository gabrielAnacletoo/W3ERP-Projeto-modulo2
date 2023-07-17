import { Contact,NavSideBar,BtnContact } from "@/assets/styles/Style";
import LogoNav from '@/assets/images/logo.png'
import DashLogo from '@/assets/images/pie-two.png'
import Predictions from '@/assets/images/chart-line.png'
import Products from '@/assets/images/facial-cleanser.png'
import Hands from '@/assets/images/Saly-31.png'
import { Link } from 'react-router-dom'



const NavSide = () => {
  return (

    <NavSideBar>
    <nav>
        <img src={LogoNav} alt="Logo" className="Logo" />
        <ul>
            <li className="PoopinsFont"> <img src={DashLogo} className="DashImg"/> <Link to="/home">Dashboard</Link> </li>
            <li className="PoopinsFont"><img src={Predictions} className="DashImg" /> <Link to="/predicoes">Predições</Link></li>
            <li className="PoopinsFont"> <img src={Products} className="DashImg" /> <Link to="/produtos">Produtos</Link></li>
        </ul>
    </nav>
    <Contact>
    <img src={Hands} className="Hands" />
    <p className="PoopinsFont">Precisando de ajuda ou suporte em algo?</p>
   <BtnContact>Fale Conosco</BtnContact>
   </Contact>
    </NavSideBar>
    )
}

export default NavSide;