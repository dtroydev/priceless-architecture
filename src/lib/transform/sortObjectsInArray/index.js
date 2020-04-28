import orderBy from "lodash/orderBy";

export default function sortObjectsInArray({
  objectsArray,
  sortKey,
  sortType,
}) {
  return orderBy(objectsArray, sortKey, sortType);
}
