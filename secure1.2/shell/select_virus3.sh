#########################################################################
# File Name: select_virus.sh
# Author: chenzhu
# mail: 799940053@qq.com
# Created Time: 2014年07月16日 星期三 09时03分21秒
#########################################################################
#!/bin/bash
#输入密码

#更改可执行文件的权限
	chmod 777 ./execute/clamscan
#执行查杀，删除有病毒的文件
	 ./execute/clamscan --remove -r $1
#判断查杀是否成功
	if [ $? != 0 ]
	then
		echo "查杀失败，请重新查杀！"
	else
		echo "病毒文件已删除！"
	fi

