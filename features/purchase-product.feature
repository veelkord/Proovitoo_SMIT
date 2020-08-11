Feature: Purchase a product
    Scenario: Purchase a product after loggin in
        Given I am logged in
        When I purchase a product
        Then I should see success message