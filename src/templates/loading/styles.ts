import { theme } from '@/styles/default.theme';
import styled from 'styled-components';

export const MainContainer = styled.div<{ height?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
    background-color: ${theme.colors.primary.background};
`;
