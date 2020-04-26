import isArray from "lodash/isArray";

export default function asArray(data) {
  if (isArray(data)) return data;
  return [data];
}
