import mapValues from "lodash/mapValues";

export default function stringifyValues(data) {
  return data.map(object => mapValues(object, value => value.toString()));
}
