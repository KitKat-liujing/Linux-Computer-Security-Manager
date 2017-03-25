#########################################################################
# File Name: clamav.sh
# Author: chenzhu
# mail: 799940053@qq.com
# Created Time: 2014年07月14日 星期一 17时30分42秒
#########################################################################
#!/bin/bash
cd ../clamav-0.94
groupadd clamav
useradd -g clamav -s /bin/false -d /dev/null clamav
./configure
make
make check
make install
make clean
