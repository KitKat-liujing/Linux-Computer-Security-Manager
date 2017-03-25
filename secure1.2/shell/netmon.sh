#!/bin/bash


chmod 777 ./netmonitor/netmonitor.py #修改权限




_sudo=`which sudo`
if [ -z $_sudo ]
then
    echo "sudo is not fonud"
    exit 1
fi
echo $1 | sudo -S echo "" 2> /dev/null #判断密码是否正确

if [ $? == 0 ]
then  
  echo $1 | sudo -S apt-get -y install python-dpkt >/dev/null #安装悬浮窗工具包
  echo $1 | sudo -S apt-get -y install python-pypcap >/dev/null  
  passwd=$1
  pwdfile="$HOME/.monitor_windows.pwd"

  if [ -z $passwd ]
  then
    if [ -f $pwdfile ]
    then
      
      passwd=`cat $pwdfile`
      echo $passwd|$_sudo -S ./netmonitor/netmonitor.py &#> /dev/null & #运行python
    fi
    else
      echo $passwd > $pwdfile
      echo $passwd|$_sudo -S ./netmonitor/netmonitor.py &#> /dev/null &
  fi
else
  echo "密码错误"
fi

