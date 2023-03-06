const https = require('https');
const url = require('url');

const query = url.parse(req.url, true).query;


const options = {
  hostname: 'devapi1.joinscream.com',
  port: 443,
  path: `/api/v1/notification/email/open/${query.campaignId}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const data = {
  email: 'recipient-email-address@example.com',
  timestamp: new Date().toISOString()
};

const req = https.request(options, (res) => {
  console.log(`API request sent: ${res.statusCode} ${res.statusMessage}`);
});

req.on('error', (error) => {
  console.error('API request error:', error);
});

req.write(JSON.stringify(data));
req.end();
