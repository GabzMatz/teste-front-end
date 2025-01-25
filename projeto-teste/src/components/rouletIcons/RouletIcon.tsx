import Icon from "./icon/Icon";
import tec from "../../assets/rouletIcons/computer.png";
import market from "../../assets/rouletIcons/supermercados 1.svg";
import drink from "../../assets/rouletIcons/whiskey.svg";
import tools from "../../assets/rouletIcons/ferramentas 1.svg";
import health from "../../assets/rouletIcons/cuidados-de-saude 1.svg";
import sports from "../../assets/rouletIcons/corrida 1.svg";
import fashion from "../../assets/rouletIcons/moda 1.svg";

import "./RouletIcon.scss";

const RouletIcon = () => {
    return(
        <div className="controlerIcons">
            <Icon image={tec} item={"Tecnologia"}/>
            <Icon image={market} item={"Supermercado"}/>
            <Icon image={drink} item={"Bebidas"}/>
            <Icon image={tools} item={"Ferramentas"}/>
            <Icon image={health} item={"Saúde"}/>
            <Icon image={sports} item={"Esportes e Fitness"}/>
            <Icon image={fashion} item={"Moda"}/>
        </div>
    )

}
export default RouletIcon;