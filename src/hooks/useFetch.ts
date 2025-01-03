import { useEffect, useState } from "react";

export const useFetch = <T>(
  url: string
): { loading: boolean; data: T | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const responseData = await fetch(url).then((r) => r.json());
      setData(responseData);
      setLoading(false);
    })();
  }, [url]);
  return { loading, data };
};
