import isString from "lodash/isString";
import isNumber from "lodash/isNumber";
import isBoolean from "lodash/isBoolean";
import isArray from "lodash/isArray";
import isPlainObject from "lodash/isPlainObject";
import isEmpty from "lodash/isEmpty";
import isNull from "lodash/isNull";

// this flattens the object and renames keys to show the original path
const flattenObject = (o, prefix = "", result = {}, keepNull = true) => {
  if (isString(o) || isNumber(o) || isBoolean(o) || (keepNull && isNull(o))) {
    result[prefix] = o;
    return result;
  }

  if (isArray(o) || isPlainObject(o)) {
    for (const i in o) {
      let pref = prefix;
      if (isArray(o)) {
        pref = pref + `[${i}]`;
      } else {
        if (isEmpty(prefix)) {
          pref = i;
        } else {
          pref = prefix + "." + i;
        }
      }
      flattenObject(o[i], pref, result, keepNull);
    }
    return result;
  }
  return result;
};

export default function flattenObjectsInArray(data) {
  return data.map((object) => flattenObject(object));
}
