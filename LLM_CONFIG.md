# LLM API Configuration

The AI voice correction feature supports multiple LLM providers. API keys are stored locally in your browser and never uploaded to any server.

## How to Configure

1. **Open the voice control panel** in the Monopoly game
2. **Select your preferred LLM provider**:
   - **本地模拟 (Local Mock)**: No API key required, provides basic corrections
   - **OpenRouter (推荐)**: Supports multiple models, easy to use, no CORS issues
   - **Anthropic Claude**: High-quality corrections
   - **OpenAI**: GPT-based corrections
   - **NVIDIA Build (NIM)**: Fast, affordable, but requires CORS proxy

3. **Enter your API key** (if not using Local Mock):
   - API keys are stored in browser localStorage only
   - Keys are never shared or transmitted except to the selected API
   - You can change providers at any time

4. **Test the connection** using the "测试连接" button

## Getting API Keys

### OpenRouter (Recommended)
1. Visit https://openrouter.ai/
2. Create an account
3. Get your API key from the dashboard
4. Cost: Very affordable, pay-per-use

### Anthropic Claude
1. Visit https://console.anthropic.com/
2. Create an account
3. Get your API key from API Keys section
4. Cost: Pay-per-use, high quality

### OpenAI
1. Visit https://platform.openai.com/
2. Create an account
3. Get your API key from API Keys section
4. Cost: Pay-per-use, widely available

### NVIDIA Build (NIM)
1. Visit https://build.nvidia.com/
2. Create an account
3. Get your API key from the NIM section
4. Cost: Free tier available, very affordable paid plans
5. Models: Llama, Mistral, and other open-source models
6. ⚠️ **CORS限制**: 需要代理服务器才能在浏览器中使用
7. **解决方案**: 访问 https://cors-anywhere.herokuapp.com/corsdemo 点击"Request temporary access"

## Security Features

✅ **Local Storage Only**: Keys stored in browser localStorage
✅ **No Server Upload**: Keys never sent to our servers
✅ **Provider Isolation**: Keys only sent to selected API provider
✅ **Easy Removal**: Clear keys anytime by clearing the field
✅ **Mock Fallback**: Works without any API keys

## Usage Tips

1. **Start with Local Mock** to test basic functionality
2. **Upgrade to real LLM** for better accuracy
3. **Test connection** before using voice commands
4. **Switch providers** anytime if one is not working well

## What Each Provider Does

- **Local Mock**: Basic name corrections (伊森→Eason, 霍利→Holy)
- **Real LLMs**: Advanced context understanding, better error correction
- **All providers**: Same command format and functionality