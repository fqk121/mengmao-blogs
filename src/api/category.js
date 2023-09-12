import request from '@/request'
// 所有分类
export function getAllCategorys() {
  return request({
    url: '/categorys',
    method: 'get',
  })
}
// 所有分类相关的描述
export function getAllCategorysDetail() {
  return request({
    url: '/categorys/detail',
    method: 'get',
  })
}
// 所有详细分类
export function getCategory(id) {
  return request({
    url: `/categorys/${id}`,
    method: 'get',
  })
}
// ？
export function getCategoryDetail(id) {
  return request({
    url: `/categorys/detail/${id}`,
    method: 'get',
  })
}
