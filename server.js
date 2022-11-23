import { Buffer } from 'buffer';
var client_id = '340d7b49b1194c8bb639203d839f20d3'; // Your client id
var client_secret = 'd097616fcb5546229b355d12601e1258'; // Your secret
var redirect_uri = 'https://accounts.spotify.com/api/token'; // Your redirect uri

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      
      grant_type: 'client_credentials'
    },

    json: true
  }
 
request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var token = body.access_token
    }
})
