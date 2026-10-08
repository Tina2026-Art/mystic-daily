# Mystic Daily 使用指南

Mystic Daily 提供 Google Chrome 扩展和 iOS / Android App 两种版本。它包含每日塔罗、卢恩符文、小六壬快速提示、文字记录和历史日历。

> 所有内容仅用于娱乐、自我观察及文化体验，不构成医疗、法律、财务或其他专业建议。

## 最快下载

- **Android：**[直接下载 APK](https://github.com/Tina2026-Art/mystic-daily/releases/download/v1.0.3/Mystic-Daily-Android-v1.0.3.apk)
- **Chrome：**[直接下载扩展 ZIP](https://github.com/Tina2026-Art/mystic-daily/releases/download/v1.0.3/mystic-daily-chrome-extension-v8.5.3.zip)
- **全部文件：**[打开 v1.0.3 下载页面](https://github.com/Tina2026-Art/mystic-daily/releases/tag/v1.0.3)

Android 用户也可以扫描下面的二维码：

![Android APK 下载二维码](docs/android-download-qr.png)

### Android 安装步骤

1. 点击 APK 下载链接，或用 Android 手机扫描二维码。
2. 下载完成后，点击通知栏或“下载”文件夹中的 APK。
3. 如果手机阻止安装，请按提示允许当前浏览器或文件管理器“安装未知应用”。
4. 返回安装页面，点击“安装”。

该 APK 是测试签名版本，系统可能显示“未知来源”或类似提醒。请只从本仓库的 Release 页面下载，并核对文件名为 `Mystic-Daily-Android-v1.0.3.apk`。

## 一、安装 Google Chrome 扩展

### 从 GitHub Release 安装

1. 打开本仓库的 **Releases** 页面。
2. 下载名称中包含 `chrome-extension` 的 ZIP 文件。
3. 双击 ZIP 解压。
4. 在 Chrome 地址栏输入 `chrome://extensions/`。
5. 打开右上角的“开发者模式”。
6. 点击“加载已解压的扩展程序”。
7. 选择刚才解压出的文件夹。

安装完成后，可在 Chrome 工具栏的扩展菜单中固定 Mystic Daily。

### 从源码安装

下载或 clone 本仓库，然后在 `chrome://extensions/` 中选择 `chrome-extension/` 文件夹。

## 二、使用每日仪式

1. 点击塔罗牌背面，生成并揭开今天的塔罗牌。
2. 点击卢恩牌背面，揭开今天的卢恩符文。
3. 查看今日主题、牌面解释和反思问题。
4. 在文本框中记录今天的感受；内容只保存在当前设备。

同一天生成的组合不会重复抽取。第二天会自动开启新的组合。

## 三、使用 Ask Mystic

1. 点击 **Ask Mystic**。
2. 在心里或输入框中准备一个能用“是 / 否”回答的问题。
3. 点击“以此刻起卦”。

每天最多使用三次。问题和结果不会加入历史记录。

## 四、查看与删除历史记录

- 点击“历史”或“View all”打开月历。
- 有记录的日期可以点击查看详情。
- 点击“清空所有本地记录”可删除设备上的全部 Mystic Daily 记录。

删除操作无法撤销。

## 五、运行手机 App 源码

需要 Node.js、Android Studio 或 Xcode。

```bash
git clone https://github.com/Tina2026-Art/mystic-daily.git
cd mystic-daily/mobile-app
npm install
npm test
npm run sync
```

Android：

```bash
npm run open:android
```

iOS（仅 macOS）：

```bash
npm run open:ios
```

Android 发布包需要开发者自己的签名密钥；iOS 发布需要 Apple Developer 账号和签名证书。

## 六、数据与隐私

- 当前公开版本不要求注册账号。
- 当前公开版本不启用远程分析或广告追踪。
- 抽牌、问题和文字记录不会发送到 GitHub。
- 清除浏览器扩展数据、移除扩展、清除 App 数据或卸载 App 会删除对应的本地记录。

详细信息见 [`PRIVACY.md`](PRIVACY.md)。

## 七、更新与卸载

### Chrome 扩展

- 更新：下载新版，替换旧文件夹后在 `chrome://extensions/` 点击刷新。
- 卸载：在 `chrome://extensions/` 找到 Mystic Daily，点击“移除”。

### 手机 App

- 更新：重新构建并安装新版本。
- 卸载：按照 iOS 或 Android 的常规卸载方式操作。

## 八、常见问题

### 为什么每天不能重新抽牌？

产品设计为“一天一组提示”，同一天会读取已保存在本机的组合。

### 换电脑或手机后，记录会同步吗？

不会。当前版本没有账号系统和云同步。

### GitHub 会保存我的占卜内容吗？

不会。GitHub 仅托管公开源代码和发行文件。

### 如何反馈问题？

请在仓库的 **Issues** 页面提交问题，描述设备、系统版本、使用版本和复现步骤。不要粘贴私人日记、问题内容或其他敏感信息。
