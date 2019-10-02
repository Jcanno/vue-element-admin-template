import axios from '../../utils/request';

/**
 * 登录
 * @param {object} params
 * @prop {string} params.username - 用户名
 * @prop {string} params.password - 密码
 * @returns {Promise}
 */
export const getLoginFirstExample = params => {
	return axios.request({
		url: `login`,
		method: 'get',
		params
	});
};

/**
 * 登录
 * @param {object} data
 * @prop {string} data.username - 用户名
 * @prop {string} data.password - 密码
 * @returns {Promise}
 */
export const postLoginSecondExample = data => {
	return axios.request({
		url: `login`,
		method: 'post',
		data
	});
};
