import logo from "../../assets/header/Logo.svg";
import navSearch from "../../assets/header/MagnifyingGlass.svg";
import shield from "../../assets/header/ShieldCheck.svg";
import truck from "../../assets/header/Truck.svg";
import creditCard from "../../assets/header/CreditCard.svg";
import box from "../../assets/header/box.svg";
import user from "../../assets/header/UserCircle.svg";
import heart from "../../assets/header/Heart.svg";
import supermarketCart from "../../assets/header/ShoppingCart.svg";
import crowSimple from "../../assets/header/CrownSimple.svg"

import  "./Navbar.scss";

const Navbar = ()=>{

    return(
        <>
        <div className="features">
            <p><img src={shield} alt="" />Compra <span>100% segura</span></p>
            <p><img src={truck} alt="" /> <span>Frete grátis</span> acima de R$ 200x</p>
            <p><img src={creditCard} alt="" /><span>Parcele</span> suas compras</p>
        </div>
        <div className="ruller"></div>
        <nav>
            <img src={logo} alt="" />
            <form>
                <input type="text" placeholder="O que você está buscando?" />
                <button type="submit"><img src={navSearch} alt="" /></button>
            </form>
            <div className="orherButtons"> 
                <img src={box} alt="" />
                <img src={heart} alt="" />
                <img src={user} alt="" />
                <img src={supermarketCart} alt="" />
            </div>
        </nav>
        <section className="categorys">
             <p>todas categorias</p>
             <p>supermercado</p>
             <p>livros</p>
             <p>moda</p>
             <p>lançamentos</p>
             <p>ofertas do dia</p>
             <p className="signature"><img src={crowSimple} alt=""/>assinaturas</p>
        </section>
        </>

   )


};

export default Navbar;