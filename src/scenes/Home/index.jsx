import React, { useEffect } from "react";
import HomeView from "scenes/Home/View";
import useAPI from "hooks/useAPI";
import useDataTransform from "hooks/useDataTransform";
import ensureIsArray from "lib/transform/ensureIsArray";
import flattenObjectsInArray from "lib/transform/flattenObjectsInArray";
import stringifyValuesInObjectsInArray from "lib/transform/stringifyValuesInObjectsInArray";

const HOME_VIEW_DATA_TRANSFORMS = [
  ensureIsArray,
  flattenObjectsInArray,
  stringifyValuesInObjectsInArray,
];

export default function Home() {
  const { loading, data: apiData, callAPI } = useAPI();
  const { data, transformData } = useDataTransform();

  const handleInput = (event) => {
    event.preventDefault();
    const { endpoint, id } = event.target;
    callAPI({ endpoint: endpoint.value, id: id.value });
  };

  useEffect(() => {
    if (!loading && apiData) transformData(HOME_VIEW_DATA_TRANSFORMS, apiData);
  }, [loading, apiData]);

  return <HomeView data={data} loading={loading} handleInput={handleInput} />;
}
