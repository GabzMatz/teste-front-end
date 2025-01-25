import Modal from "../modal/Modal"
import { useState, useEffect } from "react";
import "./Carrousel.scss";
import arrowRight from "../../assets/caroseul/arrow.svg";
import arrowLeft from "../../assets/caroseul/arrow-left.svg";
import { ProductInterface } from "../../types/ProductInterface";

interface CarrouselProps {
  nav: boolean;
}

const Carrousel: React.FC<CarrouselProps> = ({ nav }) => {
  const [getProducts, setProducts] = useState([]);
  const [getLoading, setLoading] = useState(true); 
  const [getIndex, setIndex] = useState(0);
  const ITEMS_VISIBLE = 4;
  const [getModalOpen, setIsModalOpen] = useState(false);
  const [getModelDescription, setModelDescription] = useState<ProductInterface | null>(null);
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    };
    fetchItems();
  }, []);
  
  const handlePrev = () => {
    if (getIndex > 0) {
      setIndex(getIndex - ITEMS_VISIBLE);
    }
  };

  const openModal = (product: ProductInterface) =>{
    setIsModalOpen(true);
    setModelDescription(product);
  }
    
  const closeModal = () => setIsModalOpen(false);
  
  const handleNext = () => {
    if (getIndex < getProducts.length - ITEMS_VISIBLE) {
      setIndex(getIndex + ITEMS_VISIBLE);
    }
  };

  return (
    <div className="fullCarrousel">
      <div className="header">
        <div className="header-display">
          <div className="ruller"></div>
          <h1>Produtos relacionados</h1>
          <div className="ruller"></div>
        </div>
        {nav ? (
          <div className="nav-header">
            <button>celular</button>
            <button>acessórios</button>
            <button>tablets</button>
            <button>notebooks</button>
            <button>tvs</button>
            <button>ver todos</button>
          </div>
        ) : (
          <div className="seeAll">
            <p>Ver todos</p>
          </div>
        )}
      </div>
      <div id="roulet">
        <div className="buttons" onClick={handlePrev}>
          <img src={arrowLeft} />
        </div>
        {getLoading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <ul id="position">
          {getProducts
            .slice(getIndex, getIndex + ITEMS_VISIBLE)
            .map((product: ProductInterface, index) => (
              <li className="item" key={getIndex + index}>
                <img src={product.photo} alt={product.productName} />
                <p className="productName">{product.productName}</p>
                <p className="otherPrice">R$ {(product.price * 1.17).toLocaleString("pt-BR")},00</p>
                <p className="price">R$ {product.price.toLocaleString("pt-BR")},00</p>
                <p className="parcel">ou 2x de R$ {(product.price / 2).toLocaleString("pt-BR")},00 sem juros </p>
                <p className="free">Frete grátis</p>
                <button className="button-buy" onClick={() => openModal(product)}>comprar</button>
              </li>
            ))}
        </ul>
      )}
        <div className="buttons right" onClick={handleNext}>
          <img src={arrowRight} />
        </div>
        <Modal isOpen={getModalOpen} onClose={closeModal} obj={getModelDescription}/>
      </div>
    </div>
  );
};

export default Carrousel; 