#include <stdio.h>
#include"AddTwoNumber.h"
#include "zlog.h"

int initZlog()
{
	int rc;
	//rc = dzlog_init("test_default.conf", "my_cat");
	rc = dzlog_init("use_zlog.conf", "my_cat");
	//rc = dzlog_init(NULL, "my_cat");
	if (rc) {
		printf("init failed\n");
		return -1;
	}
    return 0;
}

int main()
{
	initZlog();

	zlog_category_t *zc = zlog_get_category("my_cat");
	printf("Hello World!\n");
	int a = 2;
	int b = 3;
	int c = addTwoNumber(a, b);
	printf("c = %d\n", c);
	
	zlog_info(zc, "hello zlog.\r");
	
	zlog_fini();
	return (0);
}