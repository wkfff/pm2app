function setcampus(p,c){
  var province = document.getElementById(p);
  var city     = document.getElementById(c);
  //省份
  var provinceArr = [];
  provinceArr[0] = ['北京'];
  provinceArr[1] = ['天津'];
  provinceArr[2] = ['上海'];
  provinceArr[3] = ['重庆'];
  provinceArr[4] = ['河北'];
  provinceArr[5] = ['河南'];
  provinceArr[6] = ['云南'];
  provinceArr[7] = ['辽宁'];
  provinceArr[8] = ['黑龙江'];
  provinceArr[9] = ['湖南'];
  provinceArr[10] = ['安徽'];
  provinceArr[11] = ['山东'];
  provinceArr[12] = ['新疆维吾尔自治区'];
  provinceArr[13] = ['江苏'];
  provinceArr[14] = ['浙江'];
  provinceArr[15] = ['江西'];
  provinceArr[16] = ['湖北'];
  provinceArr[17] = ['广西壮族'];
  provinceArr[18] = ['甘肃'];
  provinceArr[19] = ['山西'];
  provinceArr[20] = ['内蒙古自治区'];
  provinceArr[21] = ['陕西'];
  provinceArr[22] = ['吉林'];
  provinceArr[23] = ['福建'];
  provinceArr[24] = ['贵州'];
  provinceArr[25] = ['广东'];
  provinceArr[26] = ['青海'];
  provinceArr[27] = ['西藏'];
  provinceArr[28] = ['四川'];
  provinceArr[29] = ['宁夏回族'];
  provinceArr[30] = ['海南'];
  provinceArr[31] = ['台湾'];
  provinceArr[32] = ['香港特别行政区'];
  provinceArr[33] = ['澳门特别行政区'];
  //市县,每个数组第一个元素为省份,其他的为这个省份下的市县
  var cityArr = [];
  cityArr[0] = ['北京','北京'];
  cityArr[1] = ['天津','天津'];
  cityArr[2] = ['上海','上海'];
  cityArr[3] = ['重庆','重庆'];
  cityArr[4] = ['河北','石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'];
  cityArr[5] = ['河南','郑州','开封','洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '济源', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'];
  cityArr[6] = ['云南','昆明',' 曲靖','玉溪','保山','昭通','丽江','思茅','临沧','楚雄彝族自治州','红河哈尼族彝族自治州','文山壮族苗族自治州','西双版纳傣族自治州','大理白族自治州','德宏傣族景颇族自治州','怒江傈僳族自治州','迪庆藏族自治州'];
  cityArr[7] = ['辽宁','沈阳' ,'大连' ,'鞍山' ,'抚顺' ,'本溪' ,'丹东' ,'锦州' ,'营口' ,'阜新' ,'辽阳' ,'盘锦' ,'铁岭' ,'朝阳' ,'葫芦岛'];
  cityArr[8] = ['黑龙江','哈尔滨','齐齐哈尔','鸡西','鹤岗','双鸭山', '大庆', '伊春', '佳木斯', '七台河', '牡丹江', '黑河', '绥化', '大兴安岭地区'];
  cityArr[9] = ['湖南','长沙', '株洲','湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'];
  cityArr[10] = ['安徽','合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州','阜阳','宿州', '巢湖', '六安', '亳州', '池州', '宣城'];
  cityArr[11] = ['山东','济南','青岛','淄博','枣庄','东营','烟台','潍坊','济宁','泰安','威海','日照','莱芜','临沂','德州','聊城','滨州','菏泽'];
  cityArr[12] = ['新疆维吾尔自治区','乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '昌吉回族自治州 ', '博尔塔拉蒙古自治州 ', '巴音郭楞蒙古自治州 ', '阿克苏地区', '克孜勒苏柯尔克孜自治州 ', '喀什地区', '和田地区', '伊犁哈萨克自治州', '塔城地区', '阿勒泰地区', '石河子', '阿拉尔', '图木舒克', '五家渠' ];
  cityArr[13] = ['江苏','南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁' ];
  cityArr[14] = ['浙江','杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'];
  cityArr[15] = ['江西','南昌','景德镇','萍乡','九江','新余','鹰潭','赣州','吉安','宜春','抚州','上饶'];
  cityArr[16] = ['湖北','武汉','黄石','十堰', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州','仙桃', '潜江', '天门', '神农架林区'];
  cityArr[17] = ['广西壮族','南宁','柳州','桂林','梧州','北海','防城港','钦州','贵港','玉林','百色','贺州','河池','来宾','崇左'];
  cityArr[18] = ['甘肃','兰州','嘉峪关', '金昌', '白银', '天水', '武威', '张掖', '平凉', '酒泉', '庆阳', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'];
  cityArr[19] = ['山西','太原','大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁' ];
  cityArr[20] = ['内蒙古自治区','呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '兴安盟', '锡林郭勒盟', '阿拉善盟' ];
  cityArr[21] = ['陕西','西安','铜川','宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛' ];
  cityArr[22] = ['吉林','长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'];
  cityArr[23] = ['福建','福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德' ];
  cityArr[24] = ['贵州','贵阳','六盘水', '遵义', '安顺', '铜仁地区', '黔西南布依族苗族自治州', '毕节地区', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'];
  cityArr[25] = ['广东','广州','韶关','深圳','珠海','汕头','佛山','江门','湛江','茂名','肇庆','惠州','梅州','汕尾','河源','阳江','清远','东莞','中山','潮州','揭阳','云浮'];
  cityArr[26] = ['青海','西宁' ,'海东地区', '海北藏族自治州', '黄南藏族自治州', '海南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'];
  cityArr[27] = ['西藏','拉萨','昌都地区', '山南地区', '日喀则地', '那曲地区', '阿里地区', '林芝地区' ];
  cityArr[28] = ['四川','成都','自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'];
  cityArr[29] = ['宁夏回族','银川','石嘴山','吴忠','固原','中卫'];
  cityArr[30] = ['海南','海口','三亚','五指山', '琼海', '儋州', '文昌', '万宁', '东方', '定安县', '屯昌县', '澄迈县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县' ];
  cityArr[31] = ['台湾','台北', '高雄', '基隆', '台中', '台南', '新竹', '嘉义'];
  cityArr[32] = ['香港特别行政区','中西区', '湾仔区', '东区', '南区', '油尖旺区', '深水埗区', '九龙城区', '黄大仙区', '观塘区', '荃湾区', '葵青区', '沙田区', '西贡区', '大埔区', '北区', '元朗区', '屯门区', '离岛区' ];
  cityArr[33] = ['澳门特别行政区','澳门'];

  //生成省份
  for(var key in provinceArr) {
    var provinceOption = document.createElement('option');
    provinceOption.value = provinceOption.text = provinceArr[key];
    province.options.add(provinceOption);
  }
  //生成市县、区市'
  //@current为当前选择的select节点，即父类节点
  //@child为子类点
  //@childArr为子节点数组
  function showChild(current, child, childArr) {
    var currentValue = current.value;
    var count = childArr.length;
    //每次切换市'把城市的子option长度设置市',即清除城市的选择,DOM对象select元素是长度是子option的个市'
    child.length = 1;
    for(var i = 0; i < count; i++) {
      //判断所选的值即父类，与当前节点第一个数组元素是否相市'
      if(currentValue == childArr[i][0]) {
        //不取第一个数组元市'因为第一个是父类，所以j市'开始，而不市'
        for(var j = 1; j < childArr[i].length; j++) {
          var childOption = document.createElement('option');
          //ie不支持option对象的value,所以加childOption.text
          childOption.value = childOption.text = childArr[i][j];
          child.options.add(childOption);
        }
      }
    }
  }
  //省份改变市'
  province.onchange = function() {
    showChild(province, city, cityArr);
  }
}
