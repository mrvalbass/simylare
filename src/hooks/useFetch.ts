import { useEffect, useState } from "react";

export const useFetch = <T>(url: string): T | null => {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    (async () => {
      const responseData = await fetch(url).then((r) => r.json());
      setData(responseData);
    })();
  }, [url]);
  return data;
};
