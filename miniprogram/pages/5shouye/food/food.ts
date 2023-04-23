// pages/5shouye/food/food.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    query:{
      id:String(),
      title:String()
    },
    isloading:false,
    shoplist:Array(),
    page:{
      page:1,
      pagesize:10,
    },
    total:Number(10)
  },
getshops(cb:boolean=false){
  if(!this.data.isloading){
    this.setData({
      isloading:true
    })
    wx.showLoading({title:'数据加载中...'})
    wx.request({
      url:"https://www.escook.cn/categories/"+this.data.query.id+"/shops",
      method:"GET",
      data:{
        _page:this.data.page.page,
        _limit:this.data.page.pagesize
      },
      success:(res)=>{
        this.setData({
          page:{page:this.data.page.page+1,pagesize:10}
       })
        this.setData({
          shoplist: [...this.data.shoplist,...res.data as Array<Object>],
          total:res.header['X-Total-Count']-0
        })
      },
      complete:()=>{
        wx.hideLoading()
        this.setData({
          isloading:false
        })
        cb && wx.stopPullDownRefresh()
      }
    })
  }
},
clickshoplist(){
  console.log(this.data.shoplist)
  console.log(typeof this.data.total)
  console.log(this.data.total)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e:any) {
    this.setData({
      query:e
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title:this.data.query.title.toString()
    })
    this.getshops()
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
      page:{page:1,pagesize:10},
      total:0,
      shoplist:[]
     })
     this.getshops(true)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getshops()
   console.log(this.data.page.page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})