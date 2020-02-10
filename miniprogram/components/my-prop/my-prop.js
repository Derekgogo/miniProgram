Component({
  properties:{
    //这种写法没有默认值
    // title:String
    //支持string number boolean
    //不支持obj array null类型
    title:{
      type:String,
      value:'我是默认值'
    }
  },
  //传class
  externalClasses:[
    'titleclass'
  ]
})