import { StorageKeysEnum } from "./types";

export const loadFromStorage = (key: StorageKeysEnum) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveToStorage = (key: StorageKeysEnum, payload: any) => {
  return localStorage.setItem(key, JSON.stringify(payload));
};

export const removeFromStorage = (key: StorageKeysEnum) => {
  localStorage.removeItem(key);
};
