import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background: ${props => props.theme.colors.background};

    font-size: ${props => props.theme?.sizes?.fontSize || '20px'};
    color: ${props => props.theme.colors.text};

    font-family: sans-serif;
}

`