import isArrayLike from "./_isArrayLike";
import findIndex from "./_findIndex";
import findKey from "./_findKey";

export default function find(obj, predicate, context) {
  const keyFinder = isArrayLike(obj) ? findIndex : findKey;
  const key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}
