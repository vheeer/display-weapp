const config = require("./config.js");
let fakeData = {
  contact: {
    title: "联系我们",
    __website: "www.dapingkeji.com",
    contact_1: "13820895939",
    contact_2: "18302288817"
  },
  defaultCall: "13820895939",
  bannar: {
    img: config.image_dir + '/首页大图_1.jpg'
  },
  show: {
    img: config.image_dir + '/show/大图.png'
  },
  service: {
    img: config.image_dir + '/service/大图.png'
  },
  contact_us: {
    img: config.image_dir + "/联系我们/20111216120011_副本.jpg"
  },
  company: {
    desc: "天津南方鑫五金交电成立于2008年，是专业的防尘网、遮阳网、土工布生产厂家。本公司经营地址塘沽区厦门路五金城综合区3-4号厂址山东省泗水县工业园区，公司以自产自销经营本厂主要生产经营二针、三针、四针、六针防尘绿网黑色遮阳网 可根据客户要求加工定做。公司以“诚信为本、重质量、高标准”为准则，在孙总经理的带领下一步步打造质量为本的工程用品！",
    img: config.image_dir + '/公司介绍/02f8dd164ee5a38dd0b3cb361a612caf.png'
  },
  culture: {
    desc: "我公司秉承：“质量第一、信誉至上、诚信为本。”始终坚持“急为客户所急，想为客户所想，视质量如生命，重诚信与发展”的企业精神。在今天人们追求现代化生活的同时，清新的环境是您生活的必备条件。公司本着“以人为本，诚实守信”的经营理念，恪守“发展自己、服务社会”的宗旨，遵循“科学管理、品质优良、用户满意”的质量方针，良好的售后服务，努力建造一个融“新技术、新工艺、新产品、新效益”为一体的全新企业！",
    img: config.image_dir + '/企业文化/大图.jpg'
  },
  goodsTitle: "产品介绍",
  goods: [

    {
      img: config.image_dir + "/土工布/大图1_副本.jpg",
      title: "土工布展示",
      desc: "",
      date: "2017-11-20",
      visit: 48,
      phoneCall: 13538451558,
      goodImgList: [
        { url: config.image_dir + "/土工布/1.jpg" },
        { url: config.image_dir + "/土工布/2.jpg" },
        { url: config.image_dir + "/土工布/3.jpg" }
      ]
    },
    {
      img: config.image_dir + "/防尘网/大图.jpg",
      title: "防尘网展示",
      desc: "",
      date: new Date().toLocaleString(),
      visit: 48,
      phoneCall: 13538451558,
      goodImgList: [
        { url: config.image_dir + "/防尘网/2.jpg" },
        { url: config.image_dir + "/防尘网/3.jpg" },
        { url: config.image_dir + "/防尘网/4.jpg" },
        { url: config.image_dir + "/防尘网/5.jpg" }
      ]
    },
    // {
    //   img: config.host + "/3.jpg",
    //   title: "服务方案",
    //   desc: "确保小程序平台能正常运转，内容能得到及时更新，比如域名服务器维护，bug修复，内容更新，产品上下架。策划各类活动以辅助小程序功能的实现，用于吸引欣的粉丝和促进老客户到店消费。设计线下宣传物料，如门贴，桌牌等，用于辅助活动的执行。",
    //   date: "2017-11-10",
    //   visit: 148,
    //   phoneCall: 13538451558,
    //   goodImgList: [
    //     { url: config.host + "/647129231368873995.jpg"},
    //     { url: config.host + "/"},
    //     { url: config.host + "/"}
    //   ]
    // }

  ],
  theCase: [
    {
      title: "展示",
      imgs: [
        config.image_dir + "/show/1.jpg",
        config.image_dir + "/show/2.jpg",
        config.image_dir + "/show/3.jpg",
        config.image_dir + "/show/4.jpg",
        config.image_dir + "/show/5.jpg",
        config.image_dir + "/show/6.jpg",
        config.image_dir + "/show/7.jpg",
        config.image_dir + "/show/8.jpg",
        config.image_dir + "/show/9.jpg",
        config.image_dir + "/show/10.jpg",
        config.image_dir + "/show/12.jpg",
        config.image_dir + "/show/13.jpg",
        config.image_dir + "/show/14.jpg",
        config.image_dir + "/show/15.jpg",
        config.image_dir + "/show/16.jpg",
        config.image_dir + "/show/17.jpg",
        config.image_dir + "/show/18.jpg",
        config.image_dir + "/show/19.jpg",
      ]
    },

  ],
  theService: [
    {
      title: "",
      imgs: [
        config.image_dir + "/service/1.png"
      ]
    },

  ],
  }

module.exports = fakeData