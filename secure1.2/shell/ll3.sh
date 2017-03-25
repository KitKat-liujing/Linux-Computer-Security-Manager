#!/bin/bash
sleep 1
ethtool wlan0 | grep "Link detected: yes" > /dev/null #判断网卡类型

	if [ $? -eq 0 ]
	then
		eth=wlan0  #确定网卡
	else
		eth=eth0
   	 fi
 
b=`ifconfig $eth | awk -F"[()]" NR==8'{print $4}'` #修改分隔符并得出上传总流量

echo -e "$b"
