# 包管理

## winget
CLI 版的 Microsoft Store
安装
使用
winget search
winget install
winget list
卸载

## scoop
指定目录
```bash
$env:SCOOP='D:\Scoop'
[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
````
[scoop](https://scoop.sh/)

使用

添加必要的库：
```bash
scoop bucket add extras

scoop search
scoop list
scoop install <appname>
```
