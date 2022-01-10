import isArrayLike from "./_isArrayLike";

export default function filter(obj, predicate, context) {
  let result = [],
      keys = !isArrayLike(obj) && Object.keys(obj),
      len = (keys || obj).length;

  if (context) {
    predicate = predicate.bind(context);
  }

  for (let i = 0; i < len; i++) {
    const currentKey = keys ? keys[i] : i;
    if (predicate(obj[currentKey], i, obj)) result.push(obj[currentKey]);
  }

  return result;
}
