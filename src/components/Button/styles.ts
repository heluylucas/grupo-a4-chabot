import { theme } from '@/styles/default.theme';
import styled from 'styled-components';

export type ButtonProps = {
  width?: string;
  height?: string;
  outlined?: boolean;
};

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    height: fit-content;

    border-radius: 1rem;
`;

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(props) => props.width || '18rem'};
    height: ${(props) => props.height || '3.8rem'};

    background-color: ${(props) => {
      if (props.outlined) {
        return theme.colors.primary.background;
      } else {
        return theme.colors.primary.Orange;
      }
    }};

    border: 1px solid
        ${(props) => (props.outlined ? theme.colors.primary.Orange : 'none')};
    border-radius: 0.3rem;

    cursor: pointer;

    :hover {
        background-color: ${(props) => {
          if (props.outlined) {
            return theme.colors.primary.background;
          } else {
            return theme.colors.primary.Orange;
          }
        }};

        border: 0.1rem solid
            ${(props) =>
              props.outlined ? theme.colors.primary.Orange : 'none'};

        p {
            color: ${(props) =>
              props.outlined
                ? theme.colors.primary.Orange
                : theme.colors.primary.White};
            font-family: 'Montserrat';
        }
    }

    :active {
        background-color: ${(props) => {
          if (props.outlined) {
            return theme.colors.primary.White;
          } else {
            return theme.colors.primary.background;
          }
        }};

        border: 0.1rem solid
            ${(props) =>
              props.outlined ? theme.colors.primary.background : 'none'};

        p {
            color: ${(props) =>
              props.outlined
                ? theme.colors.primary.background
                : theme.colors.primary.White};

            font-family: 'Montserrat';
            
        }
    }
`;

export const Label = styled.p<ButtonProps>`
    font-family: 'Montserrat';
   font-size: 1.6rem;
    letter-spacing: 0.16rem;

    color: ${(props) =>
      props.outlined
        ? theme.colors.primary.Orange
        : theme.colors.primary.White};
`;
