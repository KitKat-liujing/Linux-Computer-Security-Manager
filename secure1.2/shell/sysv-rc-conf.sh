#!/bin/bash
#安装sysv-rc-conf
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then
        sudo -S apt-get -y install sysv-rc-conf > /dev/null
	if [ $? == 0 ]; then
		echo "sysv-rc-conf安装成功！"
	else 
		echo "sysv-rc-conf安装失败！"
	fi
else 
	echo "密码输入错误！"
fi
