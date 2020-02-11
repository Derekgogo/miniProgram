import request from '../../service/network.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //1.源生的方式发送网络请求
    // this.get_data_origin();

    // 2.使用封装的request发送网络请求
    //Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://123.207.32.32:8000/recommend',
    })
      // .then(res => {

      // }).catch(err => {

      // })
  },
  get_data_origin() {
    // wx.request({
    //   url: '',
    // })
  }

})