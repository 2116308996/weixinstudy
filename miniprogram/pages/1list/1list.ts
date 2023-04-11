// pages/list/list.ts
interface Axx{
  name:string
  age?:number
  readonly id:number
  readonly cd:()=>boolean
}
let a:Axx={
  id:1,
  name:"朱荟",
  age:21,
  cd:()=>{
    return true
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
     name:"zhuhui",
     consolename:()=>{
      console.log("this.Date.name")
      return 123
     }
  },
click1():void{
  this.data.consolename()
  console.log(this.data.consolename())
  this.data.name=this.data.name+"1"
  console.log(this.data.name)
},
click2(e:any):void{
  console.log(e)
  this.setData({
    name:e.target.dataset.name
  })
},
click3(e:any){
  console.log(e.detail.value)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(urldata) {
    console.log(urldata)
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