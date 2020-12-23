// var getLiveCodeUrl = "http://127.0.0.1:8093/api/livecode/get";
var getLiveCodeUrl = "http://47.104.98.26:8093/api/livecode/get";
//485affe92b3637584119c7d889fa124628f64040
function loadLiveCode(tag,feedback)
{
    var hash = new HashTable();
    hash.put("tag",tag);
    doApi(getLiveCodeUrl,hash,feedback);
}