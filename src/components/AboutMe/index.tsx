import infoImg from '../../assets/information.png'
import { Container, Text} from "./style";

export function AboutMe() { 
    return (
        
     <Container id="aboutMe">
        <div>
            <h2>Sobre mim</h2>
            <img src={infoImg}/>
        </div>
        
        <Text>
            <p>Sou acadêmico do curso de Análise e Desenvolvimetno de Sistemas
             no Instituto Federal do Piauí, Além de estudar diariamente desenvolvimento
             web focado na Oministack ( ReactJS + React Native + NodeJS).</p>
            <br />
            <p>Comecei meus estudos no início de 2020 e desde então evolui muito participando
            de eventos online  e mini cursos, além de aproveitar vários tipos de conteúdos gratuitos.</p>
         </Text>
     </Container>
     
    );
  }
  