import request from '@/request'
// 登录
export function login(account, password) {
  const data = {
    account,
    password
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
// 登出
export function logout(token) {
  return request({
    headers: {'Authorization': token},
    url: '/logout',
    method: 'get'
  })
}
// 获取用户信息
export function getUserInfo(token) {
  return request({
    headers: {'Authorization': token},
    url: '/users/currentUser',
    method: 'get'
  })
}
// 注册
export function register(account, nickname, password) {
  const data = {
    account,
    nickname,
    password
  }
  return request({
    url: '/register',
    method: 'post',
    data
  })
}
