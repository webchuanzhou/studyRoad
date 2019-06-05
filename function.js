/*****************************封装一些常用的方法，如时间出来，数组去重等*****************************/

/**
* 字符串处理的公共方法
* 1.去除字符串空格 
* 2.字母大小写切换
* 3.字符串替换
* 4.查找某个字符或字符串在另一个字符串中出现的次数
*/
var strJS = {
/**
* 去除字符串空格 
* @param str 要处理的字符串
* @param type 1：所有空格 2：前后空格 3：前空格 4：后空格
*/
strTrim:function (str,type){
	switch (type){
		case 1:return str.replace(/\s+/g,"");
		case 2:return str.replace(/(^\s*)|(\s*$)/g, ""); 
		case 3:return str.replace(/(^\s*)/g, ""); 
		case 4:return str.replace(/(\s*$)/g, ""); 
		default:return str; 
	}
} ,
/**
* 字母大小写切换
* @param str 要处理的字符串
* @param type 1:首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
*/
strChangeCase:function (str,type){
function ToggleCase(str) {
	var itemText = ""
		str.split("").forEach(
	function (item) {
		if (/^([a-z]+)/.test(item)) {
			itemText += item.toUpperCase();
		}
		else if (/^([A-Z]+)/.test(item)) {
			itemText += item.toLowerCase();
		}
		else{
			itemText += item;
		}
	});
	return itemText;
}

	switch (type) {
		case 1:
			return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
				return v1.toUpperCase() + v2.toLowerCase();
			});
		case 2:
			return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
				return v1.toLowerCase() + v2.toUpperCase();
			});
		case 3:
			return ToggleCase(str);
		case 4:
			return str.toUpperCase();
		case 5:
			return str.toLowerCase();
		default:
			return str;
	}
} ,
/**
* 字符串替换
* @param str 字符串
* @param aFindText 要替换的字符
* @param aRepText 替换成什么
*/
replaceAll:function (str,aFindText,aRepText){
raRegExp = new RegExp(aFindText,"g") ;
return str.replace(raRegExp,aRepText);
},
/**
* 查找某个字符或字符串在另一个字符串中出现的次数
* @param str 字符串
* @param strSplit 要查找的字符或字符串
* @returns {Number} 返回出现的次数
* 例：countStr("klsdjflds","s") 返回2
*/
countStr:function (str,strSplit){
return str.split(strSplit).length-1
}

}

/**
* 其它方法
* 1.检测密码强度
* 2.获取URL参数
* 3.返回指定某个区间的一个数字（可以不传参，不传就返回0-255之间的数；可以只传一个，返回0到传入的这个数字之间的某个值）
* 4.随机产生某个颜色
*/
var otherJS={
/**
* 检测密码强度
* @param str 字符串 
* @returns 1：密码弱 2：密码中等 3：密码强 4：密码很强
*/
checkPwd:function (str) {
var nowLv = 0;
if (str.length < 6) {
return nowLv
}
;
if (/[0-9]/.test(str)) {
nowLv++
}
;
if (/[a-z]/.test(str)) {
nowLv++
}
;
if (/[A-Z]/.test(str)) {
nowLv++
}
;
if (/[\.|-|_]/.test(str)) {
nowLv++
}
;
return nowLv;
},
/**
* 获取URL参数
* @param url 地址
* @returns 例：getUrlPrmt("http://www.baidu.com?id=1&nam=张三&uid=12345654321&type=1,2,3")，结果{id: "1", nam: "张三", uid: "12345654321", type: "1,2,3"}
*/
getUrlPrmt:function (url) {
url = url ? url : window.location.href;
let _pa = url.substring(url.indexOf('?') + 1), _arrS = _pa.split('&'), _rs = {};
for (var i = 0, _len = _arrS.length; i < _len; i++) {
let pos = _arrS[i].indexOf('=');
if (pos == -1) {
continue;
}
let name = _arrS[i].substring(0, pos), value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
_rs[name] = value;
}
return _rs;
},
/**
* 返回指定某个区间的一个数字（可以不传参，不传就返回0-255之间的数；可以只传一个，返回0到传入的这个数字之间的某个值）
* @param n1 开始区间 例：5
* @param n2 结束区间 例：10
* @returns 返回这个区间的某个随机值
*/
randomNumber:function (n1,n2){

if(arguments.length===2){
return Math.round(n1+Math.random()*(n2-n1));
}

else if(arguments.length===1){
return Math.round(Math.random()*n1)
}

else{
return Math.round(Math.random()*255)
} 
},
/**
* 随机产生某个颜色
* @returns {String} 颜色 例：rgb(250,82,49)
*/
randomColor:function (){
//randomNumber是上面定义的函数
//写法1
return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';

//写法2
return '#'+Math.random().toString(16).substring(2).substr(0,6);

//写法3
var color='#';
for(var i=0;i<6;i++){
color+='0123456789abcdef'[randomNumber(15)];
}
return color;
}
}

