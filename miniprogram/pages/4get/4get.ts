// pages/4get/4get.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  getdata() {
    wx.request({
      url: "https://www.escook.cn/api/get",
      method: "GET",
      data: {
        name: "zs",
        age: 18
      },
      success: (res) => {
        console.log(res.data)
      },
      fail: (res) => {
        console.log("接口调用失败" + res)
      },
      complete: (res) => {
        console.log("接口调用成功和失败都执行" + res)
      }
    })
  },
  postdata() {
    wx.request({
      url: "https://www.escook.cn/api/post",
      method: 'POST',
      data: {
        name: "zzz",
        age: "21"
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },
  hreftab() {
    wx.switchTab({
      url: "/pages/5shouye/5shouye"
    })
  },
  hreflist() {
   // wx.navigateBack()  后退
    wx.navigateTo({
      url: "/pages/1list/1list?name='zhuhui'&age=20",
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      },
      complete: (res) => {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getdata()
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