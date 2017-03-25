#清除最近使用文档记录
#!/bin/bash
rm ~/.local/share/recently-used.xbel
#判断上一条命令是否执行成功，并输出相关提示信息
if [ $? == 0 ]; then
	echo "最近使用文档记录删除成功！"
else
	echo "最近使用文档记录已删除！"
fi

