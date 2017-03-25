   
 	
	function ll() //获取下载速度
{
//	var sys=require("sys");
       
	var exec=require("child_process").exec;
	exec("bash shell/ll.sh",function(error,stdout,stderr){
	x=document.getElementById("demo"); //找到元素
	x.innerHTML=stdout; //改变内容
	//sys.print('stdout:'+stdout);
	//sys.print('stderr:'+stderr);
    
       
	if(error!=null)
	{
	console.log("exec error:"+error);
	}
	});
}

function ll1()  //获取上传速度
{
//	var sys=require("sys");
       
	var exec=require("child_process").exec;
	exec("bash shell/ll1.sh",function(error,stdout,stderr){
	x=document.getElementById("demo1"); //找到元素
	x.innerHTML=stdout; //改变内容
	//sys.print('stdout:'+stdout);
	//sys.print('stderr:'+stderr);
    
       
	if(error!=null)
	{
	console.log("exec error:"+error);
	}
	})
}

function ll2()  //获取下载总流量
{
//	var sys=require("sys");
       
	var exec=require("child_process").exec;
	exec("bash shell/ll2.sh",function(error,stdout,stderr){
	x=document.getElementById("demo2"); //找到元素
	x.innerHTML=stdout; //改变内容
	//sys.print('stdout:'+stdout);
	//sys.print('stderr:'+stderr);
    
       
	if(error!=null)
	{
	console.log("exec error:"+error);
	}
	})
}

function ll3()  //获取上传总流量
{
//	var sys=require("sys");
       
	var exec=require("child_process").exec;
	exec("bash shell/ll3.sh",function(error,stdout,stderr){
	x=document.getElementById("demo3"); //找到元素
	x.innerHTML=stdout; //改变内容
	//sys.print('stdout:'+stdout);
	//sys.print('stderr:'+stderr);
    
       
	if(error!=null)
	{
	console.log("exec error:"+error);
	}
	})
}

function ll4()  //悬浮窗口模块
{
       var sys=require("sys");
       var flag; 
	var passwd=document.getElementById('passwd').value;       
	var exec=require("child_process").exec;
	exec("bash shell/netmon.sh " + passwd,function(error,stdout,stderr){
	//x=document.getElementById("demo4"); //找到元素
	//x.innerHTML=stdout; //改变内容
	//sys.print('stdout:'+stdout);
	//sys.print('stderr:'+stderr);
        flag=stdout;
        if(flag.charCodeAt() == "密码错误".charCodeAt())
         {alert("密码错误");}

	if(error!=null)
	{
	console.log("exec error:"+error);
	}
	})
}
