var sys = require('sys');
var exec = require('child_process').exec;

//打开防火墙
function ufw_open()
{
	//弹出对话框提示用户输入密码
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/ufw_open.sh "+passwd;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("status");
			//界面显示提示信息		
			a.innerHTML=stdout;
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}

//关闭防火墙
function ufw_close()
{
	//弹出对话框提示用户输入密码
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/ufw_close.sh "+passwd;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("status");
			a.innerHTML=stdout;
			//界面显示提示信息
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}

//打开smtp服务
function ufw_smtp_open()
{
	//弹出对话框提示用户输入密码
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/ufw_smtp_open.sh "+passwd;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("smtp_status");
			a.innerHTML=stdout;
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}

//关闭smtp服务
function ufw_smtp_close()
{
	//弹出对话框提示用户输入密码
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/ufw_smtp_close.sh "+passwd;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("smtp_status");
			a.innerHTML=stdout;
			//界面显示提示信息
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}

//打开http服务
function ufw_http_open()
{
	//弹出对话框提示用户输入密码
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/ufw_http_open.sh "+passwd;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("http_status");
			a.innerHTML=stdout;
			//界面显示提示信息
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}

//关闭http服务
function ufw_http_close()
{
	//弹出对话框提示用户输入密码
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/ufw_http_close.sh "+passwd;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("http_status");
			a.innerHTML=stdout;
			//界面显示提示信息
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}

//打开指定端口，允许外部访问该端口
function ufw_port_open()
{
	//弹出对话框提示用户输入密码
	var portid=document.getElementById("port_id").value;
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/ufw_port_open.sh "+passwd+' '+portid;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("port_status");
			a.innerHTML=stdout;
			//界面显示提示信息
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}
//关闭指定端口，禁止外部访问该端口
function ufw_port_close()
{
	//弹出对话框提示用户输入密码
	var portid=document.getElementById("port_id").value;
	var passwd=document.getElementById("passwd").value;
	if(passwd =="" ||passwd==undefined ||passwd==null)
	  alert("请输入当前用户密码！");
	else{
		//执行shell脚本
		var expr="bash ./shell/ufw_port_close.sh "+passwd+" "+portid;
		exec(expr,function(error,stdout,stderr){
			a=document.getElementById("port_status");
			a.innerHTML=stdout;
			//界面显示提示信息
			if(error!==null){
				console.log('exec error:'+error)
			}
		});
	}
}
