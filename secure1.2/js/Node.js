var sys = require('sys');
var exec = require('child_process').exec;
// executes 'pylint traversepatch.py'
function progress_JK()
{
var expr = 'bash ./shell/progress.sh'
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("result");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

function progress2_JK()
{
var expr = 'bash ./shell/progress2.sh'
exec(expr,function(error,stdout,stderr){
	a=document.getElementById("result2");
	a.innerHTML=stdout;
	if(error!==null){
		console.log('exec error:'+error)
	}
});
}

