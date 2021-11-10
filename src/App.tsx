import { GlobalStyle } from "./style/global";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Contact } from "./components/Contact";
import { HardSkills } from "./components/HardSkills";
import { Footer } from "./components/Footer";




export function App() {
  return(
    <>
      <GlobalStyle/>
      <Header/>
      <Summary/>
      <Contact />
      <HardSkills />
      <Footer />
    </>
  )
}