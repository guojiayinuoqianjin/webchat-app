var app = getApp();
Page({
  data: {
    profile: null
  },
  onLoad(options) {
    var result = app.getUserInfo();
    debugger;
    this.setData({
      profile: app.getUserInfo()
    })
  }
})