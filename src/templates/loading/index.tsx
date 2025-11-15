import React, { useEffect } from 'react';

import * as S from './styles';
import Logo from '../../components/header/logo_impost.png';
import useWindowSize from '@/hooks/useWindowSize';
import { PropagateLoader } from 'react-spinners';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Loading: React.FC = () => {
  const size = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/chatbot');
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <S.MainContainer height={size.height}>
        <Image src={Logo} alt={''} height={240} style={{ marginBottom: 48 }} />
        <PropagateLoader color='#0B4A5A' size={20} />
      </S.MainContainer>
    </>
  );
};

export default Loading;
