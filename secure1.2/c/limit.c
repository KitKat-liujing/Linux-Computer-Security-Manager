/*
 * =====================================================================================
 *
 *       Filename:  limit.c
 *
 *    Description:  把权限转化为数字形式
 *
 *        Version:  1.0
 *        Created:  2014年08月14日 20时32分57秒
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
int main(int argc,char *argv[])
{
	//规定标准的权限字符串数组，用来与得到的权限比较
	char test[9] = "rwxrwxrwx";       
	int relimit[9],finalimit[3]; 
	int i,j;
	//循环9次，对每一个权限位进行操作
	for(i=0;i<9;i++){
	    //用标准的权限字符串数组与得到的权限比较，把结果写入另一数组
		if(argv[1][i+1] == test[i])
		  switch (i%3){
			  case 0:
				  relimit[i]=4;          //读权限位置4
				  break;
			  case 1:
				  relimit[i]=2;          //写权限位置2
				  break;
			  case 2:
				  relimit[i]=1;          //操作权限位置1
				  break;
			  default:
				  break;
		  }
		else
		  relimit[i] = 0;
	}
	//循环3次，得到3位的数字权限
	for(i=0,j=0;i<9;i+=3,j++){
		//每一组的3位权限相加
		finalimit[j] = relimit[i]+relimit[i+1]+relimit[i+2];
		//输出数字权限
		printf("%d",finalimit[j]);
	}
	return 0;
}
