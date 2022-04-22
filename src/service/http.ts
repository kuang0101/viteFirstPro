import axios, { AxiosRequestConfig } from "axios";
import NProgress from "nprogress";

// 设置请求头和请求路径
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 5000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 请求拦截
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      //@ts-ignore
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return error;
  }
);

// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code === 100) {
    sessionStorage.setItem("token", "");
    // token过期的操作
  }
  return res;
});

// 返回参数格式
interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
  err?: string;
}

// 请求规范
interface Http {
  get<T>(url: string, params?: any): Promise<ResType<T>>;
  post<T>(url: string, params?: any): Promise<ResType<T>>;
  upload<T>(url: string, params: any): Promise<ResType<T>>;
  download(url: string): void;
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, file, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  },
};

export default http;

/**
 * 
 * 除了自己手动封装 axios ,这里还推荐一个 vue3 的请求库: VueRequest
 * 
 * 比较好用的功能:

    🚀 所有数据都具有响应式
    🔄 轮询请求
    🤖 自动处理错误重试
    🗄 内置请求缓存
    💧 节流请求与防抖请求
    🎯 聚焦页面时自动重新请求
    ⚙️ 强大的分页扩展以及加载更多扩展
    📠 完全使用 Typescript 编写，具有强大的类型提示
    ⚡️ 兼容 Vite
    🍃 轻量化
    📦 开箱即用
 * 
 * 
 */
