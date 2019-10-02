/**
 * 验证小写
 * @param {string} str - 字符串
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 验证大写
 * @param {string} str - 字符串
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 验证邮箱
 * @param {string} email - 字符串
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

/**
 * 验证身份证号
 * @param {string} idCard - 字符串
 * @returns {Boolean}
 */
export function validIdCard(idCard) {
  const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/i;
  return reg.test(idCard);
}

/**
 * 验证字符串
 * @param {string} str - 字符串
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true;
  }
  return false;
}

/**
 * 验证银行卡号
 * @param {string} bankNum - 字符串
 * @returns {Boolean}
 */
export function isBankNumber(bankNum) {
  const reg = /^([1-9]{1})(\d{14}|\d{18})$/;
  return reg.test(bankNum);
}

/**
 * 验证手机号
 * @param {string} mobile - 字符串
 * @returns {Boolean}
 */
export function isMobile(mobile) {
  const reg = /^(13[0-9]|14[579]|15[0-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  return reg.test(mobile);
}

/**
 * 验证数组
 * @param {Array} arg - 数组
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(arg);
}
