#########################################################################
# File Name: user.sh
# Author: chenzhu
# mail: 799940053@qq.com
# Created Time: 2014年07月16日 星期三 20时30分54秒
#########################################################################
#!/bin/bash

#获得当前系统的普通用户名
cat /etc/passwd | awk -F: '$3>=500' | cut -f 1 -d : > user
#判断上条命令是否成功
if [ $? != 0 ]
then
	echo "普通用户加载失败！"
else

#不显示当前用户名
	for line in $(cat user)
	do
		if [ "$line" = "$(whoami)" ]
		then
			continue
		else
			echo $line
		fi
	done
fi
#cat -n user
#删除文件
rm user
