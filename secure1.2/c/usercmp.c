/*************************************************************************
    > File Name: usercmp.c
    > Author: chenzhu
    > Mail: 799940053@qq.com
    > Created Time: 2014年07月16日 星期三 21时54分12秒
 ************************************************************************/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main(int argc,char *argv[])
{
	FILE *fp,*fp1;
	char *line=NULL;
	size_t len = 0;
	ssize_t read;
//判断命令行参数
	if(argc != 4)
	{
		printf("用户依旧是黑名单，重新移除！");
	}
//以追加的形式打开文件
	fp = fopen(argv[1],"a+");
	if(fp == NULL)
	{
		printf("用户依旧是黑名单，重新移除！");
	}
//以追加写的形式打开文件
	if((fp1 = fopen(argv[2],"w+")) == NULL)
	{
		
		printf("用户依旧是黑名单，重新移除！");
	}
//读文件
	while((read = getline(&line,&len,fp)) != -1)
	{
		strcat(argv[3],"\n");
//字符串比较
		if(strcmp(argv[3],line) != 0)
		{
//写入文件

			fwrite(line,strlen(line),1,fp1);
		}
	}
//关闭文件
		fclose(fp);
		fclose(fp1);
	
}
