Page({
  data: {
    name: '1111',
    age: 18,
    student: [{
        id: 1,
        name: '111',
        age: 30
      },
      {
        id: 2,
        name: '222',
        age: 30
      },
      {
        id: 3,
        name: '333',
        age: 30
      },
      {
        id: 4,
        name: '444',
        age: 30
      }
    ],
    counter: 0,
    title: ['衣服', '裤子', '鞋子']
  },
  handleBtnClick() {
    //1错误的做法:界面是不会刷新的
    //  this.data.counter += 1;

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  onLoad() {
    // wx.request({
    //   url: '',
    //   success: () => {

    //   }
    // })
  },

  //4.其他事件
  //监听页面的滚动
  onPageScroll(obj) {
    console.log(obj);
  },
  //页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部');
  },
  onPullDownRefresh() {
    console.log('下拉刷新数据');
  },

  handleTouchStart() {
    console.log('handleTouchStart');
  },
  handlTouchMove() {
    console.log('handlTouchMove');
  },
  handleTouchEnd() {
    console.log('handleTouchEnd');
  },
  handleTap() {
    console.log('handleTap');
  },
  handleLongpress() {
    console.log('handleLongpress');
  },

  handleEventClick(event) {
    console.log(event);
  },
  handleEventEnd(event) {
    console.log(event);
  },

  handleInner(event) {
    console.log(event);
  },
  handleOuter(event){
    console.log(event);
  }
})