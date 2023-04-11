// pages/6loading/6loading.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    isloading:false,
    colorlist: ['red', 'blue', 'green', 'yellow', '#ccc', '#ffabad', '#afdcff'],
    list: ['red', 'blue', 'green', 'yellow', '#ccc', '#ffabad', '#afdcff']
  },
  addcount():void{
    this.setData({
      count: this.data.count + 1
    })
  },
  getcolors():void{
    if(!this.data.isloading){
      console.log("触发了上拉触顶事件")
      wx.showLoading({title:'数据加载中...'})
      this.data.isloading=true
      setTimeout(() => {
        this.setData({
          colorlist: this.data.colorlist.concat(this.data.list)
        })
        console.log(this.data.colorlist)
        this.data.isloading=false
        wx.hideLoading()
      }, 2000)
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
    this.setData({
      count: 0,
      colorlist: this.data.colorlist.slice(0, 7)
    })
    console.log(this.data.colorlist)
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getcolors()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})