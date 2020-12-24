load();

function load()
{
    var str = getLiveCode();
    // alert(str);
    // mydebug("llll:::::::::::"+str);
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


    // $("#livecodeinfo").html(livecode.info);

    var codeList = getCodeList(livecode);
    var detailList = getDetailList(livecode);


    mydebug(livecode.cover);
    if(livecode.cover!=null)
    {
        $("#livecode_cover").css("background-image","url("+livecode.cover+") ");
    }

    // livecode.slogan = "hahaha";
    $("#livecode_slogan").html( livecode.slogan);

    if(livecode.member==0)
    {
        $("#livecode_member").hide();
    }

    // livecode.content = "scscscsc";
    $("#livecode_content").html( livecode.content);


    var str = "";
    detailList.forEach(detail=>{
        str += "<img src='"+detail+"'  width='98%'>";
    });
    $("#livecode_detail").html(str);



    // if(livecode.phone!=null)
    // {
    //     $("#livecode_phone_tip").html("联系电话");
    //     $("#livecode_phone").html(livecode.phone);
    // }
    // $(this).css({'background':'url("images/zc_91.png") 0.27rem 0.24rem no-repeat','background-size':'0.46rem 0.46rem'});



    //
    // mydebug("codeList.length:::"+codeList.length);
    //
    // if(codeList.length>0)
    // {
    //     var qrcodeSrc = "";
    //     var index = 0;
    //     if(livecode.allocation==0)
    //     {
    //         index = parseInt(codeList.length*Math.random());
    //     }
    //     else
    //     {
    //         index = livecode.visit%codeList.length;
    //     }
    //     qrcodeSrc = codeList[index];
    //     $("#livecode_qrcode").attr("src",qrcodeSrc);
    // }
    //
    //
    // $("#livecode_info").html(livecode.info);
    //

}


function joinQun()
{
    window.location.href = ("./person.html");
}





