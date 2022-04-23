import request from '@/utils/request.js'

// 注意 下面的接口调用 只是存粹使用 因为服务器没有提供 /user接口
export const getUserinfoAPI = function () {
  return request.get('/user')
}
