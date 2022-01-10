export default function findIndex(list, predicate, context) {
  if (context) predicate = predicate.bind(context);
  let index = 0;
  for (; index < list.length; index++) {
    if (predicate(list[index], index, list)) { return index }
  }
  return -1;
}