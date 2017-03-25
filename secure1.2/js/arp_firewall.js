var sys = require('sys');
var exec = require('child_process').exec;

//打开arp防火墙
function arp_open()
{
	//弹出对话框提示用户输入密码
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/arp_open.sh "+passwd;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("arp_status");
			//输出提示信息
			a.innerHTML=stdout;
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}
//关闭arp防火墙
function arp_close()
{
	//弹出对话框提示用户输入密码
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/arp_close.sh "+passwd;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("arp_status");
			//输出提示信息
			a.innerHTML=stdout;
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}
