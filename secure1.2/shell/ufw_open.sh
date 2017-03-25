#!/bin/bash
#验证输入的用户名密码是否正确，并把错误信息重定向到垃圾桶里
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then
	#打开防火墙
	echo $1 | sudo -S ufw enable > /dev/null
	echo "防火墙已开启"
else
	echo "密码输入错误"
fi
