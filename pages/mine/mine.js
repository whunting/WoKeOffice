var app = getApp;
Page({

  data: {
    teamNumber: 2,
    projectNumber: 4,
    todoNumber: 15,
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

  /**
   * 点击按钮“我的日程”后的处理函数
   */
  mySchedule: function () {
    // 跳转到“我的日程”页面
  },

  /**
   * 点击按钮“我的任务”后的处理函数
   */
  myTodo: function () {
    // 跳转到“我的任务”页面
  },

  /**
   * 点击按钮“设置”后的处理函数
   */
  settings: function () {
    // 跳转到“设置”页面
  },
})