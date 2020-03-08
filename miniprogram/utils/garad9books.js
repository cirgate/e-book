//导入整个bookdata 里面又常量bookdata 函数方法switchbooks
// bookdata前台显示，是应该常量
//switchbooks 参数？：传入 字符串（前端用户选择的课题。不是多少章而是多节）
//             返回。人工手写。switch返回对象 其属性有1、indexs页码2、total·本节共多少页
var bookdata = {
  books: {
    '十三章《内能》': ['1.《分子热运动》', '2.《内能》', '3.《比热容》'],
    '十四章《内能的利用》': ['1.《热机》', '2.《热机的效率》', '3.《能量的转化和守恒》'],
    '十五章《电流和电路》': ['1.《两种电荷》', '2.《电流和电路》', '3.《串联和并联》', '4.《电流的测量》', '5.《串、并联电路中电流的规律》'],
    '十六章《电压 电阻》': ['1.《电压》', '2.《串、并联电路中电压的规律》', '3.《电阻》', '4.《变阻器》'],
    '十七章《欧姆定律》': ['1.《电流与电压和电阻的关系》', '2.《欧姆定律》', '3.《电阻的测量》', '4.《欧姆定律在串、并联电路中的应用》'],
    '十八章《电功率》': ['1.《电能、电功》', '2.《电功率》', '3.《测量小灯泡的电功率》', '4.《焦耳定律》'],
    '十九章《生活用电》': ['1.《家庭电路》', '2.《家庭电路中电流过大的原因》', '3.《安全用电》'],
    '二十章《电与磁》': ['1.《磁现象、磁场》', '2.《电生磁》', '3.《电磁铁 电磁继电器》', '4.《电动机》', '5.《磁生电》'],
    '二十一章《信息的传递》': ['1.《现代顺风耳-电话》', '2.《电磁波的海洋》', '3.《广播电视和移动通信》', '4.《越来越宽的信息之路》'],
    '二十二章《能源与可持续发展》': ['1.《能源》', '2.《核能》', '3.《太阳能》', '4.《能源与可持续发展》'],
  },
  switchbooks: function (str) {
    var usershoose = {
      total: 0,
      indexs: 0
    };

    switch (str) {
      case '1.《分子热运动》':
        usershoose.indexs = 7;
        usershoose.total = 5;
        break;
      case '2.《内能》':
        usershoose.indexs = 12;
        usershoose.total = 4;
        break;
      case '3.《比热容》':
        usershoose.indexs = 16;
        usershoose.total = 5;
        break;
      case '1.《热机》':
        usershoose.indexs = 22;
        usershoose.total = 5;
        break;
      case '2.《热机的效率》':
        usershoose.indexs = 27;
        usershoose.total = 5;
        break;
      case '3.《能量的转化和守恒》':
        usershoose.indexs = 32;
        usershoose.total = 4;
        break;
      case '1.《两种电荷》':
        usershoose.indexs = 37;
        usershoose.total = 4;
        break;

      case '2.《电流和电路》':
        usershoose.indexs = 41;
        usershoose.total = 4;
        break;
      case '3.《串联和并联》':
        usershoose.indexs = 46;
        usershoose.total = 4;
        break;
      case '4.《电流的测量》':
        usershoose.indexs = 50;
        usershoose.total = 4;
        break;
      case '5.《串、并联电路中电流的规律》':
        usershoose.indexs = 54;
        usershoose.total = 5;
        break;
      case '1.《电压》':
        usershoose.indexs = 60;
        usershoose.total = 4;
        break;
      case '2.《串、并联电路中电压的规律》':
        usershoose.indexs = 65;
        usershoose.total = 3;
        break;
      case '3.《电阻》':
        usershoose.indexs = 68;
        usershoose.total = 5;
        break;
      case '4.《变阻器》':
        usershoose.indexs = 73;
        usershoose.total = 5;
        break;
      case '1.《电流与电压和电阻的关系》':
        usershoose.indexs = 79;
        usershoose.total = 4;
        break;
      case '2.《欧姆定律》':
        usershoose.indexs = 83;
        usershoose.total = 2;
        break;
      case '3.《电阻的测量》':
        usershoose.indexs = 85;
        usershoose.total = 3;
        break;
      case '4.《欧姆定律在串、并联电路中的应用》':
        usershoose.indexs = 88;
        usershoose.total = 3;
        break;
      case '1.《电能、电功》':
        usershoose.indexs = 92;
        usershoose.total = 4;
        break;
      case '2.《电功率》':
        usershoose.indexs = 96;
        usershoose.total = 5;
        break;
      case '3.《测量小灯泡的电功率》':
        usershoose.indexs = 101;
        usershoose.total = 3;
        break;
      case '4.《焦耳定律》':
        usershoose.indexs = 104;
        usershoose.total = 5;
        break;
      case '1.《家庭电路》':
        usershoose.indexs = 110;
        usershoose.total = 4;
        break;
      case '2.《家庭电路中电流过大的原因》':
        usershoose.indexs = 114;
        usershoose.total = 4;
        break;
      case '3.《安全用电》':
        usershoose.indexs = 118;
        usershoose.total = 5;
        break;
      case '1.《磁现象、磁场》':
        usershoose.indexs = 124;
        usershoose.total = 5;
        break;
      case '2.《电生磁》':
        usershoose.indexs = 129;
        usershoose.total = 5;
        break;
      case '3.《电磁铁 电磁继电器》':
        usershoose.indexs = 134;
        usershoose.total = 4;
        break;
      case '4.《电动机》':
        usershoose.indexs = 138;
        usershoose.total = 5;
        break;
      case '5.《磁生电》':
        usershoose.indexs = 143;
        usershoose.total = 6;
        break;
      case '1.《现代顺风耳-电话》':
        usershoose.indexs = 150;
        usershoose.total = 5;
        break;
      case '2.《电磁波的海洋》':
        usershoose.indexs = 155;
        usershoose.total = 4;
        break;
      case '3.《广播电视和移动通信》':
        usershoose.indexs = 159;
        usershoose.total = 4;
        break;
      case '4.《越来越宽的信息之路》':
        usershoose.indexs = 163;
        usershoose.total = 7;
        break;
      case '1.《能源》':
        usershoose.indexs = 171;
        usershoose.total = 4;
        break;
      case '2.《核能》':
        usershoose.indexs = 175;
        usershoose.total = 4;
        break;
      case '3.《太阳能》':
        usershoose.indexs = 179;
        usershoose.total = 4;
        break;
      case '4.《能源与可持续发展》':
        usershoose.indexs = 183;
        usershoose.total = 4;
        break;

    };

    return usershoose;
  }

}
//到处整个对象object
module.exports = bookdata