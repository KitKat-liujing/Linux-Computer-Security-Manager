var sys = require('sys');
var exec = require('child_process').exec;

//获得普通用户名并显示到屏幕
function Get_user()
{
//执行shell脚本，获取用户名
	var expr = 'bash ./shell/user.sh';
	exec(expr,function(error,stdout,stderr){
		//将标准输出输出到地址为“res”的地方	
		a=document.getElementById("res");	
		a.innerHTML=stdout;
		if(error!==null){
			console.log('exec error:'+error)
		}
	});
}

//用户加入到黑名单
function Add_blackuser()
{
	//获得用户输入的密码
	var passwd=document.getElementById('passwd').value;
	//判断密码是否为空
	if(passwd =="" ||passwd==undefined ||passwd==null)
		alert("密码不能为空！");
	else
	{
	//获取用户名
		var user =document.getElementById('user').value;
        //判断用户名是否为空
		if(user =="" ||user==undefined ||user==null)
			alert("填入想要加入黑名单的用户！");
		else
		{
			//执行shell脚本并将标准结果输出
			var expr = 'bash ./shell/Add_blackuser.sh ' + passwd + ' ' + user;
			exec(expr,function(error,stdout,stderr){	
			//将结果输出到地址为res1的位置
				a=document.getElementById("res1");	
				a.innerHTML=stdout;
				if(error!==null){
					console.log('exec error:'+error)
				}
			});
		}
	}
}

//将黑名单用户移出
function Del_blackuser()
{
	//获得用户输入的密码
	var passwd=document.getElementById('passwd1').value;
	//判断密码和用户名是否为空
	if(passwd =="" ||passwd==undefined ||passwd==null)
		alert("密码不能为空！");
	else
	{
		var user =document.getElementById('re_user').value;
		if(user =="" ||user==undefined ||user==null)
			alert("填入想要移除的黑名单的用户名！");
		else
		{
			//执行shell脚本并将标准结果输出
			var expr = 'bash ./shell/Del_blackuser.sh ' + passwd + ' ' + user;
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
}

//删除黑名单用户
function kill_blackuser()
{
	//获得用户输入的密码
	var passwd=document.getElementById('passwd2').value;
	//判断密码和用户名是否为空
	if(passwd =="" ||passwd==undefined ||passwd==null)
		alert("密码不能为空！");
	else
	{
		var user =document.getElementById('kil_user').value;
		if(user =="" ||user==undefined ||user==null)
			alert("填入想要删除的黑名单的用户名！");
		else
		{
			//执行shell脚本并将标准结果输出
			var expr = 'bash ./shell/kill_blackuser.sh ' + passwd + ' ' + user;
			exec(expr,function(error,stdout,stderr){
			//将结果输出到地址为res4的位置	
				a=document.getElementById("res4");	
				a.innerHTML=stdout+stderr;
				if(error!==null){
					console.log('exec error:'+error)
				}
			});
		}
	}
}

//实时更新页面的显示结果
function New_blackuser()
{
	var expr = 'cat ./userInfo';
	exec(expr,function(error,stdout,stderr){
		//将结果输出到地址为res2的位置	
		a=document.getElementById("res2");	
		a.innerHTML=stdout;
		if(error!==null){
			console.log('exec error:'+error)
		}
	});
}



