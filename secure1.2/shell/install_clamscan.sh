#########################################################################
# File Name: install_clamscan.sh
# Author: chenzhu
# mail: 799940053@qq.com
# Created Time: 2014年07月15日 星期二 14时57分49秒
#########################################################################
#!/bin/bash
echo $1 | sudo -S echo "" 2> /dev/null
if [ $? == 0 ]
then
#将库文件放入到/usr/lib目录下
	sudo cp ./shell/libclamav.so.6.1.20 /usr/lib/libclamav.so.6.1.20 > /dev/null
#建立连接 
	sudo ln ./shell/libclamav.so.6.1.20 /usr/lib/libclamav.so.6
#将clamav文件夹拷贝到/var/lib/中
	sudo cp -r ./shell/clamav /var/lib/
	sudo chmod 777 /var/lib/clamav
	echo "安装成功！"
else
	echo "密码输入错误！"
fi


