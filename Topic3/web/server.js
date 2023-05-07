const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.get('/', function (req, res) {
  res.sendFile(`${base}/register-device.html`);
});

  app.get('/iot-data', function (req, res) {
    res.sendFile(`${base}/iot-data.html`);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });