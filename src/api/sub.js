import request from '@/utils/request'
/**
 * 获取商品列表
 * @obj 对象
 * @returns Promise
 */
export const finSubList = (obj) => {
  return request('/category/goods/temporary', 'post', obj)
}
