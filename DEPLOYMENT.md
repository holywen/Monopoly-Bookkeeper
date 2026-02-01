# Cloudflare Workers 部署指南

## 🚀 部署步骤

### 1. 安装 Wrangler CLI
```bash
npm install -g wrangler
```

### 2. 登录 Cloudflare
```bash
wrangler login
```

### 3. 部署 Worker
```bash
wrangler deploy --env production
```

### 4. 配置自定义路由 (可选)
如果你有自定义域名，在 Cloudflare Dashboard 中配置：
- `your-domain.com/api/*` → Worker 路由

## 🔧 配置说明

### Worker 功能
- **CORS代理**: 解决浏览器跨域限制
- **API密钥保护**: 密钥通过服务端转发，不暴露在浏览器
- **多提供商支持**: NVIDIA、OpenRouter、Anthropic、OpenAI
- **统一响应格式**: 标准化所有LLM提供商的响应

### 安全特性
- **请求验证**: 验证必需字段
- **错误处理**: 统一的错误响应格式
- **日志记录**: 在 Cloudflare Dashboard 中查看日志

## 🌐 API端点

### 语音纠错API
```
POST /api/llm
Content-Type: application/json

{
  "provider": "nvidia",
  "apiKey": "your-api-key",
  "prompt": "原始语音识别结果: \"伊森转给霍利100K\"\n\n请纠正语音识别错误",
  "max_tokens": 100,
  "temperature": 0.1
}
```

### 健康检查
```
GET /api/health
```

## 📊 监控

### 查看日志
1. 访问 Cloudflare Dashboard
2. 进入 Workers & Pages
3. 选择你的 Worker
4. 查看 Analytics 和 Logs

### 性能监控
- 请求延迟
- 错误率
- API使用统计

## 🔒 安全注意事项

1. **API密钥**: 虽然通过服务端转发，但仍建议定期轮换
2. **速率限制**: 考虑在 Worker 中实现速率限制
3. **访问控制**: 可以添加身份验证机制

## 🚨 故障排除

### 常见问题

1. **CORS错误**: 确保Worker正确设置了CORS头
2. **API密钥错误**: 检查密钥格式和权限
3. **提供商限制**: 检查API使用限制和配额

### 调试步骤
1. 检查 Worker 日志
2. 测试健康检查端点
3. 验证API密钥有效性
4. 检查请求格式

## 📈 扩展功能

### 未来可以添加
- **API密钥加密存储**
- **用户身份验证**
- **请求缓存**
- **负载均衡**
- **A/B测试支持**

## 💰 成本

### Cloudflare Workers
- 免费额度: 每天100,000次请求
- 付费计划: $5/月起

### 总体成本
- Worker: 免费 (大多数情况)
- LLM API: 根据使用量计费
- 域名: 可选 (已有域名则免费)

这个方案完全解决了CORS问题，同时提供了更好的安全性和用户体验！