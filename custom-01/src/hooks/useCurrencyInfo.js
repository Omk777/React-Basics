import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const res = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;
