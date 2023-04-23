// pages/5shouye/5shouye.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperlist:[{
      id:1,
      url:"../asset/image/13.jpg"
    },
    {
      id:2,
      url:"../asset/image/12.jpg"
    },
    {
      id:3,
      url:"../asset/image/10.jpg"
    }
    ],
    datalist:[
      {
        id:1,
        name:"美食",
        icon:"../asset/font-png/taobao.png"
      },
      {
        id:2,
        name:"洗浴足疗",
        icon:"../asset/font-png/xinyongqia.png"
      },
      {
        id:3,
        name:"结婚啦",
        icon:"../asset/font-png/icon-12.png"
      },
      {
        id:4,
        name:"卡拉OK",
        icon:"../asset/font-png/taobao.png"
      },
      {
        id:5,
        name:"找工作",
        icon:"../asset/font-png/xinyongqia.png"
      },
      {
        id:6,
        name:"辅导班",
        icon:"../asset/font-png/icon-12.png"
      },
      {
        id:7,
        name:"洗车保养",
        icon:"../asset/font-png/taobao.png"
      },
      {
        id:8,
        name:"租房",
        icon:"../asset/font-png/xinyongqia.png"
      },
      {
        id:9,
        name:"装修",
        icon:"../asset/font-png/icon-12.png"
      }
    ]
  },
gofood(){
  wx.navigateTo({
    url:"/pages/5shouye/food/food"
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})