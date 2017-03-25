#!/bin/bash
#删除缩略图缓存
rm ~/.cache/thumbnails/*/*.png
#判断上一条命令是否执行成功，并输出相关提示信息
if [ $? == 0 ];then
	echo "缩略图缓存删除成功！"
else
	echo "所有缩略图缓存已删除！"
fi
