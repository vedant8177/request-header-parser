require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
const requestIp = require('request-ip');
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res) => {
  let ip = requestIp.getClientIp(req);
  let language = req.headers['accept-language'];
  var browser = req.headers['user-agent'];
  res.status(200).json({
    "ipaddress": ip,
    language,
    "software": browser
  })
})

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
