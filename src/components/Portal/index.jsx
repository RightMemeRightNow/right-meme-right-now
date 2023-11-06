import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as S from './Portal.style';

const Portal = ({ isOpen, children }) => {
  const modalRoot = useRef(null);
  useEffect(() => {
    modalRoot.current = document.getElementById('modal-root');
  }, []);

  return modalRoot.current && isOpen ?
    createPortal(<S.Overlay>{children}</S.Overlay>, modalRoot.current) : null
}

export default Portal;
