import isArrayLike from "./_isArrayLike";

export default function contains(obj, value, fromIndex) {
  if (!isArrayLike(obj)) obj = Object.values(obj); 
  return [...obj].indexOf(value) > -1;
}
