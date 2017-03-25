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


