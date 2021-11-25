@echo off
pushd .

if not exist build/src/main.exe (
	echo "main.exe not exists!"
	popd
	exit(1)
)

copy /y  lib\* build\src\

cd build/src

main.exe

popd
