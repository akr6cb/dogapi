const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      const doggoImageUrl = data.message;
      console.log(doggoImageUrl);
      res.send(`<img src="${doggoImageUrl}" alt="Random Doggo" style="max-width: 100%;"/>`);
    } else {
      res.status(500).send('Failed to fetch dog image.');
    }
  });
});

module.exports = router;
