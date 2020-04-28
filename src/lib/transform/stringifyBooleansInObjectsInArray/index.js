import mapValues from "lodash/mapValues";
import isBoolean from "lodash/isBoolean";

export default function stringifyBooleansInObjectsInArray(data) {
  return data.map((object) =>
    mapValues(object, (value) => (isBoolean(value) ? value.toString() : value))
  );
}
