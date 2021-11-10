import { Container,  Info ,Redes } from "./style";
import Lottie from "react-lottie";
import { useState } from "react";
import  animationDev   from '../../assets/developer-front-end.json';
import  animationGithub   from '../../assets/github-icon-black.json';
import  animationLinkedin   from '../../assets/inkedin-subtle.json';
import yotubeImg from '../../assets/yotube.png';

//animation dev
const defaultOptionsAnimationDev = {
    loop: true,
    autoplay: true, 
    animationData: animationDev,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

//animation GitHub
const defaultOptionsAnimatiionGithub = {
  loop: true,
  autoplay: true, 
  animationData: animationGithub,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

//animation linkedin
const defaultOptionsAnimationLinkedin = {
  loop: true,
  autoplay: true, 
  animationData: animationLinkedin,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export function Contact() {
    const [ animationState,setanimationState] = useState({
        isStopped: false, isPaused: false
    })

        return(
            <Container>
             
              <div>
                <Lottie options={defaultOptionsAnimationDev}
                  height={250}
                  width={250}
                  isStopped={animationState.isStopped}
                  isPaused={animationState.isPaused}
                />
              </div>

              <Info>
                <h1>Vamos tirar sua idéia do papel ?</h1>
                <h2>minhas redes ;)</h2>
                <Redes>

                  <a href="https://github.com/jose-rgb">
                    <Lottie options={defaultOptionsAnimatiionGithub}
                      height={100}
                      width={100}
                      isStopped={animationState.isStopped}
                      isPaused={animationState.isPaused}
                    />
                  </a>

                  <a href="https://www.linkedin.com/in/jos%C3%A9-ricardo-aa97a41b2/">
                    <Lottie options={defaultOptionsAnimationLinkedin}
                      height={130}
                      width={130}
                      isStopped={animationState.isStopped}
                      isPaused={animationState.isPaused}
                    />
                  </a>

                  <a href="https://www.youtube.com/channel/UCt8ZIGK2ajtfXOXGyeq7uow">
                   <img src={yotubeImg}/>
                  </a>
        
                </Redes>
              </Info>
            </Container>
        );
}