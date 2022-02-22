import contatoImg from '../../assets/adicionar-contato.png';
import linkedinImg from '../../assets/linkedin.png';
import yotubeImg from '../../assets/youtube.png';
import githubImg from '../../assets/github.png';
import { Container, Content } from "./style";

export function Contact(){
    return(
        <Container>
            <div>
                <h2>Contato</h2>
                <img src={contatoImg}/>
            </div>
            <Content>
                <div>
                    <header>Redes Sociais</header>

                    <a href="https://www.linkedin.com/in/jos%C3%A9-ricardo-aa97a41b2/" target="_blank">
                        <img src={linkedinImg}/>
                        <h5>Linkedin</h5>
                    </a>

                    <a href="https://www.youtube.com/channel/UCt8ZIGK2ajtfXOXGyeq7uow" target="_blank">
                        <img src={yotubeImg}/>
                        <h5>Youtube</h5>
                    </a>

                    <a href="https://github.com/jose-rgb" target="_blank">
                        <img src={githubImg}/>
                        <h5>GitHub</h5>
                    </a>
                </div>

                <div>
                    <div className="box-input-name">
                        <div className="input-data">
                            <input type="text" />
                            <div className="line"></div>
                            <label>Seu nome</label> 
                        </div>
                        <div className="input-data">
                            <input type="text" />
                            <div className="line"></div>
                            <label>Email</label> 
                        </div>
                        <div className="input-data">
                            <input type="text" />
                            <div className="line"></div>
                            <label>Mensagem</label> 
                        </div>
                    </div>
                    
                </div>
            </Content>
        </Container>
    );
}