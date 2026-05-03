import fetch from 'node-fetch';

const API_KEY = process.env.LLM_API_KEY;
const API_ENDPOINT = process.env.LLM_API_ENDPOINT;
const MODEL = process.env.LLM_API_MODEL;

console.log('Testing LLM API credentials...');
console.log(`Endpoint: ${API_ENDPOINT}`);
console.log(`Model: ${MODEL}`);
console.log('');

async function testLLMAPI() {
  try {
    const response = await fetch(`${API_ENDPOINT}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'user', content: 'Merhaba, nasılsın?' }
        ],
        max_tokens: 100,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✓ LLM API test başarılı!');
      console.log('Response:', data.choices[0]?.message?.content || 'No content');
      return true;
    } else {
      console.error('✗ LLM API hatası:', data.error?.message || data);
      return false;
    }
  } catch (error) {
    console.error('✗ Bağlantı hatası:', error.message);
    return false;
  }
}

const result = await testLLMAPI();
process.exit(result ? 0 : 1);
