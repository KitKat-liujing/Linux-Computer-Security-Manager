var sys = require('sys');
var exec = require('child_process').exec;
// executes 'pylint traversepatch.py'

//安装杀毒软件
function install_SW()
{
	//获取用户输入的密码
	var passwd=document.getElementById('passwd').value;
	//判断密码是否为空
	if(passwd=="" ||passwd==undefined ||passwd==null)
	{
		alert("密码不能为空,请输入密码！");
	}
	else
	{
		//提示用户程序安装中
		a=document.getElementById("res1");	
		a.innerHTML="软件安装中。。。请稍等。。。";
		//执行shell脚本并将标准结果输出
		var expr = 'bash ./shell/install_clamscan.sh ' + passwd;
		exec(expr,function(error,stdout,stderr){
		//将结果输出到地址为res1的位置	
				a=document.getElementById("res1");	
				a.innerHTML=stdout+stderr;
				if(error!==null){
				console.log('exec error:'+error)
				}
				});
	}
}


//卸载杀毒软件
function del_SW()
{
	//获取用户输入的密码
	var passwd=document.getElementById('passwd').value;
	//判断密码是否为空
	if(passwd=="" ||passwd==undefined ||passwd==null)
	{
		alert("密码不能为空,请输入密码！");
	}
	else
	{
		//提示用户程序卸载中
		a=document.getElementById("res1");	
		a.innerHTML="软件卸载中。。。请稍等。。。";
		//执行shell脚本并将标准结果输出
		var expr = 'bash ./shell/del_clamav.sh ' + passwd;
		exec(expr,function(error,stdout,stderr){
		//将结果输出到地址为res1的位置	
				a=document.getElementById("res1");	
				a.innerHTML=stdout+stderr;
				if(error!==null){
				console.log('exec error:'+error)
				}
				});
	}
}
//全盘杀毒
function all_virus()
{
	//获取用户输入的密码
	var passwd1=document.getElementById('passwd1').value;
	//判断密码是否为空
	if(passwd1=="" ||passwd1==undefined ||passwd1==null)
	{
		alert("密码不能为空,请输入密码！");
	}
	else
	{
		//给用户提示信息，程序正在运行
		a=document.getElementById("res2");	
		a.innerHTML="程序运行中。。。全盘查杀比较慢，请稍等。。。";
		var expr = 'bash ./shell/all_virus.sh ' + passwd1;
		exec(expr,function(error,stdout,stderr){
		//将结果输出到地址为res2的位置	
				a=document.getElementById("res2");	
				a.innerHTML=stdout+stderr;
				if(error!==null){
				console.log('exec error:'+error)
				}
				});
	}
}

//选择路径查杀并获得所有信息
function select_virus1()
{
	
		//获取查杀路径并判断是否为空	
		var path =document.getElementById('path').value;
		if(path=="" ||path==undefined ||path==null)
		{
			path =document.getElementById('filename').value;
		}
		if(path=="" ||path==undefined ||path==null)
		{
			alert("路径不能为空！请填写你需要查杀的路径或选择需要查杀的文件！");
		}
		else
		{
			//给用户提示信息，程序正在运行
			a=document.getElementById("res3");	
			a.innerHTML="程序运行中。。。请稍等。。。";
			var expr = 'bash ./shell/select_virus1.sh ' + path;
			exec(expr,function(error,stdout,stderr){
			//将结果输出到地址为res3的位置	
					a=document.getElementById("res3");	
					a.innerHTML=stdout;
					if(error!==null){
					console.log('exec error:'+error)
					}
					});
	}
}

//选择路进查杀并将获得病毒信息
function select_virus2()
{
	
		//获取查杀路径并判断是否为空
		var path =document.getElementById('path').value;
		if(path=="" ||path==undefined ||path==null)
		{
			path =document.getElementById('filename').value;
		}
		if(path=="" ||path==undefined ||path==null)
		{
			alert("路径不能为空！请填写你需要查杀的路径或选择需要查杀的文件！");
		}
		else
		{
			//给用户提示信息，程序正在运行
			a=document.getElementById("res3");	
			a.innerHTML="程序运行中。。。请稍等。。。";
			var expr = 'bash ./shell/select_virus2.sh ' + path;
			exec(expr,function(error,stdout,stderr){
			//将结果输出到地址为res3的位置	
					a=document.getElementById("res3");	
					a.innerHTML=stdout+stderr;
					if(error!==null){
					console.log('exec error:'+error)
					}
					});
	}
}

//选择路径查杀并将病毒文件删除
function select_virus3()
{

		//获取查杀路径并判断是否为空
		var path =document.getElementById('path').value;
		if(path=="" ||path==undefined ||path==null)
		{
			path =document.getElementById('filename').value;
		}
		if(path=="" ||path==undefined ||path==null)
		{
			alert("路径不能为空！请填写你需要查杀的路径或选择需要查杀的文件！");
		}
		else
		{
			//给用户提示信息，程序正在运行
			a=document.getElementById("res3");	
			a.innerHTML="程序运行中。。。请稍等。。。";
			var expr = 'bash ./shell/select_virus3.sh ' + path;
			exec(expr,function(error,stdout,stderr){
			//将结果输出到地址为res3的位置	
					a=document.getElementById("res3");	
					a.innerHTML=stdout+stderr;
					if(error!==null){
					console.log('exec error:'+error)
					}
					});
		}
}

//选择路径查杀并将结果输入到文件
function select_virus4()
{
	
		//获取查杀路径并判断是否为空
		var path =document.getElementById('path').value;
		if(path=="" ||path==undefined ||path==null)
		{
			path =document.getElementById('filename').value;
		}
		if(path=="" ||path==undefined ||path==null)
		{
			alert("路径不能为空！请填写你需要查杀的路径或选择需要查杀的文件！");
		}
		else
		{
			//给用户提示信息，程序正在运行
			a=document.getElementById("res3");	
			a.innerHTML="程序运行中。。。请稍等。。。";
			var expr = 'bash ./shell/select_virus4.sh ' + path;
			exec(expr,function(error,stdout,stderr){
			//将结果输出到地址为res3的位置	
					a=document.getElementById("res3");	
					a.innerHTML=stdout;
					if(error!==null){
					console.log('exec error:'+error)
					}
					});
		}
}

