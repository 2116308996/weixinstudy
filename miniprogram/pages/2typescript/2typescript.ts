// pages/typescript/typescript.ts
interface Obj{
  user:number[],
  add:(this:Obj,num:number)=>void
}
let obj:Obj={
  user:[1,2,3],
  add(this:Obj,num:number){
    this.user.push(num)
  }
}
obj.add(3)
interface Man{
  name:string
}
let as=(b:Obj&Man):void=>{
   console.log(b)
}
let bs=(b:Obj|Man):void=>{
  console.log((b as Man).name)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"zhuhui"
  },
  click(){
    this.setData({
      name:"data"
    })
    console.log( this.data.name)
    as({
      user:[2,3,4],
      add(this:Obj,num:number){
        this.user.push(num)
      },
      name:"zhuhui"
    })
    bs({
      name:"zhuhu"
    })
  },
  click2(res:any){
  console.log(res)
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