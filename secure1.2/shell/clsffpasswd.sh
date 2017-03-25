#删除firefox中的密码
#!/bin/bash
#找到后缀为.default的文件夹路径
path=`find ~/.mozilla/firefox -type d -name "*.default"`
#进入找的路径
cd $path
#删除firefox中的密码
rm signons.sqlite 
#判断上一条命令是否执行成功，并输出相关提示信息
if [ $? == 0 ]; then
	echo "密码删除成功！"
else
	echo "所有的密码已删除！"
fi
