import "./Bannes.scss"

const Banner = ()=>{

    return(
        <section className="banner">
            <div className="container">
                <h2>Venha conhecer nossas promoções</h2>
                <p><span>50% Off</span> nos produtos</p>
                <button>Ver produto</button>
            </div>
            <div className="fade"></div>

        </section>
    );
};

export default Banner;