// pages/goods/goods.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    globalData: app.globalData,
    res: "res"
  },

  /**
   * 生命周期函数--监听页面加载
   */

  imageLoad: function (e) {
    console.log(e.currentTarget.dataset.index);
    var _this = this;
    let index = e.currentTarget.dataset.index;
    let goodPageNow = app.data.goodPageNow;
    var $width = e.detail.width,    //获取图片真实宽度  
      $height = e.detail.height,
      ratio = $width / $height;   //图片的真实宽高比例  
    var viewWidth = wx.getSystemInfoSync().windowWidth,//设置图片显示宽度，  
      viewHeight = viewWidth / ratio;    //计算的高度值     
    // this.setData({
    //   imgwidth: viewWidth,
    //   imgheight: viewHeight
    // })
    goodPageNow.goodImgList[index].width = viewWidth;
    goodPageNow.goodImgList[index].height = viewHeight;
    this.setData({
      // goodPageNow
    })
  },
  onLoad: function (options) {
    var _this = this;
    console.log("app.data", app);
    console.log("this", options)
    app.data.globalData.goods.map((good)=>{
      if(good.id == options.good_id){
        let { richtext } = good;
        console.log(typeof richtext);
        let x;
        if (richtext == null)
          x = "";
        else{
          console.log("before x", richtext);
          x = richtext.replace(/<img/g, '<img style="width: 100%"');
            // x = richtext.replace(/<p/g, '<p style="text-indent: 2em"');
        // x = richtext.replace(/<h1/g, '<h1 style="text-align: center"');
            // x = app.convertHtmlToText(x);
        }
            console.log("after x", x);
        console.log(x);
        good.richtext = x;
        this.setData({
          goodPageNow: good
        });
      }
    });
    this.setData({
      // goodPageNow: app.data.goodPageNow,
      // goodPageNow: 82,
      globalData: app.data
    });
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });
    setTimeout(function(){
      console.log(options.index);
      // _this.setData({
      //   good: app.data.goodList[options.index]
      // })
    },2000);
  },
  goodImgTap: function(e) {
    console.log(e);
    console.log("goodPageNow", this.data.goodPageNow);
    let urls = [];
    let goodPageNow = this.data.goodPageNow;
    goodPageNow.goodImgList.map(( item, index ) => {
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