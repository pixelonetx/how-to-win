# 终端

## Windows Terminal

## Powershell

### 基本导航

显示当前位置：

```powershell
Get-Location
```

列出当前目录：

```powershell
Get-ChildItem
```

常用缩写：

```powershell
pwd
ls
dir
```

进入目录：

```powershell
Set-Location D:\Code
cd D:\Code
```

返回上一级：

```powershell
cd ..
```

创建目录：

```powershell
New-Item -ItemType Directory -Path D:\Code\demo
```

删除文件：

```powershell
Remove-Item .\old.txt
```

> [!WARNING]
> `Remove-Item -Recurse` 会递归删除目录。看不懂路径时不要运行。


## CMD
