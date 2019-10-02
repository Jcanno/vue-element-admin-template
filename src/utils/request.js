import axios from 'axios';
import config from '../config';
import { Message } from 'element-ui';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? config.baseUrl.dev
    : config.baseUrl.pro;
const request = new HttpRequest(baseUrl);

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
  // 设置请求配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      timeout: 60 * 1000
    };
    return config;
  }

  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        const { data, status, request } = res;
        // 根据数据简洁性原则，对数据进行处理
        return { data, status, request };
      },
      error => {
        // 根据数据简洁性原则，对错误信息进行处理
        let errorInfo = error.response;
        if (!errorInfo) {
          const {
            request: { statusText, data, status },
            config
          } = JSON.parse(JSON.stringify(error));
          errorInfo = {
            statusText,
            status,
            data,
            request: { responseURL: config.url }
          };
        }
        this.handleResponseStatus(errorInfo);
        return Promise.reject(error);
      }
    );
  }

  handleResponseStatus({ data, status }) {
    // Restful接口风格
    switch (status) {
      case 401:
        Message({
          message: '账号已过期,请重新登录',
          type: 'error'
        });
        break;
      case 500:
        Message({
          message: '服务器错误',
          type: 'error'
        });
        break;
      case 400:
        Message({
          message: data.message,
          type: 'error'
        });
        break;
    }
  }
}

export default request;
