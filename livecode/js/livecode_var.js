// var getLiveCodeUrl = "http://127.0.0.1:8093/api/livecode/get";
var getLiveCodeUrl = "http://47.104.98.26:8093/api/livecode/get";
//485affe92b3637584119c7d889fa124628f64040
function loadLiveCode(tag,feedback)
{
    var hash = new HashTable();
    hash.put("tag",tag);
    doApi(getLiveCodeUrl,hash,feedback);
}

function saveLiveCode(name,val)
{
    localStorage.setItem(name,val);
}

function getLiveCode(name)
{
    var id = localStorage.getItem(name);
    return id;

}


function getCodeList(livecode)
{
    var codeList = new Array();

    if(livecode.code1!=null)
    {
        codeList.push(livecode.code1);
    }
    if(livecode.code2!=null)
    {
        codeList.push(livecode.code2);
    }
    if(livecode.code3!=null)
    {
        codeList.push(livecode.code3);
    }
    if(livecode.code4!=null)
    {
        codeList.push(livecode.code4);
    }
    if(livecode.code5!=null)
    {
        codeList.push(livecode.code5);
    }
    if(livecode.code6!=null)
    {
        codeList.push(livecode.code6);
    }
    if(livecode.code7!=null)
    {
        codeList.push(livecode.code7);
    }
    if(livecode.code8!=null)
    {
        codeList.push(livecode.code8);
    }
    if(livecode.code9!=null)
    {
        codeList.push(livecode.code9);
    }

    return codeList;
}