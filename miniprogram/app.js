const TOKEN = 'token';
//app.js
App({
  //对象: 小程序关闭掉内存就会被回收   对象放在内存中
  globalData: {
    token: ''
  },
  onLaunch: function() {
    //1.判断缓存中取出token是否登录
    const token = wx.getStorageSync(TOKEN);
    //2.判断token是否有值
    if (token && token.length !== 0) {
      this.checkToken(token);
    } else { //没有token 进行登录操作
      this.login();
    }

  },
  //检查token是否过期
  checkToken(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: res => {
        if (!res.data.errCode) {
          console.log('token有效');
          this.globalData.token = token;
        }
      },
      fail: res => {
        console.log(res);
      }
    })
  },
  login() {
    console.log('登录');
    //登录操作
    wx.login({
      //code只有5分钟的有效期
      success: res => {
        //1.获取code
        const code = res.code;

        //  2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: res => {
            //1.取出token
            const token = res.data.token;

            //2.将token保存在globalData中
            this.globalData.token = token;

            //3.进行本地存储
            wx.setStorageSync(TOKEN, token);
          }
        })
      }
    })
  }
})