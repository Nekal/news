const { client } = require('nightwatch-cucumber');
const { Before} = require('cucumber');

Before({tags: "@Login"}, function () {
  return client
    .url('http://localhost:8000')
    .element('css selector', '#signin', function(result){
    if(result.status != -1) {
      client.url('http://localhost:8000/signin')
        .setValue('#username', 'admin')
        .setValue('#password', '12345')
        .click('button.btn.btn-primary.btn-lg');
    }
  });
});
