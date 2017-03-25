#########################################################################
# File Name: kill_blackuser.sh
# Author: chenzhu
# mail: 799940053@qq.com
# Created Time: 2014年07月17日 星期四 00时35分16秒
#########################################################################
#!/bin/bash

#输入密码
echo $1 | sudo -S echo "" 2> /dev/null
#判断密码是否输入正确
if [ $? == 0 ]
then
#判断用户是否在黑名单中
	grep $2 userInfo
	if [ $? == 0 ]
	then
#删除用户
		sudo -S userdel -r $2
		if [ $? == 0 ]
		then
			sudo chmod 777 ./execute/usercmp
#在文件中删除用户信息
			./execute/usercmp userInfo new_userInfo $2
#更新userInfo中的内容
			mv new_userInfo userInfo
			echo "用户删除成功！"
		else
			echo "删除失败！"
		fi
	else
		echo "用户不在黑名单中！"
	fi
else
	echo "密码错误！"
fi

