import { useState, useRef } from "react";
import ensureIsArray from "lib/transform/ensureIsArray";
import flow from "lodash/flow";

export default function useDataTransform() {
  const [data, setData] = useState(null);
  const transformDataRef = useRef((functions, data) => {
    const functionsArray = ensureIsArray(functions);
    setData(flow(functionsArray)(data));
  });

  return { data, transformData: transformDataRef.current };
}
