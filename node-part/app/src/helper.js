/**
 * @resMsg
 * @param {Boolen} sucStatus 返回状态
 * @param {any} message 提示语句
 * @param {any} data 返回数据
 * @returns
 */
export function resMsg({status, message, data}) {
  status = status == undefined ? true : false
  message = message || 'success'
  return {
    success: status,
    data: data,
    message: message
  }
}

