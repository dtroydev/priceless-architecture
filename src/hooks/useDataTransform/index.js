import { useState, useRef } from "react";
import flow from "lodash/flow";

export default function useDataTransform() {
  const [data, setData] = useState(null);
  const transformDataRef = useRef(null);

  transformDataRef.current = (functions, data) => {
    setData(flow(functions)(data));
  };

  return { data, transformData: transformDataRef.current };
}
