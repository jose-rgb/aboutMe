import contatoImg from '../../assets/contatos.png'
import { Container } from "./style";

export function Contact(){
    return(
        <Container>
            <div>
                <h2>Contato</h2>
                <img src={contatoImg}/>
            </div>
        </Container>
    );
}