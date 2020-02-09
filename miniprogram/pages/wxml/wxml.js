// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstname: 'aaa',
    lastname: 'bbb',
    age: 18,
    movies: [
      'aaaaa',
      'bbbbb',
      'ccccc'
    ],
    nums: [
      ['1', '2', '3'],
      ['11', '22', '33']
    ],
    nowTime: new Date().toLocaleTimeString(),
    isActive: false
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleTimeString()
      })
    }, 1000);
  },
  handleSwtichColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  numberToFixed(val){
    return val.toFixed(2);
  }
})