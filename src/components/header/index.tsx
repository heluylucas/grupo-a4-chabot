import React from 'react';
import Image from 'next/image';

import Logo from './logo_impost.png';
// import router from 'next/router';

// import useWindowSize from '../../hooks/useWindowSize';

import * as S from './styles';

const Header = () => {
  // const size = useWindowSize();

  return (
    <S.MainContainer>
      <Image src={Logo} alt={''} height={80} />
    </S.MainContainer>
  );
};

export default Header;
