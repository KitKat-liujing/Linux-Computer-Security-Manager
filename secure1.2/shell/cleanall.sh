#垃圾一键清理
#!/bin/bash

#验证密码是否正确
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ];then

	#删除缩略图缓存
	rm ~/.cache/thumbnails/*/*.png
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ];then
		echo "-缩略图缓存删除成功！"
	else
		echo "-所有的缩略图缓存已删除！"
	fi


	#删除flash_cookies
	rm -rf ~/.macromedia/Flash_Player/*
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ];then
		echo "-flash cookies删除成功！"
	else
		echo "-所有的flash cookies已删除！"
	fi


	#清除最近使用文档记录
	rm ~/.local/share/recently-used.xbel
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ]; then
		echo "-最近使用文档记录删除成功！"
	else
		echo "-最近使用文档记录已删除！"
	fi


	#firefox清理
	#删除firefox中的密码
	#找到后缀为.default的文件夹路径
	path=`find ~/.mozilla/firefox -type d -name "*.default"`
	cd $path
	#删除firefox中的密码
	rm signons.sqlite 
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ]; then
		echo "-firefox中的密码删除成功！"
	else
		echo "-firefox中的密码已删除！"
	fi

	#删除firefox的cookies
	rm cookies.* 
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ]; then
		echo "-firefox的Cookies删除成功！"
	else
		echo "-firefox的Cookies已删除！"
	fi


	#删除firefox的会话恢复
	rm sessionstore.* 
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ]; then
		echo "-firefox的会话恢复删除成功！"
	else
		echo "-firefox的会话恢复已删除！"
	fi


	#删除firefox的表单历史
	rm formhistory.sqlite > /dev/null
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ]; then
		echo "-firefox的表单历史删除成功！"
	else
		echo "-firefox的表单历史已删除！"
	fi

	#删除firefox的URL历史
	rm places.sqlite 
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ]; then
		echo "-firefox的URL历史删除成功！"
	else
		echo "-firefox的URL历史已删除！"
	fi


	#删除firefox的站点首选项
	rm content-prefs.sqlite
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ]; then
		echo "-firefox的站点首选项删除成功！"
	else
		echo "-firefox的站点首选项已删除！"
	fi



	#删除回收站里的东西,并把输出信息重定向到垃圾桶里
	sudo -S rm -r $HOME/.local/share/Trash/files/* > /dev/null
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ];then
		echo "-回收站清理成功！"
	else
		echo "-回收站已清空！"
	fi

	#清理孤立包
	sudo -S apt-get -y install deborphan -y > /dev/null
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ];then
		echo "-孤立包清理成功！"
	else
		echo "X孤立包清理失败,请重试！"
	fi
	#清理所有软件缓存
	sudo -S apt-get -y clean > /dev/null
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ];then
		echo "-所有软件缓存清理成功！"
	else
		echo "X所有软件缓存清理失败,请重试！"
	fi

	# 清理旧版本的软件缓存
	sudo -S apt-get -y autoclean > /dev/null
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ];then
		echo "-旧版本软件缓存清理成功！"
	else
		echo "X旧版本软件缓存清理失败,请重试！"
	fi

	#删除系统不再使用的孤立软件
	sudo -S apt-get -y autoremove > /dev/null
	#判断上一条命令是否执行成功，并输出相关提示信息
	if [ $? == 0 ];then
		echo "-系统不再使用的孤立软件清理成功！"
	else
		echo "X系统不再使用的孤立软件清理失败,请重试！"
	fi

else 
	echo "密码输入错误！"
fi

