/*
 * =====================================================================================
 *
 *       Filename:  decrypt.c
 *
 *    Description:  数据解密
 *
 *        Version:  1.0
 *        Created:  2014年07月14日 15时08分37秒
 *       Revision:  none
 *       Compiler:  gcc
 *
 *         Author:  cassiopeia (), lovemax_tvfxq@126.com
 *   Organization:  
 *
 * =====================================================================================
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc,char *argv[])    //文件名作为命令行参数
{
	FILE *fp;
	int i,num;
	char buffer[1024] = {0};      //定义缓冲区并初始化为0
	
	//打开要解密的文件
	if((fp = fopen(argv[1],"r")) == NULL){    //以只读方式打开
		printf("error open\n");               //若未正确打开，打印error open
		exit(1);                              //并错误退出
	}
	num=fread(buffer,1,sizeof(buffer),fp);    //读出文件内容
	fclose(fp);                               //关闭文件
	
	//(为了替换原始文件的内容，我在这里先以只读方式打开文件，把文件内容读到缓冲区中，关闭文件)
	//(再重新以只写方式打开文件，对缓冲区中的内容进行减5解密，并把新的内容写入到文件中)
	
	fp = fopen(argv[1],"w");            //重新以只写方式打开文件  
	for(i=0;i<num-1;i++){
		buffer[i] = buffer[i] - 5;      //对缓冲区内容的每一个字符进行"-5"的解密操作
	}
	fwrite(buffer,1,num,fp);           //把缓冲区中的内容写入文件
	fclose(fp);                        //关闭文件
	return 0;
}

