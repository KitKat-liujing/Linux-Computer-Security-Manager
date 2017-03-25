var sys = require('sys');
var exec = require('child_process').exec;
//按进程号杀死进程
function kill_PG()
{
	//获取进程号
	var btnPG=document.getElementById('btnPG').value;
	//提示用户是否杀死某进程
	alert("Are you sure to kill "+btnPG);
	var expr = 'bash ./shell/kill_PG.sh ' + btnPG;
	exec(expr,function(error,stdout,stderr){
	//将结果输出到地址为statePG的位置
			b=document.getElementById("statePG");
			b.innerHTML=stdout+stderr;
			if(error!==null){
			console.log('exec error:'+error)
			}
			});
}

//按进程名杀死进程
function killall_PG()
{
	//获取进程名
	var btnPG1=document.getElementById('btnPG1').value;
	//提示用户是否杀死某进程
	alert("Are you sure to kill "+btnPG1);
	var expr = 'bash ./shell/killall_PG.sh ' + btnPG1;
	exec(expr,function(error,stdout,stderr){
	//将结果输出到地址为statePG的位置
			b=document.getElementById("statePG");
			b.innerHTML=stdout+stderr;
			if(error!==null){
			console.log('exec error:'+error)
			}
			});
}
