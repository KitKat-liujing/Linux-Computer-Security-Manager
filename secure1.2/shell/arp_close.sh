#!/bin/bash
a=`arp |grep :|awk NR==1'{print $1}'`

#判断密码
#验证输入的用户名密码是否正确，并把错误信息重定向到垃圾桶里
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then
	#统计表中地址的个数
	n=$(arp |grep :|wc -l)
	if [ $n -eq 0 ]
	then 
		echo "关闭失败"
	else
		echo $1 |sudo -S arp -d $a
		if [ $? -eq 0 ]
		then 
		
		#关闭arp防火墙
		for((m=1;m<=$n;m++))
		do
			a=`arp |grep :|awk NR==$m'{print $1}'`
			#删除指定记录
			echo $1 |sudo -S arp -d $a

		done
		echo "ARP防火墙已关闭"
		fi
         fi
	 else
		echo "密码输入错误"
fi
