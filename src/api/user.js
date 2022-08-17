import request from '@/utils/request'

/**
 * 获取收藏
 * @param {String} config - 配置页
 * @returns Promise
 */
export const userMember = (config) => {
  return request('/member/collect', 'get', config)
}

/**
 * 添加收藏
 * @param {String} config - 配置页
 * @returns Promise
 */
export const addMember = (config) => {
  return request('/member/collect', 'post', config)
}

/**
 * 取消收藏
 * @param {String} config - 配置页
 * @returns Promise
 */
export const delMember = (config) => {
  return request('/member/collect/batch', 'DELETE', config)
}

/**
 * 获取用户信息
 * @returns Promise
 */
export const getuser = () => {
  return request('/member/profile', 'get')
}

/**
 * 修改用户生日
 *  @param {String} list - 用户信息
 * @returns Promise
 */
export const updatebirthday = (list) => {
  return request('/member/profile', 'put', list)
}
