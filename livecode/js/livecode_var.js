// var getLiveCodeUrl = "http://127.0.0.1:8093/api/livecode/get";
// var getLiveCodeUrl = "http://47.104.98.26:8093/api/livecode/get";
var getLiveCodeUrl = "http://mat-api.aaios.com/api/livecode/get";


//485affe92b3637584119c7d889fa124628f64040
function loadLiveCode(tag,feedback)
{
    var hash = new HashTable();
    hash.put("tag",tag);
    doApi(getLiveCodeUrl,hash,feedback);
}




function saveLiveCode(val)
{
    localStorage.setItem("livecode",val);
}

function getLiveCode()
{
    var str = localStorage.getItem("livecode");
    return str;

}


function getDetailList(livecode)
{
    var codeList = new Array();

    if(livecode.detail1!=null)
    {
        codeList.push(livecode.detail1);
    }
    if(livecode.detail2!=null)
    {
        codeList.push(livecode.detail2);
    }
    if(livecode.detail3!=null)
    {
        codeList.push(livecode.detail3);
    }
    if(livecode.detail4!=null)
    {
        codeList.push(livecode.detail4);
    }
    if(livecode.detail5!=null)
    {
        codeList.push(livecode.detail5);
    }
    return codeList;
}



function setWXTitle(str)
{
    document.setTitle = function(t) {
        document.title = t;
        var i = document.createElement('iframe');
        i.style.display = 'none';
        i.onload = function() {
            setTimeout(function(){
                i.remove();
            }, 9)
        }
        document.body.appendChild(i);
    }

    setTimeout(function(){
        document.setTitle(str)
    }, 1000)

}


function callPhone(phone)
{
    window.location.href = "tel://"+phone;
}


