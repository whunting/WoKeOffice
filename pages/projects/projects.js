Page({
  data: {
    items: [
      { name: '1', value: '第一版RPO编写' },
      { name: '2', value: '原型制作' },
      { name: '3', value: '页面逻辑设计' },
    ],
    currentTab:0, // 预设当前项的值
    currentTitle:  "“蜗壳办公”产品设计",
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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