#!/bin/bash

echo $1 | sudo -S grep "Suggestion" /var/log/lynis.log #从/var/log/lynis.log查找匹配"Suggestion"的的内容


