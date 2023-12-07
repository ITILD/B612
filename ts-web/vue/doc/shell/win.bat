@REM 杀端口
netstat -ano | findstr 1420
@REM 根据PID
taskkill /F /PID todoPID