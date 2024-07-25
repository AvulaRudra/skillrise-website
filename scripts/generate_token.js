const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '695667085411-hfg4u0l5gitn5fqhbp422j1n4jfong7d.apps.googleusercontent.com', // Ensure no extra spaces
  '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',
  'http://localhost:3000'
);

const scopes = [
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.readonly'
];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes
});

console.log('Authorize this app by visiting this url:', url);

// // After getting the authorization code, run the following:
// oauth2Client.getToken('AUTHORIZATION_CODE', (err, token) => {
//   if (err) return console.error('Error retrieving access token', err);
//   console.log('Your refresh token:', token.refresh_token);
// });
