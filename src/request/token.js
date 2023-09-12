// 获取token
export function getToken() {
  return localStorage.token
}
// 重置token
export function setToken(token) {
  return localStorage.token = token
}
// 移除token
export function removeToken() {
  return localStorage.removeItem('token')
}