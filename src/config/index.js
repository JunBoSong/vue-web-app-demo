/* 公共参数配置文件 */

// 开发环境域名地址
// const devOrigin = 'http://devgw.vpclub.cn' // 本地开发接口地址
const devOrigin = 'http://testgw.vpclub.cn' // 本地开发接口地址

// 正式环境动态获取域名
export const Host = process.env.NODE_ENV === 'development' ? devOrigin : window.location.origin

export const APPID = 100000054
