import { useState, useRef } from "react";
import dispatchAPI from "services/api";

const PRE_API_CALL_DELAY_MS = 1000;

const promiseDelay = (ms = 0) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });

export default function useAPI() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);

  const callAPIRef = useRef(request => {
    (async () => {
      try {
        setLoading(true);
        await promiseDelay(PRE_API_CALL_DELAY_MS);
        const response = await dispatchAPI(request);
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setApiData({ error: error.message });
        setLoading(false);
      }
    })();
  });

  return { loading, apiData, callAPI: callAPIRef.current };
}
