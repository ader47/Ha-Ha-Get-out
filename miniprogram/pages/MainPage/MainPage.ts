Page({
    data: {
      DeveloperInfo: '-技术支持 哈哈哈哈哈哈哈哈哈哈哈-',
      name:'',
      gate:'',
      major:'',
      time:""
    },


    onLoad: function(options) {
        console.log(options.name)
        console.log(options.gate)
        console.log(options.major)
        this.setData({name:options.name})
        this.setData({gate:options.gate})
        this.setData({major:options.major})
        var date=new Date();
        //月
        var month=(date.getMonth()+1)<10?"0"+(date.getMonth()+1):(date.getMonth()+1);
        //日
        var day=date.getDate()<10?"0"+date.getDate():date.getDate();
        //时
        var hh=date.getHours()<10?"0"+date.getHours():date.getHours();
        //分
        var mm=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
        var nowTime = month+'月'+day+"日"+' '+hh+':'+mm;
        console.log(nowTime)
        this.setData({time:nowTime})
      },
  
  })
  