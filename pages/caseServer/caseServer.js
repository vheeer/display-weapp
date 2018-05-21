// pages/caseServer/caseServer.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    app,
    globalData: app.data,
    theCase: app.data.theCase,
    cases: [
      {
        firstImg: {
          url: "https://14321283.dapingkeji.com/776310141615436522.jpg"
        },
        secondImg: {
          url: "https://14321283.dapingkeji.com/300450985924838100.jpg"
        }
      },
      {
        firstImg: {
          url: "https://14321283.dapingkeji.com/323564380096292606.jpg"
        },
        secondImg: {
          url: "https://14321283.dapingkeji.com/319248058804746155.jpg"
        }
      },
      

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("app", app.data);
  },
  imgTap: function (e) {
    console.log(e);
    let urls = [];
    app.data.globalData.theCase[0].imgs.map(( item, index ) => {
      urls.push(item.url);
    });
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
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