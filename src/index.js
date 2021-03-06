const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '..', 'onboarding-app/build');

const port = process.env.PORT || 7000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('PORT', port)
});