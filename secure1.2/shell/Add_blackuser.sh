#########################################################################
# File Name: blacklist.sh
# Author: chenzhu
# mail: 799940053@qq.com
# Created Time: 2014年07月16日 星期三 17时16分11秒
#########################################################################
#!/bin/bash
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ]
then
#判断用户是否已在黑名单中
	grep $2 userInfo
	if [ $? != 0 ]
	then
#为用户密码上锁，即加入黑名单
		sudo passwd -l $2 
		if [ $? -eq 0 ]
		then
			echo "成功加入黑名单！"	
			echo $2 >> userInfo
		else
			echo "用户不存在！"
		fi
	else
		echo "该用户已被加入黑名单！"
	fi
else
	echo "密码错误！"
fi
