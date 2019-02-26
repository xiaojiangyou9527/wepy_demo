import wepy from 'wepy'

const PREFIX = 'https://www.welian.com/miniprogram/'

export default {
  // 使用code置换登录session
  getSession (params) {
    return wepy.request({
      url: PREFIX + 'account-server/wechat/miniprogram/auth',
      method: 'post',
      data: params
    })
  },

  // 登录
  login (unionid) {
    return wepy.request({
      url: PREFIX + 'eis-server/v5/account/token',
      method: 'post',
      data: {
        wxUnionid: unionid
      }
    })
  },

  // 获取用户信息，调用前必须登录
  getUserInfo () {
    return wepy.request({
      url: PREFIX + 'eis-server/v5/profile',
      method: 'get'
    })
  },

  // 保存formId
  saveFormIds(formIds) {
    return wepy.request({
      url: PREFIX + 'notify-server/message/key',
      method: 'post',
      data: {
        keys: formIds,
        type: 5
      }
    })
  }
}
