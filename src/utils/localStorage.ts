/* eslint-disable no-empty */

const localStorageHelper = {
  set: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {}
    return false;
  },
  setObject: (key: string, value: unknown): boolean => {
    try {
      const newValue = JSON.stringify(value);
      localStorage.setItem(key, newValue);
      return true;
    } catch (error) {}
    return false;
  },
  get: (key: string, defaultValue: string | null = null): string | null => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return value;
      }
    } catch (error) {}
    return defaultValue;
  },

  getObject: (key: string, defaultValue: unknown = {}): any => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        const object = JSON.parse(value);
        return object || defaultValue;
      } else {
        return null;
      }
    } catch (error) {}
    return defaultValue;
  },

  remove: (key: string) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  }
};

export default localStorageHelper;
