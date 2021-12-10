//#include "gmock/gmock.h"
#include "gtest/gtest.h"
#include "AddTwoNumber.h"

/* using ::testing::Eq;
using ::testing::Return;

TEST(lib, Case2)
{
    int n = 3; 
    EXPECT_EQ(n, 3);
}
 */

int main(int argc, char** argv)
{
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}

TEST(testTest, add)
{
    int res = addTwoNumber(3, 2);
    //int res = 5;
    ASSERT_EQ(res, 5);
   // ASSERT_NEAR(res, 5):
}
