var sys = require('sys');
var exec = require('child_process').exec;

//对文件的操作
function filecopy1()
{
//获得文件路径
var fileid1 = document.getElementById("fileid1").value;
//获得备份路径
var addr1 = document.getElementById("addr1").value;
//执行脚本，备份文件
var expr = "bash ./shell/filecopy.sh "+fileid1+" "+addr1;
exec(expr,function(error,stdout,stderr){
        //结果推送到屏幕上
	a=document.getElementById("file1");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

//对文件夹的操作
function filecopy2()
{
//获得文件夹路径
var fileid2 = document.getElementById("fileid2").value;
//获得备份路径
var addr2 = document.getElementById("addr2").value;
//执行脚本，备份文件夹
var expr = "bash ./shell/filecopy.sh "+fileid2+" "+addr2;
exec(expr,function(error,stdout,stderr){
        //结果推送到屏幕上
	a=document.getElementById("file2");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}


