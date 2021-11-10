import { Paragraph, Container, Terminal } from "./style"

export function Summary() {
    return (
        <>
            <Container>
                <Terminal>
                    <header>
                        <div></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                    </header>
                    <Paragraph className="typing-animation">Olá, me chamo José Ricardo! :)</Paragraph>
                </Terminal>
               
            </Container>
            
        </>
    )
        
}