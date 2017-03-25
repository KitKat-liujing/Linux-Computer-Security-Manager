#!/bin/bash
a=`arp |grep :|awk NR==1'{print $1}'`
#判断密码
#验证输入的用户名密码是否正确，并把错误信息重定向到垃圾桶里
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then

	#查看arp记录
	n=$(arp | grep :|wc -l)
	if [ $n -eq 0 ]
	then
		echo "开启失败"
	else

		echo $1 |sudo -S arp -d $a
		if [ $? -eq 0 ]
		then 
			#逐个开启arp防火墙
			for((m=1;m<=$n;m++))
			do
				a=`arp |grep :|awk NR==$m'{print $1}'`
				b=`arp |grep :|awk NR==$m'{print $3}'`
				#将地址和硬件地址写入到ip-mac文件中
				echo ''$a' '$b''>ip-mac
				echo $1 |sudo -S cp ip-mac /etc/ip-mac >/dev/null
				#从文件中读取新纪录
				echo $1	|sudo -S arp -f /etc/ip-mac >/dev/null
			done
			echo "ARP防火墙已开启"
		fi
	fi
else
	echo "密码输入错误"
fi
