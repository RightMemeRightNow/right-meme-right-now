import { forwardRef } from "react";
import * as S from './A11yHidden.style';

const A11yHidden = forwardRef(function A11yHidden(
  { as: Component = 'span', children }, ref
) {
  return (
    <Component style={S.A11yHidden} ref={ref}>
      {children}
    </Component>
  );
});

export default A11yHidden;
