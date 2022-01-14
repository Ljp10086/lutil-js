export default function flatten(array, depth = Infinity, output = []) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (Array.isArray(value)) {
      flatten(value, null, output);
    } else {
      output.push(value);
    }
  }
  return output;
}
