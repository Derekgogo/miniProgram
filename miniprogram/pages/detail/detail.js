// miniprogram/pages/detail/detail.js
Page({
  onLoad: options => {
    console.log(options);
  },
  onUnload() {
    // 1.获取首页的页面对象
    // getCurrentPages当前所有活跃的页面
    const pages = getCurrentPages();
    const home = pages[pages.length - 2];
    console.log(home);
    //2.调用页面对象的setData
    home.setData({
      title:'呵呵呵'
    })
    console.log(pages);
  }
})