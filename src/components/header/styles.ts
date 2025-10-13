import styled from 'styled-components';
import { theme } from '../../styles/default.theme';

export const MainContainer = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 1150;
    top: 0;
    padding: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.primary.darkBlue};
`;

export const Title = styled.h1`
    font-family: 'Montserrat_700';
    color: white
`;
