// pages/main/main.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goToRoute(e:any){
    switch (e.target.dataset.n){
      case "1":{
        console.log("111")
        wx.navigateTo({
          url:"/pages/1list/1list"
        })
        break;
      }
      case "2":{
        wx.navigateTo({
          url:"/pages/2typescript/2typescript"
        })
        break;
      }
      case "3":{
        wx.navigateTo({
          url:"/pages/3wxif/3wxif"
        })
        break;
      }
      case "4" : {
        wx.navigateTo({
          url:"/pages/4get/4get"
        })
        break;
      }
      case "5":{
        wx.switchTab({
          url:"/pages/5shouye/5shouye"
        })
        break;
      }
      case "6":{
        wx.navigateTo({
          url:"/pages/6loading/6loading"
        })
        break;
      }
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