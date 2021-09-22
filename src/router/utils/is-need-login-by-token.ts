import { RouteLocation } from 'vue-router';

/**
 * @desc  需要先检查token是否过期，如果token没过期再updateContext的页面（可以不登录，但有token的时候又需要登录的页面）
 * @param to
 * @returns {Boolean}
 */
export function isNeedLoginByToken(to: RouteLocation): Boolean {
  const needValidLoginStatusPages = [/^\/share$/, /^\/share-validation$/];
  const isNeed = needValidLoginStatusPages.some(_path => _path.test(to.path));
  return isNeed;
}
export default isNeedLoginByToken;
