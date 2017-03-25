#########################################################################
# File Name: all_virus.sh
# Author: chenzhu
# mail: 799940053@qq.com
# Created Time: 2014年07月16日 星期三 08时34分55秒
#########################################################################
#!/bin/bash
#判断密码是否正确
echo $1 | sudo -S echo "" 2> /dev/null
#判断上一条命令是否执行成功
if [ $? == 0 ]
then
#更改可执行文件的权限
	sudo chmod 777 ./execute/clamscan
#执行查杀,输出倒数9行
	 ./execute/clamscan --remove -r / | tail -9
	if [ $? != 0 ]
	then
		echo "查杀失败，请重试！"
	fi
else
	echo "密码输入错误！"
fi
