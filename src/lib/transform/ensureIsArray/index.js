import isArray from "lodash/isArray";

export default function ensureIsArray(data) {
  if (isArray(data)) return data;
  return [data];
}
