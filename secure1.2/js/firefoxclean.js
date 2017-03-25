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
