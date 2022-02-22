import { GlobalStyle } from "./style/global";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { AboutMe } from "./components/AboutMe";
import { Differentials } from "./components/Differentials";
import { Contact } from "./components/Contact";

export function App() {
  return(
    <>
      <GlobalStyle/>
      <Header/>
      <Summary />
      <AboutMe />
      <Differentials />
      <Contact />
    </>
  )
}