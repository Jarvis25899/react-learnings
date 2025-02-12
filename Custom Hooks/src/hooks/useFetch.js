import { useEffect, useState } from "react";

export default function useFetch(fetchFn, initialData) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [loadingText, setLoadingText] = useState(null);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {
    async function fetchData() {
      setIsUpdating(true);
      setLoadingText("Fetching the data...");
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch data. Please try again later.",
        });
      }
      setIsUpdating(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isUpdating,
    loadingText,
    error,
    fetchedData,
    setFetchedData,
    setIsUpdating,
    setLoadingText,
  };
}
