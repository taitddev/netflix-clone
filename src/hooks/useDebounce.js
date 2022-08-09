import { useEffect, useState } from "react";

export default function useDebounce(initialValues = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initialValues);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(initialValues), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialValues]);

  return debounceValue;
}
