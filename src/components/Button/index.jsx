import * as S from './Button.style';

const Button = ({
  children,
  width = '100%',
  height = 'auto',
  padding = '1rem',
  theme = 'primary',
  marginBottom = '',
  marginRight = '',
  onClick,
}) => {
  return (
    <S.StyledButton
      $height={height}
      $marginBottom={marginBottom}
      $marginRight={marginRight}
      $width={width}
      $padding={padding}
      $theme={theme}
      onClick={onClick}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
