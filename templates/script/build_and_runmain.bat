@echo off
pushd .

call script/build.bat
call script/runmain.bat

popd
