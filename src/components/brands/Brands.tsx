import logo from "../../assets/brands/Logo.svg";

import "./Brands.scss";

const Brands = () => {

    return(
        <div className="circles">
            <h2>Navegue por marcas</h2>
            <div className="circle">
                <img src={logo}/>
                <img src={logo}/>
                <img src={logo}/>
                <img src={logo}/>
                <img src={logo}/>
            </div>
        
        </div>
    )
}

export default Brands;