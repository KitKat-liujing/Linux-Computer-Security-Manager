var sys = require('sys');
var exec = require('child_process').exec;
// 清理旧版本的软件缓存
function autoclean()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd2').value;
//判断获取的密码是否为空,为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
else{
var expr = "bash ./shell/autoclean.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("autoclean");
//把旧版本软件缓存清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}
//清理所有软件缓存
function clean()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd2').value;
//判断获取的密码是否为空，为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
else{
var expr = "bash ./shell/clean.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("clean");
//把所有软件缓存清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}

//删除系统不再使用的孤立软件
function autoremove()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd2').value;
//判断获取的密码是否为空，为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
else{
var expr = "bash ./shell/autoremove.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("autoremove");
//把不再使用的孤立软件清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}
//清理Linux下孤立的包
function cleanpag()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd2').value;
//判断获取的密码是否为空，为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
else{
var expr = "bash ./shell/cleanpag.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("cleanpag");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}

//清空回收站
function cleanbin()
{
//从网页上获取用户输入的密码
var passwd=document.getElementById('passwd2').value;
//判断获取的密码是否为空，为空则弹出提示框
if(passwd =="" ||passwd==undefined ||passwd==null)
	alert("请输入当前用户密码！");
else{
var expr = "bash ./shell/cleanbin.sh "+passwd;
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("cleanbin");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
}

//清除flash_Cookies
function cleanfc()
{
//从网页上获取用户输入的密码
var expr = "bash ./shell/cleanfc.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("cleanfc");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//清除缩略图缓存
function cleanpng()
{
//从网页上获取用户输入的密码
var expr = "bash ./shell/cleanpng.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("cleanpng");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//清除最近使用文档记录
function cleanrecent()
{
//从网页上获取用户输入的密码
var expr = "bash ./shell/cleanrecent.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("cleanrecent");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

/////////////////////////
//清除firefox的cookies
function clsffcookies()
{
//从网页上获取用户输入的密码
var expr = "bash ./shell/clsffcookies.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("clsffcookies");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//清除firefox的URL历史
function clsffURL()
{
//从网页上获取用户输入的密码
var expr = "bash ./shell/clsffURL.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("clsffURL");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
//清除firefox的会话恢复
function clsffsess()
{
//从网页上获取用户输入的密码
var expr = "bash ./shell/clsffsess.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("clsffsess");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//清除firefox中的密码
function clsffpasswd()
{
//从网页上获取用户输入的密码
var expr = "bash ./shell/clsffpasswd.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("clsffpasswd");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
//清除firefox的站点首选项
function clsffcprefs()
{
//从网页上获取用户输入的密码
var expr = "bash ./shell/clsffcprefs.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("clsffcprefs");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//清除firefox的表单历史
function clsfffmhistory()
{
//从网页上获取用户输入的密码
var expr = "bash ./shell/clsfffmhistory.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("clsfffmhistory");
//把清理结果推送到网页上
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
