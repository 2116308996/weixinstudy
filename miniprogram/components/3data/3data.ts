// components/3data/3data.ts
const mybehavior=require("../../behavior/1mybehavior")
Component({
  behaviors:[mybehavior],
  //指定所有_开头的数据字段为纯数据字段
  options:{
    pureDataPattern:/^_/,
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    a:true,
    _b:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    test1(){
      console.log("consolename")
      //this.consolename()
    },
  }
})
