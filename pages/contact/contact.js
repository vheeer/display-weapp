// pages/contact/contact.js
let app = getApp();
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
    wx.switchTab({
      url: '../index/index'
    })
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
    wx.switchTab({
      url: '../index/index'
    });
    wx.makePhoneCall({
      phoneNumber: app.data.globalData.contact.contact_1 //仅为示例，并非真实的电话号码
    });
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
  
  }
})