# Mystic Daily Mobile

Mystic Daily 的 iOS / Android 独立 App 工程。当前版本完整保留 Chrome 插件的每日塔罗、卢恩、小六壬、文字记录、历史日历、正逆位和点击翻牌逻辑，并将数据存储改为手机本地存储。

## 工程信息

- App 名称：Mystic Daily
- 版本：1.0.0（versionCode / build 1）
- 暂定 Bundle ID / Application ID：`com.mysticdaily.ritual`
- 技术栈：Capacitor 8 + 原生 iOS / Android 容器
- Android：minSdk 24，targetSdk 36
- 数据：仅保存在设备本地
- 权限：不申请相机、定位、麦克风、照片、通讯录或网络权限

## 目录

- `www/`：跨平台 App UI 与 78 张塔罗牌素材
- `android/`：Android Studio / Gradle 工程
- `ios/`：Xcode 工程
- `resources/`：应用图标与启动页源文件
- `PRIVACY.md`：隐私政策草稿，上架前需补充公开联系邮箱并发布到可公开访问的网址

## 本地运行

```bash
npm install
npm run sync
npm run open:android
npm run open:ios
```

Android 发布包需要使用开发者自己的 upload key 签名。iOS 安装包需要完整 Xcode、Apple Developer 账号和对应签名证书。

## 验证

```bash
npm test
```

自动测试覆盖：首次启动、本地日期、塔罗点击翻牌、卢恩解锁、卢恩翻牌、解读显示和本地持久化。
