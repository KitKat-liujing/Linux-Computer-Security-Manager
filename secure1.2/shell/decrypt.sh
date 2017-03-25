#!/bin/bash
test=$1   #把文件名赋值给test
if [ `grep $test ./out/encrypt.log` ]  #如果加密日志中有该文件名，进行解密操作 
then
	chmod 777 ./execute/decrypt
        ./execute/decrypt $1            #运行decrypt.c 
	if [ $? == 0 ]                   #如果运行成功
	then
		#打印出解密成功信息
		echo "解密完成，恢复成原来的文件了，去看看吧～"
		echo "如果文件已经打开，记得刷新，关掉重开一次就好啦～"
		sed -i 's#'$test'#EXCLUSIVE#;/EXCLUSIVE/d' ./out/encrypt.log    #并把文件名从加密日志中删掉
	else                             #如果未成功运行
		echo "阿啦，出错了，再试一次吧"  #答应错误信息 
	fi
else                                #如果加密日志中没有该文件名
	echo "这个文件还没有被加密过呦" #打印错误信息
fi
