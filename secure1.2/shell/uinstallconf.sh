#!/bin/bash
#卸载sysv-rc-conf
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then
        sudo -S dpkg -P sysv-rc-conf > /dev/null
	if [ $? == 0 ]; then
		echo "sysv-rc-conf卸载成功！"
	else 
		echo "sysv-rc-conf卸载失败！"
	fi
else 
	echo "密码输入错误！"
fi
