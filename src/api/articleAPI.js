// 文章相关的 API 接口 都封装到这个模块
import request from '@/utils/request.js'

// 向外按需到处一个API函数
export const getArticleListAPI = function (_page, _limit) {
  // console.log('调用了这个函数')
  return request.get('articles', {
    params: {
      _page,
      _limit
    }
  })
}
