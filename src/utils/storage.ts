export enum StorageEnum {
  session = 1,
  local = 2,
}

export function setStorage(
  key: string,
  name: string,
  type: StorageEnum = StorageEnum.session
) {
  type === StorageEnum.local
    ? window.localStorage.setItem(key, name)
    : window.sessionStorage.setItem(key, name);
}
export function getStorage(
  key: string,
  type: StorageEnum = StorageEnum.session
) {
  return type === StorageEnum.session
    ? window.sessionStorage[key]
    : window.localStorage[key];
}
