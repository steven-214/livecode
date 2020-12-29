load();
function load()
{
    var tag = getQueryString("tag");
    tag = "8f970e0272c322bd62c7a5a3bf405bdf";
    loadLiveCode(tag,load_finish);
}

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
                // window.location.href = ("./person.html");
                window.location.href = ("./qun.html");
            }
        }
    }
    else
    {
        $("#loading_img").attr("src","./img/error.jpg");
        $("#loading").css("color","#FF0000");
        $("#loading").html("活码已失效");
    }
}







