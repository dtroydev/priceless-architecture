import mapValues from "lodash/mapValues";

export default function stringifyValuesInObjectsInArray(data) {
  return data.map((object) => mapValues(object, (value) => value.toString()));
}
