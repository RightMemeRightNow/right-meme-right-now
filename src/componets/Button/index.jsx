import * as S from './Button.style';

const Button = ({
  children,
  width = '100%',
  padding = '1rem',
  theme = 'primary',
  onClick,
}) => {
  return (
    <S.StyledButton $width={width} $padding={padding} $theme={theme} onClick={onClick}>
      {children}
    </S.StyledButton>
  )
}

export default Button;
