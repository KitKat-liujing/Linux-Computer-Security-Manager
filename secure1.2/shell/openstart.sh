#!/bin/bash
#打开不自启动项

#统计有多少不自启动项
n=$(cat ./shell/result5 | wc -l)
#检测输入的不自启动项编号是否存在
if [ $1 -gt 0 -a $1 -le $n ]; then
	#获取输入编号对应的不自启动项
	a=$(cat ./shell/result5 | awk 'NR=='$1'{print $2}')
	#把不自启动项名字中的K替换为S
	b=${a/K/S}
	#把K开头的不自启动项名字重命名为S开头的，此时不自启动项就变成了自启动项
	echo $2 | sudo -S mv $a $b
	#判断上一条重命名的命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ]; then
		echo "开启成功！"
	else
		echo "开启失败！"
	fi
else
	echo "输入编号错误！"
fi
exit 0
