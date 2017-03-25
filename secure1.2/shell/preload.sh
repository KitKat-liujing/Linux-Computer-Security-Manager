#安装preload
#!/bin/bash
#验证密码是否正确
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then
	sudo -S apt-get -y install preload > /dev/null
	if [ $? == 0 ]; then
		echo "preload安装完成！"
	else
		echo "preload安装失败！"
	fi
else 
	echo "密码输入错误！"
fi
