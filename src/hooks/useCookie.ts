import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useCookie = <T>(
  key: string,
  initialValue: T
): {
  value?: T;
  setCookie: (value: T, options?: Cookies.CookieAttributes) => void;
} => {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    const cookieValue = Cookies.get(key);
    if (cookieValue) {
      setValue(JSON.parse(cookieValue));
    } else {
      setValue(initialValue);
    }
  }, [key, initialValue]);

  const setCookie = (newValue: T, options?: Cookies.CookieAttributes) => {
    try {
      Cookies.set(key, JSON.stringify(newValue), options);
      setValue(newValue);
    } catch (e) {
      console.log("Failed to set cookie", e);
    }
  };

  return {
    value,
    setCookie,
  };
};
