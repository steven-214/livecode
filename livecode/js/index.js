load();
var tag = "";
function load()
{
    tag = getQueryString("tag");
    loadLiveCode(tag,load_finish);
}

var livecode;
function load_finish(json)
{
    if(json.code==0)
    {
        livecode = json.data;
        saveLiveCode(tag,JSON.stringify(livecode));

        if(livecode.type==0)
        {
            window.location.href = ("./person.html?tag="+tag);
        }
        else if(livecode.type==1)
        {
            if(livecode.advance==0)
            {
                window.location.href = ("./person.html?tag="+tag);
            }
            else
            {
                window.location.href = ("./qun.html?tag="+tag);
            }
        }
    }
    else
    {

    }
}







