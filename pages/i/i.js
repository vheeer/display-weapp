//index.js
//获取应用实例
var config = require("../../config.js");
let app = getApp();
Page( {
  data: {
    config,
    globalData: app.data
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '4000000000',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  onload: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    var app = getApp()
    console.log(app);
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})