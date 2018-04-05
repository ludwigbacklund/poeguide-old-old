export default function removeByKey(obj, deleteKey) {
  const clone = Object.assign({}, obj);
  delete clone[deleteKey];
  return clone;
}
