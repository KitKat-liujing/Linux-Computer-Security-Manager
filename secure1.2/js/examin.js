	//var passwd=document.getElementById('passwd').value;	
    var passwd1,timeID,flag,flag1=1,flag2=1,flag3=1;//flag用于存放终端输出结果,timeID为函数返回值,flag1控制函数调用,flag2用于控制密码错误进度条清零,flag3用于体检完控制进度条百分百状态结束.

    function incValue() {
    var o = document.getElementById('prog1');//进度条实现函数
      
    if (o.value == 100) {
        o.value = 0;
    } else {
        o.value += 1;
    }
    
    //window.setTimeout("incValue()", 40);
  }

    function stop()
  {
    var o = document.getElementById('prog1');
    window.clearInterval(timeID);//停止函数调用
    if(flag2==0) //体检成功,结束
     {o.value = 100;}

    if(flag3==0) //密码错误,体检未完成
     {o.value = 0;}
  }
	function examin()//
{
	var sys=require("sys");
	var passwd=document.getElementById('passwd').value;
        passwd1 = passwd;
        window.setInterval("examin1()",500);
	    window.setInterval("examin4()",500);
        if(flag1==1)
        {timeID=window.setInterval("incValue()",40);}
         flag1=0;
	var exec=require("child_process").exec;
        
	exec("bash shell/examin.sh " + passwd,function(error,stdout,stderr){
	//x=document.getElementById("demo1"); //找到元素
	//x.innerHTML=stdout; //改变内容
	//sys.print('stdout:'+stdout);
	//sys.print('stderr:'+stderr);
        flag=stdout;
     
        if(flag.charCodeAt() == "密码错误".charCodeAt())
         {flag3=0;flag2=1;stop();flag1=1;alert("密码错误");}
       else 
         {flag2=0;flag3=1;stop();flag1=1;alert("体检完成");}      
               
	if(error!=null)
	{
	console.log("exec error:"+error);
	}
	})
        
}


	function examin1()//获取体检Warning部分模块
	{

	var exec=require("child_process").exec;

	
	exec("bash shell/examin1.sh " + passwd1,function(error,stdout,stderr){
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


	function examin2() //安装lynis模块
{
	var sys=require("sys");
	var passwd=document.getElementById('passwd').value;  
	var exec=require("child_process").exec;
        
	exec("bash shell/examin2.sh " + passwd,function(error,stdout,stderr){
	//x=document.getElementById("demo1"); //找到元素
	//x.innerHTML=stdout; //改变内容
	//sys.print('stdout:'+stdout);
	//sys.print('stderr:'+stderr);
	alert(stdout);
	if(error!=null)
	{
	console.log("exec error:"+error);
	}
	});
}

function examin3()  //卸载lynis模块
{
	var sys=require("sys");
	var passwd=document.getElementById('passwd').value;  
	var exec=require("child_process").exec;
        
	exec("bash shell/examin3.sh " + passwd,function(error,stdout,stderr){
	//x=document.getElementById("demo1"); //找到元素
	//x.innerHTML=stdout; //改变内容
	//sys.print('stdout:'+stdout);
	//sys.print('stderr:'+stderr);
	alert(stdout);
	if(error!=null)
	{
	console.log("exec error:"+error);
	}
	});
}

	function examin4()  //获取体检Sugegestion部分模块
	{

	var exec=require("child_process").exec;

	
	exec("bash shell/examin4.sh " + passwd1,function(error,stdout,stderr){
	x=document.getElementById("demo4"); //找到元素
	x.innerHTML=stdout; //改变内容
	//sys.print('stdout:'+stdout);
	//sys.print('stderr:'+stderr);
    
	if(error!=null)
	{
	console.log("exec error:"+error);
	}
	});
        
     
}





