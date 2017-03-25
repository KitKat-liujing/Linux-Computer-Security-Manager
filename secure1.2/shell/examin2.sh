#!/bin/bash

echo $1 | sudo -S echo "" 2> /dev/null #获取密码
#echo $1 | sudo -S apt-get -y install lynis > 1.txt
if [ $? == 0 ] #判断上条命令执行是否成功
then
	echo $1 | sudo -S apt-get -y install lynis > /dev/null #安装lynis
	if [ $? != 0 ] #判断是否安装成功
	then 
		echo "安装失败!"
    else
		echo "安装完成!"
	fi
else
	echo "密码错误!"
fi
