import styled from "styled-components";

export const Container = styled.div`
    background-color: red;
    .Horizontal{
        .up{
            background-color: #7E8EF1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0px 200px;
    
            .logo {}
            .logo:hover{
                cursor: pointer;
            }
    
            .socialMedia{
                display: flex;
                flex-direction: row;
            }
    
            .social{
                font-size: 1.5rem;
                font-weight: 700;
                padding: 10px;
            }
    
            .social:hover{
                background-color: #615EFC;
                transition: 0.5s;
                cursor: pointer;
            }
        }
    
        .down{
            background-color: #615EFC;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 200px;
    
            ul{
                list-style: none;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
            }
    
            li{
                padding: 20px 10px;
            }
    
            li:hover{
                background-color: #7E8EF1;
                transition: 0.5s;
                cursor: pointer;
            }
        }
    }

    .Vertical{
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 250px;
        transition: 1s;
        .up{
            background-color: #7E8EF1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 0px 50px;
            height: 50%;
    
            .logo {}
            .logo:hover{
                cursor: pointer;
            }
    
            .socialMedia{
                display: flex;
                flex-direction: column;
            }
    
            .social{
                font-size: 1.5rem;
                font-weight: 700;
                padding: 10px;
            }
    
            .social:hover{
                background-color: #615EFC;
                transition: 0.5s;
                cursor: pointer;
            }
        }
    
        .down{
            background-color: #615EFC;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            height: 50%;
    
            ul{
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
    
            li{
                padding: 20px 10px;
            }
    
            li:hover{
                background-color: #7E8EF1;
                transition: 0.5s;
                cursor: pointer;
            }
        }
    }
`
export const Content = styled.div`
    height: 20vh;
    width: 100vw;
    background-color: #D1D8C5;

    .Navbar{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .Navbar:hover{
        transition: 0.5s;
        background-color: #7E8EF1;
        cursor: pointer;
    }
`