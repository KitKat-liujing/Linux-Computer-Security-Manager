#!/bin/bash

echo $1 | sudo -S grep "Warning" /var/log/lynis.log #从/var/log/lynis.log文件中查找匹配Warning的内容

