import { ValidationCallBack } from '@/types';
/**
 * 检验key
 */
export const Validation = (map: any, callback: ValidationCallBack) => {
  // 校验结果状态
  let state: boolean = false;
  // 遍历rules的值
  for (const item in map) {
    if (map[item]) {
      state = true;
    } else {
      state = false;
    }
  }
  callback(state);
}
