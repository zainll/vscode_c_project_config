@echo off
pushd .

if not exist build/src/main.exe (
	echo "main.exe not exists!"
	popd
	exit(1)
)

cd build/src

main.exe

popd
