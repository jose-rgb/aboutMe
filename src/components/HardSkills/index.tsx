import { Container, Techs, CardTechs } from "./style";
import reactImg from '../../assets/react.png'
import typescripttImg from '../../assets/typescript.png'
import javascripttImg from '../../assets/javascript.png'
import htmlImg from '../../assets/html.png'
import csstImg from '../../assets/css.png'
import styledImg from '../../assets/styled.png'
import nodeImg from '../../assets/node.png'
import firebaseImg from '../../assets/firebase.png'
import gitImg from '../../assets/git.jpeg'
import githubImg from '../../assets/github.png'

export function HardSkills() {
    return (
        <Container>
            <h1>{'<Hard skills />'}</h1>
            <Techs>

                <CardTechs>
                    <img src={reactImg} />
                    <div>
                        <h2>ReactJS</h2>
                    </div>
                    
                </CardTechs>

                <CardTechs>
                    <img src={typescripttImg} />
                    <div>
                        <h2>Typescript</h2>
                    </div>
                    
                </CardTechs>

                <CardTechs>
                    <img src={javascripttImg} />
                    <div>
                        <h2>Javascript</h2>
                    </div>
                    
                </CardTechs>

                <CardTechs>
                    <img src={htmlImg} />
                    <div>
                        <h2>HTML5</h2>
                    </div>
                    
                </CardTechs>

                <CardTechs>
                    <img src={csstImg} />
                    <div>
                        <h2>CSS3</h2>
                    </div>
                    
                </CardTechs>

                <CardTechs>
                    <img src={styledImg} />
                    <div>
                        <h2>Styled Components</h2>
                    </div>
                    
                </CardTechs>

                <CardTechs>
                    <img src={nodeImg} />
                    <div>
                        <h2>NodeJS</h2>
                    </div>
                    
                </CardTechs>

                <CardTechs>
                    <img src={firebaseImg} />
                    <div>
                        <h2>Firebase</h2>
                    </div>
                    
                </CardTechs>

                <CardTechs>
                    <img src={gitImg} />
                    <div>
                        <h2>Git</h2>
                    </div>
                    
                </CardTechs>

                <CardTechs>
                    <img src={githubImg} />
                    <div>
                        <h2>GitHub</h2>
                    </div>
                    
                </CardTechs>


            </Techs>
        </Container>
    );
}