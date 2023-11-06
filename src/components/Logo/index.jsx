import A11yHidden from '../A11yHidden';
import Image from 'next/image';
import * as S from './Logo.style';

const Logo = ({ width = 120, height = 50 }) => {
  return (
    <S.StyledLink href={'/'}>
      <A11yHidden as="h1">이때이짤</A11yHidden>
      <Image
        src={'/images/logo.png'}
        width={width}
        height={height}
        style={{ margin: '0.5rem' }}
        alt="이때이짤"
      />
    </S.StyledLink>
  );
};

export default Logo;
