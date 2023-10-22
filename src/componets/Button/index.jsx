import * as S from './Button.style';

const Button = ({
  children,
  height = 'auto',
  width = '100%',
  height = 'auto',
  padding = '1rem',
  theme = 'primary',
  marginBottom = '',
  gridColumn = '',
  marginRight = '',
  onClick,
}) => {
  return (
    <S.StyledButton
      $height={height}
      $marginBottom={marginBottom}
      $gridColumn={gridColumn}
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
