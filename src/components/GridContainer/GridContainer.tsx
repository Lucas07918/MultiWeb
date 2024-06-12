import { Footer } from "../Footer/Footer";
import { LateralSection } from "../LateralSection/LateralSection";
import { Main } from "../Main/Main";
import { NavBar } from "../NavBar/NavBar";
import "././styles.css"


export function GridContainer() {
  return (
    <div className="Container">
        <div className="navbar"><NavBar /></div>
        <div className="main"><Main /></div>
        <div className="lateral"><LateralSection /></div>
        <div className="footer"><Footer /></div>
    </div>
  )
}