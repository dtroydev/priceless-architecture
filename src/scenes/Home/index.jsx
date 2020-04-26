import React, { useState, useEffect } from "react";
import useAPI from "hooks/useAPI";
import HomeView from "scenes/Home/View";

import applyTransforms from "lib/transform";
import asArray from "lib/transform/asArray";
import flattenObjects from "lib/transform/flattenObjects";
import stringifyValues from "lib/transform/stringifyValues";

export default function Home() {
  const { loading, apiData, callAPI } = useAPI();
  const [data, setData] = useState(null);

  const handleInput = event => {
    event.preventDefault();
    const { endpoint, id } = event.target;
    callAPI({ endpoint: endpoint.value, id: id.value });
  };

  useEffect(() => {
    if (!loading && apiData) {
      const data = applyTransforms(
        [asArray, flattenObjects, stringifyValues],
        apiData
      );
      setData(data);
    }
  }, [loading, apiData]);

  return <HomeView data={data} loading={loading} handleInput={handleInput} />;
}
