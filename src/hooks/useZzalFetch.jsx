import { useState, useCallback } from "react"

export const useZzalFetch = (getFinalImage, openModal, closeModal) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const getImageList = useCallback(async () => {
    openModal();
    try {
      const response = await getFinalImage();
      console.info('response: ', response);
      setResult(response.data);
    } catch (e) {
      setError(e);
    } finally {
      closeModal();
    }
  }, [result]);
  return { result, error, getImageList };
}
