#########################################################################
# File Name: run.sh
# Author: liujing
# mail: 2510034575@qq.com
# Created Time: 2014年08月17日 星期日 17时20分32秒
#########################################################################
#!/bin/bash
gcc login.c -o login -I/usr/include/mysql -L/usr/lib -lmysqlclient
gcc register.c -o register -I/usr/include/mysql -L/usr/lib -lmysqlclient
