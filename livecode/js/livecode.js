load();

function load()
{
    var tag = getQueryString("tag");
    // alert("cid:::"+cid);
    loadLiveCode(tag,load_finish);
}

var livecode;
function load_finish(json)
{
    if(json.code==0)
    {
        livecode = json.data;

        $("#livecodeinfo").html(livecode.info);

        var codeList = new Array();

        // mydebug(livecode.code1);
        // mydebug(livecode.code2);
        // mydebug(livecode.code3);
        // mydebug(livecode.code4);
        // mydebug(livecode.code5);
        // mydebug(livecode.code6);
        // mydebug(livecode.code7);
        // mydebug(livecode.code8);


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

        $(document).attr("title",livecode.title);
        setWXTitle(livecode.title);

        mydebug("codeList.length:::"+codeList.length);

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
    else
    {

    }
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


function callPhone()
{
    if(livecode==null)
    {
        return;
    }

    window.location.href = "tel://"+livecode.phone;
}







