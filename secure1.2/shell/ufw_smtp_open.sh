#!/bin/bash
#验证输入的用户名密码是否正确，并把错误信息重定向到垃圾桶里
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then
	#开启外部访问smtp服务
	echo $1 | sudo -S ufw allow smtp > /dev/null

	echo "开启外部访问SMTP服务"
else
	echo "密码输入错误"
fi
