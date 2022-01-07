export default function isArrayLike(obj) {
  return typeof obj.length === 'number' && obj.length >= 0;
}