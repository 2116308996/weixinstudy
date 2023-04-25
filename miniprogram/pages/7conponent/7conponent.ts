// pages/7conponent/7conponent.ts
const api = require('../../utils/util');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: String(),
    count: Number(0)
  },
  addcount(e: any) {
    this.setData({
      count: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    setInterval(() => {
      this.setData({
        time: api.formatTime(new Date())
      })
    },1000)
    console.log(this)
    //console.log("as",mybehavior)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //console.log( this.selectComponent(".test1"))
    const test=this.selectComponent(".test1")
    test.addcount()
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