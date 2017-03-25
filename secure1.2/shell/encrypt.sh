#!/bin/bash
#文件名作为命令行参数
if [ `grep $1 ./out/encrypt.log` ]  #如果加密日志中有该文件名
then
	echo "该文件已经加密，不能重复加密"  #打印错误信息
else                  #如果加密日志中没有该文件名，进行加密操作
	chmod 777 ./execute/encrypt
        ./execute/encrypt $1                        #运行decrypt.c
	if [ $? == 0 ]                       #如果运行成功
	then
		echo $1 >> ./out/encrypt.log     #把文件名写入加密日志中
		echo "加密完成，原来的文件已经变了，去看看吧～"  #并打印加密成功信息 
	else                                    #如果运行失败
		echo "阿啦，出错了，再试一次吧"  #打印出错误信息
	fi
fi
