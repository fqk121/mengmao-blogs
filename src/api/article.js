import request from '@/request'
// 根据页码获取文章
export function getArticles(query, page) {
  return request({
    url: '/articles',
    method: 'post',
    data: {
      page: page.pageNumber,
      pageSize: page.pageSize,
      name: page.name,
      sort: page.sort,
      year: query.year,
      month: query.month,
      tagId: query.tagId,
      categoryId: query.categoryId
    }
  })
}
// 获得热门文章
export function getHotArtices() {
  return request({
    url: '/articles/hot',
    method: 'post'
  })
}
// 获得最新文章
export function getNewArtices() {
  return request({
    url: '/articles/new',
    method: 'post'
  })
}
// 查看作者
export function viewArticle(id) {
  return request({
    url: `/articles/view/${id}`,
    method: 'post'
  })
}
// 获取分类名称
export function getArticlesByCategory(id) {
  return request({
    url: `/articles/category/${id}`,
    method: 'post'
  })
}
// 获取标签名称
export function getArticlesByTag(id) {
  return request({
    url: `/articles/tag/${id}`,
    method: 'post'
  })
}
// 发布文章
export function publishArticle(article,token) {
  return request({
    headers: {'Authorization': token},
    url: '/articles/publish',
    method: 'post',
    data: article
  })
}
// 搜寻文章
export function searchArticle(search) {
  return request({
    url: '/articles/search',
    method: 'post',
    data: {"search":search}
  })
}
// 获取文章时间
export function listArchives() {
  return request({
    url: '/articles/listArchives',
    method: 'post'
  })
}
// ？
export function getArticleById(id) {
  return request({
    url: `/articles/${id}`,
    method: 'post'
  })
}
