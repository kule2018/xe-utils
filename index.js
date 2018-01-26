import * as core from './src/core'
import * as browse from './src/browse'

function XEUtils () {}

/**
 * 函数扩展
 *
 * @param {Object} methods 扩展函数对象
 */
function mixin (methods) {
  return Object.assign(XEUtils, methods)
}

mixin(core)
mixin(browse)
XEUtils.mixin = mixin

export * from './src/core'
export * from './src/browse'
export default XEUtils