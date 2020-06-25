import { isNull } from 'util';

export default class Storage {
  constructor () {
  }

  /**
   * 存储数据
   * @param key 键名，存储 标识
   * @param data 需要存储的数据
   */
  static setData<T> (key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * 获取某项存储数据
   * @param key 键名，存储 标识
   */
  static getData<T> (key: string): T | null {
    if (!isNull(localStorage.getItem(key))) {
      return JSON.parse(localStorage.getItem(key) as string);
    }
    return null;
  }

  /**
   * 移除某项存储数据
   * @param key 键名，存储 标识
   */
  static removeData (key: string): boolean {
    localStorage.removeItem(key)
    const state: string | null = localStorage.getItem(key);
    return isNull(state) || false;
  }

  /**
   * 清除存储数据
   */
  static clearData () {
    localStorage.clear();
  }

}