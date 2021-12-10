
cmake_minimum_required (VERSION 3.16) #最低要求的CMake版本
#project(CStart) # 项目名称

#include_directories (
#    ${PROJECT_SOURCE_DIR}
#    ${CMAKE_BINARY_DIR}
#)

# 头文件目录
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/../include)
# lib 库目录
link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../lib)
#SET(INCLUDE ${CMAKE_SOURCE_DIR}/include)
# 优化编译选项
set(CMAKE_UNITY_BUILD ON)

#FILE(GLOB SOURCE "*.cpp")
FILE(GLOB SOURCE "*.cpp")

LIST(REMOVE_ITEM SOURCE ${CMAKE_CURRENT_SOURCE_DIR}/main.cpp)

ADD_COMPILE_OPTIONS("-g")
ADD_COMPILE_OPTIONS("-Wall")

#ADD_LIBRARY(addTwoNum ${SOURCE})
#add_subdirectory(src)
#add_library(addTwoNum addTwoNum.c)
link_libraries(${CMAKE_CURRENT_SOURCE_DIR}/../lib)
link_directories(${LINK_DIR})
# .cpp文件单独编译成一个 lib 库
#ADD_LIBRARY(addTwoNum ${SOURCE})
ADD_LIBRARY(addTwoNum AddTwoNumber.cpp)
ADD_LIBRARY(easyLog easylogging++.cpp)

#TARGET_INCLUDE_DIRECTORIES(addTwoNum PUBLIC "${INCLUDE}")
#ADD_EXECUTABLE(main ${CMAKE_CURRENT_SOURCE_DIR}/Main.cpp)
# main.cpp 编译成一个可执行文件,因为里面包含 main 函数
ADD_EXECUTABLE(main ${CMAKE_CURRENT_SOURCE_DIR}/main.cpp)
#TARGET_LINK_LIBRARIES(main addTwoNum)
#target_link_libraries(main PRIVATE addTwoNum)
# 最后可执行文件壁画和上面的 lib 进行链接
# 如果使用了其他lib 需要加上
# ${CMAKE_SOURCE_DIR/lib/libXXXX.lib}
#TARGET_LINK_LIBRARIES(main addTwoNum)
TARGET_LINK_LIBRARIES(main addTwoNum easyLog)

# 如何在上面已有的 exe 中增加一个新的源文件,参与编译?
# 1.新建一个文件,比如 nfile.cpp
# 2.如果这个文件参与库的编译链接,将该文件添加到上面的 add_library() 参数列表的最后
# 3.如果这个文件只参与最后 exe 的编译链接,那么将其添加到上面的 add_executable() 参数列表的最后

# 谷歌新文件中要参与最后的 googletest 的测试,那么必须添加到 add_library 最后

# 如何新建一个新的可执行文件?
# 1.在 src 目录下新建一个 .cpp/.c 文件,编辑并且保存, 比如 nfile.cpp
# 2 增加一行 add_executable(nfile nefile.cpp)
# 3.重新执行 cmake build 即可

# !注意
# 1.头文件要添加到 include 目录下,如果添加到了其他目录下,务必在这里调用 include_dirctories
# 2.如果新增的文件即不被 add_library, 也不 add_executable, 那么就不会被编译




# Sample toolchain file for building for Windows
#cmake_minimum_required (VERSION 3.0) #最低要求的CMake版本
#project(CStart) # 项目名称

#set(CMAKE_SYSTEM_NAME Widnows)
#set(MINGW_PATH D:/mingw64)

# cross compliers to use for c, c++ and Fortran
#set(CMAKE_C_COMPILER ${MINGW_PATH}/bin/gcc.exe)
#set(CMAKE_CXX_COMPILER${MINGW_PATH}/bin/g++.exe)
#set(CMAKE_Fortran_COMPILER${MINGW_PATH}/bin/gfortran.ext)
#set(CMAKE_RC_COMPILER${MINGW_PATH}/bin/windres.exe)

#set(CMAKE_C_FLAGS"${CMAKE_C_FLAGS}-Wall -g")
#set(CMAKE_CXX_FLAGS"${CMAKE_CXX_FLAGS}-Wall -g")

# target environment on the build host system
#set(CMAKE_FIND_ROOT_PATH${MINGW_PATH}/mingw32)

# modify default behavior of FIND_XXX() commands
#set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
#set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
#set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)

