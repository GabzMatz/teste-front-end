import Partner from "./partner/Partner";
import imageApple from "../../assets/partners/fast-shop.jpeg"

import "./Partners.scss";

const Partners = () =>{
    const descriptionLorem: string = "Lorem ipsum dolor sit amet, consectetur";

    return(
        <div className="partners">
            <Partner partnerName={"Parceiros"} description={descriptionLorem} urlImage={imageApple} />
            <Partner partnerName={"Parceiros"} description={descriptionLorem} urlImage={imageApple} />
        </div>
    )};

export default Partners;