#!/bin/bash
#磁盘和分区信息
echo "磁盘剩余空间"
df -hl 
echo "所有交换分区为："
swapon -s
echo "挂接的分区状态为："
mount | column -t 
exit 0

