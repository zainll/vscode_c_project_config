#set(CMAKE_UNITY_BUILD ON)

#include_directories(${CMAKE_CURRENT_SOURCE_DIR}/../include)
#ADD_SUBDIRECTORY(googletest EXCLUDE_FROM_ALL)
#AUX_SOURCE_DIRECTORY(. SOURCE)
#ADD_EXECUTABLE(helloTest ${SOURCE})
#TARGET_LINK_LIBRARIES(helloTest hello gtest_main gmock_main)

#ADD_TEST(NAME helloTest COMMAND helloTest)


#################################################################
cmake_minimum_required (VERSION 3.16)

set(gtest_headers "D:/OpenSoftware/gtest/include")
set(gtest_libs "D:/OpenSoftware/gtest/lib")

add_executable(test_Test Test.cpp)
target_include_directories(test_Test PUBLIC "${gtest_headers}" ${CMAKE_SOURCE_DIR}/include)

# 链接 lib 库
# 和 googletest 的库进行链接
target_link_directories(test_Test PUBLIC "${gtest_libs}")
#target_link_libraries(test_Test gtest)
target_link_libraries(test_Test addTwoNum gtest)

add_test(NAME test COMMAND test_Test)
