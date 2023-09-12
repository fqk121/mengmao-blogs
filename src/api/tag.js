import request from '@/request'
// 获取所有标签
export function getAllTags() {
  return request({
    url: '/tags',
    method: 'get',
  })
}
// 获取所有详细标签
export function getAllTagsDetail() {
  return request({
    url: '/tags/detail',
    method: 'get',
  })
}
// 获取热门标签
export function getHotTags() {
  return request({
    url: '/tags/hot',
    method: 'get',
  })
}
// 获取文章标签
export function getTag(id) {
  return request({
    url: `/tags/${id}`,
    method: 'get',
  })
}
// 获取文章详细标签
export function getTagDetail(id) {
  return request({
    url: `/tags/detail/${id}`,
    method: 'get',
  })
}
