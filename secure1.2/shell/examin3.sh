#!/bin/bash

echo $1 | sudo -S echo "" 2> /dev/null #获取密码

if [ $? == 0 ] #判断上条命令执行是否成功
then
	echo $1 | sudo -S apt-get -y remove lynis > /dev/null #卸载lynis
	if [ $? != 0 ]  #判断卸载是否成功
	then 
		echo "卸载失败!"
        else
		echo "卸载完成!"
	fi
else
	echo "密码错误!"
fi
