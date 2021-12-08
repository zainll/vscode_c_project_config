#include"AddTwoNumber.h"
#include "zlog.h"

int addTwoNumber(int a, int b)
{

    zlog_category_t *zc = zlog_get_category("my_cat");
	if (!zc) {
		printf("get cat fail\n");
		zlog_fini();
		return -2;
	}
    //zlog_info(rc, "hello zlog");
    zlog_info(zc, "hello zlog.\r");
	dzlog_info("hello, zlog.haha.\r");
	
    int c = a + b;
    return c;
}
