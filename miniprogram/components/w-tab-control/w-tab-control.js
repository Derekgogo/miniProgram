// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCurrentTarget(event) {
      //1.取出index
      const id = event.currentTarget.dataset.id;
      //2.修改currentIndex
      this.setData({
        currentIndex: id
      });
      //3.通知页面内容的点击事件
      this.triggerEvent('itemClick', {id,title:this.properties.titles[id]},{});
    }
  }
})