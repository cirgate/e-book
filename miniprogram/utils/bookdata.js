//导入整个bookdata 里面又常量bookdata 函数方法switchbooks
// bookdata前台显示，是应该常量
//switchbooks 参数？：传入 字符串（前端用户选择的课题。不是多少章而是多节）
//             返回。人工手写。switch返回对象 其属性有1、indexs页码2、total·本节共多少页
var bookdata={
  books : {
    '七章《运动和力》': ['1.《力》', '2.《弹力》', '3.《重力》'],
    '八章《运动和力》': ['1.《牛顿第一定律》', '2.《二力平衡》', '3.《摩檫力》'],
    '九章《压强》': ['1.《压强》', '2.《液体的压强》', '3.《大气压强》', '4.《液体压强与流速的关系》'],
    '十章《浮力》': ['1.《浮力》', '2.《阿基米德原理》', '3.《物体的浮沉条件及应用》'],
    '十一章《功和机械能》': ['1.功', '2.功率', '3.动能和势能', '4.机械能及其转化'],
    '十二章《简单机械》': ['1.杠杆', '2.滑轮', '3.机械效率']
  },
  switchbooks:function(str){
    var usershoose = {
      total: 0,
      indexs: 0
    };

    switch (str) {
      case '1.《力》':
        usershoose.indexs = 5;
        usershoose.total = 4;
        break;
      case '2.《弹力》':
        usershoose.indexs = 9;
        usershoose.total = 3;
        break;
      case '3.《重力》':
        usershoose.indexs = 12;
        usershoose.total = 6;
        break;
      case '1.《牛顿第一定律》':
        usershoose.indexs = 19;
        usershoose.total = 4;
        break;
      case '2.《二力平衡》':
        usershoose.indexs = 23;
        usershoose.total = 3;
        break;
      case '3.《摩檫力》':
        usershoose.indexs = 26;
        usershoose.total = 5;
        break;
      case '1.《压强》':
        usershoose.indexs = 32;
        usershoose.total = 4;
        break;
      case '2.《液体的压强》':
        usershoose.indexs = 36;
        usershoose.total = 6;
        break;
      case '3.《大气压强》':
        usershoose.indexs = 42;
        usershoose.total = 5;
        break;
      case '4.《液体压强与流速的关系》':
        usershoose.indexs = 47;
        usershoose.total = 4;
        break;
      case '1.《浮力》':
        usershoose.indexs = 52;
        usershoose.total = 4;
        break;
      case '2.《阿基米德原理》':
        usershoose.indexs = 56;
        usershoose.total = 4;
        break;
      case '3.《物体的浮沉条件及应用》':
        usershoose.indexs = 60;
        usershoose.total = 4;
        break;
      case '1.功':
        usershoose.indexs = 65;
        usershoose.total = 3;
        break;
      case '2.功率':
        usershoose.indexs = 68;
        usershoose.total = 2;
        break;
      case '3.动能和势能':
        usershoose.indexs = 70;
        usershoose.total = 4;
        break;
      case '4.机械能及其转化':
        usershoose.indexs = 74;
        usershoose.total = 4;
        break;
      case '1.杠杆':
        usershoose.indexs = 79;
        usershoose.total = 5;
        break;
      case '2.滑轮':
        usershoose.indexs = 84;
        usershoose.total = 4;
        break;
      case '3.机械效率':
        usershoose.indexs = 88;
        usershoose.total = 4;
        break;
    };
    return usershoose;
  }
  
}
//到处整个对象object
module.exports = bookdata