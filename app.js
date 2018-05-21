// pages/goods/goods.js
var config = require("./config.js");
App({

  /**
   * 页面的初始数据
   */
  data: {
    goodPageNow: 0,
    config: config.host,
    appdata: "appdatatatata"
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  pay: function (code, price) {
    console.log("paying");
    wx.request({
      url: config.host + '/onlogin',
      data: {
        code: code,
        aaa: "aaaa",
        price: price
      },
      method: "POST",
      success: function (res) {
        console.log(res);
        wx.requestPayment({
          'timeStamp': "" + res.data.timeStamp,
          'nonceStr': res.data.nonceStr,
          'package': res.data.package,
          'signType': 'MD5',
          'paySign': res.data.paySign,
          'success': function (res) {
            console.log(res);
          },
          'fail': function (res) {
            console.log(res);
          },
          'complete': function (res) {
            console.log(res);
          }
        });
      },
      fail: function () {
        console.log("fail");
      }
    })
  },
  myLogin: function () {
    let _this = this;
    wx.login({
      success: function (res) {
        console.log("res", res);
        if (res.code) {
          console.log("res.code", res.code);
          _this.data.code = res.code;
          return res.code;
        } else {
          console.log('获取用户登录态失败！' + res.errMsg);
        }
      },
      fail: function (res) {
        console.log('获取用户登录态失败！' + res.errMsg);
      }
    });
  },
  onLaunch: function () {
    let _this = this;
    this.myLogin();
    let width = wx.getSystemInfoSync().windowWidth;
    console.log(width);
  },
  onLoad: function (options) {

  },
  imgTap: function(e) {
    console.log(e);
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: [e.currentTarget.dataset.src] // 需要预览的图片http链接列表
    })
  },
  accMul: function(arg1, arg2){  
    var m= 0, s1=arg1.toString(),
    s2=arg2.toString();  
    try{
      m+=s1.split(".")[1].length
    }catch(e) { }  
try{
      m+=s2.split(".")[1].length
    }catch(e) { }  
return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m
    )
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  convertHtmlToText: function convertHtmlToText(inputText) {
    var returnText = "" + inputText;
    returnText = returnText.replace(/<\/div>/ig, '\r\n');
    returnText = returnText.replace(/<\/li>/ig, '\r\n');
    returnText = returnText.replace(/<li>/ig, '  *  ');
    returnText = returnText.replace(/<\/ul>/ig, '\r\n');
    //-- remove BR tags and replace them with line break
    returnText = returnText.replace(/<br\s*[\/]?>/gi, "\r\n");

    //-- remove P and A tags but preserve what's inside of them
    returnText = returnText.replace(/<p.*?>/gi, "\r\n");
    returnText = returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 ($1)");

    //-- remove all inside SCRIPT and STYLE tags
    returnText = returnText.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, "");
    returnText = returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "");
    //-- remove all else
    returnText = returnText.replace(/<(?:.|\s)*?>/g, "");

    //-- get rid of more than 2 multiple line breaks:
    returnText = returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\r\n\r\n");

    //-- get rid of more than 2 spaces:
    returnText = returnText.replace(/ +(?= )/g, '');

    //-- get rid of html-encoded characters:
    returnText = returnText.replace(/ /gi, " ");
    returnText = returnText.replace(/&/gi, "&");
    returnText = returnText.replace(/"/gi, '"');
    returnText = returnText.replace(/</gi, '<');
    returnText = returnText.replace(/>/gi, '>');

    return returnText;
  },
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