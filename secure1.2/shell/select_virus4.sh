#########################################################################
# File Name: select_virus.sh
# Author: chenzhu
# mail: 799940053@qq.com
# Created Time: 2014年07月16日 星期三 09时03分21秒
#########################################################################
#!/bin/bash


#更改可执行文件权限
	 chmod 777 ./execute/clamscan
#获取当前用户名
	user=$(who | awk '{print $1}' | sort -u)
#执行查杀，将结果放到当前家目录下
	 ./execute/clamscan -l /home/$user/new_file -r $1 > /dev/null
#判断查杀是否成功
	if [ $? == 0 ]
	then
		 chmod 777 new_file
#输出提示信息
		echo "查杀信息已放到你当前家目录的new_file中，你可以打开查看了！"
	else
		echo "查杀失败，请重新查杀！"
	fi

