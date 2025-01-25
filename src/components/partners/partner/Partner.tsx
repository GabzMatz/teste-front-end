import "./Partner.scss";

interface PartnerProps {
    partnerName: string; 
    description: string;  
    urlImage: string;
}

const Partner:  React.FC<PartnerProps> = ({ partnerName, description, urlImage }) => {
    return(
        <section className="partner">
            <img src={urlImage}/>
            <div className="fade"></div>
            <main>
                <h3>{partnerName}</h3>
                <p>{description}</p>
                <button>confira</button>
            </main>
        </section>    
)};

export default Partner;