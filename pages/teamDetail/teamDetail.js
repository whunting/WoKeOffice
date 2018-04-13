var app = getApp();
Page({

  data: {
  },

  onLoad: function (options) {
    var teamName = app.globalData.thisTeamName;
    wx.setNavigationBarTitle({
      title: teamName
    })
  },
})