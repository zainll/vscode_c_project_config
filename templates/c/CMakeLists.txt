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
FILE(GLOB SOURCE "*.c")

#LIST(REMOVE_ITEM SOURCE ${CMAKE_CURRENT_SOURCE_DIR}/Main.cpp)
LIST(REMOVE_ITEM SOURCE ${CMAKE_CURRENT_SOURCE_DIR}/main.c)

ADD_COMPILE_OPTIONS("-g")
ADD_COMPILE_OPTIONS("-Wall")

#ADD_LIBRARY(addTwoNum ${SOURCE})
#add_subdirectory(src)
#add_library(addTwoNum addTwoNum.c)
link_libraries(${CMAKE_CURRENT_SOURCE_DIR}/../lib)
link_directories(${LINK_DIR})
ADD_LIBRARY(addTwoNum ${SOURCE})

#TARGET_INCLUDE_DIRECTORIES(addTwoNum PUBLIC "${INCLUDE}")
#ADD_EXECUTABLE(main ${CMAKE_CURRENT_SOURCE_DIR}/Main.cpp)
ADD_EXECUTABLE(main ${CMAKE_CURRENT_SOURCE_DIR}/main.c)
#TARGET_LINK_LIBRARIES(main addTwoNum)
#target_link_libraries(main PRIVATE addTwoNum)
TARGET_LINK_LIBRARIES(main addTwoNum zlog)
