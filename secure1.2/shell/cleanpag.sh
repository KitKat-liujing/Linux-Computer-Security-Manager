#清理孤立的包
#!/bin/bash
#验证密码是否正确
echo $1 | sudo -S echo "" 2> /dev/null
#判断上一条命令是否执行成功
if [ $? == 0 ];then
	#清理孤立包
	sudo -S apt-get -y install deborphan -y > /dev/null
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ];then
		echo "孤立包清理成功！"
	else
		echo "清理失败,请重试！"
	fi
else 
	echo "密码输入错误！"
fi


