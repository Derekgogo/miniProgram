Page({
  data:{
    name:'1111',
    age:18,
    student:[
      { id: 1, name: '111', age: 30 },
      { id: 2, name: '222', age: 30 },
      { id: 3, name: '333', age: 30 },
      { id: 4, name: '444', age: 30 }
    ],
    counter:0
  },
  handleBtnClick(){
    //1错误的做法:界面是不会刷新的
    //  this.data.counter += 1;

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter - 1
    }) 
  }
})