#!/bin/bash
#验证输入的用户名密码是否正确，并把错误信息重定向到垃圾桶里
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then
	#关闭外部访问http服务
	echo $1 | sudo -S ufw deny http > /dev/null

	echo "关闭外部访问HTTP服务"
else
	echo "密码输入错误"
fi
