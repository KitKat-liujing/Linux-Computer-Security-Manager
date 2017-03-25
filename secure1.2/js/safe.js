var sys = require('sys');
var exec = require('child_process').exec;

//打印出安全日志中的内容，显示保险箱内容
function cat()
{
//执行shell命令
var expr = "awk '{print $1}' ./out/safe.log"
exec(expr,function(error,stdout,stderr){
	//结果推送到屏幕
        a=document.getElementById("cat");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//文件放入保险箱
function safebox1()
{
//获取密码
var passwd = document.getElementById("passwd").value;
//获取文件路径
var safeid1 = document.getElementById("safeid1").value;
//判断密码是否为空，为空弹出提示框
if(passwd == "" || passwd == undefined || passwd == null)
	alert("密码为空！")
//执行脚本，放入保险箱
var expr = "bash ./shell/safe.sh "+passwd+" "+safeid1;
exec(expr,function(error,stdout,stderr){
	//结果推送到屏幕
        a=document.getElementById("safe1");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//文件移出保险箱
function unsafebox1()
{
//获取密码
var passwd = document.getElementById("passwd").value;
//获取文件路径
var unsafeid1 = document.getElementById("unsafeid1").value;
//判断密码是否为空，为空弹出提示框
if(passwd == "" || passwd == undefined || passwd == null)
	alert("密码为空！")
//执行脚本，移出保险箱
var expr = "bash ./shell/unsafe.sh "+passwd+" "+unsafeid1;
exec(expr,function(error,stdout,stderr){
	//结果推送到屏幕
	a=document.getElementById("unsafe1");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//文件夹放入保险箱
function safebox2()
{
//获取密码
var passwd = document.getElementById("passwd").value;
//获取文件夹路径
var safeid2 = document.getElementById("safeid2").value;
//判断密码是否为空，为空弹出提示框
if(passwd == "" || passwd == undefined || passwd == null)
	alert("密码为空！")
//执行脚本，放入保险箱
var expr = "bash ./shell/safe.sh "+passwd+" "+safeid2;
exec(expr,function(error,stdout,stderr){
        //结果推送到屏幕
	a=document.getElementById("safe2");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//文件夹移出保险箱
function unsafebox2()
{
//获取密码
var passwd = document.getElementById("passwd").value;
//获取文件夹路径
var unsafeid2 = document.getElementById("unsafeid2").value;
//判断密码是否为空，为空弹出提示框
if(passwd == "" || passwd == undefined || passwd == null)
	alert("密码为空！")
//执行脚本，移出保险箱
var expr = "bash ./shell/unsafe.sh "+passwd+" "+unsafeid2;
exec(expr,function(error,stdout,stderr){
        //结果推送到屏幕
	a=document.getElementById("unsafe2");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
