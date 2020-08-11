Feature: Login to the application
    Scenario: Login with valid credentials
        Given I am a registered user
        When I enter valid credentials
        Then I should be logged in