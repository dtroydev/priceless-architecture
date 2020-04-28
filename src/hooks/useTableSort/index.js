import { useRef } from "react";
import useDataTransform from "hooks/useDataTransform";
import sortObjectsInArray from "lib/transform/sortObjectsInArray";

export default function useTableSort() {
  const { data, transformData } = useDataTransform();
  const sortDataRef = useRef((data) => {
    transformData(sortObjectsInArray, data);
  });

  return { data, sortData: sortDataRef.current };
}
