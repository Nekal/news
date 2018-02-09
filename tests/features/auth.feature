Feature: Auth
#  Scenario: The user is registration
#    Given I open the "User registration page" page
#    Then I should see the "Registration form"
#    When I enter "Denis1123" in the field for "username"
#    And I enter "denis1123@mail.ru" in the field for "email"
#    And I enter "12345" in the field for "password"
#    And I click the "Sing Up button"
#    Then I should see the "Authorization form"

  Scenario: The user is authorized
    Given I open the "Login" page
    Then I should see the "Authorization form"
    When I enter "admin" in the field for "username"
    And I enter "12345" in the field for "password"
    And I click the "login button"
    Then I am authorized
