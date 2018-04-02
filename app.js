// LeanCloud 初始化
const AV = require('./utils/av-weapp-min.js');

AV.init({
  appId: 'GA0d7M4ncNpGH5MQTdNbVLEl-9Nh9j0Va',
  appKey: 'yBtzQoYnyd8oIB7vg5RDmUXx',
});

//app.js
App({
  onLaunch: function (options) {
    // LeanCloud用户系统登录&自动注册
    AV.User.loginWithWeapp().then(user => {
      this.globalData.user = user.toJSON();
    }).catch(console.error);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function(options){
    // Do something when show.
  },
  onHide: function(){
    // Do something when hide. 
  },
  onError: function(msg){
    console.log(msg)
  },
  globalData: {
    userInfo: null,
    message: 'Hello~'
  },
})
