#!/bin/bash

#更改可执行文件的权限
chmod 777 ./execute/register

#执行注册用户到数据库
./execute/register $1 $2
