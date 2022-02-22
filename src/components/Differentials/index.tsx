import Lottie from "react-lottie";
import  animationResponsive   from '../../assets/responsiveDesign.json';
import  animationDev   from '../../assets/dev.json';
import  animationTeam   from '../../assets/teamwork.json';
import medalhaImg from '../../assets/roseta.png'
import { useState } from "react"
import {Container, Content, Slides, SlideItem, Navigation } from "./style";

//animation responsive
const defaultOptionsAnimationResponsive = {
    loop: true,
    autoplay: true, 
    animationData: animationResponsive,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

//animation dev
const defaultOptionsAnimationDev = {
    loop: true,
    autoplay: true, 
    animationData: animationDev,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

//animation team
const defaultOptionsAnimationTeam = {
    loop: true,
    autoplay: true, 
    animationData: animationTeam,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

export function Differentials() {
    const [ animationState,setanimationState] = useState({
        isStopped: false, isPaused: false
    })

    //add selected somente no 1
    function addCssClassSelected1() {
        let button1 = document.getElementById('selected1')
        let button2 = document.getElementById('selected2')
        let button3 = document.getElementById('selected3')

        button2!.classList.remove('selected');
        button3!.classList.remove('selected');

        button1 !.classList.add('selected');
    }

    //add selected somente no 2
    function addCssClassSelected2() {
        let button1 = document.getElementById('selected1')
        let button2 = document.getElementById('selected2')
        let button3 = document.getElementById('selected3')

        button1!.classList.remove('selected');
        button3!.classList.remove('selected');

        button2!.classList.add('selected');
    }


    //add selected somente no 3
    function addCssClassSelected3() {
        let button1 = document.getElementById('selected1')
        let button2 = document.getElementById('selected2')
        let button3 = document.getElementById('selected3')

        button1!.classList.remove('selected');
        button2!.classList.remove('selected');

        button3!.classList.add('selected');
    }
    

    return(
        <Container id="differential">

            <div>
                <h2>Diferenciais</h2>
                <img src={medalhaImg}/>
            </div>

            <Content>
                <Slides>
                    <input type="radio" name="slide" id="slide1" onClick={() => addCssClassSelected1()}/>
                    <input type="radio" name="slide" id="slide2" onClick={() => addCssClassSelected2()}/>
                    <input type="radio" name="slide" id="slide3" onClick={() => addCssClassSelected3()}/>
                    
                    
                    <SlideItem className="slide s1">
                        <div className="descritionImg">
                                <Lottie options={defaultOptionsAnimationResponsive}
                                    height={250}
                                    width={250}
                                    isStopped={animationState.isStopped}
                                    isPaused={animationState.isPaused}
                                />
                        </div>

                        <div className="descritionText">
                            <h2 className="title">Web design responsivo</h2>
                            
                            <h2 className="descrition">
                                Consigo adaptar uma interface a qualquer dispositivo de acordo com a
                                resolução da sua tela facilitando a acessibilidade por smartphones e tablets.
                            </h2>

                        </div>
                    </SlideItem> 

                    <SlideItem className="slide">
                        <div className="descritionImg">
                                <Lottie options={defaultOptionsAnimationTeam}
                                    height={250}
                                    width={250}
                                    isStopped={animationState.isStopped}
                                    isPaused={animationState.isPaused}
                                />
                        </div>

                        <div className="descritionText">
                            <h2 className="title">Metodologias ágeis</h2>
                            
                            <h2 className="descrition">
                                Buscando uma forma de conduzir projetos em equipe com rapidez, qualidade
                                e agilidade, me especializei  na metodologia ágil Scrum.
                            </h2>

                        </div>
                    </SlideItem> 

                    <SlideItem className="slide">
                        <div className="descritionImg">
                                <Lottie options={defaultOptionsAnimationDev}
                                    height={250}
                                    width={250}
                                    isStopped={animationState.isStopped}
                                    isPaused={animationState.isPaused}
                                />
                        </div>

                        <div className="descritionText">
                            <h2 className="title">Clean Code</h2>
                            
                            <h2 className="descrition">
                                Usando a filosofia do Código Limpo, busco manter meus códigos
                                o mais legível possível, pois assim, fica muito mais fácil
                                Depurar e atualizar ao longo da sua vida util.
                            </h2>

                        </div>
                    </SlideItem> 

                    
                </Slides>

                <Navigation>
                    <label htmlFor="slide1" id="selected1" className="selected"></label>
                    <label htmlFor="slide2" id="selected2"></label>
                    <label htmlFor="slide3" id="selected3"></label>
                </Navigation>
            </Content>
           
        </Container>
    );
}