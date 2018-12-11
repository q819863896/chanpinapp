import qs from "qs";
import axios from "axios";

axios.defaults.validateStatus = status => {
    return status < 500;
};

// 设置请求token
axios.interceptors.request.use(config => {
    var token = sessionStorage.getItem('token');
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
});

// 接口错误拦截
axios.interceptors.response.use(res => {
    if (res.status === 401) {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        router.push({ path: '/login' });
        return res;
    } else {
        return res;
    }
}, err => {
    return Promise.reject(err);
});

axios.defaults.baseURL = "http://10.202.203.55:7082";
// axios.defaults.baseURL = "http://10.149.0.173:7082";        // 武勇文

axios.defaults.timeout = 1000 * 30;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
axios.defaults.headers.get["Content-Type"] = "application/json";

export const login = params => {
    return axios.post("/login", qs.stringify(params)).then(res => res.data);
};

export const requestUser = params => {
    return axios.post('/auth/getUserInfo', params).then(res => res.data);
};

export const requestToken = params => {
    return axios.post('/oauth/token', params).then(res => res.data);
};

// 专业方向
export const getMajorByInput = params => {
    return axios.post('/cpb/major/getMajorByInput', params).then(res => res.data);
};

// 项目类型
export const getTypeByOption = params => {
    return axios.post('/cpb/type/getTypeByOption', params).then(res => res.data);
};

// 产品名称
export const getItemNameByInput = params => {
    return axios.post('/cpb/item/getItemNameByInput', params).then(res => res.data);
};

// 企业/部门/科研方向
export const getItemDirection = params => {
    return axios.post('/cpb/item/getItemDirectionByInput', params).then(res => res.data);
};

// 项目时长
export const getlengthName = params => {
    return axios.post('/cpb/length/getlengthNameByOption', params).then(res => res.data);
};

// 参与项目时间
export const getJoinTime = params => {
    return axios.post('/cpb/joinTime/getJoinTimeByOption', params).then(res => res.data);
};

// 二级筛选页面
// 全部项目
export const getParentMajor = params => {
    return axios.post('/cpb/parentMajor/getParentMajor', params).then(res => res.data);
};

// 项目地点
export const getLocale = params => {
    return axios.post('/cpb/locale/getLocale', params).then(res => res.data);
};

// 搜索产品
export const getListByParam = params => {
    return axios.post('/cpb/item/getListByParam', qs.stringify(params)).then(res => res.data);
};

// 搜索产品
export const getListByItemName = params => {
    return axios.post('/cpb/item/getListByItemName', qs.stringify(params)).then(res => res.data);
};

// 对比
export const getContrastByNo = params => {
    return axios.post('/cpb/item/getContrastByNo', qs.stringify(params)).then(res => res.data);
};

// 详情
export const getItemDetailById = params => {
    return axios.post('/cpb/item/getItemDetailById', qs.stringify(params)).then(res => res.data);
};

// 详情--pdf
export const showImage = params => {
    return axios.post('/cpb/upload/showImage', qs.stringify(params), {responseType: 'arraybuffer'}).then(res => res.data);
};
