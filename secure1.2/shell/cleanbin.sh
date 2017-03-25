#清空回收站
#!/bin/bash
#验证密码是否正确
echo $1 | sudo -S echo "" 2> /dev/null
#判断上一条命令是否执行成功
if [ $? == 0 ];then
	#删除回收站里的东西,并把输出信息重定向到垃圾桶里
	sudo -S rm -r $HOME/.local/share/Trash/files/* > /dev/null
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ];then
		echo "回收站清理成功！"
	else
		echo "回收站已清空！"
	fi
else 
	echo "密码输入错误！"
fi


