# Mystic Daily

Mystic Daily 是一款每日塔罗、卢恩符文与小六壬灵感工具。本仓库同时包含 Google Chrome 扩展和 iOS / Android App。

## 普通用户：直接下载

### Android 手机

**[点击下载 Mystic Daily Android 安装包（APK）](https://github.com/Tina2026-Art/mystic-daily/releases/download/v1.0.0/Mystic-Daily-Android-v1.0.0.apk)**

也可以用 Android 手机扫描二维码下载：

![Mystic Daily Android APK 下载二维码](docs/android-download-qr.png)

下载后打开 APK，根据手机提示允许“安装未知应用”并完成安装。该文件是测试签名版本，Android 可能显示安全提醒。

### Google Chrome 浏览器

**[点击下载 Mystic Daily Chrome 扩展 ZIP](https://github.com/Tina2026-Art/mystic-daily/releases/download/v1.0.0/mystic-daily-chrome-extension-v8.5.0.zip)**

Chrome 不允许从普通网站直接一键安装非商店扩展。下载并解压后，需要在 `chrome://extensions/` 开启“开发者模式”，再选择“加载已解压的扩展程序”。详细图文步骤见 [`USER_GUIDE.md`](USER_GUIDE.md)。

### iPhone / iPad

当前没有可直接安装的 iOS 包。iPhone 版本需要 Apple Developer 签名并通过 TestFlight 或 App Store 分发。

## 版本

- [`chrome-extension/`](chrome-extension/)：Google Chrome Extension（Manifest V3）
- [`mobile-app/`](mobile-app/)：基于 Capacitor 8 的 iOS / Android App

所有抽牌、记录和问题默认只保存在用户设备本地。内容仅用于娱乐、自我观察和文化体验，不构成医疗、法律或财务建议。

完整安装与操作说明见 [`USER_GUIDE.md`](USER_GUIDE.md)。

## 安装 Chrome 扩展

1. 下载本仓库或 Release 中的 Chrome 扩展压缩包并解压。
2. 打开 `chrome://extensions/`。
3. 开启“开发者模式”。
4. 点击“加载已解压的扩展程序”，选择 `chrome-extension/` 文件夹。

## 运行手机 App

```bash
cd mobile-app
npm install
npm test
npm run sync
```

然后运行 `npm run open:android` 或 `npm run open:ios`。

## 使用数据

GitHub 仓库的 Insights 可查看页面访问与 clone 数量，Release 页面可查看安装包下载次数。它们不等于实际使用次数。

若要统计真实使用事件，需要接入一个由项目所有者控制的匿名统计端点。接入前必须同步更新 [`PRIVACY.md`](PRIVACY.md)，并且不得上传用户输入、占卜问题、每日记录、抽牌结果或其他个人内容。

## 隐私

请阅读 [`PRIVACY.md`](PRIVACY.md)。当前公开版本没有启用远程分析。

## 许可

Copyright (c) 2026 Mystic Daily. All rights reserved. 未经明确许可，不授予复制、修改或再分发源代码的权利。
