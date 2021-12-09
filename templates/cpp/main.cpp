#include <iostream>
#include "AddTwoNumber.h"
#include "easylogging++.h"  
  
INITIALIZE_EASYLOGGINGPP

int main(int argc, char *argv[])
{
	el::Configurations conf("my_log.conf");  
    el::Loggers::reconfigureAllLoggers(conf);  
	LOG(TRACE)   << "***** trace log  *****";  
    LOG(DEBUG)   << "***** debug log  *****";  
    LOG(ERROR)   << "***** error log  *****";  
    LOG(WARNING) << "***** warning log  *****";  
    LOG(INFO)    << "***** info log  *****";  
	int a = 3;
	int b = 2;
	int c = addTwoNumber(a, b);
	std::cout << "c = %d" << c << std::endl;
	LOG(INFO) << "My first info log using default logger";  
	std::cout << "Hello world!" << std::endl;
}