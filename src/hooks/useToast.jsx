import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = (message, type) => {
  const config = {
    position: 'top-center',
    limit: 1,
    closeButton: false,
    autoClose: 1000,
    hideProgressBar: true,
  };

  switch (type) {
    case 'success':
      return toast.success(message, config);
    case 'error':
      return toast.error(message, config);
    case 'warning':
      return toast.warning(message, config);
    default:
      return toast(message, config);
  }
};

export default useToast;
