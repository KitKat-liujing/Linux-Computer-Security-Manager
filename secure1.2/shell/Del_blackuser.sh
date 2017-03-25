#########################################################################
# File Name: Del_blackuser.sh
# Author: chenzhu
# mail: 799940053@qq.com
# Created Time: 2014年07月16日 星期三 19时26分35秒
#########################################################################
#!/bin/bash
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ]
then
#判断用户是否在黑名单中
	grep $2 userInfo
	if [ $? == 0 ]
	then
#为用户密码解锁，即移出黑名单
		sudo passwd -u $2
		if [ $? -eq 0 ]
		then		
			sudo chmod 777 ./execute/usercmp
#执行c语言删除文件中的用户名
			./execute/usercmp userInfo new_userInfo $2
			if [ $? != 0 ]
			then
				echo "用户还在黑名单中，请重新移出！"
			fi
#更新userInfo里面的内容
			mv new_userInfo userInfo
			echo "黑名单解除成功！"	

		else
			echo "还是在黑名单中，请重试！密码输入错误！"
		fi
	else
		echo "该用户不在黑名单中！"
	fi
else
	echo "密码错误！"
fi
