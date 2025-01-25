import "./Icon.scss"

interface IconProps {
    image: string; 
    item: string;  
}
const Icon: React.FC<IconProps> = ({ image, item }) => {
    return(
         <div className="icon-roulet">
            <img src={image} alt="" />
            <p>{item}</p>
         </div>
    )};

export default Icon;