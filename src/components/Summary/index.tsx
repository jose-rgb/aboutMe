import Lottie from "react-lottie";
import { useState } from "react";
import { Container, Text, TextUpper, Content, ButtonFake } from "./style";
import  animationDev   from '../../assets/website.json';
import  animationArrow   from '../../assets/arrow.json';

//animation dev
const defaultOptionsAnimationDev = {
    loop: true,
    autoplay: true, 
    animationData: animationDev,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

//animation arrow
const defaultOptionsAnimationArrow = {
    loop: true,
    autoplay: true, 
    animationData: animationArrow,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

export function Summary() {
    const [ animationState,setanimationState] = useState({
        isStopped: false, isPaused: false
    })
    return (
        <>
           <Container>
               <Content>
                    <div>
                        <div id="texts">
                        <Text>Olá, me chamo</Text>
                        <TextUpper>José Ricardo</TextUpper>
                        <Text><span>Desenvolvedor Front-end.</span></Text>
                        </div>

                        <a href="#aboutMe">
                        <ButtonFake> <span>Vem me conhecer melhor :)</span></ButtonFake>

                        <div id="imgArrow">
                            <Lottie options={defaultOptionsAnimationArrow}
                                height={150}
                                width={150}
                                isStopped={animationState.isStopped}
                                isPaused={animationState.isPaused}
                            />
                        </div>
                        </a>

                    </div>
                    <div>
                        <Lottie options={defaultOptionsAnimationDev}
                            height={580}
                            width={580}
                            isStopped={animationState.isStopped}
                            isPaused={animationState.isPaused}
                        />
                    </div>
               </Content>
           </Container>
        </>
    )
        
}