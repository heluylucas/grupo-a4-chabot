import React from 'react';
import { Standard } from '@typebot.io/react';
import Header from '@/components/header';

import * as S from './styles';
import useWindowSize from '@/hooks/useWindowSize';

const Home: React.FC = () => {
  const size = useWindowSize();

  return (
    <>
      <Header />
      <S.MainContainer height={size.height}>
        <Standard
          typebot='my-typebot-6z7pqm9'
          apiHost='https://typebot.io'
          style={{ width: '100%', height: '100%' }}
        />
      </S.MainContainer>
    </>
  );
};

export default Home;
