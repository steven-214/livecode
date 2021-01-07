var audio;

function loadPage()
{
    audio = document.getElementById('livecode_bgm');
    initPlayAuto();
    var hiddenProperty = 'hidden' in document ? 'hidden' :
        'webkitHidden' in document ? 'webkitHidden' :
            'mozHidden' in document ? 'mozHidden' :
                null;
    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    var onVisibilityChange = function(){
        if (!document[hiddenProperty]) {
            if(!sessionStorage.bgmusic||sessionStorage.bgmusic=='play'){
                audio.play();
            }
        }else{
            audio.pause();
        }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);


    var str = getLiveCode();
    if(str!=null)
    {
        var json = eval('(' + str + ')');
        load_finish(json);
    }
    else
    {
        window.location.href = ("./index.html");
    }
}

var livecode;
function load_finish(json)
{
    livecode = json;



    if(livecode.bmg!=null)
    {
        // var str = "<source src=\""+livecode.bmg+"\" type=\"audio/mpeg\" />\n";
        // $("#livecode_bgm").html(str);
        // var audio = document.createElement("audio");
        audio.src = livecode.bmg;
        audio.loop = true;
        playBgMusic(true);
        // audio.addEventListener("canplaythrough",
        //     function() {
        //     // alert("okokok");
        //         audioPlayer.play();
        //     },
        //     false);
        // audioPlayer.load();


        // audioPlayer.addEventListener("canplay", function(){//监听audio是否加载完毕，如果加载完毕，则读取audio播放时间
        //     audioPlayer.play();
        // });

    }







    $(document).attr("title",livecode.title);
    setWXTitle(livecode.title);


    // $("#livecodeinfo").html(livecode.info);

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
        str += "<img src='"+detail+"'  width='98%'><br/>";
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



function initPlayAuto()
{
//----------页面初始化------------
    if(sessionStorage.bgmusic=='pause'){
        playBgMusic(false);
    }else{
        playBgMusic(true);
        //----------处理自动播放------------
        //--创建页面监听，等待微信端页面加载完毕 触发音频播放
        document.addEventListener('DOMContentLoaded', function () {
            function audioAutoPlay() {
                playBgMusic(true);
                document.addEventListener("WeixinJSBridgeReady", function () {
                    playBgMusic(true);
                }, false);
            }
            audioAutoPlay();
        });
        //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
        function audioAutoPlay() {
            playBgMusic(true);
            document.removeEventListener('touchstart',audioAutoPlay);
        }
        document.addEventListener('touchstart', audioAutoPlay);
    }
}


//----------处理页面激活------------



//---------背景音乐开关----------
function triggerBgMusic(){
    if(!sessionStorage.bgmusic||sessionStorage.bgmusic=='play'){
        playBgMusic(false);
    }else{
        playBgMusic(true);
    }
}
//---------音乐播放和暂停----------
function playBgMusic(val){
    if(val){
        audio.play();
        sessionStorage.bgmusic='play';
        document.getElementById('status').innerHTML='正在播放';
    }else{
        audio.pause();
        sessionStorage.bgmusic='pause';
        document.getElementById('status').innerHTML='停止播放了';
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



function joinQun()
{
    window.location.href = ("./person.html?rand="+Math.random());
}





