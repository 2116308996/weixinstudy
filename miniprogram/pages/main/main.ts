// pages/main/main.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
     urllist:[{
       url:"/pages/1list/1list",
       text:"1list",
       tab:false
     },
     {
      url:"/pages/2typescript/2typescript",
      text:"2typescript",
      tab:false
    },
    {
      url:"/pages/3wxif/3wxif",
      text:"3渲染",
      tab:false
    },
    {
      url:"/pages/4get/4get",
      text:"4数据请求",
      tab:false
    },
    {
      url:"/pages/5shouye/5shouye",
      text:"5首页",
      tab:true
    },
    {
      url:"/pages/6loading/6loading",
      text:"6下拉刷新",
      tab:false
    },
    {
      url:"/pages/7conponent/7conponent",
      text:"7组件",
      tab:false
    }
    ]
  },
  goToRoute(e:any){
    console.log(e)
    console.log(e.target.dataset.n)
    if(e.target.dataset.n.tab){
      wx.switchTab({
        url:e.target.dataset.n.url
      })
    }else{
      wx.navigateTo({
        url:e.target.dataset.n.url
      })
    }
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