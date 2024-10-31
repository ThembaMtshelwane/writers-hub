import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

function useFetch<T>(url: string, config?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url, config);
        setData(data);
        setError(null);
      } catch (error) {
        const axiosError = error as AxiosError;
        setError(axiosError.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, config]);

  return { data, loading, error };
}

export default useFetch;
