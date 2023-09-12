import request from '@/request'
// 上传图片
export function upload(formdata) {
  return request({
    headers: {'Content-Type': 'multipart/form-data'},
    url: '/upload',
    method: 'post',
    data: formdata
  })
}
