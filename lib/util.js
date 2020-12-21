function HashTable() {
   // 初始化哈希表的记录条数size
   var size = 0;

   // 创建对象用于接受键值对
   var res = {};

   // 添加关键字，无返回值
   this.put = function (key, value) {

       //判断哈希表中是否存在key，若不存在，则size加1，且赋值 
       if (!this.containKey(key)) {
           size++;
       }

       // 如果之前不存在，赋值； 如果之前存在，覆盖。
       res[key] = value;
   };

   // 删除关键字, 如果哈希表中包含key，并且delete返回true则删除，并使得size减1
   this.remove = function (key) {
       if (this.containKey(key) && (delete res[key])) {
           size--;
       }
   };

   // 哈希表中是否包含key，返回一个布尔值
   this.containKey = function (key) {
       return (key in res);
   };

   // 哈希表中是否包含value，返回一个布尔值
   this.containValue = function (value) {

       // 遍历对象中的属性值，判断是否和给定value相等
       for (var prop in res) {
           if (res[prop] === value) {
               return true;
           }
       }
       return false;
   };

   // 根据键获取value,如果不存在就返回null
   this.get = function (key) {
       return this.containKey(key) ? res[key] : null;
   };

   // 获取哈希表中的所有value, 返回一个数组
   this.getAllValues = function () {
       var values = [];
       for (var prop in res) {
           values.push(res[prop]);
       }
       return values;
   };

   // 根据值获取哈希表中的key，如果不存在就返回null
   this.getKey = function (value) {
       for (var prop in res) {
           if (res[prop] === value) {
               return prop;
           }
       }

       // 遍历结束没有return，就返回null
       return null;
   };

   // 获取哈希表中所有的key,返回一个数组
   this.getAllKeys = function () {
       var keys = [];
       for (var prop in res) {
           keys.push(prop);
       }
       return keys;
   };

   // 获取哈希表中记录的条数，返回一个数值
   this.getSize = function () {
       return size;
   };

   // 清空哈希表，无返回值
   this.clear = function () {
       size = 0;
       res = {};
   };
}


function mydebug(s)
{
    console.info(s);
}



function getNowFormatDate() {//获取当前时间
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
	var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
	var strSeconds = date.getSeconds()<10? "0" + date.getSeconds():date.getSeconds();
        
	var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
			+ " "  + date.getHours()  + seperator2  + date.getMinutes()
			+ seperator2 + strSeconds;
	return currentdate;
}

function openLink(url)
{
     window.open(url, "_self");
}

function goback()
{
     history.go(-1);
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}



function bindScroll(callback1,callback2) {
  $(window).scroll(function(){
//    console.log('正在滑动f');

    var scrollTop = $(this).scrollTop();    //滚动条距离顶部的高度
    var scrollHeight = $(document).height();   //当前页面的总高度
    var clientHeight = $(this).height();    //当前可视的页面高度
//   console.log("top:"+scrollTop+",doc:"+scrollHeight+",client:"+clientHeight+"--(scrollTop + clientHeight)："+(scrollTop + clientHeight));
    if(scrollTop + clientHeight >= (scrollHeight-1)){   //距离顶部+当前高度 >=文档总高度 即代表滑动到底部 count++;         //每次滑动count加1
      // filterData(serviceTypeId,industryId,cityId,count); //调用筛选方法，count为当前分页数
//      console.log('下拉');

      if(callback2){
        callback2();
      }
    }else if(scrollTop<=0){
      //滚动条距离顶部的高度小于等于0 TODO
      //alert("下拉刷新，要在这调用啥方法？");
      
//      console.log('上拉');
      if(callback1){
        callback1();
      }

    }

  });

}




function getApiParams(hash)
{
    hash.put("time_token",(new Date().getTime()));
    var keys = hash.getAllKeys();
    var data = "{";

    for(var i=0;i<keys.length;i++)
    {
        var key = keys[i];
        var val = hash.get(key);

        data += ("\""+key+"\": \""+val+"\"");
        if(i!=(keys.length-1))
        {
            data += (",");
        }

    }
    data += "}";
    return data;
}


function httpPost(url,str,callback)
{

    $.ajax({
        type: 'POST',
        url: url,
        data:str,
        dataType: 'json',
        success: function(json)
        {
//                                    mydebug(xml);
            (callback&&typeof(callback)==="function")&&callback(json);
        },
        error:function(){
            //  mydebug("error--------------:"+url);
            (callback&&typeof(callback)==="function")&&callback(null);
        }
    });



}


var isApiLoading = false;
var api_finish_callback;
function doApi(url,hash,callback)
{
    if(!isApiLoading)
    {
        isApiLoading = true;
        var data = getApiParams(hash);
        api_finish_callback = callback;

        // alert("data:::"+data);


        httpPost(url,data,doApi_finish);
    }
}

function doApi_finish(json)
{
    isApiLoading = false;
    (api_finish_callback&&typeof(api_finish_callback)==="function")&&api_finish_callback(json);
}







