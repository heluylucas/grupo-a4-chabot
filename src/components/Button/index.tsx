import { ButtonProps } from '@material-ui/core';
import { CircularProgress } from '@mui/material';

import * as S from './styles';

interface ButtonComponentProps extends ButtonProps {
  label: string;
  width?: string;
  height?: string;
  outlined?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonComponentProps> = ({
  label,
  width,
  height,
  outlined,
  loading,
  ...rest
}) => {
  return (
    <S.Container>
      <S.Button
        onClick={rest.onClick}
        width={width}
        height={height}
        outlined={outlined}
        type={rest.type}
        {...rest}
      >
        {loading ? (
          <CircularProgress size={16} style={{ color: 'white' }} />
        ) : (
          <S.Label outlined={outlined}>{label}</S.Label>
        )}
      </S.Button>
    </S.Container>
  );
};

export default Button;
