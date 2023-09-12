import request from '@/request'
// 获取文章评论
export function getCommentsByArticle(id) {
  return request({
    url: `/comments/article/${id}`,
    method: 'get'
  })
}
// 发表评论
export function publishComment(comment,token) {
  return request({
    headers: {'Authorization': token},
    url: '/comments/create/change',
    method: 'post',
    data: comment
  })
}
