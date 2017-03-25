var sys = require('sys');
var exec = require('child_process').exec;
//查看已开启的启动项
function showopen()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd1').value;
var expr = "bash ./shell/showopen.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("start1");
//把已开启的启动项推到网页上显示
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
//查看已关闭的启动项
function showclose()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd1').value;
var expr = "bash ./shell/showclose.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("start2");
//把已关闭的启动项推到网页上显示
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
//关闭自启动项
function closestart()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd1').value;
var num=document.getElementById('close1').value;
//判断获取的密码是否为空,为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
//判断获取的编号是否为空,为空则弹出提示框
if(num =="" ||num==undefined ||num==null)
	alert("请输入启动项编号！");
else{
var expr = "bash ./shell/closestart.sh "+num+" "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("close2");
//把关闭操作结果显示到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}
//打开不自启动项
function openstart()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd1').value;
var num=document.getElementById('open1').value;
//判断获取的密码是否为空,为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
//判断用户是否输入编号，没输入则弹出提示框
if(num =="" ||num==undefined ||num==null)
	alert("请输入启动项编号！");
else{
var expr = "bash ./shell/openstart.sh "+num+" "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("open2");
//把打开操作结果显示到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}

////////////////////////////////////////////////////////////////
//安装preload
function installpreload()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd2').value;
//判断获取的密码是否为空,为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
else{
var expr = "bash ./shell/preload.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("preload");
//把安装成功与否的结果显示到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}
//卸载preload
function uinstallpreload()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd2').value;
//判断获取的密码是否为空,为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
else{
var expr = "bash ./shell/uinstallpreload.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("preload");
//把卸载成功与否的结果显示到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}
//安装sysv-rc-conf
function installconf()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd2').value;
//判断获取的密码是否为空,为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
else{
var expr = "bash ./shell/sysv-rc-conf.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("conf");
//把安装成功与否的结果显示到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}
//卸载sysv-rc-conf
function uinstallconf()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd2').value;
//判断获取的密码是否为空,为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
else{
var expr = "bash ./shell/uinstallconf.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("conf");
//把卸载成功与否的结果显示到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}

//小贴士弹出窗口
function opentips()
{
  window.open ('tips.html','newwindow','height=270,width=600,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no')   
}


