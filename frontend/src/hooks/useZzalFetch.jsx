import { useState, useCallback } from "react"

export const useZzalFetch = (getFinalImage, answers, openModal, closeModal) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const getImageList = useCallback(async () => {
    openModal();
    try {
      const response = await getFinalImage();
      setResult(response.data);
    } catch (e) {
      setError(e);
    } finally {
      closeModal();
    }
  }, [result, answers]);
  return { result, error, getImageList };
}
