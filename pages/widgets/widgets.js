const AV = require('../../utils/av-weapp-min');
const Todo = require('../../models/todo');

Page({

  data: {
    draft: ''
  },

  onReady: function() {
    new AV.Query(Todo).find().then(todos => {
      this.setData({todos});
    }).catch(console.error);
  },

  onPullDownRefreash: function() {
    wx.stopPullDownRefresh();
  },

  updateDraft: function ({
    detail: {
      value
    }
  }) {
    this.setData({
      draft: value,
    });
  },

  // 点击“添加”按钮触发添加新的Todo
  addTodo: function () {
    var value = this.data.draft && this.data.draft.trim()
    if (!value) {
      return;
    }
    var acl = new AV.ACL();
    acl.setPublicReadAccess(false);
    acl.setPublicWriteAccess(false);
    acl.setReadAccess(AV.User.current(), true);
    acl.setWriteAccess(AV.User.current(), true);
    new Todo({
      content: value,
      done: false,
      user: AV.User.current()
    }).setACL(acl).save().then(todo => {
      this.setData({
        todos: [todo, ... this.data.todos],
      })
    }).catch(console.error);
    this.setData({
      draft: ''
    });
  }
})