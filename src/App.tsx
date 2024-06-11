import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { NavBar } from "./components/NavBar/NavBar";
import { GlobalStyle } from "./style/global";

export function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
      <GlobalStyle /> 
    </>
  )
}


