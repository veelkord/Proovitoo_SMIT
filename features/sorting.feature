Feature: smoke tests for Imdb top 250 chart 

    
    @priority1
    Scenario: navigating to the list from header dropdown
        Given I choose the dropdown from header
        Then I should be redirected to the chart
    
    @priority1
    Scenario: filtering movies 
        Given I am on the chart page
        Then there should be 250 movies on the list
        When I sort by given ratings to ascending
        Then movies should be filtered ascending
        
    @priority2    
    Scenario: SEO test - searching the chart from Bing 
        Given I am on Bing's search page
        When I am typing my search request on Bing
        Then I should see that the first Bing result includes imdb url
 
    @mobile 
    Scenario: Mobile test - navigating to the chart using Safari on mobile
        Given I am using an I phone to navigate to the hamburger menu
        When I click on top rated menu item
        Then I should be redirected to chart mobile view
        