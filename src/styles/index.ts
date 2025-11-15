import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Montserrat";
        font-weight: 400;
        src: local("Montserrat"), url("/fonts/Montserrat/Montserrat-Regular.ttf") format('truetype');
    }

    @font-face {
        font-family: "Montserrat_600";
        font-weight: 600;
        src: local("Montserrat"), url("/fonts/Montserrat/Montserrat-SemiBold.ttf") format('truetype');
    }

    @font-face {
        font-family: "Montserrat_700";
        font-weight: 700;
        src: local("Montserrat"), url("/fonts/Montserrat/Montserrat-Bold.ttf") format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Montserrat;
        background-color: #F7F1DA;
    }
    button {
        outline: none;
        border: none;
    }
`;
