#########################################################################
# File Name: del_clamav.sh
# Author: liujing
# mail: 2510034575@qq.com
# Created Time: 2014年08月16日 星期六 17时36分20秒
#########################################################################
#!/bin/bash
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ]
then
	sudo rm /usr/lib/libclamav.so.6
	sudo rm -r /var/lib/clamav
	echo "卸载成功！"
else
	echo "密码输入错误！"
fi
