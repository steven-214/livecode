load();
function load()
{
    var tag = getQueryString("tag");
    loadLiveCode(tag,load_finish);
}
//res.v-cd.cn/livecode/index.html?tag=77be75c10871f70747ecfd2883884a1b
var livecode;
function load_finish(json)
{
    if(json.code==0)
    {
        livecode = json.data;
        saveLiveCode(JSON.stringify(livecode));

        if(livecode.type==0)
        {
            window.location.href = ("./person.html");
        }
        else if(livecode.type==1)
        {
            if(livecode.advance==0)
            {
                window.location.href = ("./person.html");
            }
            else
            {
                window.location.href = ("./qun.html");
            }
        }
    }
    else
    {

    }
}







