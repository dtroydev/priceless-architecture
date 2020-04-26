import flow from "lodash/flow";

export default function applyETL(functions, data) {
  return flow(functions)(data);
}
