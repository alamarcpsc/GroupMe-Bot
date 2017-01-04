var cool = require('cool-ascii-faces');
var express = require('express');
var bodyParser = require('body-parser')
var requestify = require('requestify');
var app = express();

app.set('port', (process.env.PORT || 5000));


var jsonParser = bodyParser.json()
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.post('/group_test', jsonParser, function(request, response) {
  if (request.body.text.toLowerCase().indexOf('!face') !== -1) {
    requestify.post('https://api.groupme.com/v3/bots/post', {
      bot_id  : 'ddf06cc27bbdd2abaa96643284',
      text    : cool()
    }).then(function(response) {
      // Get the response body
      response.getBody();
    });
  }
  if (request.body.text.toLowerCase().indexOf('!harambe') !== -1) {
    requestify.post('https://api.groupme.com/v3/bots/post', {
      bot_id  : 'ddf06cc27bbdd2abaa96643284',
      attachments : [
        {
          type  : 'image',
          url   : 'https://i.groupme.com/615x615.jpeg.16df721794714959b7bdf0916655cf13'
        }
      ]
    }).then(function(response) {
      // Get the response body
      response.getBody();
    });
  }
});

app.post('/group_main', jsonParser, function(request, response) {
  if (request.body.text.toLowerCase().indexOf('!face') !== -1) {
    requestify.post('https://api.groupme.com/v3/bots/post', {
      bot_id  : 'e3e0e0f85f45201c8355eae495',
      text    : cool()
    }).then(function(response) {
      // Get the response body
      response.getBody();
    });
  }
});

app.post('/group_meme', jsonParser, function(request, response) {
  if (request.body.text.toLowerCase().indexOf('!harambe') !== -1) {
    requestify.post('https://api.groupme.com/v3/bots/post', {
      bot_id  : '88ac305c016690617e3713c75e',
      attachments : [
        {
          type  : 'image',
          url   : 'https://i.groupme.com/615x615.jpeg.16df721794714959b7bdf0916655cf13'
        }
      ]
    }).then(function(response) {
      // Get the response body
      response.getBody();
    });
  }
});

app.get('/', function(request, response) {
  console.log(request);
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


