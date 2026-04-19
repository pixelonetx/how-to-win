# 注册表

注册表 (Registry)，从壁纸路径到复杂的系统内核参数，一切皆在其中。


## 什么是注册表？

注册表是一个层次化的中心数据库，用于存储系统配置、用户首选项以及应用程序的设置。在 Windows 3.1 时代，系统主要依赖大量的 `.ini` 文件，但这导致了配置分散且难以管理。从 Windows 95 开始，注册表正式成为了系统的统一配置中心。

## 注册表的物理构成

注册表并不是一个单一的巨大文件，而是由多个称为 **Hives (配置单元)** 的二进制文件组成的。
它们通常存储在 `C:\Windows\System32\config\` 目录下。
用户的个性化设置则存储在 `C:\Users\<用户名>\NTUSER.DAT` 中。


## 注册表的五大根键 (Root Keys)

打开注册表编辑器 (`regedit`)，你会看到五个以 `HKEY_` 开头的根键，它们各自掌管不同的领域：

| 根键名称 | 简称 | 描述 |
| :--- | :--- | :--- |
| **HKEY_CLASSES_ROOT** | **HKCR** | 存储文件关联信息（例如双击 `.txt` 用什么打开）。 |
| **HKEY_CURRENT_USER** | **HKCU** | 存储当前登录用户的设置（壁纸、主题、应用偏好）。 |
| **HKEY_LOCAL_MACHINE** | **HKLM** | **最重要的部分**。存储硬件、驱动和系统的全局配置。 |
| **HKEY_USERS** | **HKU** | 包含所有用户配置文件的镜像。 |
| **HKEY_CURRENT_CONFIG** | **HKCC** | 存储当前启动时的硬件配置文件信息。 |


## 常见的键值类型

在注册表中，数据以“键值对”的形式存在。理解数据类型是调优的基础：

`REG_SZ`：字符串值。最常见的类型，存储路径或文本。
`REG_DWORD (32-bit)`：数值。常用于开关设置（0 代表关闭，1 代表开启）。
`REG_BINARY`：原始二进制数据。硬件组件通常使用此类型。
`REG_EXPAND_SZ`：可扩展字符串。包含变量（如 `%SystemRoot%`）。


## 常见的注册表调优

> [!WARNING]
> 危险操作警告：错误地修改注册表可能导致系统无法启动。在操作前，请务必右键点击根键选择“导出”进行备份。

1. 去除快捷方式的小箭头
路径：`HKCR\lnkfile`
操作：删除名为 `IsShortcut` 的值。

2. 强制 Windows 11 显示旧版右键菜单
如果你不喜欢 Windows 11 的新版右键菜单，可以通过以下操作找回经典菜单：
路径：`HKCU\Software\Classes\CLSID`
操作：新建项 `{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}`，在其下新建 `InprocServer32`，并将默认值设为空。

3. 修改系统版本显示信息
路径：`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion`
这里记录了你的系统构建号、版本名等所有信息，很多第三方工具就是通过读取这里来判断你的系统版本的。


## 注册表与开发

对于开发者来说，注册表是程序安装与运行的必经之路：

启动项：`HKCU\Software\Microsoft\Windows\CurrentVersion\Run` 决定了哪些程序随系统启动。
环境变量：
  * 用户变量：`HKCU\Environment`
  * 系统变量：`HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment`
卸载列表：`HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall` 存储了控制面板中显示的已安装程序列表。

## 为什么说注册表是“过时”的设计？

虽然注册表提供了统一的管理方式，但也带来了不少问题：
单点故障：注册表文件损坏可能导致整个系统崩溃。
臃肿与碎片化：软件卸载不干净会残留大量无用键值。
不可移植性：这导致了 Windows 软件很难实现真正的“绿色免安装”。

在现代开发中，越来越多的应用（如 VSCode）倾向于使用 `.json` 或 `.toml` 文件将配置保存在用户目录下，以减少对注册表的依赖。
