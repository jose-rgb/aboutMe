
import { Container } from "./style";
import meImg from "../../assets/me.jpeg"

export function Header() {
    
    return (
        
     <Container>
         <h1>{'<ricardo.dev />'}</h1>

        <img src={meImg}/>

     </Container>
    );
  }
  