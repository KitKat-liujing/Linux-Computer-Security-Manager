var sys = require('sys');
var exec = require('child_process').exec; 
//登陆
function login()
{
//获取用户名和密码
	var username=document.getElementById('username').value;
	var pwd=document.getElementById('pwd').value;
//判断用户名和密码是否为空
	if(username =="" ||username == undefined ||username == null)
		alert("用户名不能为空！");
	else
	{
		if(pwd =="" ||pwd == undefined ||pwd == null)
			alert("密码不能为空！");
		else
		{
			//密码不为空时执行shell脚本实现登陆功能
			var expr = 'bash ./shell/login.sh ' + username + ' ' + pwd;
			exec(expr,function(error,stdout,stderr){
				//将输出结果显示在屏幕中
				b=document.getElementById("statePG");
				b.innerHTML=stdout;
				//判断登陆信息
				var res=stdout;
				if(res == "load successfully!\n")
				{
					//如果登陆成功则跳转页面
					window.location.href="main.html";
				}	
				if(error!==null){
					console.log('exec error:'+error)
				}
			});

		}
	}
}

//点击按钮触发弹出窗口
function openwin2() { 
	window.open ("register.html", "newwindow", "height=300, width=400, toolbar= no, menubar=no, scrollbars=no, resizable=yes, location=no, status=no,top=0");

} 
//注册
function register()
{
//获取注册名和密码
	var username=document.getElementById('newuser').value;
	var pwd1=document.getElementById('fir_pwd').value;
	var pwd2=document.getElementById('sec_pwd').value;
//判断用户名和密码是否为空
	if(username =="" ||username == undefined ||username == null)
		alert("用户名不能为空！");
	else
	{
		if(pwd1 =="" ||pwd1 == undefined ||pwd1 == null)
			alert("密码不能为空！");
		else
		{
//判断两次输入密码是否相同
			if(pwd1 != pwd2)
				alert("密码输入错误,请重新输入!");
			else
			{
//将用户插入数据库
				var expr = 'bash ./shell/register.sh ' + username + ' ' + pwd1;
				exec(expr,function(error,stdout,stderr){
					var res=stdout;
					//判断是否注册成功
					if(res == "1\n")
						alert("用户已存在，请重新输入!");
					else if(res == "0\n")
						alert("注册成功，请返回登陆!");
				if(error!==null){
					console.log('exec error:'+error)
				}
			});
		}
	}
}
}



