
cmake_minimum_required (VERSION 3.0) #最低要求的CMake版本
#project(CStart) # 项目名称

#include_directories (
#    ${PROJECT_SOURCE_DIR}
#    ${CMAKE_BINARY_DIR}
#)

include_directories(${CMAKE_CURRENT_SOURCE_DIR}/../include)
link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../lib)
#SET(INCLUDE ${CMAKE_SOURCE_DIR}/include)
set(CMAKE_UNITY_BUILD ON)

#FILE(GLOB SOURCE "*.cpp")
FILE(GLOB SOURCE "*.cpp")

#LIST(REMOVE_ITEM SOURCE ${CMAKE_CURRENT_SOURCE_DIR}/Main.cpp)
LIST(REMOVE_ITEM SOURCE ${CMAKE_CURRENT_SOURCE_DIR}/main.cpp)

ADD_COMPILE_OPTIONS("-g")
ADD_COMPILE_OPTIONS("-Wall")

#ADD_LIBRARY(hello ${SOURCE})
#add_subdirectory(src)
#add_library(hello hello.c)
link_libraries(${CMAKE_CURRENT_SOURCE_DIR}/../lib)
link_directories(${LINK_DIR})
ADD_LIBRARY(hello ${SOURCE})

#TARGET_INCLUDE_DIRECTORIES(hello PUBLIC "${INCLUDE}")
#ADD_EXECUTABLE(main ${CMAKE_CURRENT_SOURCE_DIR}/Main.cpp)
ADD_EXECUTABLE(main ${CMAKE_CURRENT_SOURCE_DIR}/main.cpp)
#TARGET_LINK_LIBRARIES(main hello)
#target_link_libraries(main PRIVATE hello)
TARGET_LINK_LIBRARIES(main hello)






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

