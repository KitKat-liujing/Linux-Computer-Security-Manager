var sys = require('sys');
var exec = require('child_process').exec;

//打印出加密日志中的内容，显示已加密项
function cat()
{
//执行shell命令
var expr = "cat ./out/encrypt.log"
exec(expr,function(error,stdout,stderr){
        //结果推送到屏幕
	a=document.getElementById("cat");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//数据加密
function encrypt()
{
//获得文件路径
var encryptid = document.getElementById("encryptid").value;
//执行脚本，加密数据
var expr = "bash ./shell/encrypt.sh "+encryptid;
exec(expr,function(error,stdout,stderr){
        //结果推送到屏幕
	a=document.getElementById("encrypt");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//数据解密
function decrypt()
{
//获取文件路径
var encryptid = document.getElementById("decryptid").value;
//执行脚本，解密数据
var expr = "bash ./shell/decrypt.sh "+encryptid;
exec(expr,function(error,stdout,stderr){
	//结果推送到屏幕
        a=document.getElementById("decrypt");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
