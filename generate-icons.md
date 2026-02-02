# 图标生成说明

## 自动生成方法

使用以下在线工具从 SVG 生成所需的 PNG 图标：

### 推荐工具
1. **SVG to PNG Converter**: https://convertio.co/svg-png/
2. **Favicon Generator**: https://favicon.io/
3. **PWA Asset Generator**: https://www.pwabuilder.com/imageGenerator

### 需要生成的图标尺寸

从 `icon.svg` 生成以下 PNG 文件：

```
icon-16.png   - 16x16   (favicon)
icon-32.png   - 32x32   (favicon)
icon-70.png   - 70x70   (MS Tile)
icon-150.png  - 150x150 (MS Tile)
icon-180.png  - 180x180 (Apple Touch)
icon-192.png  - 192x192 (PWA)
icon-310.png  - 310x310 (MS Tile)
icon-512.png  - 512x512 (PWA)
```

### 手动生成步骤

1. 访问 https://favicon.io/
2. 上传 `icon.svg` 文件
3. 下载生成的图标包
4. 将以下文件复制到项目根目录：
   - `android-chrome-192x192.png` → 重命名为 `icon-192.png`
   - `android-chrome-512x512.png` → 重命名为 `icon-512.png`
   - `apple-touch-icon.png` → 重命名为 `icon-180.png`
   - `favicon-16x16.png` → 重命名为 `icon-16.png`
   - `favicon-32x32.png` → 重命名为 `icon-32.png`

### 使用命令行工具（ImageMagick）

如果你安装了 ImageMagick：

```bash
# 生成不同尺寸的图标
convert icon.svg -resize 16x16 icon-16.png
convert icon.svg -resize 32x32 icon-32.png
convert icon.svg -resize 70x70 icon-70.png
convert icon.svg -resize 150x150 icon-150.png
convert icon.svg -resize 180x180 icon-180.png
convert icon.svg -resize 192x192 icon-192.png
convert icon.svg -resize 310x310 icon-310.png
convert icon.svg -resize 512x512 icon-512.png
```

## 安装说明

### iOS (iPhone/iPad)
1. 在 Safari 中打开应用
2. 点击底部的分享按钮
3. 选择"添加到主屏幕"
4. 确认添加

### Android (Chrome)
1. 在 Chrome 中打开应用
2. 点击右上角的菜单按钮
3. 选择"添加到主屏幕"或"安装应用"
4. 确认安装

### 桌面浏览器
1. 在支持的浏览器中打开应用
2. 地址栏会显示安装图标
3. 点击图标进行安装

## PWA 功能特性

- ✅ 离线工作
- ✅ 添加到主屏幕
- ✅ 全屏显示
- ✅ 自定义主题色
- ✅ 自定义图标
- ✅ 启动画面
- ✅ 应用快捷方式