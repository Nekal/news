@Login
Feature: News
  Scenario: Create news
    Given I open the "Create News" page
    Then I should see the "News Creating forms"
    When I enter "123" in the field for "title"
    And I enter "321" in the field for "content"
    And I click the "create button"
    Then I should see the "News list"
    And I see the news with the title: "123" and content: "321"

  Scenario: Delete news
    Given I open the "Home" page
    Then I should see the "News list"
    And I click the "last news"
    Then I should see the "News detail"
    When I click the "delete button"
    Then I should see the "News list"
    And I don't see the news with the title: "123" and content: "321"

  Scenario: Edit news
    Given I open the "Home" page
    Then I should see the "News list"
    And I click the "last news"
    Then I should see the "News detail"
    When I click the "edit button"
    Then I should see the "News Editor forms"
    When I enter "new123" in the field for "title"
    And I enter "new321" in the field for "content"
    And I click the "edit"
    Then I should see the "News list"
    And I see the news with the title: "new123" and content: "new321"

