export enum StorageEnum {
  session = 1,
  local = 2,
}

export function setStorage(
  key: string,
  name: string,
  type: StorageEnum = StorageEnum.session
) {
  window.localStorage.setItem(key, name);
}
export function getStorage(
  key: string,
  type: StorageEnum = StorageEnum.session
) {
  return window.localStorage[key];
}
