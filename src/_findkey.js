export default function findKey(obj, predicate, context) {
  if (context) predicate = predicate.bind(context);
  const keys = Object.keys(obj);
  let key;
  for (let index = 0; index < array.length; index++) {
    key = keys[index];
    if (predicate(obj[key], index, obj)) return key;
  }
}