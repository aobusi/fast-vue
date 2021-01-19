import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/exampleOrder/getPageList',
    method: 'post',
    params
  })
}
