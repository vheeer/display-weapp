// pages/index/index.js
var config = require("../../config.js");
var fakeData = require("../../fakeData.js");
var app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    globalData: app.globalData,
    config,
    tags: [
      "产品介绍",
      "案例服务"
    ],
    mes: {
      contact: {
        title: "联系我们",
        website: "www.dapingkeji.com",
        contact_1: "18222968176",
        contact_2: "18722564170"
      },
      bannar: {
        img: config.image_dir + '/首页大图.jpg'
      },
      show: {
        img: config.host + '/5839423e771e8_1024_副本.jpg'
      },
      service: {
        img: config.host + '/5861130f6c8de_1024_副本.jpg'
      },
      goods: [
        
      ]
    }
  },
  onLoad: function() {
    let _this = this;
    //_this.setData({ data: fakeData });
    //_this.setData({ goods: fakeData.goods });
    console.log(JSON.stringify(fakeData))
    wx.request({
      url: config.host + "/main_data?acc=" + config.acc,
      success: function({data, statusCode, hearder}) {
        data = data.main_data
        //使用临时信息
        //data = fakeData;
        console.log(data);
        _this.setData({data});
        app.data.globalData = data;
        let sourceData = Object.assign( {}, data );
        data = data.goods;
        _this.setData({goods: data});
        let newdata = data.slice(0);
        newdata.map(function(x){
          x.phoneCall = undefined;
        });
        _this.setData({ newgoods: newdata });

        console.log("data", sourceData);
        let bannars = [];
        sourceData.theBannar[0].imgs.map((item) => {
          bannars.push(item.url);
        });
        console.log(bannars);
        _this.setData({ bannars });
      },
      fail: function({ data, statusCode, hearder }){
        //使用临时信息
        data = fakeData;
        console.log("fail and use fakeData: ", data);
        _this.setData({ data });
        app.data.globalData = data;
        data = data.goods;
        _this.setData({ goods: data });
        let newdata = data.slice(0);
        newdata.map(function (x) {
          x.phoneCall = undefined;
        });
        _this.setData({ newgoods: newdata });
      }
    })
   
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  handleTap: function(e) {
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  },
  goodOnTap: function(e) {
    console.log(e);
    // app.data.goodPageNow =  e.currentTarget.dataset.index;
    //app.data.goodList = e.currentTarget.dataset.index;
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  login: function (e) {
    console.log("login", e);
    
  },
  buyOnTap: function(e) {
    let _this = this;
    console.log(e);
    var good = e.currentTarget.dataset.good;
    let total_fee = good.price;
    let total_fee_format = app.accMul(total_fee, 100);
    app.myLogin();
    // setTimeout(function(){
    app.pay(app.data.code, total_fee_format);
    // },1000);
    //wx.vibrateLong();
    console.log(total_fee);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})