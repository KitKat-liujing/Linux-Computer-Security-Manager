#!/bin/bash
#卸载preload
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then
	sudo -S dpkg -P preload > /dev/null
	if [ $? == 0 ]; then
		echo "preload卸载成功！"
	else 
		echo "preload卸载失败！"
	fi
else 
	echo "密码输入错误！"
fi
