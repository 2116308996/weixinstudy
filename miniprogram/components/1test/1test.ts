// Components/1test/1test.ts
Component({
  options: {
    //启用样式隔离  apply-shared shared
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type: Number,
      value: 10
    },
    min: Number
  },
  /**
   * 组件的初始数据
   */
  data: {
    count: Number(0)
  },
  // 组件的方法列表
  methods: {
    addcount() {
      if (this.data.count < this.properties.max) {
        this.setData({ count: this.data.count + 1 })
      }
      this.triggerEvent('sync',{value:this.data.count})
    }
  },
  //数据监听
  observers: {
    'count,max':  (newcount,newmax)=> {
      console.log(newcount,newmax)
    }
  },
})