/**
* 数组相关方法
* 1.数组去重
* 2.将数组乱序输出
* 3.获取数组的最大值，最小值，只针对数字类型的数组
* 4.得到数组的和，只针对数字类型数组
* 5.数组的平均值,只针对数字类型数组，小数点可能会有很多位，这里不做处理，处理了使用就不灵活了！
* 6.随机获取数组中的某个元素
* 7.返回某个元素在数组中出现的次数
*/
var arrJS={
/**
* 数组去重
* 用的是Array的from方法
* @param arr 数组
* @returns 去重后的数组
*/
removeRepeatArray:function (arr){
return Array.from(new Set(arr))
} ,
/**
* 将数组乱序输出
* @param arr 数组
* @returns 打乱后的数组
*/
upsetArr:function (arr){
return arr.sort(function(){ return Math.random() - 0.5});
},
/**
* 获取数组的最大值，最小值，只针对数字类型的数组
* @param arr 数组
* @param type 0：最小值，1：最大值
* @returns
*/
compareArr:function (arr,type){
if(type==1){
return Math.max.apply(null,arr);
}else{
return Math.min.apply(null,arr);
}
},
/**
* 得到数组的和，只针对数字类型数组
* @param arr 数组
* @returns {Number} 和
*/
sumArr:function (arr){
var sumText=0;
for(var i=0,len=arr.length;i<len;i++){
sumText+=arr[i];
}
return sumText
},
/**
* 数组的平均值,只针对数字类型数组，小数点可能会有很多位，这里不做处理，处理了使用就不灵活了！
* @param arr 数组
* @returns {Number} 平均值
*/
covArr:function (arr){
var sumText=sumArr(arr);
var covText=sumText/arr.length;
return covText ;
},
/**
* 随机获取数组中的某个元素
* @param arr 数组
* @returns 随机获取的值
*/
randomOne:function (arr) {
return arr[Math.floor(Math.random() * arr.length)];
},
/**
* 返回某个元素在数组中出现的次数
* @param arr 数组 
* @param ele 要查找的元素
* @returns {Number} 出现的次数
*/
getEleCount:function (arr, ele) {
var num = 0;
for (var i = 0, len = arr.length; i < len; i++) {
if (ele == arr[i]) {
num++;
}
}
return num;
},
/**
* 简单数组排序，针对数字数组
* @param type 1：降序，0：升序
*/
sortArr:function(arr,type){
if(type==1){
//降序
arr.sort(function(a,b){
return b-a ;
}) ;
}else{
arr.sort(function(a,b){
return a-b ;
}) ;
}
return arr ;
},
sortObjectArr:function(arr,type){
if(type==1){
arr.sort(function(a,b){
if (a.age>b.age) return 1 ;
if (a.age<b.age) return -1 ;
if (a.age=b.age) return 0 ;
}) ;
}else{
arr.sort(function(a,b){
if (a.age>b.age) return -1 ;
if (a.age<b.age) return 1 ;
if (a.age=b.age) return 0 ;
}) ;
}
return arr ;
}

}

/*function sortArr(arr,type){
if(type==1){
//降序
arr.sort(function (n1, n2) {
return n2.count - n1.count
});
}else{
//升序
arr=arr.reverse();
}
return arr ;
}*/

/**
* cookie相关方法
* 1.设置cookie
* 2.获取cookie
* 3.删除cookie
*/
var cookieJS = {
/**
* 设置cookie
* @param name cookie名称
* @param value cookie值
* @param iDay cookie的时间
*/
setCookie:function (name,value,iDay){
var oDate=new Date();
oDate.setDate(oDate.getDate()+iDay);
document.cookie=name+'='+value+';expires='+oDate;
},
/**
* 获取cookie
* @param name cookie名称
* @returns
*/
getCookie:function (name){
var arr=document.cookie.split('; ');
for(var i=0;i<arr.length;i++){
var arr2=arr[i].split('=');
if(arr2[0]==name)
{
return arr2[1];
}
}
return '';
},
/**
* 删除cookie
* @param name cookie名称
*/
removeCookie:function (name){
this.setCookie(name,1,-1);
}
}

/** 时间戳
* 时间相关的方法
* 1.倒计时（默认开始时间为当前时间）
*/
var timeJS = {

/**
* 倒计时（默认开始时间为当前时间）
* @param endTime 结束时间
* @returns 例：剩余时间1天 16小时 45 分钟41 秒
*/
getEndTime:function(endTime){
	var startDate=new Date(); //开始时间，当前时间
	var endDate=new Date(endTime); //结束时间，需传入时间参数
	var t=endDate.getTime()-startDate.getTime(); //时间差的毫秒数
	var d=0,h=0,m=0,s=0;
	if(t>=0){
	d=Math.floor(t/1000/3600/24);
	h=Math.floor(t/1000/60/60%24);
	m=Math.floor(t/1000/60%60);
	s=Math.floor(t/1000%60);
	} 
	return "剩余时间"+d+"天 "+h+"小时 "+m+" 分钟"+s+" 秒";
	}
}