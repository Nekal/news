const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

const pages = {
  'Home': 'http://localhost:8000/',
  'User registration page': 'http://localhost:8000/signup',
  'Login': 'http://localhost:8000/signin',
  'Create News': 'http://localhost:8000/create',
};

const elements = {
  'login button': '#login',
  'Sing Up button': '#signupButton',
  'username': '#username',
  'email': '#email',
  'password': '#password',


  'Registration form': '#signupForm',
  'Authorization form': '#loginForm',
  'News Creating forms': '#newsForm',
  'News Editor forms': '#newsForm',
  'News list': '#newsList',
  'News detail': '#newsDetail',

  'title': '#title',
  'content': '#content',

  'create button': '#create',
  'edit button': '#editNews',
  'edit': '#edit',
  'delete button': '#delete',
  'last news': '#newsItem',
};

defineSupportCode(function ({And, But, Given, Then, When}) {
  Given(/^I open the "(.*?)" page$/, function (pageName) {
    return client
      .url(pages[pageName]);
  });
  Then(/^I click the "([^"]*)"/, function (elmName) {
    return client
      .click(elements[elmName])
  });
  Then(/^I am authorized$/, function () {
    return client
      .waitForElementVisible('#logout', 1000)
      .expect
      .element('#logout')
      .to.be.visible
  });
  Then(/^I should see the "([^"]*)"$/, function (elmName) {
    return client
      .waitForElementVisible(elements[elmName], 1000)
      .expect
      .element(elements[elmName])
      .to.be.visible;
  });
  When(/^I enter "([^"]*)" in the field for "([^"]*)"$/, function (value, elmName) {
    return client
      .clearValue(elements[elmName])
      .setValue(elements[elmName], value);
  });
  Then(/^I see the news with the title: "([^"]*)" and content: "([^"]*)"$/, function (title, content) {
    client
      .waitForElementVisible('#animated', 1000)
      .expect
      .element('#newsTitle').text.to.equal(title);
     client
       .expect
      .element('#newsContent').text.to.equal(content);
    return client;
  });
  Then(/^I don't see the news with the title: "([^"]*)" and content: "([^"]*)"$/, function (title, content) {
    client
      .waitForElementVisible('#animated', 1000)
      .expect
      .element('#newsTitle').text.not.to.equal(title)
    client
      .waitForElementVisible('#animated', 1000)
      .expect
      .element('#newsContent').text.not.to.equal(content);
    return  client
  });
  Then(/^I'm on "([^"]*)" page$/, function (pageName) {
    return client
      .assert.urlEquals(pages[pageName]);
  });
});

