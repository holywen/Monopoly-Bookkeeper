# PWA 安装指南 📱

## 快速设置步骤

### 1. 生成图标
打开 `icon-generator.html` 文件在浏览器中：
1. 点击 "Generate All Icons" 按钮
2. 所有需要的图标文件会自动下载
3. 将下载的所有 PNG 文件保存到项目根目录

### 2. 验证安装
在浏览器中打开 `index.html`，检查控制台是否显示：
```
ServiceWorker registration successful with scope: [URL]
```

## 移动设备安装

### 📱 iPhone/iPad (Safari)
1. 在 Safari 中打开应用
2. 点击底部的 **分享** 按钮 (📤)
3. 选择 **"添加到主屏幕"**
4. 点击 **"添加"**
5. 应用图标会出现在主屏幕上

### 🤖 Android (Chrome)
1. 在 Chrome 中打开应用
2. 点击右上角的 **菜单** 按钮 (⋮)
3. 选择 **"添加到主屏幕"** 或 **"安装应用"**
4. 点击 **"安装"**
5. 应用会自动安装到桌面

### 💻 桌面安装
**Chrome/Edge:**
1. 地址栏会出现 **安装图标** (⊕)
2. 点击图标进行安装

**Firefox:**
1. 访问应用地址
2. 右键页面 → **"安装 PWA"**

## PWA 功能特性

✅ **离线工作** - 无需网络连接即可使用
✅ **全屏体验** - 像原生应用一样
✅ **快速启动** - 即开即用，无需等待
✅ **自动更新** - 应用会自动检查更新
✅ **系统集成** - 支持系统通知和分享
✅ **数据安全** - 所有数据存储在本地

## 技术配置

### Manifest 配置
- **显示模式**: 独立全屏 (`standalone`)
- **主题色**: `#5a67d8` (蓝色)
- **背景色**: `#667eea` (渐变起始色)
- **方向**: 竖屏优先

### Service Worker
- **缓存策略**: 网络优先，缓存降级
- **缓存文件**: 所有核心资源
- **离线支持**: 完全离线可用

### 图标规格
- **192x192**: Android 主屏幕图标
- **512x512**: 高分辨率设备图标
- **180x180**: iOS 主屏幕图标
- **其他尺寸**: favicon 和 Windows Tile

## 故障排除

### 安装按钮不显示
- 确保使用 HTTPS 或 localhost
- 检查 Service Worker 是否正常注册
- 清除浏览器缓存后重试

### 图标不显示
- 确认所有 PNG 图标文件已生成
- 检查文件名是否正确
- 验证 manifest.json 中的路径

### 离线功能异常
- 检查 Service Worker 是否激活
- 查看控制台是否有错误信息
- 重新注册 Service Worker

## 开发者提示

### 本地测试
对于本地开发，可以使用：
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

然后访问 `http://localhost:8000` 进行测试。

### 调试 PWA
在 Chrome DevTools 中：
1. 打开 **Application** 标签
2. 检查 **Manifest** 和 **Service Workers**
3. 使用 **Offline** 模式测试离线功能

---

🎮 **享受原生应用般的 Monopoly 记账体验！**