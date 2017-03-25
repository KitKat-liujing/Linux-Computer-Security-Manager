#删除firefox的站点首选项
#!/bin/bash
#找到后缀为.default的文件夹路径
path=`find ~/.mozilla/firefox -type d -name "*.default"`
#进入找到的路径
cd $path
#删除站点首选项
rm content-prefs.sqlite
#判断上一条命令是否执行成功，并输出相关提示信息
if [ $? == 0 ]; then
	echo "站点首选项删除成功！"
else
	echo "所有站点首选项已删除！"
fi
