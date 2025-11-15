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
        <Image
          src={Logo}
          alt={''}
          height={
            size.width
              ? size.width >= 600
                ? 240
                : (size.width / 600) * 240
              : 200
          }
          style={{
            marginBottom: size.width
              ? size.width >= 600
                ? 48
                : (size.width / 600) * 48
              : 32,
          }}
        />
        <PropagateLoader
          color='#0B4A5A'
          size={
            size.width ? (size.width >= 600 ? 20 : (size.width / 600) * 20) : 20
          }
        />
      </S.MainContainer>
    </>
  );
};

export default Loading;
