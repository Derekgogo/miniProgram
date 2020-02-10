// components/my-event/my-event.js
Component({
 /**
   * 组件的方法列表
   */
  methods: {
    hanldIncrement(){
        // console.log('1111');
        //第二个参数是额外参数
        this.triggerEvent('increment',{name:'gml',age:12},{});
    }
  }
})
