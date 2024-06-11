// import { useState } from "react";
import { Content} from "./styles";

export function NavBar() {
    // const [isHorizontal, setIsHorizontal] = useState(true);

    // const toggleNavbar = () => {
    //     setIsHorizontal(!isHorizontal);
    // }

    return (
    //     <Container>
    //     <div className={isHorizontal ? 'Horizontal' : 'Vertical'}>
    //         <div className="up">
    //             <h1 className="logo">NomeDoSite</h1>
    //             <div className="socialMedia">
    //                 <div className="social">1</div>
    //                 <div className="social">2</div>
    //                 <div className="social">3</div>
    //                 <div className="social">4</div>
    //             </div>
    //             <button onClick={toggleNavbar}>Mudar Navbar</button>
    //         </div>
    //         <div className="down">
    //             <ul>
    //                 <li>Games</li>
    //                 <li>Otaku</li>
    //                 <li>Entretenimento</li>
    //                 <li>Análises</li>
    //             </ul>
    //             <div>Pesquisar</div>
    //         </div>
    //     </div>
    //     </Container>
        <Content>
            <div className="Navbar">Navbar</div>
        </Content>
    )
}