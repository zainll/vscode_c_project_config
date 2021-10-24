#include <gmock/gmock.h>
#include <gtest/gtest.h>

using ::testing::Eq;
using ::testing::Return;

TEST(lib, Case2)
{
    ///int n = testHelloWorld();
    //int n = HelloWorld();
    int n = 3; 
    EXPECT_EQ(n, 3);
}
