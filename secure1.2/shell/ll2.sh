#!/bin/bash
sleep 1
ethtool wlan0 | grep "Link detected: yes" > /dev/null #判断网卡类型

	if [ $? -eq 0 ]
	then
		eth=wlan0  #确定网卡
	else
		eth=eth0
   	 fi
   
a=`ifconfig $eth | awk -F"[()]" NR==8'{print $2}'` #修改分隔符,并得出下载总流量

echo -e "$a"
