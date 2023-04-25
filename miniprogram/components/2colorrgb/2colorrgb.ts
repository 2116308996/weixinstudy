// components/2colorrgb/2colorrgb.ts
Component({
  //组件生命周期
  lifetimes:{
    created(){
      console.log("created")
    },
    attached(){},
    ready(){},
    moved(){},
    detached(){},
    error(){}
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
    rgb:{
      r:201,
      g:102,
      b:122
    },
    color:'201,102,122'
  },
observers:{
'rgb.r,rgb.g,rgb.b':function(a,b,c) {
  this.setData({
    color:a+","+b+","+c
  })
}
},
  /**
   * 组件的方法列表
   */
  methods: {
    changer(e:any){
      this.setData({
        rgb:{r:e.detail.value,g:this.data.rgb.g,b:this.data.rgb.b}
      })
    },
    changeg(e:any){
      this.setData({
        rgb:{r:this.data.rgb.r,g:e.detail.value,b:this.data.rgb.b}
      })
    },
    changeb(e:any){
      this.setData({
        'rgb.b':e.detail.value,
      })
    }
  }
})

