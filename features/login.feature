Feature: Login to the application

    Scenario: Login with valid credentials
        Given I am a registered user
        When I enter valid credentials
        Then I should be logged in

    Scenario: Login with invalid credentials
        Given I am a registered user
        When I enter invalid username and valid password
        Then I should see error message