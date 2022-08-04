import request from '@/utils/request'
/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 人气推荐
*/
export const findHot = () => {
  return request('home/hot', 'get')
}

/**
 * 热门品牌
*/
export const findBrand = () => {
  return request('home/brand', 'get')
}
