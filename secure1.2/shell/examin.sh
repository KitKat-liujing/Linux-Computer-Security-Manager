#!/bin/bash

echo $1 | sudo -S echo "" 2> /dev/null #获取密码

if [ $? == 0 ]  #判断上条命令是否执行正确
then
	echo $1 | sudo -S lynis -Q > /dev/null #使用lynis审计工具多电脑体检
	if [ $? = 0 ]  #体检结果判断
	then 
		echo "体检完成"
	fi
else
	echo "密码错误"
fi
 









