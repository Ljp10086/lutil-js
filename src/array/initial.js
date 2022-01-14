
function initial(array, n = 1) {
  return array.slice().splice(0, Math.max(0, array.length - n));
}

export default initial;
