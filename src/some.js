import each from "./each";
import isArrayLike from "./_isArrayLike";

export default function some(obj, predicate, context) {
  if (context) {
    predicate = predicate.bind(context);
  }

  let keys = !isArrayLike(obj) && Object.keys(obj), 
      length = (keys || obj).length;

  for (let i = 0; i < length; i++) {
    const currentKey = keys ? keys[i] : i;
    if (predicate(obj[currentKey], i, obj)) {
      return true;
    }
  }

  return false;
}