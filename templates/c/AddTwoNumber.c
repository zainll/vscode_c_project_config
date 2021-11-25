#include"AddTwoNumber.h"
#include "zlog.h"

int addTwoNumber(int a, int b)
{
    int rc;
    zlog_category_t *zc;
	//rc = dzlog_init("test_default.conf", "my_cat");
	rc = dzlog_init("use_zlog.conf", "my_cat");
	//rc = dzlog_init(NULL, "my_cat");
	if (rc) {
		printf("init failed\n");
		return -1;
	}
    
    zc = zlog_get_category("my_cat");
	if (!zc) {
		printf("get cat fail\n");
		zlog_fini();
		return -2;
	}
    //zlog_info(rc, "hello zlog");
    zlog_info(zc, "hello zlog.\r");
	dzlog_info("hello, zlog.haha.\r");

	zlog_fini();
	
    int c = a + b;
    return c;
}
