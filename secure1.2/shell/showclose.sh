#!/bin/bash
#显示开机自启动项(S开头)
if [ -n "$1" ];then
#验证输入的用户名密码是否正确，并把错误信息重定向到垃圾桶里
	echo $1 | sudo -S echo "" 2> /dev/null
	if [ $? == 0 ];then
#得到rc0.d~rc6.d、rcS.d这几个目录的路径
		filelist=`echo $1 | sudo -S find /etc -name "rc*.d"`
		for file in $filelist 
		do	
#把rc0.d~rc6.d、rcS.d这几个目录下的所有文件名定向到./shell/result3中
			find $file -name "K*" >> ./shell/result3
		done
#去除./shell/result中的重复行，并重定向到./shell/result4中
		sort -u ./shell/result3 > ./shell/result4
#删除./shell/result3
		rm ./shell/result3 
#对./shell/result4中的行数进行编号并重定向到./shell/result5
                cat -n ./shell/result4 > ./shell/result5
#把./shell/result5中的内容显示到屏幕上
		cat ./shell/result5
#删除./shell/result4
		rm ./shell/result4
	else 
		echo "密码输入错误！"
		exit 1
	fi
else
	echo "请输入当前用户密码！"
	exit 1
fi
exit 0

