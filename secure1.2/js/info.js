var sys = require('sys');
var exec = require('child_process').exec;
//系统信息
function sysinfo()
{
//var passwd=document.getElementById('passwd').value;
var expr = "bash shell/sysinfo.sh ";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("sys");
	a.innerHTML=stdout+stderr;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
//资源信息
function sourceinfo()
{
//var passwd=document.getElementById('passwd').value;
var expr = "bash ./shell/sourceinfo.sh ";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("source");
	a.innerHTML=stdout+stderr;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
//磁盘信息
function diskinfo()
{
//var passwd=document.getElementById('passwd').value;
var expr = "bash ./shell/diskinfo.sh ";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("disk");
	a.innerHTML=stdout+stderr;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
//网络信息
function networkinfo()
{
//var fileid=document.getElementById('fileid').value;
var expr = "bash ./shell/networkinfo.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("network");
	a.innerHTML=stdout+stderr;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
//软件信息
function softinfo()
{
//var fileid=document.getElementById('fileid').value;
var expr = "bash ./shell/softinfo.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("soft");
	a.innerHTML=stdout+stderr;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
//用户信息
function userinfo()
{
//var expr = 'pylint'+' '+fileid;
var expr = "bash ./shell/userinfo.sh";
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("user");
	a.innerHTML=stdout+stderr;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}
