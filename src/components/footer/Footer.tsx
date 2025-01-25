import logo from "../../assets/footer/Logo.svg";
import insta from "../../assets/footer/instagram.svg";
import face from "../../assets/footer/facebook.svg";
import link from "../../assets/footer/linkedin.svg";

import "./Footer.scss";

const Footer = ()=>{
    return(
        <div className="footer">
            <main>
                <div className="newsletter">
                    <h3>Inscreva-se na nossa newsletter</h3>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <div className="buttons">
                    <form>
                        <input type="text" placeholder="Digite seu nome" />
                        <input type="text" placeholder="Digite seu e-mail" />
                        <button type="submit">inscrever</button>
                    </form>
                    <div className="checkbox-item">
                        <input type="checkbox"/>
                        <p>Aceito os termos e condições</p>
                    </div>
                </div>
            </main>
            <div className="morespecs">
                <div className="left">
                    <img src={logo}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="icons-social">
                        <img src={insta}/>
                        <img src={face}/>
                        <img src={link}/>
                    </div>
                </div>
                <div className="ruller"></div>
                <div className="right">
                        <div className="otherHelps">
                            <h4>Intitucional</h4>
                            <p>Sobre Nós</p>
                            <p>Movimento</p>
                            <p>Trabalhe conosco</p>
                        </div>
                        <div className="otherHelps">
                            <h4>Ajuda</h4>
                            <p>Suporte</p>
                            <p>Fale Conosco</p>
                            <p>Perguntas Frequentes</p>
                        </div>
                        <div className="otherHelps">
                            <h4>Termos</h4>
                            <p>Termos e Condições</p>
                            <p>Política de Privacidade</p>
                            <p>Troca e Devolução</p>
                        </div>
                </div>
            </div>
            <div className="loremIpsum">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
}

export default Footer;