var app = getApp();
Page({

  data: {
    currentTab: 0, // 预设当前项的值
  },

  onLoad: function (options) {
  
  },

  createTeam: function() {
    // 跳转到“新建团队”页面
  },

  /**
   * 滚动切换标签样式
   */
  switchHeadTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },

  /**
   * 点击标题切换当前页时改变样式
   */
  switchNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) {return false;}
    else {
      this.setData({
        currentTab:cur
      })
    }
  },
})