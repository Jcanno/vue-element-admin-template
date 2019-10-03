import moment from 'moment';

/**
 * 将日期转换为时间戳过滤器
 * @param {string} datestr - 日期字符串
 * @returns {number} 时间戳
 */
const DateTransToTimestamp = datestr => {
	return parseInt(moment(datestr).valueOf() / 1000);
};

export default DateTransToTimestamp;
