export default function each(obj, iteratee, context) {
  if (context) {
    iteratee = iteratee.bind(context);
  }

  if (Array.isArray(obj)) {
    for (let index = 0; index < obj.length; index++) {
      iteratee(obj[index], index, obj);
    }
  } else {
    const keys = Object.keys(obj);
    for (let index = 0; index < keys.length; index++) {
      iteratee(obj[index], index, obj);
    }
  }
}