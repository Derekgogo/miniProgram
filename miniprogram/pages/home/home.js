// miniprogram/pages/home.js
Page({

  handleShowToast() {
    wx.showToast({
      title: '你好你好',
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '哈哈好',
      content: 'hehhe',
      showCancel: false, //隐藏取消按钮
      success: res => {
        if (res.cancel) {
          console.log(res);
        }
        if (res.confirm) {
          console.log(res);
        }

      }
    })
  },
  //发送网络请求成功进行返回数据或跳转页面
  handleShowLoading() {
    wx.showLoading({
      title: '加载中',
      mask: true,
      success: res => {
        console.log(res);
      }
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 2000);
  },

  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      itemColor: 'red',
      success: res => {
        console.log(res);
      }
    })
  },

  onShareAppMessage: (options) => {
    return {
      title: '自定义标题',
      imageUrl: '/images/create-collection.png',
      path: '/pages/home/home.wxml',
    }
  }

})