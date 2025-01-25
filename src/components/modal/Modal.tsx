import { ProductInterface } from "../../types/ProductInterface";
import "./Modal.scss"
import { useState } from "react";

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
    obj: ProductInterface | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, obj }) => {
    if (!isOpen || !obj) return null;
    
    const [getItem, setItem] = useState(0);

    const lessItem = ():void => {

        if(getItem == 0){
            return ;
        }
        setItem(getItem - 1)
    }

    const addItem = (): void =>{
        if(getItem > 99){
            return ;
        }
        setItem(getItem + 1);
    }

    return(
        <div className="popup">
            <main className="model">
                <img src={obj.photo}/>
                <div className="container">
                    <div className="description" onClick={onClose}>
                        <div className="close">
                            <p>X</p>
                        </div>
                        <h3>{obj.productName}</h3>
                        <h2>R$ {obj.price},00</h2>
                        <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
                        <span>Veja mais detalhes do produto &gt;</span>
                    </div>
                    <div className="optionsBuy">
                        <div className="selectorItem">
                            <button onClick={lessItem}>-</button>
                            <p>{getItem}</p>
                            <button onClick={addItem}>+</button>
                        </div>
                        <div className="buyButton">
                            <button>comprar</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Modal;