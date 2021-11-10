import Lottie from "react-lottie";
import { useState } from "react";
import  animationLove  from '../../assets/love.json';
import { Container } from "./style";

const defaultOptionsAnimation = {
    loop: true,
    autoplay: true, 
    animationData: animationLove,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

export function Footer() {
    const [ animationState,setanimationState] = useState({
        isStopped: false, isPaused: false
    })

    return(
        <Container>
            <h2>Desenvolvido com Carinho  </h2>
            <div>
                <Lottie options={defaultOptionsAnimation}
                  height={100}
                  width={100}
                  isStopped={animationState.isStopped}
                  isPaused={animationState.isPaused}
                />
            </div>

        </Container>
    );
}