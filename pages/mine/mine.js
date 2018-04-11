var app = getApp;
Page({

  data: {
  
  },

  onLoad: function (options) {
  var that = this;
  wx.getUserInfo({
    success: function (res) {
      console.log(res);
      var avatarUrl = 'userInfo.avatarUrl';
      var nickName = 'userInfo.nickName';
      that.setData({
        [avatarUrl]: res.userInfo.avatarUrl,
        [nickName]: res.userInfo.nickName,
      })
    }
  })  
  },

  mySchedule: function () {
    // 跳转到“我的日程”页面
  },

  myTodo: function () {
    // 跳转到“我的任务”页面
  },

  settings: function () {
    // 跳转到“设置”页面
  }
})