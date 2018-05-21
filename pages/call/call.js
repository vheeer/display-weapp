// pages/call/call.js
const app = getApp();
const config = require("../../config");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    globalData: app.data
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      //globalData: app.data
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  buttonTap: function() {
    wx.showToast({
      title: '已收到信息',
      icon: 'success',
      duration: 2000
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.request({
      url: config.host + "/contact?acc=" + config.acc,
      data: e.detail.value,
      method: "POST",
      success: function (res) {
        console.log("3rd_login: ", res);
        if(res.data.mes.indexOf("success") > -1)
        {
          wx.showToast({
            title: '信息已收到',
            icon: 'success',
            duration: 2000
          })
        }
      },
      fail: function (res) {
        if (res.data.mes.indexOf("success") > -1) {
          wx.showToast({
            title: '操作未成功',
            icon: 'none',
            duration: 2000
          })
        }
      },
      complete: function (res) {
        console.log("3rd_login: ", res);
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})