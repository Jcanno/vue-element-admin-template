import axios from '../../utils/request';

/**
 * @descption  登录
 * @param {object} params: {
 *    @param {string} username  用户名
 *    @param {string} password  密码
 * }
 * @returns {Promise}
 */
export const getLoginFirstExample = params => {
  return axios.request({
    url: `login`,
    method: 'get',
    params,
  });
};

/**
 * @descption  登录
 * @param {object} data: {
 *    @param {string} username  用户名
 *    @param {string} password  密码
 * }
 * @returns {Promise}
 */
export const postLoginSecondExample = data => {
  return axios.request({
    url: `login`,
    method: 'post',
    data,
  });
};
