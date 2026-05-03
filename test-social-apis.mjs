import fetch from 'node-fetch';

const tests = [];

// Instagram API Test
try {
  const igResponse = await fetch(
    `https://graph.instagram.com/me?fields=id,username&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
  );
  const igData = await igResponse.json();
  tests.push({
    name: 'Instagram API',
    status: igResponse.ok ? '✓ PASS' : '✗ FAIL',
    data: igData
  });
} catch (e) {
  tests.push({ name: 'Instagram API', status: '✗ ERROR', error: e.message });
}

// Facebook API Test
try {
  const fbResponse = await fetch(
    `https://graph.facebook.com/v18.0/${process.env.FACEBOOK_PAGE_ID}?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`
  );
  const fbData = await fbResponse.json();
  tests.push({
    name: 'Facebook API',
    status: fbResponse.ok ? '✓ PASS' : '✗ FAIL',
    data: fbData
  });
} catch (e) {
  tests.push({ name: 'Facebook API', status: '✗ ERROR', error: e.message });
}

// OpenAI API Test
try {
  const openaiResponse = await fetch('https://api.openai.com/v1/models', {
    headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` }
  });
  tests.push({
    name: 'OpenAI API',
    status: openaiResponse.ok ? '✓ PASS' : '✗ FAIL'
  });
} catch (e) {
  tests.push({ name: 'OpenAI API', status: '✗ ERROR', error: e.message });
}

// Google AI API Test
try {
  const googleResponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GOOGLE_AI_API_KEY}`
  );
  tests.push({
    name: 'Google AI API',
    status: googleResponse.ok ? '✓ PASS' : '✗ FAIL'
  });
} catch (e) {
  tests.push({ name: 'Google AI API', status: '✗ ERROR', error: e.message });
}

console.log('\n=== API Credentials Test Results ===\n');
tests.forEach(test => {
  console.log(`${test.status} - ${test.name}`);
  if (test.error) console.log(`   Error: ${test.error}`);
  if (test.data?.error) console.log(`   Error: ${test.data.error.message}`);
});

const passCount = tests.filter(t => t.status.includes('PASS')).length;
console.log(`\n${passCount}/${tests.length} API'ler başarılı\n`);

process.exit(passCount === tests.length ? 0 : 1);
