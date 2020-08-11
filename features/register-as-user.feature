Feature: Register as a user

   Scenario: Register as a new user
      Given I am on registration page
      When I enter valid values for user registration and submit
      Then I should be successfully registered and logged in

   Scenario: Try to register with existing email id
      Given I am registered as user
      When I try to register with same email id
      Then I should see error message