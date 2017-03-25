#!/bin/bash
#密码作为命令行的第一个参数
#路径/文件名作为命令行的第二个参数

#文件名赋值给test
test=$2
#获取文件/文件夹加入保险箱之前的所有者，并赋值给user
user=$(grep $test ./out/safe.log | awk '{print $2}')
#获取文件/文件夹加入保险箱之前的权限，并赋值给limit
limit=$(grep $test ./out/safe.log | awk '{print $3}')
#判断文件名是否已存在于安全日志中
n=$(grep $test ./out/safe.log | wc -l)
if [ $n != 0 ]
then                                         #如果已存在
	echo $1 | sudo -S chown $user $2      #修改文件或文件夹所有者为之前的用户
	if [ $? == 1 ]                                          #判断修改是否成功
	then                                                    #如果失败
		echo "阿啦，修改所有者出错了，注意密码是否正确"   #打印出错误信息
	else                                                    #如果成功
                chmod 777 ./execute/limit
                relimit=$(echo `./execute/limit $limit`)                #运行limit.c，获得对应的数字权限
                echo $1 | sudo -S chmod $relimit $2                   #修改文件或文件夹权限为最初权限
		if [ $? == 1 ]                                                    #判断修改是否成功
		then                                                              #如果失败
			echo "阿啦，修改权限出错了"                                   #打印出错误信息
		else                                                              #如果成功
			sed -i 's#'$test'#EXCLUSIVE#;/EXCLUSIVE/d' ./out/safe.log     #将文件名从安全日志中删除
			if [ $? == 0 ]                         #判断删除是否成功 
			then	
				echo "成功移出保险箱"              #如果成功，打印成功移出保险箱
			else
				echo "阿啦，出错了，再试一次吧"    #如果失败，打印出错误信息
			fi
		fi
	fi
else                                        #如果文件名不存在于安全日志中
	echo "这个文件不在保险箱中呦，不能移出" #打印出错误信息
fi
