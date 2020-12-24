load();

function load()
{
    var str = getLiveCode();
    if(str!=null)
    {
        var json = eval('(' + str + ')');
        load_finish(json);
    }
}


var livecode;
function load_finish(json)
{
    livecode = json;

    $(document).attr("title",livecode.title);
    setWXTitle(livecode.title);

    var codeList = getCodeList(livecode);

    // mydebug("codeList.length:::"+codeList.length);

    if(codeList.length>0)
    {
        var qrcodeSrc = "";
        var index = 0;
        if(livecode.allocation==0)
        {
            index = parseInt(codeList.length*Math.random());
        }
        else
        {
            index = livecode.visit%codeList.length;
        }
        qrcodeSrc = codeList[index];
        $("#livecode_qrcode").attr("src",qrcodeSrc);
    }


    $("#livecode_info").html(livecode.info);

    if(livecode.phone!=null)
    {
        $("#livecode_phone_tip").html("联系电话");
        $("#livecode_phone").html(livecode.phone);
    }
}

function liveCodePhone()
{
    if(livecode==null)
    {
        return;
    }
    callPhone(livecode.phone);
}





