#!/bin/bash
#密码作为命令行的第一个参数
#路径/文件名作为命令行的第二个参数

#判断文件名是否已存在于安全日志中
n=$(grep $2 ./out/safe.log | wc -l)
if [ $n != 0 ]
then
	echo "文件已在保险箱中，不能重复加入"      #如果已存在，打印出错误信息
else                                             #如果不存在
        user=$(ls -ld $2 | awk '{print $3}')        #获取文件或文件夹的所有者
        limit=$(ls -ld $2 | awk '{print $1}')       #获取文件或文件夹的权限            
	echo $1 | sudo -S chown root $2         #修改文件或文件夹的所有者为root
	if [ $? == 1 ]                             #判断是否修改成功
	then
		echo "阿啦，修改所有者出错了，注意密码是否正确"   #如果失败，打印错误信息
	else                                                  #如果成功
		echo $1 | sudo -S chmod 000 $2                 #修改文件或文件夹的权限为000
		if [ $? == 0 ]                                    #判断是否修改成功
		then                                              #如果成功
			echo -n "$2  " >> ./out/safe.log                     #将文件名写入到安全日志中
			echo -n "$user " >> ./out/safe.log                   #将最初的文件所有者写入到安全日志中
                        echo $limit >> ./out/safe.log                        #将最初的文件权限写入到安全日志中
                        echo "成功加入保险箱"                                 #并打印成功加入保险箱
		else                                                         #如果失败
			echo "阿啦，出错了，再试一次吧"                       #打印出错误信息
		fi
	fi
fi
