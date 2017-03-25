#删除firefox的表单历史
#!/bin/bash
#找到后缀为.default的文件夹路径
path=`find ~/.mozilla/firefox -type d -name "*.default"`
#进入找到的路径
cd $path
#删除表单历史
rm formhistory.sqlite > /dev/null
#判断上一条命令是否执行成功，并输出相关提示信息
if [ $? == 0 ]; then
	echo "表单历史删除成功！"
else
	echo "所有表单历史已删除！"
fi
