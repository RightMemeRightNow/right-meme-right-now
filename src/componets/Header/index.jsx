import Logo from '../Logo';
import * as S from './Header.style';

const Header = ({ step }) => {
  let time = 7 - step;

  return (
    <>
      <Logo />
      <S.ProgressBar>
        <S.Progress width={String(100 - (time * 100) / 7)} />
      </S.ProgressBar>
    </>
  );
};

export default Header;
