#!/bin/bash

 ethtool wlan0 | grep "Link detected: yes" > /dev/null #判断是否是无线网

	if [ $? -eq 0 ] #判断网卡
	then
		eth=wlan0
	else
		eth=eth0
   	 fi
        #求出一秒前后流量的差值,作为这一秒的下载网速, 从/proc/net/dev文件中.
	RXpre=$(cat /proc/net/dev | grep $eth | tr : " " | awk '{print $2}')
	sleep 1
	RXnext=$(cat /proc/net/dev | grep $eth | tr : " " | awk '{print $2}')

	RX=$((${RXnext}-${RXpre}))

	 #流量单位转换
	if [[ $RX -lt 1024 ]];then
	RX="${RX}B/s"
	elif [[ $RX -gt 1048576 ]];then
	RX=$(echo $RX | awk '{print $1/1048576 "MB/s"}')
	else
	RX=$(echo $RX | awk '{print $1/1024 "KB/s"}')
	fi	
        #输出下载速度
	echo -e "$RX"     


#	done
