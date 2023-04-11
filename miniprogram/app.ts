// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
  //小程序从后台进入前台时出发（指手机挂起微信到后台，进入其他应用）
  onShow(){

  },
  //小程序从前台进入后台时出发（指从手机后台打开微信）
  onHide(){

  }
})