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
    titles: ['衣服', '裤子', '鞋子'],
    num: 0
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
  handleOuter(event) {
    console.log(event);
  },

  handleItemClick(event) {
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const id = dataset.index;
    const title = dataset.item;
    console.log(id + '  ' + title);
  },

  // -----事件冒泡和事件捕获
  handleCatpureView1() {
    console.log('handleCatpureView1');
  },
  handleBindView1() {
    console.log('handleBindView1');
  },
  handleCatpureView2() {
    console.log('handleCatpureView2');
  },
  handleBindView2() {
    console.log('handleBindView2');
  },
  handleCatpureView3() {
    console.log('handleCatpureView3');
  },
  handleBindView3() {
    console.log('handleBindView3');
  },

  //组件事件
  handleIncrement(event) {
    console.log(event);
    this.setData({
      num: this.data.num + 1
    })
  },

  handleTabControlClick(event) {
    let id = event.detail.id;
    let title = event.detail.title;
    console.log(id + '  ' + title);
  },

  handleIncrementCpn() {
    //最终目的:修改my-sel中的counter
    //1.获取组件对象
    const my_sel = this.selectComponent('#sel-id');
    //2.通过setData修改组件中的数据（不合理）
    // my_sel.setData({
    //   counter: my_sel.data.counter + 1
    // })
    // 3.通过方法对数据进行修改
    my_sel.incrementCounter(my_sel);
  }
})