import * as S from './Button.style';

const Button = ({
  children,
  width = '100%',
  padding = '1rem',
  theme = 'primary',
  marginBottom = '',
  gridColumn = '',
  marginRight = '',
  onClick,
}) => {
  return (
    <S.StyledButton
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
