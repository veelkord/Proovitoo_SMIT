Feature: tests for SMIT career page

    
    @priority1
    Scenario: scroll down to the job opportunities
        Given I am on the career page
        When I scroll down to the job opportunities
        Then I should see some available jobs
    
    @priority1
    Scenario: Open a job application form 
        Given I am on the job opportunities view
        Then There should be a apply button
        When I click on it
        Then Application form will open

        